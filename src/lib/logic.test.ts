import { describe, expect, it } from "vitest";
import { PLACEMENT_QUESTIONS } from "../data/placement";
import { PlacementTest } from "./placement";
import { VOCAB } from "../data/vocabList";
import { applyLevel, initialState, introduceNewWords, levelUpReady, nextGrammarTopic, recordTopicResult, streak } from "./progress";
import { addDays, newCard, review } from "./srs";

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
  it("introduces a limited number of new words per day, easiest first", () => {
    let s = applyLevel(initialState(), "B1", today);
    s = introduceNewWords(s, today);
    expect(s.cards.length).toBe(5);
    expect(introduceNewWords(s, today)).toBe(s); // idempotent within a day
    expect(VOCAB.find((w) => w.es === s.cards[0].es)?.level).toBe("A1");
    expect(introduceNewWords(s, addDays(today, 1)).cards.length).toBe(10);
  });

  it("prefers weak placement topics, then curriculum order", () => {
    let s = applyLevel(initialState(), "A2", today);
    s = { ...s, placement: { date: today, level: "A2", weakTopics: ["comparativos"] } };
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
