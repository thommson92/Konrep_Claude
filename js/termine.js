/* =============================================================================
   TERMINE  –  Diese Datei pflegen Sie selbst.
   =============================================================================

   So fügen Sie einen Termin hinzu oder ändern ihn:

   1. Kopieren Sie einen kompletten Block von  {  bis  },  (inkl. Komma).
   2. Passen Sie die Werte zwischen den Anführungszeichen "..." an.
   3. Speichern und die Datei auf den Webspace hochladen – fertig.

   Bedeutung der Felder:
     datum    : Anzeigetext des Termins, z. B. "Fr 26.09.2026" oder "Herbst 2026"
     titel    : Name des Kurses / der Einheit
     format   : "Präsenz (München)"  oder  "Digital"  oder  "Digital & Präsenz"
     status   : MUSS einer dieser drei Werte sein (Groß-/Kleinschreibung egal):
                  "frei"        -> grüner Hinweis "Freie Plätze"
                  "warteliste"  -> gelber Hinweis "Warteliste"
                  "ausgebucht"  -> roter Hinweis "Ausgebucht"
     betreff  : Text, der beim Klick auf "Platz anfragen" in den Mail-Betreff kommt

   WICHTIG: Jeder Block endet mit einem Komma  },  – das letzte Komma vor der
   schließenden Klammer ]  darf stehen bleiben. Anführungszeichen nicht vergessen.
   ============================================================================= */

window.KONREP_TERMINE = [

  {
    datum:   "Freitag 10.07.2026 & Samstag 11.07.2026 - jeweils um 9 Uhr",
    titel:   "Intensivkurs Öffentliches Recht – 1. Examen",
    format:  "Digital",
    status:  "frei",
    betreff: "Anfrage Intensivkurs 1. Examen (Juli 2026)"
  },
  {
    datum:   "Herbst 2026",
    titel:   "Intensivkurs Öffentliches Recht – 2. Examen",
    format:  "Digital",
    status:  "frei",
    betreff: "Anfrage Intensivkurs 2. Examen (Herbst 2026)"
  },

  {
    datum:   "Laufend (monatlich)",
    titel:   "Klausurenkurs 1. Examen",
    format:  "Digital & Präsenz (München)",
    status:  "frei",
    betreff: "Anfrage Klausurenkurs 1. Examen"
  },

  {
    datum:   "Laufend (monatlich)",
    titel:   "Klausurenkurs 2. Examen",
    format:  "Digital & Präsenz (München)",
    status:  "frei",
    betreff: "Anfrage Klausurenkurs 2. Examen"
  },

];
