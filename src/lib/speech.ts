// Browser speech helpers (Web Speech API). Everything degrades gracefully when unsupported.

export function canSpeak(): boolean {
  return typeof window !== "undefined" && "speechSynthesis" in window;
}

export function speak(text: string): void {
  if (!canSpeak()) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  const voice = pickVoice(window.speechSynthesis.getVoices());
  u.lang = voice?.lang ?? "es-CL";
  u.rate = 0.9;
  if (voice) u.voice = voice;
  window.speechSynthesis.speak(u);
}

// Chilean voice first, then other Latin American ones, then any Spanish voice.
const VOICE_PREFERENCE = ["es-CL", "es-419", "es-AR", "es-CO", "es-MX", "es-US"];

function pickVoice(voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | undefined {
  const norm = (l: string) => l.replace("_", "-");
  for (const lang of VOICE_PREFERENCE) {
    const v = voices.find((x) => norm(x.lang) === lang);
    if (v) return v;
  }
  return voices.find((x) => x.lang.startsWith("es"));
}

interface RecognitionLike {
  lang: string;
  interimResults: boolean;
  continuous: boolean;
  onresult: ((e: { results: ArrayLike<ArrayLike<{ transcript: string }>> }) => void) | null;
  onend: (() => void) | null;
  onerror: (() => void) | null;
  start(): void;
  stop(): void;
}

function recognitionCtor(): (new () => RecognitionLike) | null {
  const w = window as unknown as Record<string, unknown>;
  return (w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null) as (new () => RecognitionLike) | null;
}

export function canListen(): boolean {
  return typeof window !== "undefined" && recognitionCtor() !== null;
}

/** Starts Spanish speech recognition; returns a stop function. */
export function listen(onText: (text: string) => void, onEnd: () => void): () => void {
  const Ctor = recognitionCtor();
  if (!Ctor) {
    onEnd();
    return () => {};
  }
  const rec = new Ctor();
  rec.lang = "es-CL";
  rec.interimResults = true;
  rec.continuous = false;
  rec.onresult = (e) => {
    const text = Array.from(e.results)
      .map((r) => r[0].transcript)
      .join("");
    onText(text);
  };
  rec.onend = onEnd;
  rec.onerror = onEnd;
  rec.start();
  return () => rec.stop();
}

/** Normalises an answer for lenient comparison (case, accents, punctuation, spacing). */
export function normalize(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[¿?¡!.,;:"'«»]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

/** Word-overlap similarity (0–1) between a free answer and a model answer. */
export function similarity(a: string, b: string): number {
  const wa = new Set(normalize(a).split(" ").filter(Boolean));
  const wb = new Set(normalize(b).split(" ").filter(Boolean));
  if (!wa.size || !wb.size) return 0;
  let common = 0;
  for (const w of wa) if (wb.has(w)) common++;
  return (2 * common) / (wa.size + wb.size);
}
