/** Simplified SM-2 spaced repetition. */
export interface Card {
  es: string;
  de: string;
  example?: string;
  ease: number;
  interval: number; // days
  reps: number;
  due: string; // YYYY-MM-DD
  addedFrom?: string;
}

export type Grade = "again" | "hard" | "good" | "easy";

export function newCard(es: string, de: string, today: string, extra: Partial<Card> = {}): Card {
  return { es, de, ease: 2.5, interval: 0, reps: 0, due: today, ...extra };
}

export function review(card: Card, grade: Grade, today: string): Card {
  let { ease, interval, reps } = card;
  if (grade === "again") {
    reps = 0;
    interval = 0;
    ease = Math.max(1.3, ease - 0.2);
  } else {
    reps++;
    if (grade === "hard") ease = Math.max(1.3, ease - 0.15);
    if (grade === "easy") ease += 0.15;
    if (reps === 1) interval = grade === "easy" ? 3 : 1;
    else if (reps === 2) interval = grade === "hard" ? 3 : 6;
    else interval = Math.round(interval * (grade === "hard" ? 1.2 : ease) * (grade === "easy" ? 1.3 : 1));
  }
  return { ...card, ease, interval, reps, due: addDays(today, interval) };
}

export function dueCards(cards: Card[], today: string): Card[] {
  return cards.filter((c) => c.due <= today);
}

export function addDays(date: string, days: number): string {
  const d = new Date(date + "T12:00:00");
  d.setDate(d.getDate() + days);
  return toDateKey(d);
}

export function toDateKey(d: Date = new Date()): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}
