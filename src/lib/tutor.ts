import { z } from "zod/v4";
import { CURRICULUM, LEVELS, topicsForLevel, type GrammarTopic, type Level } from "../data/curriculum";
import type { Scenario } from "../data/scenarios";
import type { Mistake } from "./progress";

const LevelEnum = z.enum(LEVELS);
const topicIds = CURRICULUM.map((t) => t.id).join(", ");

const LEVEL_STYLE: Record<Level, string> = {
  A1: "Usa frases muy cortas y sencillas en presente, vocabulario básico y habla despacio. Máximo 1–2 frases por turno.",
  A2: "Usa frases sencillas, presente y pasados básicos (indefinido, imperfecto, perfecto). Máximo 2–3 frases por turno.",
  B1: "Usa un español natural con tiempos variados y algún subjuntivo. 2–4 frases por turno.",
  B2: "Habla con naturalidad, usa subjuntivo, condicionales y conectores. Introduce expresiones coloquiales de vez en cuando.",
  C1: "Habla como un nativo culto: matices, expresiones idiomáticas, registro variado y argumentación compleja.",
};

function mistakesContext(mistakes: Mistake[]): string {
  if (!mistakes.length) return "";
  const list = mistakes.slice(0, 8).map((m) => `- "${m.wrong}" → "${m.correct}"`).join("\n");
  return `\n\nFehler, die der Lernende kürzlich gemacht hat (gezielt wiederholen):\n${list}`;
}

// ---------- Placement: free production ----------

export const PLACEMENT_CHAT_TURNS = 4;

export function placementChatSystem(mcLevel: Level): string {
  return `Eres un examinador amable de español que hace una breve entrevista oral (por escrito) para determinar el nivel MCER de un estudiante alemán.
El test de opción múltiple sugiere el nivel ${mcLevel}. Empieza con una pregunta abierta y fácil (¿quién eres, qué haces, por qué aprendes español?) y después ajusta la dificultad: si el estudiante responde bien, haz preguntas que requieran pasados, futuro, hipótesis u opiniones; si le cuesta, simplifica.
Haz exactamente UNA pregunta por turno, en español, sin corregir errores y sin explicaciones. Si el estudiante no entiende, reformula más fácil.`;
}

export const PlacementAssessment = z.object({
  level: LevelEnum.describe("Arbeitsniveau: das GER-Niveau, auf dem der Lernende als Nächstes üben sollte"),
  summary_de: z.string().describe("2–3 Sätze auf Deutsch zur Einschätzung"),
  strengths: z.array(z.string()).describe("Stärken, auf Deutsch"),
  weaknesses: z.array(z.string()).describe("Schwächen, auf Deutsch"),
  weak_topic_ids: z.array(z.string()).describe(`IDs aus dieser Liste, die geübt werden sollten: ${topicIds}`),
});

export function placementAssessmentPrompt(transcript: string, mcLevel: Level): string {
  return `Bewerte das Spanisch dieses deutschsprachigen Lernenden anhand des folgenden Einstufungsgesprächs.
Der Multiple-Choice-Grammatiktest ergab das Arbeitsniveau ${mcLevel}.
Beurteile Grammatik, Wortschatz, Satzbau und Kommunikationsfähigkeit. "level" ist das Niveau, auf dem der Lernende als Nächstes üben sollte (wer A2 sicher beherrscht, übt auf B1).

Gespräch:
${transcript}`;
}

// ---------- Grammar lessons ----------

export const Lesson = z.object({
  explanation_de: z.string().describe("Kurze, klare Erklärung auf Deutsch (max. ca. 180 Wörter). Absätze mit \\n\\n trennen, Regeln als Zeilen mit '• ' beginnen."),
  examples: z.array(z.object({ es: z.string(), de: z.string() })).describe("4 Beispielsätze aus dem Alltag"),
  exercises: z
    .array(
      z.object({
        type: z.enum(["choice", "gap", "translate"]),
        instruction_de: z.string(),
        question: z.string().describe("Bei gap: Lücke als ___ markieren. Bei translate: deutscher Satz."),
        options: z.array(z.string()).describe("Nur bei choice: 3–4 Optionen, sonst leer"),
        answer: z.string().describe("Die beste richtige Antwort (bei choice: exakt eine der Optionen; bei gap: nur das Lückenwort)"),
        alternatives: z.array(z.string()).describe("Weitere akzeptierte Antworten"),
        hint_de: z.string().describe("Kurzer Tipp auf Deutsch"),
      }),
    )
    .describe("8 Übungen mit steigender Schwierigkeit, gemischte Typen"),
});
export type LessonT = z.infer<typeof Lesson>;
export type Exercise = LessonT["exercises"][number];

export const TUTOR_SYSTEM = `Du bist ein erfahrener, freundlicher Spanischlehrer für deutschsprachige Erwachsene. Du erklärst knapp und verständlich, nutzt Beispiele aus dem Alltag (Arbeit, Einkaufen, Reisen, Freunde, Familie) und europäisches Spanisch (mit Hinweis, wenn Lateinamerika abweicht).`;

