import { useMemo, useState } from "react";
import type { ViewProps } from "../App";
import { topicById, topicsForLevel, type GrammarTopic } from "../data/curriculum";
import { lessonFor } from "../data/lessons";
import { markDay, nextGrammarTopic, recordTopicResult, setMissed, type MissedExercise } from "../lib/progress";
import { shuffle } from "../lib/placement";
import { canSpeak, speak } from "../lib/speech";
import ExerciseRunner, { type ExerciseItem } from "./ExerciseRunner";

export const REVIEW_PARAM = "review";
const REVIEW_SIZE = 8;

export default function Lesson(props: ViewProps) {
  const { state, param } = props;
  const [selection, setSelection] = useState<string | null>(param ?? null);
  if (!state.level) return null;

  if (selection === REVIEW_PARAM && state.missed.length) return <ReviewSession {...props} onBack={() => setSelection(null)} />;
  const topic = selection ? topicById(selection) : undefined;
  if (topic) return <LessonSession {...props} topic={topic} onBack={() => setSelection(null)} />;

  const suggested = nextGrammarTopic(state);
  const weakOther = (state.placement?.weakTopics ?? []).map(topicById).filter((t): t is GrammarTopic => !!t && t.level !== state.level);

  return (
    <section>
      <h1>Grammatik</h1>
      {suggested && (
        <button className="card suggestion" onClick={() => setSelection(suggested.id)}>
          <small>Empfohlen für heute</small>
          <strong>{suggested.title}</strong>
          <span className="muted">{suggested.summary}</span>
        </button>
      )}
      {state.missed.length > 0 && (
        <button className="card suggestion review" onClick={() => setSelection(REVIEW_PARAM)}>
          <small>Fehler wiederholen</small>
          <strong>{state.missed.length} Übungen, die noch nicht saßen</strong>
        </button>
      )}
      <h2>Alle Themen auf {state.level}</h2>
      <div className="topic-list">
        {topicsForLevel(state.level).map((t) => (
          <TopicRow key={t.id} topic={t} mastery={state.topics[t.id]?.mastery} onClick={() => setSelection(t.id)} />
        ))}
      </div>
      {weakOther.length > 0 && (
        <>
          <h2>Wiederholung (aus dem Einstufungstest)</h2>
          <div className="topic-list">
            {weakOther.map((t) => (
              <TopicRow key={t.id} topic={t} mastery={state.topics[t.id]?.mastery} onClick={() => setSelection(t.id)} />
            ))}
          </div>
        </>
      )}
    </section>
  );
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

function LessonSession({ state, update, go, today, topic, onBack }: ViewProps & { topic: GrammarTopic; onBack: () => void }) {
  const lesson = lessonFor(topic.id);
  const [phase, setPhase] = useState<"learn" | "practice" | "done">(state.topics[topic.id] ? "practice" : "learn");
  const [score, setScore] = useState<{ right: number; total: number } | null>(null);
  const items = useMemo<ExerciseItem[]>(() => (lesson ? lesson.exercises.map((exercise, i) => ({ key: `${topic.id}-${i}`, exercise })) : []), [lesson, topic.id]);

  if (!lesson) {
    return (
      <section>
        <button className="link" onClick={onBack}>
          ← Themen
        </button>
        <h1>{topic.title}</h1>
        <p className="muted">Zu diesem Thema gibt es noch keine Lektion.</p>
      </section>
    );
  }

  function finish(results: boolean[]) {
    const right = results.filter(Boolean).length;
    const wrong = results.flatMap((ok, i) => (ok ? [] : [i]));
    update((s) => markDay(setMissed(recordTopicResult(s, topic.id, right / results.length, today), topic.id, wrong), today, "grammar"));
    setScore({ right, total: results.length });
    setPhase("done");
  }

  return (
    <section>
      <button className="link" onClick={onBack}>
        ← Themen
      </button>
      <h1>{topic.title}</h1>

      {phase !== "practice" && (
        <details className="card explanation" open={phase === "learn"}>
          <summary>Erklärung</summary>
          {lesson.explanation.map((p, i) => (
            <p key={i} className={p.startsWith("•") ? "rule" : ""}>
              {p}
            </p>
          ))}
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
        </details>
      )}

      {phase === "learn" && (
        <button className="primary big" onClick={() => setPhase("practice")}>
          Zu den Übungen ({items.length})
        </button>
      )}

      {phase === "practice" && (
        <>
          {state.topics[topic.id] && (
            <button className="link small" onClick={() => setPhase("learn")}>
              Erklärung nochmal ansehen
            </button>
          )}
          <ExerciseRunner items={items} onDone={finish} />
        </>
      )}

      {phase === "done" && score && (
        <div className="card center">
          <div className="level-big">
            {score.right}/{score.total}
          </div>
          <p>{score.right / score.total >= 0.8 ? "¡Bacán! Das Thema sitzt. 🎉" : "Weiter so – falsche Übungen kommen in deiner Fehler-Wiederholung wieder."}</p>
          <div className="row center-row">
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

function ReviewSession({ state, update, go, today, onBack }: ViewProps & { onBack: () => void }) {
  const [batch] = useState<MissedExercise[]>(() =>
    shuffle(state.missed.filter((m) => lessonFor(m.topicId)?.exercises[m.index])).slice(0, REVIEW_SIZE),
  );
  const [score, setScore] = useState<{ right: number; total: number } | null>(null);
  const items = useMemo<ExerciseItem[]>(
    () =>
      batch.map((m) => ({ key: `${m.topicId}-${m.index}`, exercise: lessonFor(m.topicId)!.exercises[m.index], label: topicById(m.topicId)?.title })),
    [batch],
  );

  function finish(results: boolean[]) {
    const solved = new Set(batch.filter((_, i) => results[i]).map((m) => `${m.topicId}-${m.index}`));
    update((s) => markDay({ ...s, missed: s.missed.filter((m) => !solved.has(`${m.topicId}-${m.index}`)) }, today, "grammar"));
    setScore({ right: solved.size, total: results.length });
  }

  return (
    <section>
      <button className="link" onClick={onBack}>
        ← Themen
      </button>
      <h1>Fehler wiederholen</h1>
      {score ? (
        <div className="card center">
          <div className="level-big">
            {score.right}/{score.total}
          </div>
          <p>Richtig gelöste Übungen sind jetzt aus der Wiederholung entfernt.</p>
          <div className="row center-row">
            <button className="primary" onClick={() => go("home")}>
              Fertig
            </button>
            <button onClick={onBack}>Zurück</button>
          </div>
        </div>
      ) : items.length ? (
        <ExerciseRunner items={items} onDone={finish} />
      ) : (
        <p className="muted">Nichts zu wiederholen.</p>
      )}
    </section>
  );
}
