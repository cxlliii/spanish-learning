import { LEVELS, type Level } from "./curriculum";

export type Goal = "reisen" | "beruf" | "beziehung" | "auswandern";

export const GOAL_LABELS: Record<Goal, string> = {
  reisen: "Reisen",
  beruf: "Beruf",
  beziehung: "Partner & Familie",
  auswandern: "Leben in Chile",
};

export interface Scenario {
  id: string;
  minLevel: Level;
  goal: Goal;
  emoji: string;
  title: string;
  /** German description of the situation, shown before the dialogue starts. */
  setup: string;
}

export const SCENARIOS: Scenario[] = [
  // A1
  { id: "cafe", minLevel: "A1", goal: "reisen", emoji: "☕", title: "Im Café bestellen", setup: "Du bist in einem Café in Santiago (Providencia) und bestellst einen Kaffee und etwas zu essen." },
  { id: "presentarse", minLevel: "A1", goal: "beziehung", emoji: "👋", title: "Sich vorstellen", setup: "Auf einem Asado lernst du eine Freundin deiner Freunde kennen. Ihr erzählt, wer ihr seid und was ihr macht." },
  { id: "feria", minLevel: "A1", goal: "auswandern", emoji: "🥑", title: "Auf der Feria einkaufen", setup: "Samstagmorgen auf der Feria (Wochenmarkt): Du kaufst Paltas, Tomaten und Obst." },
  { id: "metro", minLevel: "A1", goal: "reisen", emoji: "🚇", title: "Nach dem Weg fragen", setup: "Du suchst in Santiago die Metro-Station und brauchst eine Tarjeta Bip! zum Fahren." },
  // A2
  { id: "hostal", minLevel: "A2", goal: "reisen", emoji: "🏨", title: "Check-in im Hostal", setup: "Du kommst in einem Hostal in Valparaíso an. Bei deiner Reservierung gibt es ein kleines Problem." },
  { id: "restaurante", minLevel: "A2", goal: "reisen", emoji: "🍽️", title: "Im Restaurant", setup: "Mittagessen in einem Restaurant: Du fragst nach dem Menú del día, bestellst und bezahlst." },
  { id: "farmacia", minLevel: "A2", goal: "auswandern", emoji: "💊", title: "In der Apotheke", setup: "Du hast Halsschmerzen und Fieber und fragst in der Apotheke um Rat." },
  { id: "fin-de-semana", minLevel: "A2", goal: "beruf", emoji: "🎉", title: "Montag im Büro", setup: "Montagmorgen: Ein Kollege fragt dich, was du am Wochenende gemacht hast." },
  { id: "familia-pololo", minLevel: "A2", goal: "beziehung", emoji: "👨‍👩‍👧", title: "Die Familie kennenlernen", setup: "Du bist zum ersten Mal zum Sonntagsessen bei der Familie deines Pololos / deiner Polola eingeladen." },
  // B1
  { id: "arriendo", minLevel: "B1", goal: "auswandern", emoji: "🏠", title: "Wohnung besichtigen", setup: "Du besichtigst ein Departamento zur Miete in Ñuñoa und fragst nach Preis, Gastos comunes und Bedingungen." },
  { id: "banco", minLevel: "B1", goal: "auswandern", emoji: "🏦", title: "Ein Konto eröffnen", setup: "Du willst bei der Bank eine CuentaRUT eröffnen und fragst, welche Dokumente du brauchst." },
  { id: "primer-dia", minLevel: "B1", goal: "beruf", emoji: "💼", title: "Erster Arbeitstag", setup: "Dein erster Tag in einem Büro in Santiago: Deine Chefin stellt dir das Team und die Aufgaben vor." },
  { id: "viaje-sur", minLevel: "B1", goal: "beziehung", emoji: "🏔️", title: "Reise in den Süden planen", setup: "Mit Freunden plant ihr eine Reise nach Puerto Varas und Chiloé. Ihr habt unterschiedliche Vorstellungen." },
  // B2
  { id: "entrevista", minLevel: "B2", goal: "beruf", emoji: "🤝", title: "Vorstellungsgespräch", setup: "Vorstellungsgespräch bei einer chilenischen Firma: Fragen zu Erfahrung, Stärken und Motivation." },
  { id: "tramite", minLevel: "B2", goal: "auswandern", emoji: "📄", title: "Behördengang", setup: "Im Registro Civil willst du deinen Carnet de Identidad für Ausländer beantragen – aber ein Dokument fehlt." },
  { id: "reunion", minLevel: "B2", goal: "beruf", emoji: "📊", title: "Idee im Meeting vorschlagen", setup: "Im Team-Meeting schlägst du eine Verbesserung vor und reagierst auf Einwände." },
  // C1
  { id: "sueldo", minLevel: "C1", goal: "beruf", emoji: "💰", title: "Gehalt verhandeln", setup: "Du verhandelst mit der Personalleiterin über Gehalt, Homeoffice und Vertragsbedingungen." },
  { id: "sobremesa", minLevel: "C1", goal: "beziehung", emoji: "🍷", title: "Diskussion beim Essen", setup: "Nach dem Essen (sobremesa) diskutierst du mit dem Vater deiner Partnerin über das Leben in Chile und in Deutschland." },
];

export function scenariosForLevel(level: Level): Scenario[] {
  const max = LEVELS.indexOf(level);
  return SCENARIOS.filter((s) => LEVELS.indexOf(s.minLevel) <= max);
}

/** Deterministic pick of the "scenario of the day", preferring ones near the user's own level. */
export function dailyScenario(level: Level, dateKey: string): Scenario {
  const pool = scenariosForLevel(level);
  const near = pool.filter((s) => LEVELS.indexOf(s.minLevel) >= LEVELS.indexOf(level) - 1);
  const list = near.length ? near : pool;
  let hash = 0;
  for (const ch of dateKey) hash = (hash * 31 + ch.charCodeAt(0)) >>> 0;
  return list[hash % list.length];
}
