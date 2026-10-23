import { useEffect, useMemo, useRef, useState } from "react";
import type { ViewProps } from "../App";
import { dialogueFor } from "../data/dialogues";
import { dailyScenario, GOAL_LABELS, SCENARIOS, scenariosForLevel, type Scenario } from "../data/scenarios";
import type { Dialogue, DialogueOption } from "../data/types";
import { shuffle } from "../lib/placement";
import { addMistakes, addVocab, markDay, type Mistake } from "../lib/progress";
import { canSpeak, similarity, speak } from "../lib/speech";
import ChatInput from "./ChatInput";

const POINTS: Record<DialogueOption["quality"], number> = { best: 1, ok: 0.6, wrong: 0 };
const POINTS_AFTER_RETRY = 0.3;

export default function Conversation(props: ViewProps) {
  const { state, today, param } = props;
  const [scenario, setScenario] = useState<Scenario | null>(() => SCENARIOS.find((s) => s.id === param) ?? null);
  if (!state.level) return null;
  const dialogue = scenario ? dialogueFor(scenario.id) : undefined;
  if (scenario && dialogue) return <DialogueSession {...props} scenario={scenario} dialogue={dialogue} onBack={() => setScenario(null)} />;

  const daily = dailyScenario(state.level, today);
  const done = new Set(state.conversations.map((c) => c.scenarioId));
  const list = [daily, ...scenariosForLevel(state.level).filter((s) => s.id !== daily.id).reverse()].filter((s) => dialogueFor(s.id));
  return (
    <section>
      <h1>Gespräche üben</h1>
      <p className="muted">Alltagssituationen in Chile. Antworte zuerst frei (tippen oder sprechen 🎤) und wähle dann die passende Antwort.</p>
      <div className="scenario-grid">
        {list.map((s) => (
          <button key={s.id} className={`scenario ${s.id === daily.id ? "daily" : ""}`} onClick={() => setScenario(s)}>
            <span className="emoji">{s.emoji}</span>
            <span>{s.title}</span>
            <small className="muted">
              {s.minLevel} · {GOAL_LABELS[s.goal]}
              {done.has(s.id) && " · ✓"}
            </small>
            {s.id === daily.id && <small className="daily-label">Thema des Tages</small>}
          </button>
        ))}
      </div>
    </section>
  );
}

interface Line {
  who: "npc" | "me";
  es: string;
  de?: string;
  /** For learner lines: what they typed/spoke themselves. */
  free?: boolean;
}

