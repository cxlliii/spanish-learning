import { useEffect, useRef, useState } from "react";
import type { ViewProps } from "../App";
import { topicById } from "../data/curriculum";
import { dailyScenario, SCENARIOS, scenariosForLevel, type Scenario } from "../data/scenarios";
import { askJSON, streamChat, type ChatTurn } from "../lib/claude";
import { addMistakes, addVocab, markDay } from "../lib/progress";
import { canSpeak, speak } from "../lib/speech";
import { ConversationFeedback, conversationSystem, feedbackPrompt, HELP_INSTRUCTION, splitCorrection, type ConversationFeedbackT } from "../lib/tutor";
import ChatInput from "./ChatInput";
import NeedsKey from "./NeedsKey";

interface Line {
  role: "user" | "assistant";
  text: string;
  correction?: string | null;
  help?: boolean;
}

const MIN_TURNS_FOR_FEEDBACK = 3;

export default function Conversation(props: ViewProps) {
  const { state, today, param } = props;
  const [scenario, setScenario] = useState<Scenario | null>(() => SCENARIOS.find((s) => s.id === param) ?? null);
  if (!state.apiKey) return <NeedsKey {...props} what="Konversationstraining" />;
  if (!state.level) return null;
  if (!scenario) {
    const daily = dailyScenario(state.level, today);
    return (
      <section>
        <h1>Konversation üben</h1>
        <p className="muted">Wähle eine Alltagssituation. Dein Gesprächspartner passt sich deinem Niveau ({state.level}) an und korrigiert dich nebenbei.</p>
        <div className="scenario-grid">
          {[daily, ...scenariosForLevel(state.level).filter((s) => s.id !== daily.id).reverse()].map((s) => (
            <button key={s.id} className={`scenario ${s.id === daily.id ? "daily" : ""}`} onClick={() => setScenario(s)}>
              <span className="emoji">{s.emoji}</span>
              <span>{s.title}</span>
              {s.id === daily.id && <small>Thema des Tages</small>}
            </button>
          ))}
        </div>
      </section>
    );
  }
  return <ChatSession {...props} scenario={scenario} onBack={() => setScenario(null)} />;
}

