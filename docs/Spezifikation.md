# Technische Spezifikation – Website „Konrep" (konrep.com)

Stand: 2026-06-17 · Branch der Planung: `planWebsite`

---

## 1. Ziel & Rahmen

Professionelle, mobil-optimierte Marketing-Website für Christian Konrad als Repetitor
im Öffentlichen Recht. Geschäftsziel: mehr Kursteilnehmer durch digitale Auffindbarkeit
(bisher nur Mundpropaganda und Flyer).

**Kein** Onlineshop, **keine** Buchung, **keine** Nutzerkonten. Anfragen laufen
ausschließlich über E-Mail und Telefon.

**Zielgruppe:** Studierende/Referendare in der Vorbereitung auf das erste oder zweite
juristische Staatsexamen im Öffentlichen Recht.

## 2. Technische Architektur

- **Statische Website** – HTML, CSS, JavaScript. Kein Framework, kein Build-Prozess,
  keine Datenbank, kein serverseitiger Code.
- *Begründung:* vorhandenes Strato-Hosting-Paket, keine laufende Wartung/Updates,
  maximale Geschwindigkeit und Sicherheit, ausreichend für den Umfang.
- **Pflege/Deployment:** Datei-Upload über Strato-Dateimanager oder FTP.

## 3. Seitenaufbau (One-Page + Rechtsseiten)

Eine scrollbare Startseite mit Anker-Navigation, plus zwei separate Rechtsseiten.

1. **Header/Hero** – „Konrep", Claim („Öffentliches Recht. Auf den Punkt gebracht."),
   Justitia-Motiv, Button „Kurse ansehen".
2. **Über mich** – Foto + Werdegang (Ltd. Regierungsdirektor a.D., Rechtsanwalt,
   Ausbilder/AG-Leiter im ÖR seit 1992, Kurse seit 1999, (Mit-)Autor Decker/Konrad
   *Bayerisches Baurecht* und *Öffentlich-rechtliche Assessorklausuren*, Verfasser von
   Examensklausuren). Dezenter Link zur Kanzlei-Website
   `https://rechtsanwaltchristiankonrad.de`.
3. **Kurse** – zwei Blöcke (1. Examen / 2. Examen), je mit Klausurenkurs **und**
   Intensivkurs: Inhalt, Ablauf, Termine/Uhrzeiten (Präsenz München / digital), Preise,
   Leistungsumfang. Siehe §5.
4. **Termine** – Liste der nächsten Termine mit Verfügbarkeit (siehe §6).
5. **Kontakt** – Mail-Button (öffnet Mailprogramm mit vorausgefülltem Betreff) +
   Telefonnummer (Klick zum Anrufen). Siehe §7.
6. **Footer** – Links zu Impressum & Datenschutz.
7. **Impressum** (eigene Seite) – aus Vorlage.
8. **Datenschutzerklärung** (eigene Seite) – aus Vorlage, angepasst (siehe §8).

## 4. Design

- **Grundrichtung: klassisch-seriös** – Dunkelblau + Gold-Akzent, Serifen-Überschriften,
  sachliche serifenlose Schrift im Fließtext.
- **Mobile-first**, voll responsiv (Smartphone → Desktop).
- **Kein Logo vorhanden** → schlichter Schriftzug „Konrep" als Wortmarke gestalten.
- **Bilder lizenzsicher:** Justitia-/Jura-Motive ausschließlich aus gemeinfreien/CC0-Quellen
  (z. B. Unsplash-/Pexels-Lizenz oder Public Domain); Quellen dokumentieren.
  Profilbild von HEIC nach web-optimiertem WebP/JPG konvertieren.

## 5. Kursinhalte (verbindlich: Web-Doc, nicht die abweichenden Flyer)

### 1. Juristisches Staatsexamen
- **Klausurenkurs:** monatlich 2 Klausuren auf Examensniveau + 1 Besprechungseinheit
  (~2,5 h). Termine: Do ab 17:00 Uhr digital **oder** Fr ab 16:30 Uhr Präsenz (München).
  **40 €/Monat**, Material inklusive.
