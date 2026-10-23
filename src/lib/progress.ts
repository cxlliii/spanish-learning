import { LEVELS, topicsForLevel, type GrammarTopic, type Level } from "../data/curriculum";
import { VOCAB } from "../data/vocabList";
import { addDays, newCard, type Card } from "./srs";

const STORAGE_KEY = "hablemos-state-v1";

export interface Mistake {
  wrong: string;
  correct: string;
  explanation: string;
}

export interface ConversationLog {
  date: string;
  scenarioId: string;
  score: number;
}

export interface DayLog {
  vocab?: boolean;
  grammar?: boolean;
  conversation?: boolean;
}

export interface PlacementRecord {
  date: string;
  level: Level;
  weakTopics: string[];
}

/** A grammar exercise answered wrongly, to be repeated later. */
export interface MissedExercise {
  topicId: string;
  index: number;
}

export interface AppState {
  level: Level | null;
  placement?: PlacementRecord;
  topics: Record<string, { mastery: number; attempts: number; lastPracticed?: string }>;
  cards: Card[];
  /** How many new words to introduce per day. */
  newPerDay: number;
  newIntroduced: Record<string, number>;
  days: Record<string, DayLog>;
  conversations: ConversationLog[];
  levelHistory: { date: string; level: Level }[];
  /** Recent dialogue mistakes (newest first), shown on the progress page. */
  recentMistakes: Mistake[];
  missed: MissedExercise[];
}

export function initialState(): AppState {
  return {
    level: null,
    topics: {},
    cards: [],
    newPerDay: 5,
    newIntroduced: {},
    days: {},
    conversations: [],
    levelHistory: [],
    recentMistakes: [],
    missed: [],
  };
}

function migrate(raw: Partial<AppState>): AppState {
  const base = initialState();
  const merged = { ...base, ...raw };
  return {
    level: merged.level,
    placement: merged.placement,
    topics: merged.topics,
    cards: merged.cards,
    newPerDay: merged.newPerDay,
    newIntroduced: merged.newIntroduced,
    days: merged.days,
    conversations: merged.conversations,
    levelHistory: merged.levelHistory,
    recentMistakes: merged.recentMistakes,
    missed: merged.missed,
  };
}

export function loadState(): AppState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return migrate(JSON.parse(raw));
  } catch {
    // corrupted or unavailable storage – start fresh
  }
  return initialState();
}

export function saveState(state: AppState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // storage full or blocked – nothing we can do
  }
}

export function exportState(state: AppState): string {
  return JSON.stringify({ app: "hablemos", version: 1, state }, null, 1);
}

export function importState(text: string): AppState {
  const data = JSON.parse(text);
  if (data?.app !== "hablemos" || typeof data.state !== "object") throw new Error("Keine gültige Sicherungsdatei.");
  return migrate(data.state);
}

export function applyLevel(state: AppState, level: Level, today: string): AppState {
  return { ...state, level, levelHistory: [...state.levelHistory, { date: today, level }] };
}

/** Adds today's quota of new words (up to the learner's level, easiest first). */
export function introduceNewWords(state: AppState, today: string): AppState {
  if (!state.level) return state;
  const remaining = state.newPerDay - (state.newIntroduced[today] ?? 0);
  if (remaining <= 0) return state;
  const known = new Set(state.cards.map((c) => c.es));
  const maxIdx = LEVELS.indexOf(state.level);
  const fresh = VOCAB.filter((w) => LEVELS.indexOf(w.level) <= maxIdx && !known.has(w.es))
    .sort((a, b) => LEVELS.indexOf(a.level) - LEVELS.indexOf(b.level))
    .slice(0, remaining);
  if (!fresh.length) return state;
  return {
    ...state,
    cards: [...state.cards, ...fresh.map((w) => newCard(w.es, w.de, today, { example: w.note, addedFrom: w.theme }))],
    newIntroduced: { ...state.newIntroduced, [today]: (state.newIntroduced[today] ?? 0) + fresh.length },
  };
}

