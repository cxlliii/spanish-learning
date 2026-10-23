import { useEffect, useState } from "react";
import { loadState, saveState, type AppState } from "./lib/progress";
import { toDateKey } from "./lib/srs";
import Home from "./views/Home";
import Placement from "./views/Placement";
import Lesson from "./views/Lesson";
import Conversation from "./views/Conversation";
import Vocab from "./views/Vocab";
import Progress from "./views/Progress";
import Settings from "./views/Settings";

export type View = "home" | "placement" | "lesson" | "conversation" | "vocab" | "progress" | "settings";

export interface ViewProps {
  state: AppState;
  update: (fn: (s: AppState) => AppState) => void;
  go: (view: View, param?: string) => void;
  today: string;
  param?: string;
}

const NAV: { view: View; label: string; icon: string }[] = [
  { view: "home", label: "Heute", icon: "🏠" },
  { view: "conversation", label: "Sprechen", icon: "💬" },
  { view: "lesson", label: "Grammatik", icon: "📘" },
  { view: "vocab", label: "Vokabeln", icon: "🃏" },
  { view: "progress", label: "Fortschritt", icon: "📈" },
];

export default function App() {
  const [state, setState] = useState<AppState>(loadState);
  const [view, setView] = useState<View>(() => (loadState().level ? "home" : "placement"));
  const [param, setParam] = useState<string | undefined>();
  const today = toDateKey();

  useEffect(() => {
    saveState(state);
  }, [state]);

  const update = (fn: (s: AppState) => AppState) => setState((s) => fn(s));
  const go = (v: View, p?: string) => {
    setView(v);
    setParam(p);
    window.scrollTo(0, 0);
  };
  const props: ViewProps = { state, update, go, today, param };
  const placed = state.level !== null;

  return (
    <div className="app">
      <header className="topbar">
        <button className="brand" onClick={() => go(placed ? "home" : "placement")}>
          ¡Hablemos!
        </button>
        <div className="topbar-right">
          {state.level && <span className="badge">{state.level}</span>}
          <button className="icon-btn" title="Einstellungen" onClick={() => go("settings")}>
            ⚙️
          </button>
        </div>
      </header>

      <main className="content" key={view + (param ?? "")}>
        {view === "home" && <Home {...props} />}
        {view === "placement" && <Placement {...props} />}
        {view === "lesson" && <Lesson {...props} />}
        {view === "conversation" && <Conversation {...props} />}
        {view === "vocab" && <Vocab {...props} />}
        {view === "progress" && <Progress {...props} />}
        {view === "settings" && <Settings {...props} />}
      </main>

      {placed && (
        <nav className="bottomnav">
          {NAV.map((n) => (
            <button key={n.view} className={view === n.view ? "active" : ""} onClick={() => go(n.view)}>
              <span>{n.icon}</span>
              <small>{n.label}</small>
            </button>
          ))}
        </nav>
      )}
    </div>
  );
}
