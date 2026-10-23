import type { LessonContent } from "../types";
import { LESSONS_A1 } from "./a1";
import { LESSONS_A2 } from "./a2";
import { LESSONS_B1 } from "./b1";
import { LESSONS_B2C1 } from "./b2c1";

export const LESSONS: LessonContent[] = [...LESSONS_A1, ...LESSONS_A2, ...LESSONS_B1, ...LESSONS_B2C1];

export function lessonFor(topicId: string): LessonContent | undefined {
  return LESSONS.find((l) => l.topicId === topicId);
}
