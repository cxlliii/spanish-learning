import type { ViewProps } from "../App";

export default function NeedsKey({ go, what }: ViewProps & { what: string }) {
  return (
    <section>
      <div className="card warn">
        <h2>API-Schlüssel benötigt</h2>
        <p>Für {what} nutzt die App Claude als Lehrer und Gesprächspartner. Hinterlege dazu einmalig deinen Claude API-Schlüssel.</p>
        <button className="primary" onClick={() => go("settings")}>
          Zu den Einstellungen
        </button>
      </div>
    </section>
  );
}
