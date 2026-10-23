import { describe, expect, it } from "vitest";
import { checkAnswer } from "../lib/exercise";
import { CURRICULUM } from "./curriculum";
import { DIALOGUES } from "./dialogues";
import { LESSONS } from "./lessons";
import { SCENARIOS } from "./scenarios";
import { VOCAB } from "./vocabList";

describe("lessons", () => {
  it("cover every curriculum topic exactly once", () => {
    expect(LESSONS.map((l) => l.topicId).sort()).toEqual(CURRICULUM.map((t) => t.id).sort());
  });

  for (const lesson of LESSONS) {
    it(`${lesson.topicId}: exercises are well-formed`, () => {
      expect(lesson.explanation.length).toBeGreaterThan(0);
      expect(lesson.examples.length).toBeGreaterThan(0);
      expect(lesson.exercises.length).toBeGreaterThanOrEqual(6);
      for (const ex of lesson.exercises) {
        if (ex.type === "choice") {
          expect(ex.options, ex.prompt).toContain(ex.answer);
          expect(new Set(ex.options).size, ex.prompt).toBe(ex.options!.length);
        }
        if (ex.type === "gap") expect(ex.prompt.split("___").length, ex.prompt).toBe(2);
        if (ex.type === "build") {
          const words = ex.answer.split(" ");
          expect(words.every(Boolean), ex.answer).toBe(true);
          expect(new Set(words).size, ex.answer).toBe(words.length);
        }
        expect(checkAnswer(ex, ex.answer).correct, ex.prompt).toBe(true);
        expect(ex.explanation.length).toBeGreaterThan(0);
      }
    });
  }

  it("use no vosotros forms in Spanish text", () => {
    // The Chilean voseo lesson legitimately uses forms like "vivís" and contrasts them with "tenéis".
    const spanish = LESSONS.filter((l) => l.topicId !== "voseo-chileno").flatMap((l) => [...l.examples.map((e) => e.es), ...l.exercises.flatMap((e) => [e.answer, ...(e.options ?? [])])]);
    const vosotros = /\b(vosotros|vosotras|vuestr[oa]s?|habláis|coméis|vivís|sois|estáis|tenéis|vais|hacéis|podéis|queréis)\b/i;
    expect(spanish.filter((t) => vosotros.test(t))).toEqual([]);
  });
});

describe("dialogues", () => {
  it("exist for every scenario", () => {
    expect(DIALOGUES.map((d) => d.scenarioId).sort()).toEqual(SCENARIOS.map((s) => s.id).sort());
  });

  for (const d of DIALOGUES) {
    it(`${d.scenarioId}: every step has one best, one ok and one wrong option`, () => {
      expect(d.steps.length).toBeGreaterThanOrEqual(5);
      for (const step of d.steps) {
        expect(step.options.map((o) => o.quality).sort(), step.npc).toEqual(["best", "ok", "wrong"]);
        expect(new Set(step.options.map((o) => o.es)).size, step.npc).toBe(3);
      }
      expect(d.vocab.length).toBeGreaterThan(0);
    });
  }
});

describe("vocabulary", () => {
  it("has no duplicates", () => {
    expect(new Set(VOCAB.map((v) => v.es)).size).toBe(VOCAB.length);
  });
});

describe("checkAnswer", () => {
  it("accepts gap answers without accents but flags them", () => {
    const ex = { type: "gap" as const, prompt: "Ella ___ en casa.", answer: "está", explanation: "" };
    expect(checkAnswer(ex, "esta")).toEqual({ correct: true, accentHint: true });
    expect(checkAnswer(ex, "Está")).toEqual({ correct: true, accentHint: false });
    expect(checkAnswer(ex, "es").correct).toBe(false);
  });
});