function DialogueSession({ update, go, today, scenario, dialogue, onBack }: ViewProps & { scenario: Scenario; dialogue: Dialogue; onBack: () => void }) {
  const [step, setStep] = useState(0);
  const [lines, setLines] = useState<Line[]>([]);
  const [freeFirst, setFreeFirst] = useState(true);
  const [freeAnswer, setFreeAnswer] = useState<string | null>(null);
  const [tried, setTried] = useState<DialogueOption[]>([]);
  const [chosen, setChosen] = useState<DialogueOption | null>(null);
  const [points, setPoints] = useState<number[]>([]);
  const [mistakes, setMistakes] = useState<Mistake[]>([]);
  const [showDe, setShowDe] = useState<Record<number, boolean>>({});
  const [autoSpeak, setAutoSpeak] = useState(canSpeak());
  const [finished, setFinished] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  const current = dialogue.steps[step];
  const options = useMemo(() => shuffle(current?.options ?? []), [current]);
  const best = current?.options.find((o) => o.quality === "best");

  // Partner speaks the next line (guarded against StrictMode's double effect run).
  const shownStep = useRef(-1);
  useEffect(() => {
    if (!current || shownStep.current === step) return;
    shownStep.current = step;
    setLines((l) => [...l, { who: "npc", es: current.npc, de: current.npcDe }]);
    if (autoSpeak) speak(current.npc);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [lines, chosen, freeAnswer, tried, finished]);

  function choose(o: DialogueOption) {
    if (chosen) return;
    if (o.quality === "wrong") {
      if (!tried.includes(o)) setMistakes((m) => [...m, { wrong: o.es, correct: best?.es ?? "", explanation: o.feedback }]);
      setTried((t) => (t.includes(o) ? t : [...t, o]));
      return;
    }
    setChosen(o);
    setPoints((p) => [...p, tried.length ? POINTS_AFTER_RETRY : POINTS[o.quality]]);
    setLines((l) => [...l, { who: "me", es: o.es }]);
  }

  function next() {
    setChosen(null);
    setTried([]);
    setFreeAnswer(null);
    if (step + 1 < dialogue.steps.length) setStep(step + 1);
    else finish();
  }

  function finish() {
    setLines((l) => [...l, { who: "npc", es: dialogue.closing, de: dialogue.closingDe }]);
    if (autoSpeak) speak(dialogue.closing);
    const score = Math.max(1, Math.round((points.reduce((a, b) => a + b, 0) / dialogue.steps.length) * 10));
    update((s) => {
      let next = addVocab(s, dialogue.vocab, today, scenario.title);
      next = addMistakes(next, mistakes);
      next = markDay(next, today, "conversation");
      return { ...next, conversations: [...next.conversations, { date: today, scenarioId: scenario.id, score }] };
    });
    setFinished(true);
  }

  const score = Math.max(1, Math.round((points.reduce((a, b) => a + b, 0) / dialogue.steps.length) * 10));
  const freeMatch = freeAnswer && best ? similarity(freeAnswer, best.es) : 0;

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
          <label className="toggle" title="Partner automatisch vorlesen">
            <input type="checkbox" checked={autoSpeak} onChange={(e) => setAutoSpeak(e.target.checked)} /> 🔊
          </label>
        )}
      </div>
      {step === 0 && lines.length <= 1 && <p className="muted setup">{scenario.setup}</p>}
      <div className="progressbar">
        <div style={{ width: `${((finished ? dialogue.steps.length : step) / dialogue.steps.length) * 100}%` }} />
      </div>

      <div className="chat">
        {lines.map((l, i) => (
          <div key={i} className={`bubble-wrap ${l.who === "npc" ? "assistant" : "user"}`}>
            <div className={`bubble ${l.who === "npc" ? "assistant" : "user"} ${l.free ? "free" : ""}`}>
              {l.es}
              {l.who === "npc" && (
                <span className="bubble-tools">
                  {canSpeak() && (
                    <button className="speak" title="Vorlesen" onClick={() => speak(l.es)}>
                      🔊
                    </button>
                  )}
                  <button className="speak" title="Übersetzung" onClick={() => setShowDe((d) => ({ ...d, [i]: !d[i] }))}>
                    🇩🇪
                  </button>
                </span>
              )}
            </div>
            {l.de && showDe[i] && <div className="translation">{l.de}</div>}
          </div>
        ))}
        {freeAnswer && !chosen && (
          <div className="bubble-wrap user">
            <div className="bubble user free">{freeAnswer}</div>
          </div>
        )}
        <div ref={endRef} />
      </div>

      {!finished && current && (
        <div className="turn">
          <div className="task">
            <small>Deine Aufgabe</small>
            {current.task}
          </div>

          {freeFirst && freeAnswer === null && !chosen ? (
            <>
              <ChatInput placeholder="Antworte auf Spanisch… (oder 🎤)" onSend={setFreeAnswer} />
              <div className="row">
                <button className="link small" onClick={() => setFreeAnswer("")}>
                  Ich weiß es nicht – Antworten zeigen
                </button>
                <label className="toggle small">
                  <input type="checkbox" checked={freeFirst} onChange={(e) => setFreeFirst(e.target.checked)} /> erst frei antworten
                </label>
              </div>
            </>
          ) : (
            <>
              {freeAnswer && !chosen && (
                <p className="hint">
                  {freeMatch >= 0.7
                    ? "🎯 Sehr nah an der besten Antwort! Welche Variante passt zu dem, was du sagen wolltest?"
                    : freeMatch >= 0.35
                      ? "👍 In die richtige Richtung. Vergleiche mit den Vorschlägen:"
                      : "Vergleiche deine Antwort mit diesen Vorschlägen und wähle die passendste:"}
                </p>
              )}
              <div className="options">
                {options.map((o) => {
                  const wasTried = tried.includes(o);
                  const isChosen = chosen === o;
                  return (
                    <div key={o.es}>
                      <button
                        className={`option ${wasTried ? "wrong-choice" : ""} ${isChosen ? (o.quality === "best" ? "correct" : "okay") : ""}`}
                        disabled={wasTried || (!!chosen && !isChosen)}
                        onClick={() => choose(o)}
                      >
                        {o.es}
                      </button>
                      {(wasTried || isChosen) && (
                        <div className={`feedback ${o.quality}`}>
                          {o.quality === "best" ? "✅ " : o.quality === "ok" ? "🙂 " : "❌ "}
                          {o.feedback}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
              {chosen && chosen.quality === "ok" && best && (
                <p className="muted">
                  Noch natürlicher: <strong>{best.es}</strong>
                </p>
              )}
              {!chosen && !freeFirst && (
                <label className="toggle small">
                  <input type="checkbox" checked={freeFirst} onChange={(e) => setFreeFirst(e.target.checked)} /> erst frei antworten
                </label>
              )}
              {chosen && (
                <button className="primary big" onClick={next}>
                  Weiter
                </button>
              )}
            </>
          )}
        </div>
      )}

      {finished && (
        <div className="card center">
          <div className="level-big">{score}/10</div>
          <p>{score >= 8 ? "¡Bacán! Das Gespräch lief richtig gut." : score >= 5 ? "Gut gemacht! Mit etwas Übung wird es noch natürlicher." : "Guter Anfang – probier das Gespräch bald nochmal."}</p>
          {mistakes.length > 0 && (
            <div className="left">
              <h3>✏️ Merk dir</h3>
              <ul className="mistakes">
                {mistakes.map((m, i) => (
                  <li key={i}>
                    <s>{m.wrong}</s> → <strong>{m.correct}</strong>
                    <div className="muted">{m.explanation}</div>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="left">
            <h3>🃏 Neu in deinen Vokabeln</h3>
            <ul>
              {dialogue.vocab.map((v) => (
                <li key={v.es}>
                  <strong>{v.es}</strong> – {v.de}
                </li>
              ))}
            </ul>
          </div>
          <div className="row center-row">
            <button className="primary" onClick={() => go("home")}>
              Fertig
            </button>
            <button onClick={onBack}>Anderes Gespräch</button>
          </div>
        </div>
      )}
    </section>
  );
}
