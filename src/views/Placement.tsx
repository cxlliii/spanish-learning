import { useRef, useState } from "react";
import type { ViewProps } from "../App";
import { LEVELS, LEVEL_NAMES, topicById } from "../data/curriculum";
import { PASS_THRESHOLD, PlacementTest, QUESTIONS_PER_LEVEL } from "../lib/placement";
import { applyLevel, introduceNewWords } from "../lib/progress";

type Phase = "intro" | "test" | "result";

export default function Placement({ update, go, today }: ViewProps) {
  const testRef = useRef(new PlacementTest());
  const test = testRef.current;
  const [phase, setPhase] = useState<Phase>("intro");
  const [, rerender] = useState(0);

  function answer(i: number) {
    test.answer(i);
    if (test.finished) setPhase("result");
    rerender((n) => n + 1);
  }

  if (phase === "intro") {
    return (
      <section>
        <h1>¡Bienvenido/a! 👋</h1>
        <p>
          Bevor es losgeht, finden wir dein Niveau heraus. Der Test passt sich an: Er startet ganz einfach und wird schwerer, solange du richtig
          antwortest. Das dauert etwa 3–5 Minuten.
        </p>
        <p className="muted">Bitte nicht raten – wenn du etwas nicht weißt, tippe auf „Weiß ich nicht“. Dann passen die Übungen besser zu dir.</p>
        <p className="muted">Die App ist auf chilenisches bzw. lateinamerikanisches Spanisch ausgerichtet (ustedes statt vosotros).</p>
        <button className="primary big" onClick={() => setPhase("test")}>
          Test starten
        </button>
      </section>
    );
  }

  if (phase === "test") {
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

  const result = test.result();
  function finish() {
    const weakTopics = result.weakTopics.filter((id) => topicById(id));
    update((s) => introduceNewWords({ ...applyLevel(s, result.level, today), placement: { date: today, level: result.level, weakTopics } }, today));
    go("home");
  }

  return (
    <section>
      <h1>Dein Ergebnis</h1>
      <div className="card center">
        <div className="level-big">{result.level}</div>
        <div>{LEVEL_NAMES[result.level]}</div>
        <p className="muted">Auf diesem Niveau stellen wir deine Übungen zusammen. Du kannst es später jederzeit unter „Fortschritt“ ändern.</p>
      </div>
      <div className="card">
        <h3>Richtige Antworten pro Stufe</h3>
        <div className="scores">
          {LEVELS.map((l) => {
            const s = result.scores[l];
            return (
              <div key={l} className={`score ${s ? (s.correct >= PASS_THRESHOLD ? "pass" : "fail") : "skip"}`}>
                <strong>{l}</strong>
                <span>{s ? `${s.correct}/${QUESTIONS_PER_LEVEL}` : "–"}</span>
              </div>
            );
          })}
        </div>
        {result.weakTopics.length > 0 && (
          <>
            <h4>Diese Themen kommen zuerst dran</h4>
            <ul>
              {result.weakTopics
                .map(topicById)
                .filter((t) => t !== undefined)
                .map((t) => (
                  <li key={t.id}>
                    {t.title} <span className="muted">({t.level})</span>
                  </li>
                ))}
            </ul>
          </>
        )}
      </div>
      <button className="primary big" onClick={finish}>
        Los geht's! 🚀
      </button>
    </section>
  );
}
