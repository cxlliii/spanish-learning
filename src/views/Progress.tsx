import type { ViewProps } from "../App";
import { LEVELS, topicsForLevel, type Level } from "../data/curriculum";
import { SCENARIOS } from "../data/scenarios";
import { applyLevel, levelProgress, MASTERED } from "../lib/progress";

export default function Progress({ state, update, go, today }: ViewProps) {
  if (!state.level) return null;
  const { mastered, total, avgConversation } = levelProgress(state);
  const recent = [...state.conversations].reverse().slice(0, 10);

  function setLevel(l: Level) {
    if (l !== state.level && confirm(`Niveau auf ${l} ändern?`)) update((s) => applyLevel(s, l, today));
  }

  return (
    <section>
      <h1>Fortschritt</h1>
      <div className="stats">
        <div className="stat">
          <strong>{state.level}</strong>
          <small>Niveau</small>
        </div>
        <div className="stat">
          <strong>
            {mastered}/{total}
          </strong>
          <small>Themen ≥ {MASTERED}%</small>
        </div>
        <div className="stat">
          <strong>{avgConversation !== null ? avgConversation.toFixed(1) : "–"}</strong>
          <small>Ø Gespräch</small>
        </div>
      </div>

      <div className="card">
        <h3>Grammatik auf {state.level}</h3>
        <div className="topic-list">
          {topicsForLevel(state.level).map((t) => {
            const m = state.topics[t.id]?.mastery;
            return (
              <button key={t.id} className="topic-row" onClick={() => go("lesson", t.id)}>
                <span>{t.title}</span>
                <span className="mastery">
                  <span className="bar">
                    <span style={{ width: `${m ?? 0}%` }} />
                  </span>
                  {m !== undefined ? `${m}%` : "neu"}
                </span>
              </button>
            );
          })}
        </div>
        <p className="muted">Aufstieg ins nächste Niveau: 80 % der Themen sicher + Gespräche im Schnitt ≥ 7/10.</p>
      </div>

      {recent.length > 0 && (
        <div className="card">
          <h3>Letzte Gespräche</h3>
          <ul className="history">
            {recent.map((c, i) => {
              const s = SCENARIOS.find((x) => x.id === c.scenarioId);
              return (
                <li key={i}>
                  <span>
                    {s?.emoji} {s?.title ?? c.scenarioId} <span className="muted">· {c.date}</span>
                  </span>
                  <strong>{c.score}/10</strong>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {state.recentMistakes.length > 0 && (
        <div className="card">
          <h3>Typische Fehler aus Gesprächen</h3>
          <ul className="mistakes">
            {state.recentMistakes.slice(0, 8).map((m, i) => (
              <li key={i}>
                <s>{m.wrong}</s> → <strong>{m.correct}</strong>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="card">
        <h3>Niveau</h3>
        {state.placement && (
          <p className="muted">
            Einstufungstest am {state.placement.date}: {state.placement.level}
          </p>
        )}
        <div className="chips">
          {LEVELS.map((l) => (
            <button key={l} className={`chip ${l === state.level ? "active" : ""}`} onClick={() => setLevel(l)}>
              {l}
            </button>
          ))}
        </div>
        <button onClick={() => go("placement")}>Einstufungstest wiederholen</button>
      </div>
    </section>
  );
}
