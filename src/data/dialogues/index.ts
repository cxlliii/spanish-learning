import type { Dialogue } from "../types";
import { DIALOGUES_ADVANCED } from "./advanced";
import { DIALOGUES_BASIC } from "./basic";

export const DIALOGUES: Dialogue[] = [...DIALOGUES_BASIC, ...DIALOGUES_ADVANCED];

export function dialogueFor(scenarioId: string): Dialogue | undefined {
  return DIALOGUES.find((d) => d.scenarioId === scenarioId);
}
