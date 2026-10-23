import { LEVELS, type Level } from "./curriculum";

export interface Scenario {
  id: string;
  minLevel: Level;
  emoji: string;
  title: string;
  /** Instruction for the AI partner: who it plays and what the situation is. */
  setup: string;
}

export const SCENARIOS: Scenario[] = [
  { id: "cafe", minLevel: "A1", emoji: "☕", title: "Im Café bestellen", setup: "Eres camarero/a en un café de Madrid. El usuario es un cliente que quiere pedir algo de beber y de comer." },
  { id: "presentarse", minLevel: "A1", emoji: "👋", title: "Sich vorstellen", setup: "Eres una persona simpática que conoce al usuario en una fiesta. Quieres saber de dónde es, a qué se dedica y qué le gusta." },
  { id: "supermercado", minLevel: "A1", emoji: "🛒", title: "Einkaufen auf dem Markt", setup: "Eres vendedor/a en un mercado de frutas y verduras en Valencia. El usuario quiere comprar." },
  { id: "direcciones", minLevel: "A1", emoji: "🗺️", title: "Nach dem Weg fragen", setup: "Eres un/a vecino/a en Sevilla. El usuario está perdido y te pregunta cómo llegar a la estación, al museo o a una farmacia." },
  { id: "fin-de-semana", minLevel: "A2", emoji: "🎉", title: "Über das Wochenende reden", setup: "Eres un/a compañero/a de trabajo. Es lunes por la mañana y le preguntas al usuario qué hizo el fin de semana. Cuenta tú también algo." },
  { id: "restaurante", minLevel: "A2", emoji: "🍽️", title: "Im Restaurant", setup: "Eres camarero/a en un restaurante en Barcelona. Recomiendas platos, tomas el pedido y luego hay un pequeño problema con la cuenta." },
  { id: "medico", minLevel: "A2", emoji: "🩺", title: "Beim Arzt", setup: "Eres médico/a de cabecera. El usuario viene porque no se siente bien. Pregunta por los síntomas y da consejos." },
  { id: "hotel", minLevel: "A2", emoji: "🏨", title: "Hotel-Check-in", setup: "Eres recepcionista de un hotel en Málaga. El usuario llega para hacer el check-in; hay una confusión con la reserva." },
  { id: "piso", minLevel: "B1", emoji: "🏠", title: "Eine Wohnung besichtigen", setup: "Eres el/la propietario/a de un piso en alquiler en Madrid. El usuario viene a verlo y tiene preguntas sobre el precio, los gastos y el barrio." },
  { id: "planes", minLevel: "B1", emoji: "📅", title: "Pläne mit Freunden machen", setup: "Eres un/a amigo/a del usuario. Queréis organizar un viaje juntos y tenéis opiniones distintas sobre el destino y el presupuesto." },
  { id: "reclamacion", minLevel: "B1", emoji: "📦", title: "Eine Reklamation", setup: "Trabajas en atención al cliente de una tienda online. El usuario llama porque su pedido llegó roto. Sé amable pero sigue el protocolo." },
  { id: "entrevista", minLevel: "B2", emoji: "💼", title: "Vorstellungsgespräch", setup: "Eres responsable de recursos humanos en una empresa española. Haces una entrevista de trabajo al usuario con preguntas sobre su experiencia y sus motivaciones." },
  { id: "debate", minLevel: "B2", emoji: "🗣️", title: "Diskussion: Stadt vs. Land", setup: "Eres un/a amigo/a con opiniones fuertes. Debates con el usuario si es mejor vivir en la ciudad o en el campo. Defiende tu postura con argumentos." },
  { id: "noticias", minLevel: "B2", emoji: "📰", title: "Über Nachrichten sprechen", setup: "Eres un/a compañero/a que comenta noticias de actualidad (tecnología, medio ambiente, cultura). Pide la opinión del usuario y argumenta." },
  { id: "negociacion", minLevel: "C1", emoji: "🤝", title: "Geschäftsverhandlung", setup: "Eres un/a proveedor/a que negocia un contrato con el usuario. Usa un registro formal y defiende tus condiciones con matices." },
  { id: "filosofia", minLevel: "C1", emoji: "🤔", title: "Tiefgründiges Gespräch", setup: "Eres un/a amigo/a culto/a. Conversáis sobre temas abstractos: la felicidad, la tecnología y el sentido del trabajo. Usa expresiones idiomáticas." },
];

export function scenariosForLevel(level: Level): Scenario[] {
  const max = LEVELS.indexOf(level);
  return SCENARIOS.filter((s) => LEVELS.indexOf(s.minLevel) <= max);
}

/** Deterministic pick of the "scenario of the day", preferring ones at the user's own level. */
export function dailyScenario(level: Level, dateKey: string): Scenario {
  const pool = scenariosForLevel(level);
  const atLevel = pool.filter((s) => LEVELS.indexOf(s.minLevel) >= LEVELS.indexOf(level) - 1);
  const list = atLevel.length ? atLevel : pool;
  let hash = 0;
  for (const ch of dateKey) hash = (hash * 31 + ch.charCodeAt(0)) >>> 0;
  return list[hash % list.length];
}
