/* =============================================================================
   TERMINE  –  Diese Datei pflegen Sie selbst.
   =============================================================================

   So fügen Sie einen Termin hinzu oder ändern ihn:

   1. Kopieren Sie einen kompletten Block von  {  bis  },  (inkl. Komma).
   2. Passen Sie die Werte zwischen den Anführungszeichen "..." an.
   3. Speichern und die Datei auf den Webspace hochladen – fertig.

   Bedeutung der Felder:
     datum    : Anzeigetext des Termins, z. B. "Fr 10. & Sa 11.07.2026"
                oder – wenn noch kein genaues Datum feststeht – "Herbst 2026".
     uhrzeit  : (optional) z. B. "jeweils ab 9:00 Uhr". Feld kann leer bleiben: ""
     titel    : Name des Kurses / der Einheit
     format   : "Präsenz (München)"  oder  "Digital"  oder  "Digital & Präsenz (München)"
     details  : (optional) Stichpunkte zum Inhalt – als Liste in eckigen Klammern,
                jeder Punkt in "...", durch Komma getrennt. Beispiel:
                  details: [
                    "Verfassungsrecht, Europarecht",
                    "Baurecht, Kommunalrecht"
                  ]
                Wird kein Inhalt gewünscht: details: []
     status   : MUSS einer dieser Werte sein (Groß-/Kleinschreibung egal):
                  "frei"        -> grün  "Freie Plätze"     + Button "Platz anfragen"
                  "warteliste"  -> gelb  "Warteliste"       + Button "Platz anfragen"
                  "ausgebucht"  -> rot   "Ausgebucht"       (kein Button)
                  "geplant"     -> blau  "Termine folgen"   (kein Button; für Kurse,
                                   deren Datum noch nicht feststeht – z. B. "Herbst 2026")
                  "beendet"     -> grau  "Kurs beendet"     + ausgegrauter Button (nicht
                                   klickbar; für vergangene Kurse, die sichtbar bleiben sollen)
     betreff  : Text, der beim Klick auf "Platz anfragen" in den Mail-Betreff kommt.
                Bei Status "geplant"/"ausgebucht"/"beendet" ist der Button nicht klickbar
                bzw. wird nicht angezeigt – das
                Feld kann dann leer bleiben: ""

   WICHTIG: Jeder Block endet mit einem Komma  },  . Anführungszeichen nicht vergessen.
   ============================================================================= */

window.KONREP_TERMINE = [

  {
    datum:   "Fr 29. & Sa 30.01.2027",
    uhrzeit: "jeweils 9:00–17:00 Uhr",
    titel:   "Intensiv-Wiederholungskurs Öffentliches Recht – 1. Examen",
    format:  "Digital",
    details: [
      "„Öffentliches Recht auf den Punkt gebracht“",
      "Besprechung/Wiederholung examensrelevanter und examenstypischer Problemstellungen aus den Pflichtrechtsgebieten des ÖR (VerfR, EuR, VwVfG, VwGO, BauR, GO, PAG, LStVG, StaatshaftungR; insb. Standardprobleme und aktuelle Entwicklungen)",
      "Kosten: 100 € inkl. Kursmaterial"
    ],
    status:  "frei",
    betreff: "Anfrage Intensiv-Wiederholungskurs 1. Examen (29.-30.01.2027)"
  },

  {
    datum:   "Do 29.10. – So 01.11.2026",
    uhrzeit: "",
    titel:   "Intensivkurs Öffentliches Recht – 2. Examen",
    format:  "Digital",
    details: [
      "Tag 1 (13:00–19:00 Uhr): Verwaltungsrecht, Verwaltungsprozessrecht, Europarecht",
      "Tag 2 (8:45–17:15 Uhr): Kommunalrecht, Polizeirecht, Sicherheitsrecht",
      "Tag 3+4 (8:45–17:15 Uhr): Baurecht, Immissionsschutzrecht"
    ],
    status:  "beendet",
    betreff: "Anfrage Intensivkurs 2. Examen (29.10.-01.11.2026)"
  },

  {
    datum:   "Ab Mitte September 2026 (monatlich)",
    uhrzeit: "",
    titel:   "Klausurenkurs 1. Examen",
    format:  "Digital & Präsenz (München)",
    details: [
      "Monatlich 2 Klausuren auf Examensniveau mit ausführlicher Besprechung (ca. 2,5 Std.)"
    ],
    status:  "frei",
    betreff: "Anfrage Klausurenkurs 1. Examen"
  },

  {
    datum:   "Laufend (monatlich)",
    uhrzeit: "",
    titel:   "Klausurenkurs 2. Examen",
    format:  "Digital & Präsenz (München)",
    details: [
      "Monatlich 2 Klausuren auf Examensniveau, 2 Besprechungen (je ca. 2,5 Std.) mit zusätzlichem Übungsfall"
    ],
    status:  "frei",
    betreff: "Anfrage Klausurenkurs 2. Examen"
  },

];
