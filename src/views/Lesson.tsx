import { useEffect, useRef, useState } from "react";
import type { ViewProps } from "../App";
import { topicById, topicsForLevel, type GrammarTopic } from "../data/curriculum";
import { askJSON } from "../lib/claude";
import { markDay, nextGrammarTopic, recordTopicResult } from "../lib/progress";
import { canSpeak, normalize, speak } from "../lib/speech";
import { Grading, gradingPrompt, Lesson as LessonSchema, lessonPrompt, TUTOR_SYSTEM, type Exercise, type LessonT } from "../lib/tutor";
import NeedsKey from "./NeedsKey";

interface Result {
  correct: boolean;
  feedback?: string;
}

export default function Lesson(props: ViewProps) {
  const { state, param } = props;
  const [topic, setTopic] = useState<GrammarTopic | null>(() => (param ? topicById(param) ?? null : null));
  if (!state.apiKey) return <NeedsKey {...props} what="Grammatik-Lektionen" />;
  if (!state.level) return null;

  if (!topic) {
    const suggested = nextGrammarTopic(state);
    return (
      <section>
        <h1>Grammatik</h1>
        {suggested && (
          <button className="card suggestion" onClick={() => setTopic(suggested)}>
            <small>Empfohlen für heute</small>
            <strong>{suggested.title}</strong>
            <span className="muted">{suggested.summary}</span>
          </button>
        )}
        <h2>Alle Themen auf {state.level}</h2>
        <div className="topic-list">
          {topicsForLevel(state.level).map((t) => (
            <TopicRow key={t.id} topic={t} mastery={state.topics[t.id]?.mastery} onClick={() => setTopic(t)} />
          ))}
        </div>
        {state.placement?.weakTopics.some((id) => topicById(id)?.level !== state.level) && (
          <>
            <h2>Wiederholung</h2>
            <div className="topic-list">
              {state.placement.weakTopics
                .map(topicById)
                .filter((t): t is GrammarTopic => !!t && t.level !== state.level)
                .map((t) => (
                  <TopicRow key={t.id} topic={t} mastery={state.topics[t.id]?.mastery} onClick={() => setTopic(t)} />
                ))}
            </div>
          </>
        )}
      </section>
    );
  }
  return <LessonSession {...props} topic={topic} onBack={() => setTopic(null)} />;
}

function TopicRow({ topic, mastery, onClick }: { topic: GrammarTopic; mastery?: number; onClick: () => void }) {
  return (
    <button className="topic-row" onClick={onClick}>
      <span>
        <span className="tag">{topic.level}</span> {topic.title}
      </span>
      <span className="mastery">
        <span className="bar">
          <span style={{ width: `${mastery ?? 0}%` }} />
        </span>
        {mastery !== undefined ? `${mastery}%` : "neu"}
      </span>
    </button>
  );
}

function isLocallyCorrect(ex: Exercise, given: string): boolean {
  const g = normalize(given);
  return [ex.answer, ...ex.alternatives].some((a) => normalize(a) === g);
}

