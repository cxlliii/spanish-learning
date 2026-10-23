import { useEffect, useState } from "react";
import type { ViewProps } from "../App";
import { addVocab, introduceNewWords, markDay } from "../lib/progress";
import { canSpeak, speak } from "../lib/speech";
import { dueCards, review, type Card, type Grade } from "../lib/srs";

const SESSION_SIZE = 20;

export default function Vocab({ state, update, today }: ViewProps) {
  // Today's new words are added when the trainer is opened (idempotent per day).
  useEffect(() => {
    update((s) => introduceNewWords(s, today));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [queue, setQueue] = useState<Card[]>(() => dueCards(introduceNewWords(state, today).cards, today).slice(0, SESSION_SIZE));

  const [flipped, setFlipped] = useState(false);
  const [reviewed, setReviewed] = useState(0);
  const [es, setEs] = useState("");
  const [de, setDe] = useState("");
  const [showList, setShowList] = useState(false);

  const card = queue[0];

  function grade(g: Grade) {
    if (!card) return;
    const last = queue.length === 1 && g !== "again";
    update((s) => {
      const next = { ...s, cards: s.cards.map((c) => (c.es === card.es ? review(c, g, today) : c)) };
      return last ? markDay(next, today, "vocab") : next;
    });
    // "again" puts the card back at the end of today's queue.
    setQueue((q) => (g === "again" ? [...q.slice(1), q[0]] : q.slice(1)));
    setFlipped(false);
    setReviewed((n) => n + 1);
  }

  function add() {
    if (!es.trim() || !de.trim()) return;
    update((s) => addVocab(s, [{ es: es.trim(), de: de.trim() }], today, "Eigene"));
    setEs("");
    setDe("");
  }

  return (
    <section>
      <h1>Vokabeln</h1>
      {card ? (
        <>
          <p className="muted">
            {queue.length} übrig · {reviewed} geschafft
            {card.reps === 0 && <span className="tag new">neu</span>}
          </p>
          <div className={`flashcard ${flipped ? "flipped" : ""}`} onClick={() => setFlipped(true)}>
            <div className="front">
              {card.es}
              {canSpeak() && (
                <button
                  className="speak"
                  onClick={(e) => {
                    e.stopPropagation();
                    speak(card.es);
                  }}
                >
                  🔊
                </button>
              )}
            </div>
            {flipped ? (
              <div className="back">
                {card.de}
                {card.example && <div className="muted example">{card.example}</div>}
              </div>
            ) : (
              <div className="muted">Tippen zum Aufdecken</div>
            )}
          </div>
          {flipped && (
            <div className="grades">
              <button className="again" onClick={() => grade("again")}>
                Nochmal
              </button>
              <button className="hard" onClick={() => grade("hard")}>
                Schwer
              </button>
              <button className="good" onClick={() => grade("good")}>
                Gut
              </button>
              <button className="easy" onClick={() => grade("easy")}>
                Leicht
              </button>
            </div>
          )}
        </>
      ) : (
        (
          <div className="card center">
            <div className="level-big">✅</div>
            <p>
              {reviewed ? `¡Bacán! ${reviewed} Karten geschafft.` : "Heute ist nichts mehr fällig."} Morgen kommen {state.newPerDay} neue Wörter dazu, außerdem die Vokabeln aus
              deinen Gesprächen.
            </p>
          </div>
        )
      )}

      <div className="card">
        <h3>Eigenes Wort hinzufügen</h3>
        <div className="row wrap">
          <input placeholder="Spanisch" value={es} onChange={(e) => setEs(e.target.value)} />
          <input placeholder="Deutsch" value={de} onChange={(e) => setDe(e.target.value)} onKeyDown={(e) => e.key === "Enter" && add()} />
          <button className="primary" onClick={add} disabled={!es.trim() || !de.trim()}>
            +
          </button>
        </div>
      </div>

      <button className="link" onClick={() => setShowList((v) => !v)}>
        {showList ? "Liste ausblenden" : `Alle ${state.cards.length} Wörter anzeigen`}
      </button>
      {showList && (
        <table className="vocab-table">
          <tbody>
            {[...state.cards].reverse().map((c) => (
              <tr key={c.es}>
                <td>
                  <strong>{c.es}</strong>
                </td>
                <td>{c.de}</td>
                <td className="muted">{c.due <= today ? "fällig" : c.due}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}
