# Entscheidungslog – Planungsphase

Festgehaltene Entscheidungen aus der gemeinsamen Planung (Chat) vom 2026-06-17.
Dient als Begründungs-/Nachvollziehbarkeitsdokument zur Spezifikation.

## Getroffene Entscheidungen

| Thema | Entscheidung | Begründung / Kontext |
|-------|--------------|----------------------|
| **Terminpflege** | Einfache, strukturierte Textdatei selbst bearbeiten | Kein laufender Aufwand/Kosten, kein CMS-Wartung; passt zur statischen Architektur. Alternativen (CMS/WordPress, Google-Tabelle) verworfen. |
| **Kontaktweg** | Nur Mail-Button (vorausgefüllter Betreff) + Telefon | Entspricht Anforderung, kein Server nötig, datensparsam. Kein Kontaktformular. |
| **E-Mail-Adresse** | `klausur.konrep@outlook.de` | Bestehende Adresse, sofort einsatzbereit. Keine neue @konrep.com-Adresse. |
| **Seitenaufbau** | One-Page + dezenter Link zur Kanzlei-Website | Ideal für Smartphone, einfache Pflege. Kanzlei: `https://rechtsanwaltchristiankonrad.de`. |
| **Besucherstatistik** | STRATO Web Analytics | Datensparsam, anonymisierte IP, kein Cookie-Banner nötig. Google Analytics verworfen (Cookie-Banner/Aufwand). |
| **Hosting** | Vorhandenes Strato-Hosting-Paket nutzen | Domain + Paket bereits gebucht. |
| **Design** | Klassisch-seriös (Dunkelblau + Gold, Serifen-Überschriften) | Traditionell-juristisch, vertrauenswürdig. Alternativen „modern-minimalistisch" und „warm-akademisch" verworfen. |
| **Logo** | Kein Logo vorhanden → Wortmarke „Konrep" gestalten | – |
| **Termine (Inhalt)** | Platzhalter „Herbst 2026" | Konkrete Termine stehen noch nicht fest. |
| **Preise/Uhrzeiten** | Web-Doc maßgeblich | Flyer-Angaben teils abweichend/veraltet (Termine bereits vergangen). |

## Festgestellte Inkonsistenzen im Ausgangsmaterial

1. **Veraltete Flyer-Termine:** Flyer nennen 30./31.1.2026 bzw. 30.4.–3.5.2026 – aus Sicht
   des Planungsdatums bereits vergangen. → Platzhalter „Herbst 2026".
2. **Datenschutz-Vorlage passt nicht 1:1:** beschreibt Kontaktformular, STRATO Web Analytics
   und anwaltliche Verschwiegenheit (§ 43a BRAO / Mandatsverhältnis). Kontaktformular gibt es
   nicht; der BRAO-Bezug betrifft die Kanzlei, nicht das Repetitorium. → Anpassung nötig
   (siehe Spezifikation §8).
3. **Preisabweichungen** zwischen Flyern und Web-Doc → Web-Doc gilt.

## Stammdaten (aus input/)

- Christian Konrad, Erlengrund 16, 83646 Bad Tölz
- E-Mail: klausur.konrep@outlook.de · Mobil: +49 170 5436518
- USt-ID: DE402877487
- Domain: konrep.com (Strato) · Kanzlei: https://rechtsanwaltchristiankonrad.de