/** Number of new words that would be introduced today. */
export function newWordsAvailable(state: AppState, today: string): number {
  if (!state.level) return 0;
  const remaining = Math.max(0, state.newPerDay - (state.newIntroduced[today] ?? 0));
  const known = new Set(state.cards.map((c) => c.es));
  const maxIdx = LEVELS.indexOf(state.level);
  const pool = VOCAB.filter((w) => LEVELS.indexOf(w.level) <= maxIdx && !known.has(w.es)).length;
  return Math.min(remaining, pool);
}

export function addVocab(state: AppState, words: { es: string; de: string; example?: string }[], today: string, source: string): AppState {
  const known = new Set(state.cards.map((c) => c.es.toLowerCase()));
  const fresh = words
    .filter((w) => w.es.trim() && !known.has(w.es.toLowerCase()))
    .map((w) => newCard(w.es, w.de, today, { example: w.example, addedFrom: source }));
  return { ...state, cards: [...state.cards, ...fresh] };
}

export function recordTopicResult(state: AppState, topicId: string, ratio: number, today: string): AppState {
  const prev = state.topics[topicId];
  const score = Math.round(ratio * 100);
  const mastery = prev ? Math.round(prev.mastery * 0.5 + score * 0.5) : score;
  return {
    ...state,
    topics: { ...state.topics, [topicId]: { mastery, attempts: (prev?.attempts ?? 0) + 1, lastPracticed: today } },
  };
}

/** Replace the missed-exercise list for a topic with the latest results. */
export function setMissed(state: AppState, topicId: string, wrongIndexes: number[]): AppState {
  const others = state.missed.filter((m) => m.topicId !== topicId);
  return { ...state, missed: [...others, ...wrongIndexes.map((index) => ({ topicId, index }))] };
}

export function markDay(state: AppState, today: string, part: keyof DayLog): AppState {
  return { ...state, days: { ...state.days, [today]: { ...state.days[today], [part]: true } } };
}

export function addMistakes(state: AppState, mistakes: Mistake[]): AppState {
  return { ...state, recentMistakes: [...mistakes, ...state.recentMistakes].slice(0, 30) };
}

export const MASTERED = 80;

/** Next grammar topic: weak placement topics first, then curriculum order, then the weakest one. */
export function nextGrammarTopic(state: AppState): GrammarTopic | null {
  if (!state.level) return null;
  const topics = topicsForLevel(state.level);
  const mastery = (t: GrammarTopic) => state.topics[t.id]?.mastery ?? 0;
  const open = topics.filter((t) => mastery(t) < MASTERED);
  const weak = new Set(state.placement?.weakTopics ?? []);
  return open.find((t) => weak.has(t.id)) ?? open[0] ?? [...topics].sort((a, b) => mastery(a) - mastery(b))[0] ?? null;
}

export function levelProgress(state: AppState): { mastered: number; total: number; avgConversation: number | null } {
  if (!state.level) return { mastered: 0, total: 0, avgConversation: null };
  const topics = topicsForLevel(state.level);
  const mastered = topics.filter((t) => (state.topics[t.id]?.mastery ?? 0) >= MASTERED).length;
  const recent = state.conversations.slice(-5);
  const avgConversation = recent.length ? recent.reduce((s, c) => s + c.score, 0) / recent.length : null;
  return { mastered, total: topics.length, avgConversation };
}

/** Ready for the next level when 80 % of topics are mastered and recent dialogues average ≥ 7/10. */
export function levelUpReady(state: AppState): boolean {
  if (!state.level || state.level === "C1") return false;
  const { mastered, total, avgConversation } = levelProgress(state);
  return total > 0 && mastered / total >= 0.8 && state.conversations.length >= 3 && (avgConversation ?? 0) >= 7;
}

export function streak(days: Record<string, DayLog>, today: string): number {
  const active = (d: string) => Object.values(days[d] ?? {}).some(Boolean);
  let count = 0;
  // Today not done yet doesn't break the streak.
  let cursor = active(today) ? today : addDays(today, -1);
  while (active(cursor)) {
    count++;
    cursor = addDays(cursor, -1);
  }
  return count;
}
