import { LEVELS, topicsForLevel, type GrammarTopic, type Level } from "../data/curriculum";
import { SEED_VOCAB } from "../data/vocab";
import { addDays, newCard, type Card } from "./srs";

export const DEFAULT_MODEL = "claude-opus-5-5";
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
  summary: string;
  mistakes: Mistake[];
}

export interface DayLog {
  vocab?: boolean;
  grammar?: boolean;
  conversation?: boolean;
}

export interface PlacementRecord {
  date: string;
  mcLevel: Level;
  aiLevel?: Level;
  finalLevel: Level;
  weakTopics: string[];
  aiSummary?: string;
}

export interface AppState {
  apiKey: string;
  model: string;
  level: Level | null;
  placement?: PlacementRecord;
  topics: Record<string, { mastery: number; attempts: number; lastPracticed?: string }>;
  cards: Card[];
  days: Record<string, DayLog>;
  conversations: ConversationLog[];
  levelHistory: { date: string; level: Level }[];
  /** Recent mistakes (newest first) used to personalise lessons and conversations. */
  recentMistakes: Mistake[];
}

export function initialState(): AppState {
  return {
    apiKey: "",
    model: DEFAULT_MODEL,
    level: null,
    topics: {},
    cards: [],
    days: {},
    conversations: [],
    levelHistory: [],
    recentMistakes: [],
  };
}

export function loadState(): AppState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return { ...initialState(), ...JSON.parse(raw) };
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

/** Set the working level and seed starter vocabulary up to that level. */
export function applyLevel(state: AppState, level: Level, today: string): AppState {
  const maxIdx = LEVELS.indexOf(level);
  const known = new Set(state.cards.map((c) => c.es));
  const seeds = SEED_VOCAB.filter((w) => LEVELS.indexOf(w.level) <= maxIdx && !known.has(w.es)).map((w) =>
    newCard(w.es, w.de, today, { addedFrom: "Grundwortschatz" }),
  );
  return {
    ...state,
    level,
    cards: [...state.cards, ...seeds],
    levelHistory: [...state.levelHistory, { date: today, level }],
  };
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

export function markDay(state: AppState, today: string, part: keyof DayLog): AppState {
  return { ...state, days: { ...state.days, [today]: { ...state.days[today], [part]: true } } };
}

export function addMistakes(state: AppState, mistakes: Mistake[]): AppState {
  return { ...state, recentMistakes: [...mistakes, ...state.recentMistakes].slice(0, 30) };
}

export function addVocab(state: AppState, words: { es: string; de: string; example?: string }[], today: string, source: string): AppState {
  const known = new Set(state.cards.map((c) => c.es.toLowerCase()));
  const fresh = words
    .filter((w) => w.es.trim() && !known.has(w.es.toLowerCase()))
    .map((w) => newCard(w.es, w.de, today, { example: w.example, addedFrom: source }));
  return { ...state, cards: [...state.cards, ...fresh] };
}

export const MASTERED = 80;

/** Next grammar topic: weak placement topics first, then curriculum order, then the weakest one. */
export function nextGrammarTopic(state: AppState): GrammarTopic | null {
  if (!state.level) return null;
  const topics = topicsForLevel(state.level);
  const mastery = (t: GrammarTopic) => state.topics[t.id]?.mastery ?? 0;
  const open = topics.filter((t) => mastery(t) < MASTERED);
  const weak = new Set(state.placement?.weakTopics ?? []);
  return (
    open.find((t) => weak.has(t.id)) ??
    open[0] ??
    [...topics].sort((a, b) => mastery(a) - mastery(b))[0] ??
    null
  );
}

export function levelProgress(state: AppState): { mastered: number; total: number; avgConversation: number | null } {
  if (!state.level) return { mastered: 0, total: 0, avgConversation: null };
  const topics = topicsForLevel(state.level);
  const mastered = topics.filter((t) => (state.topics[t.id]?.mastery ?? 0) >= MASTERED).length;
  const recent = state.conversations.slice(-5);
  const avgConversation = recent.length ? recent.reduce((s, c) => s + c.score, 0) / recent.length : null;
  return { mastered, total: topics.length, avgConversation };
}

/** Ready for the next level when 80 % of topics are mastered and recent conversations average ≥ 7/10. */
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
