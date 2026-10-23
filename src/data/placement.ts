import type { Level } from "./curriculum";

export interface PlacementQuestion {
  id: string;
  level: Level;
  topic: string;
  prompt: string;
  options: string[];
  answer: number;
}

export const PLACEMENT_QUESTIONS: PlacementQuestion[] = [
  // A1
  { id: "a1-1", level: "A1", topic: "ser-estar-basis", prompt: "Yo ___ de Alemania.", options: ["soy", "estoy", "tengo", "hay"], answer: 0 },
  { id: "a1-2", level: "A1", topic: "presente-irregular", prompt: "Mi hermana ___ 25 años.", options: ["es", "tiene", "está", "hace"], answer: 1 },
  { id: "a1-3", level: "A1", topic: "ser-estar-basis", prompt: "¿Dónde ___ el baño?", options: ["es", "hay", "está", "son"], answer: 2 },
  { id: "a1-4", level: "A1", topic: "gustar", prompt: "Me ___ mucho las manzanas.", options: ["gusta", "gustan", "gusto", "gustas"], answer: 1 },
  { id: "a1-5", level: "A1", topic: "presente-regular", prompt: "Nosotros ___ en Madrid.", options: ["vivo", "vive", "viven", "vivimos"], answer: 3 },
  { id: "a1-6", level: "A1", topic: "hay-estar", prompt: "___ un supermercado cerca de mi casa.", options: ["Hay", "Está", "Es", "Tiene"], answer: 0 },
  // A2
  { id: "a2-1", level: "A2", topic: "indefinido-irregular", prompt: "Ayer ___ al cine con mis amigos.", options: ["iba", "fui", "voy", "he ido"], answer: 1 },
  { id: "a2-2", level: "A2", topic: "imperfecto", prompt: "Cuando era pequeño, ___ en el campo.", options: ["viví", "he vivido", "vivía", "viviré"], answer: 2 },
  { id: "a2-3", level: "A2", topic: "pronombres-objeto", prompt: "¿Has visto mi libro? — Sí, ___ he visto en la mesa.", options: ["le", "lo", "la", "los"], answer: 1 },
  { id: "a2-4", level: "A2", topic: "perfecto", prompt: "Nunca ___ sushi. ¡Quiero probarlo!", options: ["he comido", "comía", "como", "comeré"], answer: 0 },
  { id: "a2-5", level: "A2", topic: "comparativos", prompt: "Mi auto es ___ rápido ___ el tuyo.", options: ["tan / que", "más / como", "más / que", "mucho / de"], answer: 2 },
  { id: "a2-6", level: "A2", topic: "estar-gerundio", prompt: "Estoy ___ la once, ¿me ayudas?", options: ["preparado", "preparando", "preparar", "preparo"], answer: 1 },
  // B1
  { id: "b1-1", level: "B1", topic: "subjuntivo-deseos", prompt: "Quiero que tú ___ conmigo a la fiesta.", options: ["vienes", "venir", "vengas", "vendrás"], answer: 2 },
  { id: "b1-2", level: "B1", topic: "futuro-simple", prompt: "Si tengo tiempo mañana, te ___.", options: ["llamaré", "llamaría", "llamara", "llamé"], answer: 0 },
  { id: "b1-3", level: "B1", topic: "subjuntivo-duda", prompt: "No creo que Pedro ___ razón.", options: ["tiene", "tenga", "tendrá", "tener"], answer: 1 },
  { id: "b1-4", level: "B1", topic: "pluscuamperfecto", prompt: "Cuando llegué a casa, mi hermano ya ___.", options: ["cenaba", "ha cenado", "cenó", "había cenado"], answer: 3 },
  { id: "b1-5", level: "B1", topic: "estilo-indirecto", prompt: "Ana me dijo que ___ muy cansada ese día.", options: ["estaba", "está", "estará", "esté"], answer: 0 },
  { id: "b1-6", level: "B1", topic: "imperativo-negativo", prompt: "¡No ___ eso, por favor!", options: ["haces", "haz", "hagas", "hace"], answer: 2 },
  // B2
  { id: "b2-1", level: "B2", topic: "si-tipo-2", prompt: "Si ___ más dinero, viajaría por el mundo.", options: ["tengo", "tuviera", "tendría", "tenga"], answer: 1 },
  { id: "b2-2", level: "B2", topic: "imperfecto-subjuntivo", prompt: "Me alegré mucho de que ___ a verme.", options: ["vinieras", "vienes", "vengas", "vendrías"], answer: 0 },
  { id: "b2-3", level: "B2", topic: "si-tipo-3", prompt: "Si me lo hubieras dicho, te ___ ayudado.", options: ["había", "habrá", "habría", "haya"], answer: 2 },
  { id: "b2-4", level: "B2", topic: "subjuntivo-temporal", prompt: "Cuando ___ a Madrid, llámame.", options: ["llegas", "llegarás", "llegaste", "llegues"], answer: 3 },
  { id: "b2-5", level: "B2", topic: "perifrasis", prompt: "Llevo tres años ___ en Santiago.", options: ["viviendo", "vivir", "vivido", "vivo"], answer: 0 },
  { id: "b2-6", level: "B2", topic: "pasiva-se", prompt: "El ladrón ___ detenido por la policía ayer.", options: ["estuvo", "fue", "era", "ha estado"], answer: 1 },
  // C1
  { id: "c1-1", level: "C1", topic: "concesivas-avanzadas", prompt: "Aunque mañana ___ (no sabemos si pasará), iremos a la playa.", options: ["llueve", "lloverá", "llueva", "llovía"], answer: 2 },
  { id: "c1-2", level: "C1", topic: "subjuntivo-relativas", prompt: "En aquel pueblo no había nadie que ___ ayudarme.", options: ["podía", "pudiera", "puede", "podrá"], answer: 1 },
  { id: "c1-3", level: "C1", topic: "futuro-probabilidad", prompt: "¿Dónde está Juan? — No sé, ___ en un atasco.", options: ["estará", "esté", "estuviera", "estuvo"], answer: 0 },
  { id: "c1-4", level: "C1", topic: "infinitivo-compuesto", prompt: "De ___ sabido antes, no habría venido.", options: ["habiendo", "había", "haberla", "haberlo"], answer: 3 },
  { id: "c1-5", level: "C1", topic: "concesivas-avanzadas", prompt: "Por mucho que ___, no lo vas a convencer.", options: ["insistes", "insistas", "insistirás", "insististe"], answer: 1 },
  { id: "c1-6", level: "C1", topic: "modismos", prompt: "»Quedó la escoba« bedeutet in Chile …", options: ["Es gab ein großes Durcheinander / einen Skandal", "Jemand hat aufgeräumt", "Es ist niemand mehr da", "Die Party war langweilig"], answer: 0 },
];
