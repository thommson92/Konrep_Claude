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
     betreff  : Text, der beim Klick auf "Platz anfragen" in den Mail-Betreff kommt.
                Bei Status "geplant"/"ausgebucht" wird kein Button angezeigt – das
                Feld kann dann leer bleiben: ""

   WICHTIG: Jeder Block endet mit einem Komma  },  . Anführungszeichen nicht vergessen.
   ============================================================================= */

window.KONREP_TERMINE = [

  {
    datum:   "Fr 10. & Sa 11.07.2026",
    uhrzeit: "jeweils ab 9:00 Uhr",
    titel:   "Intensivkurs Öffentliches Recht – 1. Examen",
    format:  "Digital",
    details: [
      "Wiederholung der examenstypischen Standardprobleme im gesamten Pflichtstoff",
      "Verfassungsrecht, Europarecht, Verwaltungsverfahrens- und Verwaltungsprozessrecht (VwVfG, VwGO)",
      "Baurecht, Kommunalrecht (GO), Polizei- und Sicherheitsrecht (PAG, LStVG)",
      "Staatshaftungsrecht sowie aktuelle Entwicklungen"
    ],
    status:  "frei",
    betreff: "Anfrage Intensivkurs 1. Examen (10./11.07.2026)"
  },

  {
    datum:   "Herbst 2026",
    uhrzeit: "",
    titel:   "Intensivkurs Öffentliches Recht – 2. Examen",
    format:  "Digital",
    details: [
      "Viertägiger Intensivkurs ca. 5 Wochen vor den Examensterminen",
      "Verwaltungsverfahrens- und Verwaltungsprozessrecht, Europarecht",
      "Kommunalrecht, Polizei- und Sicherheitsrecht, Bau- und Immissionsschutzrecht",
      "3 Skripte und ca. 20 Übungsfälle"
    ],
    status:  "geplant",
    betreff: ""
  },

  {
    datum:   "Laufend (monatlich)",
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
