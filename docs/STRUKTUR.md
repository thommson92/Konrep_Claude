# Dateistruktur der Website

Die Website liegt im **Repo-Wurzelverzeichnis** (direkte Auslieferung über GitHub Pages).

```
.
├── index.html          Startseite (One-Page: Hero, Über mich, Kurse, Termine, Kontakt)
├── impressum.html      Impressum (aus Vorlage)
├── datenschutz.html    Datenschutzerklärung (aus Vorlage, angepasst)
├── css/
│   └── style.css       Layout, Design (klassisch-seriös), responsive Regeln
├── js/
│   ├── termine.js      gepflegte Terminliste (vom Auftraggeber editierbar)
│   └── main.js         Anker-Navigation, Termin-Rendering, mailto-Betreff
├── images/             optimierte Bilder (Profilbild) + justitia.svg
├── fonts/              leer (es werden keine Web Fonts geladen, siehe Hinweis)
├── favicon.svg         Favicon (Wortmarke "K")
├── robots.txt          SEO
├── sitemap.xml         SEO
├── .htaccess           HTTPS-/www-Weiterleitung, Sicherheits-Header, Caching (Strato)
└── .nojekyll           verhindert Jekyll-Verarbeitung auf GitHub Pages
```

Hinweis: Es werden **keine** Web Fonts geladen – die Seite nutzt einen System-Font-Stack
(Georgia-Serif für Überschriften, System-Sans für Fließtext). Das ist schnell und
datenschutzfreundlich (keine externen Requests). Der Ordner `fonts/` bleibt daher leer.

Verbindliche Vorgaben: siehe [Spezifikation.md](Spezifikation.md).
