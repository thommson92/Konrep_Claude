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
├── images/             optimierte Bilder (Profilbild) + justitia.svg
├── favicon.svg         Favicon (Wortmarke "K")
├── robots.txt          SEO
├── sitemap.xml         SEO
└── .htaccess           HTTPS-/www-Weiterleitung, Sicherheits-Header, Caching (Strato)
```

Hinweis: Es werden **keine** Web Fonts geladen – die Seite nutzt einen System-Font-Stack
(Georgia-Serif für Überschriften, System-Sans für Fließtext). Das ist schnell und
datenschutzfreundlich (keine externen Requests). Der Ordner `fonts/` bleibt daher leer.

Verbindliche Vorgaben: siehe [../docs/Spezifikation.md](../docs/Spezifikation.md).
