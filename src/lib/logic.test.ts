import { describe, expect, it } from "vitest";
import { PLACEMENT_QUESTIONS } from "../data/placement";
import { combineLevels, PlacementTest } from "./placement";
import { applyLevel, initialState, levelUpReady, nextGrammarTopic, recordTopicResult, streak } from "./progress";
import { addDays, newCard, review } from "./srs";
import { splitCorrection } from "./tutor";

function run(correctUntil: string) {
  const t = new PlacementTest(() => 0.5);
  let q;
  while ((q = t.current())) {
    const pass = q.level <= correctUntil;
    t.answer(pass ? q.answer : (q.answer + 1) % q.options.length);
  }
  return t;
}

describe("placement", () => {
  it("every question has a valid answer index", () => {
    for (const q of PLACEMENT_QUESTIONS) expect(q.answer).toBeLessThan(q.options.length);
  });

  it("places a total beginner at A1", () => {
    const t = run("");
    expect(t.result().level).toBe("A1");
    expect(t.answers.length).toBe(2); // stops after two wrong answers
  });

  it("works on the first level not passed", () => {
    expect(run("A2").result().level).toBe("B1");
    expect(run("B2").result().level).toBe("C1");
  });

  it("caps at C1 when everything is right", () => {
    const t = run("Z");
    expect(t.result().level).toBe("C1");
    expect(t.answers.length).toBe(20);
  });

  it("collects weak topics from wrong answers", () => {
    expect(run("A1").result().weakTopics.length).toBeGreaterThan(0);
  });

  it("limits AI assessment to one level away", () => {
    expect(combineLevels("A2", "C1")).toBe("B1");
    expect(combineLevels("B2", "A1")).toBe("B1");
    expect(combineLevels("B1", "B2")).toBe("B2");
    expect(combineLevels("B1", null)).toBe("B1");
  });
});

describe("srs", () => {
  const today = "2026-10-23";
  it("schedules growing intervals", () => {
    let c = newCard("hola", "hallo", today);
    c = review(c, "good", today);
    expect(c.due).toBe(addDays(today, 1));
    c = review(c, "good", today);
    expect(c.interval).toBe(6);
    c = review(c, "good", today);
    expect(c.interval).toBe(15);
  });
  it("resets on again", () => {
    const c = review(review(newCard("a", "b", today), "good", today), "again", today);
    expect(c.reps).toBe(0);
    expect(c.due).toBe(today);
  });
  it("addDays crosses month boundaries", () => {
    expect(addDays("2026-10-31", 1)).toBe("2026-11-01");
  });
});

describe("progress", () => {
  const today = "2026-10-23";
  it("seeds vocabulary up to the level", () => {
    const s = applyLevel(initialState(), "A2", today);
    expect(s.cards.length).toBeGreaterThan(10);
    expect(s.cards.every((c) => c.due === today)).toBe(true);
  });

  it("prefers weak placement topics, then curriculum order", () => {
    let s = applyLevel(initialState(), "A2", today);
    s = { ...s, placement: { date: today, mcLevel: "A2", finalLevel: "A2", weakTopics: ["comparativos"] } };
    expect(nextGrammarTopic(s)?.id).toBe("comparativos");
    s = recordTopicResult(s, "comparativos", 1, today);
    expect(nextGrammarTopic(s)?.id).toBe("indefinido-regular");
  });

  it("counts streaks without breaking on an unfinished today", () => {
    const days = { "2026-10-21": { vocab: true }, "2026-10-22": { grammar: true } };
    expect(streak(days, today)).toBe(2);
    expect(streak({ ...days, [today]: { conversation: true } }, today)).toBe(3);
    expect(streak({ "2026-10-20": { vocab: true } }, today)).toBe(0);
  });

  it("suggests level up only with mastered topics and good conversations", () => {
    let s = applyLevel(initialState(), "A1", today);
    for (const id of ["ser-estar-basis", "articulos-genero", "presente-regular", "presente-irregular", "hay-estar", "gustar", "preguntas", "posesivos"])
      s = recordTopicResult(s, id, 1, today);
    expect(levelUpReady(s)).toBe(false);
    s = { ...s, conversations: [8, 7, 8].map((score) => ({ date: today, scenarioId: "cafe", score, summary: "", mistakes: [] })) };
    expect(levelUpReady(s)).toBe(true);
  });
});

describe("splitCorrection", () => {
  it("separates the correction block", () => {
    const r = splitCorrection("¡Muy bien! ¿Y tú?\n[[KORREKTUR]]\n❌ yo es → ✅ yo soy\n[[/KORREKTUR]]");
    expect(r.reply).toBe("¡Muy bien! ¿Y tú?");
    expect(r.correction).toBe("❌ yo es → ✅ yo soy");
  });
  it("handles a block still streaming", () => {
    expect(splitCorrection("Hola [[KORREKTUR]] ❌").reply).toBe("Hola");
  });
  it("returns no correction when absent", () => {
    expect(splitCorrection("Hola").correction).toBeNull();
  });
});
