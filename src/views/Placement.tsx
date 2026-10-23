import { useRef, useState } from "react";
import type { ViewProps } from "../App";
import { LEVELS, LEVEL_NAMES, topicById, type Level } from "../data/curriculum";
import { askJSON, streamChat, type ChatTurn } from "../lib/claude";
import { combineLevels, PlacementTest, type PlacementResult } from "../lib/placement";
import { applyLevel } from "../lib/progress";
import { PLACEMENT_CHAT_TURNS, PlacementAssessment, placementAssessmentPrompt, placementChatSystem } from "../lib/tutor";
import ChatInput from "./ChatInput";

type Phase = "intro" | "mc" | "chat-intro" | "chat" | "assessing" | "result";

interface Line {
  role: "user" | "assistant";
  text: string;
}

export default function Placement({ state, update, go, today }: ViewProps) {
  const testRef = useRef(new PlacementTest());
  const test = testRef.current;
  const [phase, setPhase] = useState<Phase>("intro");
  const [, rerender] = useState(0);
  const [mc, setMc] = useState<PlacementResult | null>(null);
  const [lines, setLines] = useState<Line[]>([]);
  const historyRef = useRef<ChatTurn[]>([]);
  const [streaming, setStreaming] = useState<string | null>(null);
  const [ai, setAi] = useState<{ level: Level; summary: string; strengths: string[]; weaknesses: string[]; weakTopics: string[] } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const retryRef = useRef<() => void>(() => {});
  const cfg = { apiKey: state.apiKey, model: state.model };

  function answer(i: number) {
    test.answer(i);
    if (test.finished) {
      setMc(test.result());
      setPhase("chat-intro");
    }
    rerender((n) => n + 1);
  }

  async function assistantTurn(userText: string | null) {
    setError(null);
    if (userText !== null) {
      historyRef.current.push({ role: "user", content: userText });
      setLines((l) => (l.at(-1)?.text === userText ? l : [...l, { role: "user", text: userText }]));
    } else {
      historyRef.current.push({ role: "user", content: "¡Hola! Estoy listo/a para la entrevista." });
    }
    setStreaming("");
    try {
      const { text, content } = await streamChat(cfg, {
        system: placementChatSystem(mc!.level),
        history: historyRef.current,
        onText: setStreaming,
        effort: "low",
      });
      historyRef.current.push({ role: "assistant", content });
      setLines((l) => [...l, { role: "assistant", text }]);
    } catch (e) {
      setError((e as Error).message);
      historyRef.current.pop();
      retryRef.current = () => assistantTurn(userText);
    } finally {
      setStreaming(null);
    }
  }

  async function sendChat(text: string) {
    const userTurns = lines.filter((l) => l.role === "user").length + 1;
    if (userTurns >= PLACEMENT_CHAT_TURNS) {
      const all = [...lines, { role: "user" as const, text }];
      setLines(all);
      await assess(all);
    } else {
      await assistantTurn(text);
    }
  }

  async function assess(all: Line[]) {
    setPhase("assessing");
    setError(null);
    const transcript = all.map((l) => `${l.role === "user" ? "Lernender" : "Prüfer"}: ${l.text}`).join("\n");
    try {
      const r = await askJSON(cfg, {
        system: "Du bist ein zertifizierter Prüfer für Spanisch als Fremdsprache (DELE) und bewertest nach dem GER.",
        prompt: placementAssessmentPrompt(transcript, mc!.level),
        schema: PlacementAssessment,
        effort: "medium",
      });
      setAi({ level: r.level, summary: r.summary_de, strengths: r.strengths, weaknesses: r.weaknesses, weakTopics: r.weak_topic_ids });
      setPhase("result");
    } catch (e) {
      setError((e as Error).message);
      retryRef.current = () => assess(all);
      setPhase("chat");
    }
  }

  function finish() {
    if (!mc) return;
    const finalLevel = combineLevels(mc.level, ai?.level ?? null);
    const weakTopics = [...new Set([...(ai?.weakTopics ?? []), ...mc.weakTopics])].filter((id) => topicById(id));
    update((s) => ({
      ...applyLevel(s, finalLevel, today),
      placement: { date: today, mcLevel: mc.level, aiLevel: ai?.level, finalLevel, weakTopics, aiSummary: ai?.summary },
    }));
    go("home");
  }

  if (phase === "intro") {
    return (
      <section>
        <h1>¡Bienvenido/a! 👋</h1>
        <p>Bevor es losgeht, finden wir dein aktuelles Niveau heraus. Der Einstufungstest hat zwei Teile:</p>
        <ol className="steps">
          <li>
            <strong>Grammatik-Check</strong> – kurze Multiple-Choice-Fragen, die sich deinem Niveau anpassen (ca. 3–5 Min.).
          </li>
          <li>
            <strong>Mini-Gespräch</strong> – {PLACEMENT_CHAT_TURNS} Fragen, die du frei auf Spanisch beantwortest. Die KI bewertet Wortschatz, Satzbau und
            Ausdruck.
          </li>
        </ol>
        <p className="muted">Rate nicht – wenn du etwas nicht weißt, wähle einfach „Weiß ich nicht“. So wird das Ergebnis genauer.</p>
        <button className="primary big" onClick={() => setPhase("mc")}>
          Test starten
        </button>
      </section>
    );
  }

  if (phase === "mc") {
    const q = test.current();
    if (!q) return null;
    const { answered, maxTotal } = test.progress;
    return (
      <section>
        <div className="progressbar">
          <div style={{ width: `${(answered / maxTotal) * 100}%` }} />
        </div>
        <p className="muted">
          Frage {answered + 1} · Stufe {test.currentLevel}
        </p>
        <h2 className="question">{q.prompt}</h2>
        <div className="options">
          {q.options.map((o, i) => (
            <button key={i} className="option" onClick={() => answer(i)}>
              {o}
            </button>
          ))}
          <button className="option ghost" onClick={() => answer(-1)}>
            Weiß ich nicht
          </button>
        </div>
      </section>
    );
  }

  if (phase === "chat-intro" && mc) {
    return (
      <section>
        <h1>Teil 1 geschafft ✅</h1>
        <p>
          Der Grammatik-Check deutet auf <strong>{mc.level}</strong> als Übungsniveau hin.
        </p>
        <ScoreTable scores={mc.scores} />
        {state.apiKey ? (
          <>
            <p>Jetzt das Mini-Gespräch: Antworte so gut du kannst auf Spanisch. Kurze Sätze sind völlig okay!</p>
            <button
              className="primary big"
              onClick={() => {
                setPhase("chat");
                assistantTurn(null);
              }}
            >
              Gespräch starten
            </button>
          </>
        ) : (
          <div className="card warn">
            <p>
              Für das Mini-Gespräch (und später das Konversationstraining) brauchst du einen Claude API-Schlüssel. Du kannst ihn jetzt in den
              Einstellungen hinterlegen und den Test danach wiederholen – oder vorerst nur mit dem Grammatik-Ergebnis starten.
            </p>
            <div className="row">
              <button className="primary" onClick={() => setPhase("result")}>
                Mit {mc.level} starten
              </button>
              <button onClick={() => go("settings")}>Zu den Einstellungen</button>
            </div>
          </div>
        )}
      </section>
    );
  }

  if (phase === "chat" || phase === "assessing") {
    const userTurns = lines.filter((l) => l.role === "user").length;
    return (
      <section className="chat-view">
        <p className="muted">
          Einstufungsgespräch · Antwort {Math.min(userTurns + 1, PLACEMENT_CHAT_TURNS)} von {PLACEMENT_CHAT_TURNS}
        </p>
        <div className="chat">
          {lines.map((l, i) => (
            <div key={i} className={`bubble ${l.role}`}>
              {l.text}
            </div>
          ))}
          {streaming !== null && <div className="bubble assistant">{streaming || "…"}</div>}
          {phase === "assessing" && <div className="loading">Die KI wertet dein Gespräch aus…</div>}
        </div>
        {error && (
          <p className="error">
            {error}{" "}
            <button className="link" onClick={() => retryRef.current()}>
              Erneut versuchen
            </button>
          </p>
        )}
        {phase === "chat" && !error && <ChatInput disabled={streaming !== null || lines.length === 0} onSend={sendChat} />}
      </section>
    );
  }

  if (phase === "result" && mc) {
    const finalLevel = combineLevels(mc.level, ai?.level ?? null);
    return (
      <section>
        <h1>Dein Ergebnis</h1>
        <div className="card center">
          <div className="level-big">{finalLevel}</div>
          <div>{LEVEL_NAMES[finalLevel]}</div>
          <p className="muted">Auf diesem Niveau stellen wir deine Übungen zusammen.</p>
        </div>
        <div className="card">
          <h3>Grammatik-Check: {mc.level}</h3>
          <ScoreTable scores={mc.scores} />
        </div>
        {ai && (
          <div className="card">
            <h3>Gespräch: {ai.level}</h3>
            <p>{ai.summary}</p>
            {ai.strengths.length > 0 && (
              <>
                <h4>Stärken</h4>
                <ul>{ai.strengths.map((s, i) => <li key={i}>{s}</li>)}</ul>
              </>
            )}
            {ai.weaknesses.length > 0 && (
              <>
                <h4>Daran arbeiten wir</h4>
                <ul>{ai.weaknesses.map((s, i) => <li key={i}>{s}</li>)}</ul>
              </>
            )}
          </div>
        )}
        <button className="primary big" onClick={finish}>
          Los geht's! 🚀
        </button>
      </section>
    );
  }

  return null;
}

function ScoreTable({ scores }: { scores: PlacementResult["scores"] }) {
  return (
    <div className="scores">
      {LEVELS.map((l) => {
        const s = scores[l];
        return (
          <div key={l} className={`score ${s ? (s.correct >= 3 ? "pass" : "fail") : "skip"}`}>
            <strong>{l}</strong>
            <span>{s ? `${s.correct}/${s.total}` : "–"}</span>
          </div>
        );
      })}
    </div>
  );
}
