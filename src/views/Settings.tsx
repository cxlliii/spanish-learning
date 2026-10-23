import { useRef, useState } from "react";
import type { ViewProps } from "../App";
import { exportState, importState, initialState } from "../lib/progress";
import { canListen, canSpeak, speak } from "../lib/speech";

export default function Settings({ state, update, go, today }: ViewProps) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState<{ ok: boolean; text: string } | null>(null);

  function download() {
    const blob = new Blob([exportState(state)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `hablemos-sicherung-${today}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  async function restore(file: File) {
    try {
      const restored = importState(await file.text());
      if (!confirm("Aktuellen Fortschritt durch die Sicherung ersetzen?")) return;
      update(() => restored);
      setMessage({ ok: true, text: "Sicherung wiederhergestellt. ✅" });
    } catch (e) {
      setMessage({ ok: false, text: (e as Error).message });
    }
  }

  function reset() {
    if (!confirm("Wirklich alle Fortschritte und Vokabeln löschen?")) return;
    update(() => initialState());
    go("placement");
  }

  return (
    <section>
      <h1>Einstellungen</h1>

      <div className="card">
        <h2>Lernpensum</h2>
        <label className="field">
          Neue Vokabeln pro Tag: {state.newPerDay}
          <input
            type="range"
            min={0}
            max={15}
            value={state.newPerDay}
            onChange={(e) => update((s) => ({ ...s, newPerDay: Number(e.target.value) }))}
          />
        </label>
        <p className="muted">Wörter aus deinen Gesprächen kommen zusätzlich dazu.</p>
      </div>

      <div className="card">
        <h2>Sprache & Audio</h2>
        <p className="muted">
          Vorlesen: {canSpeak() ? "verfügbar" : "in diesem Browser nicht verfügbar"} · Spracheingabe 🎤:{" "}
          {canListen() ? "verfügbar" : "nicht verfügbar (am besten Chrome oder Safari benutzen)"}
        </p>
        {canSpeak() && <button onClick={() => speak("¡Hola! ¿Cómo estás? Bienvenido a Chile.")}>🔊 Stimme testen</button>}
        <p className="muted">
          Die App nutzt – wenn auf deinem Gerät vorhanden – eine chilenische Stimme, sonst eine andere lateinamerikanische. Weitere Stimmen kannst
          du in den Sprach-Einstellungen deines Handys installieren.
        </p>
      </div>

      <div className="card">
        <h2>Auf dem Handy installieren</h2>
        <p className="muted">
          iPhone (Safari): Teilen-Symbol → „Zum Home-Bildschirm“. Android (Chrome): Menü ⋮ → „App installieren“. Danach funktioniert die App auch
          offline.
        </p>
      </div>

      <div className="card">
        <h2>Daten sichern</h2>
        <p className="muted">
          Dein Fortschritt liegt nur auf diesem Gerät. Mit einer Sicherung kannst du ihn auf ein anderes Gerät übertragen oder nach dem Löschen
          der Browserdaten wiederherstellen.
        </p>
        <div className="row wrap">
          <button onClick={download}>⬇️ Sicherung herunterladen</button>
          <button onClick={() => fileRef.current?.click()}>⬆️ Sicherung laden</button>
          <input
            ref={fileRef}
            type="file"
            accept="application/json,.json"
            hidden
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) restore(f);
              e.target.value = "";
            }}
          />
        </div>
        {message && <p className={message.ok ? "ok" : "error"}>{message.text}</p>}
      </div>

      <div className="card">
        <h2>Zurücksetzen</h2>
        <button className="danger" onClick={reset}>
          Alles löschen und neu starten
        </button>
      </div>
    </section>
  );
}
