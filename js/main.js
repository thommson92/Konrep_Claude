/* =============================================================================
   Konrep – main.js
   - Mobile-Navigation (Menü auf-/zuklappen)
   - Rendert die Termine aus termine.js
   - Baut "Platz anfragen"-Mailto-Links mit vorausgefülltem Betreff
   Hinweis: Inhalte/Termine NICHT hier ändern, sondern in termine.js.
   ============================================================================= */
(function () {
  "use strict";

  var MAIL = "klausur.konrep@outlook.de";

  /* ---- Mobile-Navigation ------------------------------------------------- */
  var toggle = document.querySelector(".nav__toggle");
  var links = document.getElementById("nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    // Menü schließen, sobald ein Link angeklickt wird
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---- Hilfsfunktionen --------------------------------------------------- */
  function mailtoLink(betreff) {
    return "mailto:" + MAIL + "?subject=" + encodeURIComponent(betreff || "Kursanfrage");
  }

  var STATUS = {
    frei:       { cls: "status--frei",       label: "Freie Plätze" },
    warteliste: { cls: "status--warteliste", label: "Warteliste" },
    ausgebucht: { cls: "status--ausgebucht", label: "Ausgebucht" }
  };

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  /* ---- Termine rendern --------------------------------------------------- */
  var list = document.getElementById("termine-list");
  var data = window.KONREP_TERMINE;

  if (list && Array.isArray(data)) {
    if (data.length === 0) {
      list.appendChild(el("p", "termine-note", "Aktuell sind keine Termine eingetragen. Bitte fragen Sie per E-Mail nach den nächsten Terminen."));
    }
    data.forEach(function (t) {
      var key = String(t.status || "").toLowerCase().trim();
      var s = STATUS[key] || STATUS.frei;

      var row = el("div", "termin");

      row.appendChild(el("div", "termin__date", t.datum || ""));

      var mid = el("div");
      mid.appendChild(el("div", "termin__title", t.titel || ""));
      if (t.format) mid.appendChild(el("div", "termin__meta", t.format));
      row.appendChild(mid);

      var right = el("div");
      var badge = el("div", "status " + s.cls, s.label);
      right.appendChild(badge);

      if (key !== "ausgebucht") {
        var a = el("a", "btn btn--ghost", "Platz anfragen");
        a.href = mailtoLink(t.betreff);
        a.style.marginTop = "0.6rem";
        a.style.padding = "0.5rem 1rem";
        a.style.fontSize = "0.9rem";
        right.appendChild(a);
      }
      row.appendChild(right);

      list.appendChild(row);
    });
  }

  /* ---- mailto-Links mit data-betreff aufbauen (Kurs-Buttons) ------------- */
  document.querySelectorAll("[data-betreff]").forEach(function (a) {
    a.href = mailtoLink(a.getAttribute("data-betreff"));
  });

  /* ---- Aktuelles Jahr im Footer ------------------------------------------ */
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
