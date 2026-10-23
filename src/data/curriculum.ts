export const LEVELS = ["A1", "A2", "B1", "B2", "C1"] as const;
export type Level = (typeof LEVELS)[number];

export const LEVEL_NAMES: Record<Level, string> = {
  A1: "Anfänger",
  A2: "Grundkenntnisse",
  B1: "Mittelstufe",
  B2: "Gute Mittelstufe",
  C1: "Fortgeschritten",
};

export interface GrammarTopic {
  id: string;
  level: Level;
  title: string;
  /** Short German summary, also used as context for the AI lesson generator. */
  summary: string;
}

export const CURRICULUM: GrammarTopic[] = [
  // A1
  { id: "ser-estar-basis", level: "A1", title: "ser vs. estar (Grundlagen)", summary: "ser für Identität, Herkunft, Beruf, Eigenschaften; estar für Ort und Zustand." },
  { id: "articulos-genero", level: "A1", title: "Artikel & Genus", summary: "el/la/los/las, un/una; typische Endungen -o/-a, Ausnahmen wie el día, la mano." },
  { id: "presente-regular", level: "A1", title: "Präsens – regelmäßige Verben", summary: "Konjugation von -ar, -er, -ir Verben im Präsens." },
  { id: "presente-irregular", level: "A1", title: "Präsens – wichtige unregelmäßige Verben", summary: "tener, ir, hacer, poder, querer, salir, venir, decir; Stammwechsel e>ie, o>ue, e>i." },
  { id: "hay-estar", level: "A1", title: "hay vs. estar", summary: "hay für Existenz (unbestimmt), estar für Lage von Bestimmtem." },
  { id: "gustar", level: "A1", title: "gustar & ähnliche Verben", summary: "me gusta/n, te encanta/n, Satzbau mit indirektem Objektpronomen." },
  { id: "preguntas", level: "A1", title: "Fragewörter", summary: "qué, quién, dónde, cuándo, cómo, cuánto, por qué – mit Akzent." },
  { id: "posesivos", level: "A1", title: "Possessivbegleiter", summary: "mi, tu, su, nuestro/a, vuestro/a und Plural." },
  { id: "reflexivos", level: "A1", title: "Reflexive Verben & Tagesablauf", summary: "levantarse, ducharse, llamarse – Stellung der Reflexivpronomen." },
  // A2
  { id: "indefinido-regular", level: "A2", title: "Pretérito indefinido – regelmäßig", summary: "Abgeschlossene Handlungen in der Vergangenheit: hablé, comí, viví." },
  { id: "indefinido-irregular", level: "A2", title: "Pretérito indefinido – unregelmäßig", summary: "fui, tuve, estuve, hice, pude, dije, vine, puse, supe." },
  { id: "imperfecto", level: "A2", title: "Pretérito imperfecto", summary: "Beschreibungen, Gewohnheiten in der Vergangenheit: hablaba, comía, era, iba." },
  { id: "indefinido-imperfecto", level: "A2", title: "indefinido vs. imperfecto", summary: "Handlung (indefinido) vs. Hintergrund/Gewohnheit (imperfecto)." },
  { id: "perfecto", level: "A2", title: "Pretérito perfecto", summary: "he hablado – Vergangenheit mit Bezug zur Gegenwart (hoy, este año, ya, todavía no)." },
  { id: "ir-a-inf", level: "A2", title: "Nahe Zukunft: ir a + Infinitiv", summary: "voy a comer, vamos a viajar." },
  { id: "pronombres-objeto", level: "A2", title: "Objektpronomen", summary: "Direkte (lo, la, los, las) und indirekte (le, les) Objektpronomen und ihre Stellung." },
  { id: "comparativos", level: "A2", title: "Vergleiche", summary: "más/menos … que, tan … como, mejor/peor, el más …" },
  { id: "estar-gerundio", level: "A2", title: "estar + Gerundium", summary: "Verlaufsform: estoy comiendo; unregelmäßige Gerundien (leyendo, durmiendo)." },
  { id: "imperativo-afirmativo", level: "A2", title: "Imperativ (bejaht)", summary: "habla, come, ven, pon, di, haz – mit angehängten Pronomen (dímelo)." },
  // B1
  { id: "futuro-simple", level: "B1", title: "Futuro simple", summary: "hablaré, tendré, saldré – Zukunft und Vorhersagen." },
  { id: "condicional", level: "B1", title: "Condicional simple", summary: "hablaría, podría – Höflichkeit, Ratschläge, Hypothesen." },
  { id: "subjuntivo-formacion", level: "B1", title: "Presente de subjuntivo – Bildung", summary: "hable, coma, viva; unregelmäßig: sea, vaya, tenga, haga, sepa, esté." },
  { id: "subjuntivo-deseos", level: "B1", title: "Subjuntivo nach Wünschen & Gefühlen", summary: "quiero que, espero que, ojalá, me alegra que + subjuntivo." },
  { id: "subjuntivo-duda", level: "B1", title: "Subjuntivo nach Zweifel & Verneinung", summary: "no creo que, dudo que, es posible que + subjuntivo." },
  { id: "imperativo-negativo", level: "B1", title: "Verneinter Imperativ", summary: "no hables, no vengas, no lo hagas – Pronomen vor dem Verb." },
  { id: "pluscuamperfecto", level: "B1", title: "Pluscuamperfecto", summary: "había hablado – Vorvergangenheit." },
  { id: "relativos", level: "B1", title: "Relativsätze", summary: "que, quien, donde, lo que, el/la que." },
  { id: "estilo-indirecto", level: "B1", title: "Indirekte Rede", summary: "Dice que… / Dijo que… mit Zeitverschiebung." },
  { id: "por-para", level: "B1", title: "por vs. para", summary: "por: Grund, Weg, Tausch, Zeitraum; para: Ziel, Zweck, Empfänger, Frist." },
  { id: "pronombres-combinados", level: "B1", title: "Kombinierte Pronomen", summary: "se lo doy, me la das – le/les wird zu se." },
  // B2
  { id: "imperfecto-subjuntivo", level: "B2", title: "Imperfecto de subjuntivo", summary: "hablara/hablase, tuviera, fuera – Bildung und Gebrauch." },
  { id: "si-tipo-2", level: "B2", title: "Bedingungssätze Typ 2", summary: "Si tuviera tiempo, viajaría – irreale Gegenwart." },
  { id: "si-tipo-3", level: "B2", title: "Bedingungssätze Typ 3", summary: "Si hubiera sabido, habría venido – irreale Vergangenheit." },
  { id: "subjuntivo-temporal", level: "B2", title: "Subjuntivo in Temporalsätzen", summary: "cuando, en cuanto, hasta que, antes de que + subjuntivo bei Zukunftsbezug." },
  { id: "subjuntivo-final", level: "B2", title: "Subjuntivo in Final- & Konzessivsätzen", summary: "para que, a fin de que, aunque + subjuntivo." },
  { id: "pasiva-se", level: "B2", title: "Passiv & unpersönliches se", summary: "fue construido, se venden pisos, se dice que…" },
  { id: "perifrasis", level: "B2", title: "Verbalperiphrasen", summary: "acabar de, llevar + gerundio, volver a, dejar de, seguir + gerundio." },
  { id: "ser-estar-adjetivos", level: "B2", title: "ser/estar mit Bedeutungswechsel", summary: "ser listo/estar listo, ser rico/estar rico, ser malo/estar malo." },
  { id: "conectores", level: "B2", title: "Konnektoren", summary: "sin embargo, por lo tanto, a pesar de que, en cambio, además." },
  // C1
  { id: "concesivas-avanzadas", level: "C1", title: "Konzessivsätze für Fortgeschrittene", summary: "por mucho que, por más que, aun cuando, aunque + Indikativ/Subjuntivo." },
  { id: "futuro-probabilidad", level: "C1", title: "Futur & Konditional der Vermutung", summary: "Estará en casa. Serían las diez. Habrá llegado ya." },
  { id: "subjuntivo-relativas", level: "C1", title: "Subjuntivo in Relativsätzen", summary: "Busco a alguien que sepa…, No hay nadie que pueda…" },
  { id: "infinitivo-compuesto", level: "C1", title: "Infinitiv- & Gerundialkonstruktionen", summary: "De haberlo sabido…, Habiendo terminado…, Al llegar…" },
  { id: "registro", level: "C1", title: "Register: formell vs. umgangssprachlich", summary: "usted/tú, formelle Wendungen, Umgangssprache und Varietäten." },
  { id: "marcadores-discurso", level: "C1", title: "Diskursmarker", summary: "o sea, es decir, en fin, de hecho, a fin de cuentas, total que." },
  { id: "modismos", level: "C1", title: "Redewendungen", summary: "estar en las nubes, tomar el pelo, meter la pata, ser pan comido." },
];

export function topicsForLevel(level: Level): GrammarTopic[] {
  return CURRICULUM.filter((t) => t.level === level);
}

export function topicById(id: string): GrammarTopic | undefined {
  return CURRICULUM.find((t) => t.id === id);
}

export function nextLevel(level: Level): Level | null {
  const i = LEVELS.indexOf(level);
  return i < LEVELS.length - 1 ? LEVELS[i + 1] : null;
}
