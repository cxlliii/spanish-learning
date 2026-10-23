import type { Level } from "./curriculum";

/**
 * Exercise types:
 * - choice: pick one of `options`; `answer` is exactly one of them.
 * - gap:    Spanish sentence in `prompt` with one "___"; type the missing word(s). `accept` lists other correct answers.
 * - build:  German sentence in `prompt`; tap the words of `answer` (split on spaces, shuffled) into the right order.
 */
export interface Exercise {
  type: "choice" | "gap" | "build";
  prompt: string;
  options?: string[];
  answer: string;
  accept?: string[];
  /** German explanation shown after answering. */
  explanation: string;
}

export interface LessonContent {
  topicId: string;
  /** German paragraphs; lines starting with "• " are rendered as rules. */
  explanation: string[];
  examples: { es: string; de: string }[];
  exercises: Exercise[];
}

export interface DialogueOption {
  es: string;
  /** best = natural & correct, ok = understandable but less natural / small issue, wrong = grammatically wrong or doesn't fit. */
  quality: "best" | "ok" | "wrong";
  /** Short German feedback shown after choosing. */
  feedback: string;
}

export interface DialogueStep {
  /** What the conversation partner says (Spanish). */
  npc: string;
  npcDe: string;
  /** German hint what the learner should say, e.g. "Bestelle einen Kaffee und frag nach dem Preis." */
  task: string;
  options: DialogueOption[];
}

export interface Dialogue {
  scenarioId: string;
  steps: DialogueStep[];
  closing: string;
  closingDe: string;
  vocab: { es: string; de: string }[];
}

export interface VocabWord {
  es: string;
  de: string;
  level: Level;
  /** Theme, e.g. "Reisen", "Arbeit", "Familie & Beziehung", "Leben in Chile", "Alltag", "Essen". */
  theme: string;
  /** Optional note, e.g. "Chilenismus" or usage hint. */
  note?: string;
}