function LessonSession({ state, update, go, today, topic, onBack }: ViewProps & { topic: GrammarTopic; onBack: () => void }) {
  const cfg = { apiKey: state.apiKey, model: state.model };
  const [lesson, setLesson] = useState<LessonT | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [answers, setAnswers] = useState<string[]>([]);
  const [results, setResults] = useState<Result[] | null>(null);
  const [checking, setChecking] = useState(false);
  const loaded = useRef(false);

  async function load() {
    setError(null);
    try {
      const l = await askJSON(cfg, {
        system: TUTOR_SYSTEM,
        prompt: lessonPrompt(topic, state.level!, state.topics[topic.id]?.mastery ?? 0, state.recentMistakes),
        schema: LessonSchema,
        effort: "medium",
      });
      setLesson(l);
      setAnswers(l.exercises.map(() => ""));
    } catch (e) {
      setError((e as Error).message);
    }
  }

  useEffect(() => {
    if (loaded.current) return;
    loaded.current = true;
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function check() {
    if (!lesson) return;
    setChecking(true);
    setError(null);
    const local: Result[] = lesson.exercises.map((ex, i) => ({ correct: isLocallyCorrect(ex, answers[i]) }));
    // Free-text answers that don't match the key exactly are graded by the AI (other wordings can be right too).
    const toGrade = lesson.exercises
      .map((exercise, index) => ({ index, exercise, given: answers[index] }))
      .filter((i) => !local[i.index].correct && i.exercise.type !== "choice" && i.given.trim());
    let final = local;
    if (toGrade.length) {
      try {
        const graded = await askJSON(cfg, { system: TUTOR_SYSTEM, prompt: gradingPrompt(toGrade), schema: Grading, effort: "low" });
        final = local.map((r, i) => {
          const g = graded.results.find((x) => x.index === i);
          return g ? { correct: g.correct, feedback: g.feedback_de } : r;
        });
      } catch (e) {
        setError(`KI-Prüfung nicht möglich, es wird nur mit der Musterlösung verglichen. (${(e as Error).message})`);
      }
    }
    setResults(final);
    setChecking(false);
    const ratio = final.filter((r) => r.correct).length / final.length;
    update((s) => markDay(recordTopicResult(s, topic.id, ratio, today), today, "grammar"));
  }

  if (!lesson) {
    return (
      <section>
        <button className="link" onClick={onBack}>
          ← Themen
        </button>
        <h1>{topic.title}</h1>
        {error ? (
          <p className="error">
            {error}{" "}
            <button className="link" onClick={load}>
              Erneut versuchen
            </button>
          </p>
        ) : (
          <div className="loading">Dein Lehrer bereitet die Lektion vor…</div>
        )}
      </section>
    );
  }

  const score = results ? results.filter((r) => r.correct).length : 0;

  return (
    <section>
      <button className="link" onClick={onBack}>
        ← Themen
      </button>
      <h1>{topic.title}</h1>
      <div className="card explanation">
        {lesson.explanation_de.split(/\n\n+/).map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      <div className="card">
        <h3>Beispiele</h3>
        <ul className="examples">
          {lesson.examples.map((ex, i) => (
            <li key={i}>
              <span>
                <strong>{ex.es}</strong>
                <br />
                <span className="muted">{ex.de}</span>
              </span>
              {canSpeak() && (
                <button className="speak" onClick={() => speak(ex.es)}>
                  🔊
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>

      <h2>Übungen</h2>
      {lesson.exercises.map((ex, i) => {
        const r = results?.[i];
        return (
          <div key={i} className={`card exercise ${r ? (r.correct ? "right" : "wrong") : ""}`}>
            <small className="muted">
              {i + 1}. {ex.instruction_de}
            </small>
            <p className="question">{ex.question}</p>
            {ex.type === "choice" && ex.options.length > 0 ? (
              <div className="options inline">
                {ex.options.map((o) => (
                  <button
                    key={o}
                    className={`option ${answers[i] === o ? "selected" : ""}`}
                    disabled={!!results}
                    onClick={() => setAnswers((a) => a.map((v, j) => (j === i ? o : v)))}
                  >
                    {o}
                  </button>
                ))}
              </div>
            ) : (
              <input
                value={answers[i]}
                disabled={!!results}
                placeholder={ex.type === "translate" ? "Übersetzung auf Spanisch" : "Antwort"}
                onChange={(e) => setAnswers((a) => a.map((v, j) => (j === i ? e.target.value : v)))}
              />
            )}
            {!results && (
              <details>
                <summary>Tipp</summary>
                {ex.hint_de}
              </details>
            )}
            {r && (
              <div className="result">
                {r.correct ? "✅ Richtig" : "❌"} {!r.correct && <>Lösung: <strong>{ex.answer}</strong></>}
                {r.feedback && <div className="muted">{r.feedback}</div>}
              </div>
            )}
          </div>
        );
      })}

      {error && <p className="error">{error}</p>}
      {!results ? (
        <button className="primary big" disabled={checking || answers.every((a) => !a.trim())} onClick={check}>
          {checking ? "Wird geprüft…" : "Antworten prüfen"}
        </button>
      ) : (
        <div className="card center">
          <div className="level-big">
            {score}/{results.length}
          </div>
          <p>{score / results.length >= 0.8 ? "¡Muy bien! Thema sitzt. 🎉" : "Weiter üben – das Thema kommt wieder dran."}</p>
          <div className="row">
            <button className="primary" onClick={() => go("home")}>
              Fertig
            </button>
            <button onClick={onBack}>Anderes Thema</button>
          </div>
        </div>
      )}
    </section>
  );
}