- **Intensivkurs:** halbjährlich, ~5 Wochen vor den Examensterminen, 2-tägig, ausschließlich
  digital. **95 €** inkl. Skript.

### 2. Juristisches Staatsexamen
- **Klausurenkurs:** monatlich 2 Klausuren + 2 Besprechungseinheiten (~2,5 h, je zusätzlich
  ein Übungsfall). Drei parallele Termine: Fr ab 16:30 (Präsenz), Mo ab 17:00 (Präsenz),
  Di ab 17:00 (digital). Präsenz in München. **95 €/Monat**, Material inklusive.
- **Intensivkurs:** halbjährlich, ~5 Wochen vor den Examensterminen, 4-tägig, 3 Skripte,
  ~20 Übungsfälle. **195 €** inkl. Material.

## 6. Terminverwaltung (leicht pflegbar)

- Alle Termine in **einer einzigen, stark kommentierten Datei** (z. B. `src/js/termine.js`),
  getrennt vom Design.
- Pro Eintrag: Datum, Kursart, Format (Präsenz/Digital), Status/Verfügbarkeit
  („freie Plätze" / „Warteliste" / „ausgebucht"), optional Uhrzeit/Ort.
- Pflege durch einfaches Ersetzen von Text zwischen klaren Markierungen + Upload.
  Kurze Schritt-für-Schritt-Anleitung wird beigelegt.
- **Aktueller Platzhalter:** Termine stehen noch nicht fest → vorerst „Herbst 2026"
  als Platzhalter eintragen.

## 7. Kontaktfunktion

- **Mail-Button** je Kurs: `mailto:klausur.konrep@outlook.de` mit vorausgefülltem Betreff,
  z. B. „Anfrage Klausurenkurs 1. Examen".
- **Telefon:** +49 170 5436518 als `tel:`-Link.
- **Kein Kontaktformular** (datensparsam, kein Serverskript).

## 8. Recht (Impressum & Datenschutz)

- **Impressum:** aus Vorlage – Christian Konrad, Erlengrund 16, 83646 Bad Tölz;
  E-Mail klausur.konrep@outlook.de; Mobil +49 170 5436518; USt-ID DE402877487;
  Disclaimer „keine Rechtsberatung i. S. d. RDG".
- **Datenschutz:** aus Vorlage, angepasst an die reale Seite:
  - **Entfernt:** Abschnitt „Kontaktformular" (es gibt keins); Bezug auf anwaltliche
    Verschwiegenheit/Mandatsverhältnis (§ 43a BRAO) – betrifft die Kanzlei, nicht das
    Repetitorium.
  - **Behalten:** STRATO Hosting (Server-Logfiles) + **STRATO Web Analytics**
    (datensparsam, anonymisierte IP, kein Cross-Site-Tracking, **kein Cookie-Banner nötig**).
  - **Web Fonts lokal** einbinden (keine Verbindung zu Google).
- ⚠️ **Juristische Endkontrolle durch den Auftraggeber** – hier erfolgt technische Umsetzung,
  keine Rechtsberatung.

## 9. Technik-Standards & SEO

- **HTTPS/SSL:** kostenloses Let's-Encrypt-Zertifikat aus dem Strato-Paket aktivieren;
  Weiterleitung `http→https` und ggf. `www→konrep.com` per `.htaccess`.
- **SEO:** sprechende Meta-Titel/Descriptions, saubere Überschriftenhierarchie,
  `sitemap.xml`, `robots.txt`, strukturierte Daten (schema.org `Person` +
  `LocalBusiness`/`Course`). Zielkeywords: *Repetitorium, München, Jura, Christian Konrad,
  Öffentliches Recht*. Empfehlung: Eintrag in Google Search Console (Anleitung beilegen).
- **Performance/Barrierefreiheit:** schlanke Seite, Alt-Texte, gute Kontraste.

## 10. Offene Inhalte (vom Auftraggeber zu liefern)

1. Konkrete nächste Termine (aktuell Platzhalter „Herbst 2026").
2. Juristische Endkontrolle von Impressum & Datenschutz.