function ChatSession({ state, update, go, today, scenario, onBack }: ViewProps & { scenario: Scenario; onBack: () => void }) {
  const level = state.level!;
  const cfg = { apiKey: state.apiKey, model: state.model };
  const system = useRef(conversationSystem(level, scenario, state.recentMistakes)).current;
  const historyRef = useRef<ChatTurn[]>([]);
  const [lines, setLines] = useState<Line[]>([]);
  const [streaming, setStreaming] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [autoSpeak, setAutoSpeak] = useState(false);
  const [feedback, setFeedback] = useState<ConversationFeedbackT | null>(null);
  const [evaluating, setEvaluating] = useState(false);
  const retryRef = useRef<() => void>(() => {});
  const endRef = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;
    turn({ role: "user", content: "(Empieza la conversación.)" }, null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines, streaming]);

  async function turn(userMsg: ChatTurn, line: Line | null) {
    setError(null);
    historyRef.current.push(userMsg);
    if (line) setLines((l) => [...l, line]);
    setStreaming("");
    try {
      const { text, content } = await streamChat(cfg, {
        system,
        history: historyRef.current,
        onText: (t) => setStreaming(splitCorrection(t).reply),
        effort: "low",
      });
      historyRef.current.push({ role: "assistant", content });
      const { reply, correction } = splitCorrection(text);
      setLines((l) => [...l, { role: "assistant", text: reply, correction }]);
      if (autoSpeak) speak(reply);
    } catch (e) {
      historyRef.current.pop();
      if (line) setLines((l) => l.slice(0, -1));
      setError((e as Error).message);
      retryRef.current = () => turn(userMsg, line);
    } finally {
      setStreaming(null);
    }
  }

  const send = (text: string) => turn({ role: "user", content: text }, { role: "user", text });
  const askHelp = () => turn({ role: "user", content: HELP_INSTRUCTION }, { role: "user", text: "💡 Hilfe, was kann ich sagen?", help: true });

  const userTurns = lines.filter((l) => l.role === "user" && !l.help).length;

  async function finish() {
    setEvaluating(true);
    setError(null);
    const transcript = lines
      .filter((l) => !l.help)
      .map((l) => `${l.role === "user" ? "Lernender" : "Partner"}: ${l.text}`)
      .join("\n");
    try {
      const fb = await askJSON(cfg, {
        system: "Du bist ein erfahrener Spanischlehrer und gibst deutschsprachigen Lernenden präzises, motivierendes Feedback.",
        prompt: feedbackPrompt(level, scenario, transcript),
        schema: ConversationFeedback,
        effort: "medium",
      });
      setFeedback(fb);
      update((s) => {
        let next = addVocab(s, fb.new_vocab, today, scenario.title);
        next = addMistakes(next, fb.mistakes);
        next = markDay(next, today, "conversation");
        return {
          ...next,
          conversations: [...next.conversations, { date: today, scenarioId: scenario.id, score: fb.score, summary: fb.summary_de, mistakes: fb.mistakes }],
        };
      });
    } catch (e) {
      setError((e as Error).message);
      retryRef.current = finish;
    } finally {
      setEvaluating(false);
    }
  }

  if (feedback) {
    const topics = feedback.topic_ids.map(topicById).filter((t) => t !== undefined);
    return (
      <section>
        <h1>
          {scenario.emoji} Feedback: {scenario.title}
        </h1>
        <div className="card center">
          <div className="level-big">{feedback.score}/10</div>
          <p>{feedback.summary_de}</p>
        </div>
        {feedback.strengths.length > 0 && (
          <div className="card">
            <h3>👍 Das war gut</h3>
            <ul>{feedback.strengths.map((s, i) => <li key={i}>{s}</li>)}</ul>
          </div>
        )}
        {feedback.mistakes.length > 0 && (
          <div className="card">
            <h3>✏️ Verbesserungen</h3>
            <ul className="mistakes">
              {feedback.mistakes.map((m, i) => (
                <li key={i}>
                  <s>{m.wrong}</s> → <strong>{m.correct}</strong>
                  <div className="muted">{m.explanation}</div>
                </li>
              ))}
            </ul>
          </div>
        )}
        {feedback.new_vocab.length > 0 && (
          <div className="card">
            <h3>🃏 Neu in deinen Vokabeln</h3>
            <ul>
              {feedback.new_vocab.map((v, i) => (
                <li key={i}>
                  <strong>{v.es}</strong> – {v.de}
                </li>
              ))}
            </ul>
          </div>
        )}
        {topics.length > 0 && (
          <div className="card">
            <h3>📘 Grammatik-Tipp</h3>
            <div className="chips">
              {topics.map((t) => (
                <button key={t.id} className="chip" onClick={() => go("lesson", t.id)}>
                  {t.title}
                </button>
              ))}
            </div>
          </div>
        )}
        <div className="row">
          <button className="primary" onClick={() => go("home")}>
            Fertig
          </button>
          <button onClick={onBack}>Noch ein Gespräch</button>
        </div>
      </section>
    );
  }

  return (
    <section className="chat-view">
      <div className="chat-head">
        <button className="link" onClick={onBack}>
          ← Situationen
        </button>
        <strong>
          {scenario.emoji} {scenario.title}
        </strong>
        {canSpeak() && (
          <label className="toggle" title="Antworten automatisch vorlesen">
            <input type="checkbox" checked={autoSpeak} onChange={(e) => setAutoSpeak(e.target.checked)} /> 🔊
          </label>
        )}
      </div>
      <div className="chat">
        {lines.map((l, i) => (
          <div key={i} className={`bubble-wrap ${l.role}`}>
            <div className={`bubble ${l.role} ${l.help ? "help" : ""}`}>
              {l.text}
              {l.role === "assistant" && canSpeak() && (
                <button className="speak" title="Vorlesen" onClick={() => speak(l.text)}>
                  🔊
                </button>
              )}
            </div>
            {l.correction && <div className="correction">{l.correction}</div>}
          </div>
        ))}
        {streaming !== null && <div className="bubble assistant">{streaming || "…"}</div>}
        {evaluating && <div className="loading">Feedback wird erstellt…</div>}
        <div ref={endRef} />
      </div>
      {error && (
        <p className="error">
          {error}{" "}
          <button className="link" onClick={() => retryRef.current()}>
            Erneut versuchen
          </button>
        </p>
      )}
      <div className="row chat-actions">
        <button disabled={streaming !== null || evaluating || lines.length === 0} onClick={askHelp}>
          💡 Hilfe
        </button>
        <button disabled={streaming !== null || evaluating || userTurns < MIN_TURNS_FOR_FEEDBACK} onClick={finish} title={userTurns < MIN_TURNS_FOR_FEEDBACK ? `Mindestens ${MIN_TURNS_FOR_FEEDBACK} Antworten` : ""}>
          ✅ Beenden & Feedback
        </button>
      </div>
      <ChatInput disabled={streaming !== null || evaluating || lines.length === 0} onSend={send} />
    </section>
  );
}