export function lessonPrompt(topic: GrammarTopic, level: Level, mastery: number, mistakes: Mistake[]): string {
  return `Erstelle eine Grammatik-Lerneinheit.
Thema: ${topic.title} (${topic.summary})
Niveau des Lernenden: ${level}. Bisherige Beherrschung des Themas: ${mastery} %.
${mastery > 0 ? "Der Lernende kennt das Thema schon – kurze Wiederholung, anspruchsvollere Übungen." : "Das Thema ist neu – Grundlagen klar erklären."}
Alle spanischen Sätze sollen alltagsnah sein und Vokabular des Niveaus ${level} verwenden.${mistakesContext(mistakes)}`;
}

export const Grading = z.object({
  results: z.array(z.object({ index: z.number().int(), correct: z.boolean(), feedback_de: z.string() })),
});

export function gradingPrompt(items: { index: number; exercise: Exercise; given: string }[]): string {
  return `Prüfe diese Antworten eines Spanischlernenden. Akzeptiere jede grammatisch korrekte und sinngemäß passende Lösung (auch andere Wortwahl); ignoriere fehlende Akzente und Groß-/Kleinschreibung, erwähne sie aber im Feedback. Feedback kurz auf Deutsch, mit korrekter Form.

${items
  .map(
    (i) => `#${i.index} (${i.exercise.type}) Aufgabe: ${i.exercise.instruction_de} – ${i.exercise.question}
Musterlösung: ${i.exercise.answer}
Antwort des Lernenden: ${i.given}`,
  )
  .join("\n\n")}`;
}

// ---------- Conversation ----------

export const CORRECTION_START = "[[KORREKTUR]]";
export const CORRECTION_END = "[[/KORREKTUR]]";

export function conversationSystem(level: Level, scenario: Scenario, mistakes: Mistake[]): string {
  const focus = topicsForLevel(level)
    .slice(0, 6)
    .map((t) => t.title)
    .join(", ");
  return `Eres un compañero de conversación para practicar español cotidiano con un estudiante alemán de nivel ${level}.

Situación (juego de rol): ${scenario.setup}

Reglas:
- Quédate en el papel y habla SOLO en español. ${LEVEL_STYLE[level]}
- Mantén la conversación viva: reacciona a lo que dice el estudiante y termina cada turno con una pregunta o un impulso para que siga hablando.
- Empieza tú la conversación de forma natural según la situación.
- Si el último mensaje del estudiante contiene errores, añade AL FINAL de tu respuesta un bloque de corrección en alemán con este formato exacto:
${CORRECTION_START}
❌ falsche Formulierung → ✅ richtige Formulierung — kurze Erklärung auf Deutsch
${CORRECTION_END}
  Corrige como máximo 3 errores importantes por turno. Si no hay errores, no añadas el bloque. Si el estudiante escribe en alemán, ayúdale con la frase en español dentro del bloque.
- Introduce de forma natural estructuras del nivel ${level} (por ejemplo: ${focus}).${mistakesContext(mistakes)}`;
}

export function splitCorrection(text: string): { reply: string; correction: string | null } {
  const start = text.indexOf(CORRECTION_START);
  if (start === -1) return { reply: text.trim(), correction: null };
  const end = text.indexOf(CORRECTION_END, start);
  const correction = text.slice(start + CORRECTION_START.length, end === -1 ? undefined : end).trim();
  const reply = (text.slice(0, start) + (end === -1 ? "" : text.slice(end + CORRECTION_END.length))).trim();
  return { reply, correction: correction || null };
}

export const HELP_INSTRUCTION =
  "(Hilfe) Ich weiß nicht, was ich antworten soll. Gib mir bitte auf Deutsch 2 kurze Antwortideen mit der spanischen Formulierung – und bleib danach in deiner Rolle.";

export const ConversationFeedback = z.object({
  score: z.number().int().min(1).max(10).describe("Gesamtbewertung relativ zum Niveau des Lernenden (7 = gut für das Niveau)"),
  summary_de: z.string().describe("2–3 ermutigende, ehrliche Sätze auf Deutsch"),
  strengths: z.array(z.string()),
  mistakes: z.array(z.object({ wrong: z.string(), correct: z.string(), explanation: z.string().describe("kurz, auf Deutsch") })),
  new_vocab: z
    .array(z.object({ es: z.string(), de: z.string(), example: z.string() }))
    .describe("5–8 nützliche Wörter/Wendungen aus dem Gespräch zum Lernen"),
  topic_ids: z.array(z.string()).describe(`Grammatikthemen zum Üben, IDs aus: ${topicIds}`),
});
export type ConversationFeedbackT = z.infer<typeof ConversationFeedback>;

export function feedbackPrompt(level: Level, scenario: Scenario, transcript: string): string {
  return `Gib Feedback zu diesem Rollenspiel-Gespräch eines Spanischlernenden (Niveau ${level}, Situation: ${scenario.title}).
Bewerte nur die Beiträge des Lernenden: Grammatik, Wortschatz, Natürlichkeit, Kommunikationserfolg. Fasse wiederkehrende Fehler zusammen.

${transcript}`;
}
