/* Dibuja la página de equipo a partir de assets/data/team.js.
   No hace falta editar este archivo para cambiar fotos o cursos. */
(function () {
  if (typeof TEAM === "undefined" || !TEAM.length) return;

  var i = 0;
  var hero = document.getElementById("team-hero");
  var seasonEl = document.getElementById("season");
  var badge = document.getElementById("season-badge");
  var list = document.getElementById("departments");
  var prev = document.getElementById("prev");
  var next = document.getElementById("next");

  function comingSoon() {
    var p = document.createElement("p");
    p.className = "muted";
    p.textContent = "Team photo coming soon.";
    return p;
  }

  function department(d) {
    var sec = document.createElement("section");
    sec.className = "dept";

    var head = document.createElement("div");
    head.className = "dept__head";
    var bar = document.createElement("span");
    bar.className = "dept__bar";
    var h = document.createElement("h3");
    h.textContent = d.name;
    head.appendChild(bar); head.appendChild(h);
    sec.appendChild(head);

    if (d.description) {
      var desc = document.createElement("p");
      desc.className = "dept__desc";
      desc.textContent = d.description;
      sec.appendChild(desc);
    }

    // Foto de grupo del departamento. Si el archivo aún no existe, se avisa.
    var media;
    if (d.photo) {
      var photo = document.createElement("img");
      photo.className = "dept__photo";
      photo.src = d.photo;
      photo.alt = d.name + " department, " + TEAM[i].season;
      photo.onerror = function () { photo.replaceWith(comingSoon()); };
      media = photo;
    } else {
      media = comingSoon();
    }

    // Con "feature", la foto va a la izquierda y el cuadro de texto a la derecha
    if (d.feature) {
      var row = document.createElement("div");
      row.className = "dept__feature";
      var box = document.createElement("div");
      box.className = "dept__box";
      var bt = document.createElement("h4");
      bt.textContent = d.feature.title;
      var bp = document.createElement("p");
      bp.textContent = d.feature.text;
      box.appendChild(bt); box.appendChild(bp);
      row.appendChild(media); row.appendChild(box);
      sec.appendChild(row);
    } else {
      sec.appendChild(media);
    }
    return sec;
  }

  function render() {
    var s = TEAM[i];
    seasonEl.textContent = s.season;
    badge.style.visibility = i === 0 ? "visible" : "hidden";
    // Mientras un curso no tenga foto de grupo, se ve una foto del barco.
    var fallback = "images/boat/team-default.jpg";
    var pre = new Image();
    var shown = i;  // si mientras carga se cambia de curso, esta foto ya no se pone
    // La foto va en la variable --photo: el CSS la usa entera y, detrás, desenfocada
    pre.onload = function () { if (shown === i) hero.style.setProperty("--photo", "url('" + pre.src + "')"); };
    pre.onerror = function () { if (pre.src.indexOf(fallback) === -1) pre.src = fallback; };
    pre.src = s.teamPhoto || fallback;
    list.innerHTML = "";
    s.departments.forEach(function (d) { list.appendChild(department(d)); });
    prev.disabled = i >= TEAM.length - 1;
    next.disabled = i <= 0;
  }

  prev.addEventListener("click", function () { if (i < TEAM.length - 1) { i++; render(); } });
  next.addEventListener("click", function () { if (i > 0) { i--; render(); } });
  render();
})();
