import type { Exercise } from "../data/types";
import { normalize } from "./speech";

/** Gap answers are compared leniently (case, accents); `accentHint` flags a right answer with wrong accents. */
export function checkAnswer(ex: Exercise, given: string): { correct: boolean; accentHint: boolean } {
  if (ex.type === "choice") return { correct: given === ex.answer, accentHint: false };
  if (ex.type === "build") return { correct: [ex.answer, ...(ex.accept ?? [])].includes(given), accentHint: false };
  const accepted = [ex.answer, ...(ex.accept ?? [])];
  const correct = accepted.some((a) => normalize(a) === normalize(given));
  const exact = accepted.some((a) => a.trim().toLowerCase() === given.trim().toLowerCase());
  return { correct, accentHint: correct && !exact };
}
