# ¡Hablemos! – Spanisch täglich lernen

Eine persönliche Web-App zum täglichen Spanischlernen mit Fokus auf **Alltagskonversation** – plus gezieltem Grammatiktraining, das sich an dein Niveau anpasst.

## Funktionen

- **Einstufungstest** in zwei Teilen
  1. Adaptiver Grammatik-Check (A1 → C1): Jede Stufe wird mit 4 Fragen geprüft; der Test endet an der ersten Stufe, die du nicht bestehst.
  2. Mini-Gespräch mit der KI: Claude stellt 4 offene Fragen, passt die Schwierigkeit an und bewertet Wortschatz, Satzbau und Ausdruck.

  Beide Ergebnisse werden kombiniert (max. eine Stufe Abweichung), schwache Themen werden gemerkt.
- **Tagesplan** mit Streak: ein Gespräch, Vokabelwiederholung und eine Grammatik-Einheit (je ca. 5–10 Min.).
- **Konversationstraining**: 16 Alltagssituationen (Café, Arzt, Wohnungssuche, Vorstellungsgespräch, Diskussionen …) als Rollenspiel. Der Partner spricht auf deinem Niveau, korrigiert dich nebenbei auf Deutsch und gibt am Ende Feedback mit Note, Fehlerliste, neuen Vokabeln und passenden Grammatikthemen. Spracheingabe 🎤 und Vorlesen 🔊 über die Web Speech API (z. B. Chrome, Edge, Safari).
- **Grammatik**: Lehrplan mit 45 Themen von A1 bis C1. Claude erstellt zu jedem Thema eine kurze Erklärung, Beispiele und 8 Übungen; freie Antworten prüft die KI. Die App merkt sich, wie gut du jedes Thema beherrschst, und schlägt das nächste vor.
- **Vokabeltrainer** mit Spaced Repetition (SM-2). Neue Wörter kommen automatisch aus deinen Gesprächen dazu.
- **Personalisierung**: Deine typischen Fehler fließen in künftige Gespräche und Lektionen ein.
- **Niveau-Aufstieg**: Sobald 80 % der Themen sicher sitzen und deine Gespräche im Schnitt ≥ 7/10 sind, schlägt die App das nächste Niveau vor.

## Einrichtung

Die KI-Funktionen nutzen die [Claude API](https://console.anthropic.com/settings/keys). Den API-Schlüssel trägst du in der App unter ⚙️ Einstellungen ein. Er wird **nur lokal im Browser** gespeichert und direkt an `api.anthropic.com` geschickt – es gibt keinen eigenen Server. Standardmodell ist Claude Opus 5.5; in den Einstellungen kannst du auf Sonnet oder Haiku (günstiger) wechseln.

Alle Lernfortschritte liegen im `localStorage` des Browsers.

```bash
npm install
npm run dev      # Entwicklung auf http://localhost:5173
npm test         # Unit-Tests
npm run build    # Produktions-Build nach dist/
```

## Veröffentlichen (GitHub Pages)

Der Workflow `.github/workflows/deploy.yml` baut und veröffentlicht die App bei jedem Push auf `main`. Einmalig in GitHub aktivieren: **Settings → Pages → Source: GitHub Actions**. Danach ist die App unter `https://<user>.github.io/spanish-learning/` erreichbar – auch auf dem Handy.

> Da der API-Schlüssel im Browser liegt, ist die App für die **persönliche Nutzung** gedacht. Teile deinen Schlüssel nicht und nutze ihn nicht auf fremden Geräten.

## Aufbau

```
src/
  data/    Lehrplan, Einstufungsfragen, Gesprächsszenarien, Grundwortschatz
  lib/     Claude-Anbindung, Prompts & Schemas, Einstufungslogik, Fortschritt, SRS, Sprache
  views/   Bildschirme (Heute, Einstufung, Gespräch, Grammatik, Vokabeln, Fortschritt, Einstellungen)
```
