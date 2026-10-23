import type { Level } from "./curriculum";

export interface SeedWord {
  es: string;
  de: string;
  level: Level;
}

/** Everyday starter vocabulary; conversations add more words automatically. */
export const SEED_VOCAB: SeedWord[] = [
  { es: "hola", de: "hallo", level: "A1" },
  { es: "gracias", de: "danke", level: "A1" },
  { es: "por favor", de: "bitte", level: "A1" },
  { es: "la cuenta", de: "die Rechnung", level: "A1" },
  { es: "el desayuno", de: "das Frühstück", level: "A1" },
  { es: "la calle", de: "die Straße", level: "A1" },
  { es: "el trabajo", de: "die Arbeit", level: "A1" },
  { es: "barato / caro", de: "billig / teuer", level: "A1" },
  { es: "¿Cuánto cuesta?", de: "Wie viel kostet das?", level: "A1" },
  { es: "a la derecha / a la izquierda", de: "rechts / links", level: "A1" },
  { es: "todo recto", de: "geradeaus", level: "A1" },
  { es: "tener hambre", de: "Hunger haben", level: "A1" },
  { es: "quedar (con alguien)", de: "sich (mit jemandem) verabreden", level: "A2" },
  { es: "el fin de semana", de: "das Wochenende", level: "A2" },
  { es: "me duele la cabeza", de: "ich habe Kopfschmerzen", level: "A2" },
  { es: "la reserva", de: "die Reservierung", level: "A2" },
  { es: "darse cuenta de", de: "bemerken", level: "A2" },
  { es: "echar de menos", de: "vermissen", level: "A2" },
  { es: "el alquiler", de: "die Miete", level: "B1" },
  { es: "merecer la pena", de: "sich lohnen", level: "B1" },
  { es: "ponerse de acuerdo", de: "sich einigen", level: "B1" },
  { es: "la queja / reclamar", de: "die Beschwerde / reklamieren", level: "B1" },
  { es: "a lo mejor", de: "vielleicht", level: "B1" },
  { es: "hacer falta", de: "nötig sein", level: "B1" },
  { es: "el puesto de trabajo", de: "die Stelle", level: "B2" },
  { es: "sin embargo", de: "jedoch", level: "B2" },
  { es: "estar harto/a de", de: "die Nase voll haben von", level: "B2" },
  { es: "llevarse bien con", de: "sich gut verstehen mit", level: "B2" },
  { es: "a fin de cuentas", de: "letzten Endes", level: "C1" },
  { es: "meter la pata", de: "ins Fettnäpfchen treten", level: "C1" },
];
