import { LEVELS, type Level } from "../data/curriculum";
import { PLACEMENT_QUESTIONS, type PlacementQuestion } from "../data/placement";

export const QUESTIONS_PER_LEVEL = 4;
export const PASS_THRESHOLD = 3;

export interface PlacementAnswer {
  question: PlacementQuestion;
  chosen: number;
  correct: boolean;
}

/**
 * Adaptive multiple-choice test: levels are tested bottom-up, QUESTIONS_PER_LEVEL each.
 * The test stops at the first level the learner doesn't pass; that level becomes the
 * working level (the one to practise next).
 */
export class PlacementTest {
  private levelIndex = 0;
  private asked: PlacementQuestion[] = [];
  readonly answers: PlacementAnswer[] = [];
  private pool: Record<Level, PlacementQuestion[]>;
  finished = false;

  constructor(random: () => number = Math.random) {
    this.pool = Object.fromEntries(
      LEVELS.map((l) => [l, shuffle(PLACEMENT_QUESTIONS.filter((q) => q.level === l), random).slice(0, QUESTIONS_PER_LEVEL)]),
    ) as Record<Level, PlacementQuestion[]>;
  }

  get currentLevel(): Level {
    return LEVELS[this.levelIndex];
  }

  get progress(): { answered: number; maxTotal: number } {
    return { answered: this.answers.length, maxTotal: LEVELS.length * QUESTIONS_PER_LEVEL };
  }

  current(): PlacementQuestion | null {
    if (this.finished) return null;
    const asked = this.asked.filter((q) => q.level === this.currentLevel).length;
    return this.pool[this.currentLevel][asked] ?? null;
  }

  answer(chosen: number): void {
    const q = this.current();
    if (!q) return;
    this.asked.push(q);
    this.answers.push({ question: q, chosen, correct: chosen === q.answer });

    const levelAnswers = this.answers.filter((a) => a.question.level === this.currentLevel);
    const correct = levelAnswers.filter((a) => a.correct).length;
    const wrong = levelAnswers.length - correct;
    const passed = correct >= PASS_THRESHOLD;
    const failed = wrong > QUESTIONS_PER_LEVEL - PASS_THRESHOLD;

    if (failed) {
      this.finished = true;
    } else if (passed && levelAnswers.length === QUESTIONS_PER_LEVEL) {
      if (this.levelIndex === LEVELS.length - 1) this.finished = true;
      else this.levelIndex++;
    }
  }

  result(): PlacementResult {
    return scorePlacement(this.answers);
  }
}

export interface PlacementResult {
  level: Level;
  scores: Partial<Record<Level, { correct: number; total: number }>>;
  weakTopics: string[];
}

export function scorePlacement(answers: PlacementAnswer[]): PlacementResult {
  const scores: PlacementResult["scores"] = {};
  for (const a of answers) {
    const s = (scores[a.question.level] ??= { correct: 0, total: 0 });
    s.total++;
    if (a.correct) s.correct++;
  }
  // Working level = first level not passed (or C1 if everything was passed).
  let level: Level = "C1";
  for (const l of LEVELS) {
    const s = scores[l];
    if (!s || s.correct < PASS_THRESHOLD) {
      level = l;
      break;
    }
  }
  const weakTopics = [...new Set(answers.filter((a) => !a.correct).map((a) => a.question.topic))];
  return { level, scores, weakTopics };
}

/** Combine the multiple-choice result with the AI's assessment of free production (max. one level apart). */
export function combineLevels(mcLevel: Level, aiLevel: Level | null): Level {
  if (!aiLevel) return mcLevel;
  const mc = LEVELS.indexOf(mcLevel);
  const ai = LEVELS.indexOf(aiLevel);
  return LEVELS[Math.max(mc - 1, Math.min(mc + 1, ai))];
}

function shuffle<T>(items: T[], random: () => number): T[] {
  const a = [...items];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
