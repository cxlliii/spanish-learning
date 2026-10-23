import type { ViewProps } from "../App";
import { LEVEL_NAMES, nextLevel } from "../data/curriculum";
import { dailyScenario } from "../data/scenarios";
import { applyLevel, levelProgress, levelUpReady, nextGrammarTopic, streak } from "../lib/progress";
import { dueCards } from "../lib/srs";

export default function Home({ state, update, go, today }: ViewProps) {
  if (!state.level) return null;
  const day = state.days[today] ?? {};
  const due = dueCards(state.cards, today).length;
  const topic = nextGrammarTopic(state);
  const scenario = dailyScenario(state.level, today);
  const days = streak(state.days, today);
  const { mastered, total, avgConversation } = levelProgress(state);
  const ready = levelUpReady(state);
  const next = nextLevel(state.level);
  const doneCount = [day.vocab || due === 0, day.grammar, day.conversation].filter(Boolean).length;

  return (
    <section>
      <h1>¡Hola! 👋</h1>
      <div className="stats">
        <div className="stat">
          <strong>🔥 {days}</strong>
          <small>Tage in Folge</small>
        </div>
        <div className="stat">
          <strong>{state.level}</strong>
          <small>{LEVEL_NAMES[state.level]}</small>
        </div>
        <div className="stat">
          <strong>
            {mastered}/{total}
          </strong>
          <small>Themen sicher</small>
        </div>
      </div>

      {ready && next && (
        <div className="card levelup">
          <h3>🎉 Bereit für {next}?</h3>
          <p>
            Du beherrschst die meisten {state.level}-Themen und deine Gespräche laufen gut (Ø {avgConversation?.toFixed(1)}/10).
          </p>
          <button className="primary" onClick={() => update((s) => applyLevel(s, next, today))}>
            Auf {next} aufsteigen
          </button>
        </div>
      )}

      <h2>
        Dein Training heute <span className="muted">({doneCount}/3)</span>
      </h2>
      <div className="plan">
        <PlanItem
          done={!!day.conversation}
          icon={scenario.emoji}
          title="Gespräch"
          text={scenario.title}
          hint="ca. 10 Min. · Alltagssprache sprechen"
          onClick={() => go("conversation", scenario.id)}
        />
        <PlanItem
          done={!!day.vocab || due === 0}
          icon="🃏"
          title="Vokabeln"
          text={due ? `${due} Karten fällig` : "Heute nichts fällig"}
          hint="ca. 5 Min."
          onClick={() => go("vocab")}
        />
        {topic && (
          <PlanItem
            done={!!day.grammar}
            icon="📘"
            title="Grammatik"
            text={topic.title}
            hint={`ca. 10 Min. · ${state.topics[topic.id] ? `${state.topics[topic.id].mastery} % beherrscht` : "neues Thema"}`}
            onClick={() => go("lesson", topic.id)}
          />
        )}
      </div>

      {doneCount === 3 && <p className="ok center">¡Enhorabuena! Dein Tagesziel ist erreicht. 🎉 Extra-Gespräche sind natürlich immer möglich.</p>}
      {!state.apiKey && (
        <div className="card warn">
          <p>Für Gespräche und Grammatik-Lektionen bitte einen Claude API-Schlüssel hinterlegen.</p>
          <button onClick={() => go("settings")}>Einstellungen</button>
        </div>
      )}
    </section>
  );
}

function PlanItem({ done, icon, title, text, hint, onClick }: { done: boolean; icon: string; title: string; text: string; hint: string; onClick: () => void }) {
  return (
    <button className={`plan-item ${done ? "done" : ""}`} onClick={onClick}>
      <span className="emoji">{done ? "✅" : icon}</span>
      <span className="plan-text">
        <small>{title}</small>
        <strong>{text}</strong>
        <span className="muted">{hint}</span>
      </span>
      <span className="chev">›</span>
    </button>
  );
}
