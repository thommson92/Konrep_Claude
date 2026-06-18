# Konrep – Website

Marketing-Website für **Christian Konrad** (Repetitor im Öffentlichen Recht, „Konrep")
zur Vorbereitung auf das erste und zweite juristische Staatsexamen.

- **Domain:** konrep.com (registriert bei Strato, Hosting-Paket vorhanden)
- **Typ:** statische Website (HTML/CSS/JS, kein Build-Prozess, keine Datenbank)
- **Status:** Planung abgeschlossen – Implementierung startet auf Branch `implementKonrep`

## Projektstruktur

Die Website liegt im **Repo-Wurzelverzeichnis** (so wird sie direkt über GitHub Pages
ausgeliefert; für Strato wird der Inhalt – ohne `docs/` und `input/` – in das
Web-Wurzelverzeichnis geladen).

```
.
├── index.html             Startseite (One-Page)
├── impressum.html
├── datenschutz.html
├── css/  js/  images/  fonts/
├── favicon.svg
├── robots.txt  sitemap.xml  .htaccess  .nojekyll
├── docs/                  Projektdokumentation
│   ├── Spezifikation.md    technische Spezifikation (verbindlich)
│   ├── Entscheidungen.md    Entscheidungslog aus der Planungsphase
│   ├── Anleitung.md         Pflege, Upload, SSL, SEO
│   └── STRUKTUR.md          Dateiübersicht
├── input/                 Ausgangsmaterial (Flyer, Vorlagen, Profilbild) – nicht verändern
└── Spezifikation.rtf      ursprüngliche Projektidee/Briefing (Referenz)
```

## Branches

- `main` – stabiler Stand
- `dev` – Integrationsbranch
- `planWebsite` – Planungsphase (Spezifikation & Doku)
- `implementKonrep` – Implementierung (ab hier wird programmiert)

## Wichtige Hinweise

- Inhalte zu Person & Kursen: siehe `input/Webseite_Kursinformationen_Kursleiterinformationen.docx`
- Impressum & Datenschutz: Vorlagen in `input/` – Datenschutz wird an die reale Seite angepasst
  (kein Kontaktformular, STRATO Web Analytics). **Juristische Endkontrolle durch den Auftraggeber.**
- Bilder nur aus lizenzfreien/gemeinfreien Quellen verwenden; Quellen dokumentieren.
