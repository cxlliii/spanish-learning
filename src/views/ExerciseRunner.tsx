import { useMemo, useState } from "react";
import type { Exercise } from "../data/types";
import { shuffle } from "../lib/placement";
import { checkAnswer } from "../lib/exercise";
import { canSpeak, speak } from "../lib/speech";

export interface ExerciseItem {
  key: string;
  exercise: Exercise;
  /** Optional label, e.g. the topic title in review mode. */
  label?: string;
}

/** Fills the gap with the answer to get the full sentence (for read-aloud). */
function solvedSentence(ex: Exercise): string {
  if (ex.type === "build") return ex.answer;
  if (ex.prompt.includes("___")) return ex.prompt.replace("___", ex.answer).replace(/\s*\([^)]*\)\s*$/, "");
  return ex.answer;
}

export default function ExerciseRunner({ items, onDone }: { items: ExerciseItem[]; onDone: (results: boolean[]) => void }) {
  const [pos, setPos] = useState(0);
  const [results, setResults] = useState<boolean[]>([]);
  const item = items[pos];

  function next(correct: boolean) {
    const all = [...results, correct];
    if (pos + 1 >= items.length) onDone(all);
    else {
      setResults(all);
      setPos(pos + 1);
    }
  }

  return (
    <div>
      <div className="progressbar">
        <div style={{ width: `${(pos / items.length) * 100}%` }} />
      </div>
      <p className="muted">
        Übung {pos + 1} von {items.length}
        {item.label && ` · ${item.label}`}
      </p>
      <SingleExercise key={item.key} exercise={item.exercise} onNext={next} />
    </div>
  );
}

function SingleExercise({ exercise: ex, onNext }: { exercise: Exercise; onNext: (correct: boolean) => void }) {
  const [given, setGiven] = useState("");
  const [built, setBuilt] = useState<number[]>([]);
  const [checked, setChecked] = useState<{ correct: boolean; accentHint: boolean } | null>(null);
  const options = useMemo(() => (ex.options ? shuffle(ex.options) : []), [ex]);
  const tokens = useMemo(() => {
    const words = ex.answer.split(" ");
    let order = shuffle(words.map((_, i) => i));
    // Avoid presenting the words already in the right order.
    if (words.length > 1 && order.every((v, i) => v === i)) order = [...order.slice(1), order[0]];
    return order.map((i) => ({ id: i, text: words[i] }));
  }, [ex]);

  const answerText = ex.type === "build" ? built.map((id) => tokens.find((t) => t.id === id)!.text).join(" ") : given;

  function check(value = answerText) {
    if (!value.trim() || checked) return;
    setGiven(value);
    setChecked(checkAnswer(ex, value));
  }

  return (
    <div className={`card exercise ${checked ? (checked.correct ? "right" : "wrong") : ""}`}>
      <small className="muted">{ex.type === "choice" ? "Wähle die richtige Antwort" : ex.type === "gap" ? "Ergänze die Lücke" : "Bilde den Satz auf Spanisch"}</small>
      <p className="question">{ex.prompt}</p>

      {ex.type === "choice" && (
        <div className="options">
          {options.map((o) => (
            <button
              key={o}
              className={`option ${checked && o === ex.answer ? "correct" : ""} ${checked && o === given && !checked.correct ? "selected" : ""}`}
              disabled={!!checked}
              onClick={() => check(o)}
            >
              {o}
            </button>
          ))}
        </div>
      )}

      {ex.type === "gap" && (
        <input
          value={given}
          disabled={!!checked}
          placeholder="Antwort eingeben"
          autoCapitalize="off"
          autoCorrect="off"
          spellCheck={false}
          onChange={(e) => setGiven(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && check()}
        />
      )}

      {ex.type === "build" && (
        <>
          <div className="build-line">
            {built.length === 0 && <span className="muted">Tippe die Wörter in der richtigen Reihenfolge an</span>}
            {built.map((id) => (
              <button key={id} className="word" disabled={!!checked} onClick={() => setBuilt((b) => b.filter((x) => x !== id))}>
                {tokens.find((t) => t.id === id)!.text}
              </button>
            ))}
          </div>
          <div className="word-bank">
            {tokens.map((t) => (
              <button key={t.id} className="word" disabled={built.includes(t.id) || !!checked} onClick={() => setBuilt((b) => [...b, t.id])}>
                {t.text}
              </button>
            ))}
          </div>
        </>
      )}

      {!checked && ex.type !== "choice" && (
        <button className="primary big" disabled={!answerText.trim() || (ex.type === "build" && built.length < tokens.length)} onClick={() => check()}>
          Prüfen
        </button>
      )}

      {checked && (
        <div className="result">
          <p>
            <strong>{checked.correct ? "✅ Richtig!" : "❌ Nicht ganz."}</strong>{" "}
            {(!checked.correct || checked.accentHint) && (
              <>
                {checked.accentHint ? "Achte auf die Schreibweise: " : "Richtig ist: "}
                <strong>{ex.answer}</strong>
              </>
            )}
          </p>
          <p className="muted">{ex.explanation}</p>
          <div className="row">
            {canSpeak() && (
              <button onClick={() => speak(solvedSentence(ex))} title="Vorlesen">
                🔊
              </button>
            )}
            <button className="primary grow" onClick={() => onNext(checked.correct)}>
              Weiter
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
