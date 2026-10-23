# ¡Hablemos! – Spanisch für Chile, jeden Tag

Eine kostenlose Web-App zum täglichen Spanischlernen mit Fokus auf **Alltagsgespräche in Chile** (Reisen, Beruf, Partner & Familie, Leben in Chile). Sie ist für 10–15 Minuten am Tag auf dem Handy gemacht, läuft komplett **offline** und braucht **keine KI und keinen API-Schlüssel**.

## Funktionen

- **Einstufungstest**: adaptiver Grammatik-Check von A1 bis C1. Jede Stufe wird mit 4 Fragen geprüft; der Test endet an der ersten Stufe, die du nicht bestehst. Dort fängst du an, und deine Fehlerthemen kommen zuerst dran.
- **Tagesplan** mit Streak: ein Gespräch, Vokabeln und eine Grammatik-Einheit (je ca. 3–5 Min.).
- **Gespräche**: 18 Alltagssituationen in Chile als Dialoge, z. B. Café, Feria, Metro, Hostal in Valparaíso, Familie des Pololos, Wohnungsbesichtigung, CuentaRUT, Registro Civil, Vorstellungsgespräch und Gehaltsverhandlung.
  - Du antwortest zuerst frei, getippt oder gesprochen 🎤, und wählst dann die passende Antwort.
  - Zu jeder Wahl gibt es Feedback. Der Partner wird vorgelesen 🔊, und die Übersetzung kannst du einblenden.
- **Grammatik**: 48 Lektionen von A1 bis C1, darunter chilenisches Alltagsspanisch und das chilenische voseo.
  - Jede Lektion hat eine kurze Erklärung, Beispiele und 8 Übungen: Auswahl, Lücke und Satzbau zum Antippen.
  - Falsch gelöste Übungen landen in der **Fehler-Wiederholung**.
- **Vokabeltrainer** mit Spaced Repetition (SM-2): ca. 260 Wörter und Chilenismen sowie die Vokabeln aus deinen Gesprächen. Jeden Tag kommen ein paar neue Wörter dazu (einstellbar).
- **Niveau-Aufstieg**: Sobald 80 % der Themen sitzen und deine Gespräche im Schnitt ≥ 7/10 sind, schlägt die App das nächste Niveau vor.
- **Installierbar (PWA)** auf dem Startbildschirm, funktioniert offline. Der Fortschritt lässt sich als Datei sichern und wiederherstellen.

Lateinamerikanische Norm: ustedes statt vosotros. Vorgelesen wird nach Möglichkeit mit einer chilenischen Stimme, sonst mit einer anderen lateinamerikanischen.

## Entwicklung

```bash
npm install
npm run dev      # http://localhost:5173
npm test         # Logik- und Inhaltstests (prüfen z. B. jede Übung und jeden Dialog)
npm run build    # Produktions-Build nach dist/
```

## Veröffentlichen (GitHub Pages)

Der Workflow `.github/workflows/deploy.yml` baut und veröffentlicht die App bei jedem Push auf `main`. Einmalig in GitHub aktivieren: **Settings → Pages → Source: GitHub Actions**. Danach ist die App unter `https://<user>.github.io/spanish-learning/` erreichbar. Auf dem Handy öffnen und „Zum Home-Bildschirm“ wählen.

## Aufbau

```
src/
  data/
    curriculum.ts   Lehrplan (Themen A1–C1)
    lessons/        Lektionen mit Erklärungen und Übungen
    dialogues/      Gesprächsdialoge pro Situation
    scenarios.ts    Situationen
    vocabList.ts    Wortschatz mit Chilenismen
    placement.ts    Fragen des Einstufungstests
  lib/              Einstufung, Fortschritt, Spaced Repetition, Sprache (Vorlesen/Spracheingabe)
  views/            Bildschirme
public/             Icons, Manifest, Service Worker (offline)
```

Neue Inhalte lassen sich direkt in `src/data/` ergänzen. `npm test` prüft, ob sie vollständig und korrekt aufgebaut sind.
