# Geplante Dateistruktur der Website

> Skelett für die Implementierung (Branch `implementKonrep`). Noch kein Code.

```
src/
├── index.html          Startseite (One-Page: Hero, Über mich, Kurse, Termine, Kontakt)
├── impressum.html      Impressum (aus Vorlage)
├── datenschutz.html    Datenschutzerklärung (aus Vorlage, angepasst)
├── css/
│   └── style.css       Layout, Design (klassisch-seriös), responsive Regeln
├── js/
│   ├── termine.js      gepflegte Terminliste (vom Auftraggeber editierbar)
│   └── main.js         Anker-Navigation, Termin-Rendering, mailto-Betreff
├── images/             optimierte Bilder (Profilbild, Justitia-Motiv, ...)
└── fonts/              lokal eingebundene Web Fonts (kein Google-Request)
```

Zusätzlich später im Repo-Root bzw. Deployment:
- `robots.txt`, `sitemap.xml` – SEO
- `.htaccess` – HTTPS-/www-Weiterleitung (Strato)

Verbindliche Vorgaben: siehe [../docs/Spezifikation.md](../docs/Spezifikation.md).
