import { useState } from "react";
import type { ViewProps } from "../App";
import { testKey } from "../lib/claude";
import { DEFAULT_MODEL, initialState } from "../lib/progress";

const MODELS = [
  { id: "claude-opus-5-5", label: "Claude Opus 5.5 (beste Qualität, empfohlen)" },
  { id: "claude-sonnet-5-5", label: "Claude Sonnet 5.5 (schneller, günstiger)" },
  { id: "claude-haiku-5-5", label: "Claude Haiku 5.5 (am schnellsten, am günstigsten)" },
];

export default function Settings({ state, update, go }: ViewProps) {
  const [key, setKey] = useState(state.apiKey);
  const [model, setModel] = useState(state.model || DEFAULT_MODEL);
  const [status, setStatus] = useState<{ ok: boolean; text: string } | null>(null);
  const [busy, setBusy] = useState(false);

  async function save() {
    setBusy(true);
    setStatus(null);
    try {
      await testKey({ apiKey: key.trim(), model });
      update((s) => ({ ...s, apiKey: key.trim(), model }));
      setStatus({ ok: true, text: "Gespeichert – die Verbindung funktioniert. ✅" });
    } catch (e) {
      setStatus({ ok: false, text: (e as Error).message });
    } finally {
      setBusy(false);
    }
  }

  function reset() {
    if (!confirm("Wirklich alle Fortschritte, Vokabeln und Einstellungen löschen?")) return;
    update(() => initialState());
    go("placement");
  }

  return (
    <section>
      <h1>Einstellungen</h1>

      <div className="card">
        <h2>KI-Gesprächspartner (Claude)</h2>
        <p className="muted">
          Für Gespräche, Grammatik-Lektionen und die genaue Einstufung brauchst du einen API-Schlüssel von{" "}
          <a href="https://console.anthropic.com/settings/keys" target="_blank" rel="noreferrer">
            console.anthropic.com
          </a>
          . Der Schlüssel wird nur lokal in diesem Browser gespeichert und direkt an die Claude API gesendet.
        </p>
        <label className="field">
          API-Schlüssel
          <input type="password" value={key} placeholder="sk-ant-…" onChange={(e) => setKey(e.target.value)} autoComplete="off" />
        </label>
        <label className="field">
          Modell
          <select value={model} onChange={(e) => setModel(e.target.value)}>
            {MODELS.map((m) => (
              <option key={m.id} value={m.id}>
                {m.label}
              </option>
            ))}
          </select>
        </label>
        <button className="primary" disabled={!key.trim() || busy} onClick={save}>
          {busy ? "Prüfe…" : "Speichern & testen"}
        </button>
        {status && <p className={status.ok ? "ok" : "error"}>{status.text}</p>}
      </div>

      <div className="card">
        <h2>Daten</h2>
        <p className="muted">Alle Daten liegen nur in deinem Browser (localStorage).</p>
        <button className="danger" onClick={reset}>
          Alles zurücksetzen
        </button>
      </div>
    </section>
  );
}
