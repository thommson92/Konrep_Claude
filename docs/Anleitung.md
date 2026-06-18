# Anleitung – Pflege & Veröffentlichung der Website

Diese Seite ist eine **statische Website**: einfache Dateien, die direkt auf den
Strato-Webspace geladen werden. Keine Datenbank, kein Login, keine laufende Wartung.

## 1. Termine ändern (häufigster Fall)

1. Datei `src/js/termine.js` in einem Texteditor öffnen.
2. Einträge zwischen den `{ ... }`-Blöcken anpassen (Anleitung steht oben in der Datei).
   - `status` muss `"frei"`, `"warteliste"` oder `"ausgebucht"` sein.
3. Speichern und **nur diese Datei** auf den Webspace hochladen (Ordner `js/`).

Die Termine erscheinen automatisch auf der Startseite im Abschnitt „Nächste Termine".

## 2. Texte/Preise ändern

- Kurse, Preise, Über-mich-Text stehen in `src/index.html`.
- Impressum: `src/impressum.html` · Datenschutz: `src/datenschutz.html`.
- Geänderte Datei speichern und hochladen.

## 3. Veröffentlichen (Upload zu Strato)

Es wird der **Inhalt des Ordners `src/`** hochgeladen (nicht der Ordner selbst),
sodass `index.html` direkt im Web-Wurzelverzeichnis liegt.

Zwei Wege:
- **Strato Datei-Manager** (Browser): im Strato-Kundenbereich unter „Webspace
  verwalten" → Dateien hochladen.
- **FTP-Programm** (z. B. FileZilla): Zugangsdaten aus dem Strato-Kundenbereich.
  Inhalt von `src/` in das Wurzelverzeichnis (oft `/` bzw. `htdocs`) ziehen.

> Wichtig: Auch die versteckte Datei `.htaccess` mit hochladen (im FTP-Programm
> „versteckte Dateien anzeigen" aktivieren).

## 4. SSL / HTTPS aktivieren (einmalig)

1. Im Strato-Kundenbereich die Domain `konrep.com` öffnen.
2. Unter „SSL-Verschlüsselung" das kostenlose **Let's-Encrypt-Zertifikat** aktivieren.
3. Nach Aktivierung sorgt die `.htaccess` automatisch für die Weiterleitung von
   `http` auf `https` und von `www.konrep.com` auf `konrep.com`.

## 5. Bei Google auffindbar machen (einmalig, empfohlen)

1. [Google Search Console](https://search.google.com/search-console) öffnen,
   Property `konrep.com` anlegen und (per Strato-DNS-Eintrag) bestätigen.
2. Sitemap einreichen: `https://konrep.com/sitemap.xml`.
3. Optional: Eintrag bei **Google Business / Maps** für lokale Sichtbarkeit in München.

## 6. Bilder austauschen

- Profilbild: `src/images/christian-konrad.jpg` (und `christian-konrad@2x.jpg` für
  hohe Auflösung) ersetzen – möglichst gleiche Maße/Hochformat.
- Nur lizenzfreie/eigene Bilder verwenden.
