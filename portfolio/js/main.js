/* ============================================================
   Page behaviour: showreel, project grid, filters, video player,
   contact form. You should not need to edit this file.
   ============================================================ */

(function () {
  "use strict";

  const CATEGORY_LABELS = {
    youtube: "YouTube",
    shorts: "Short-form",
    music: "Music video",
    commercial: "Ad",
    gaming: "Gaming"
  };

  const grid = document.getElementById("work-grid");
  const emptyState = document.getElementById("empty-state");
  const filterButtons = document.querySelectorAll(".chip[data-filter]");

  function escapeHtml(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* Works out what kind of link a video is: YouTube, Vimeo or a file. */
  function parseVideo(url) {
    if (!url) return null;
    let m = url.match(/(?:youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/)|youtu\.be\/)([\w-]{11})/);
    if (m) return { type: "youtube", id: m[1] };
    m = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
    if (m) return { type: "vimeo", id: m[1] };
    return { type: "file", src: url };
  }

  /* Builds the player. "background" plays muted on a loop, for the showreel. */
  function playerHtml(url, background) {
    const v = parseVideo(url);
    if (!v) return "";
    if (v.type === "youtube") {
      const params = background
        ? "autoplay=1&mute=1&loop=1&playlist=" + v.id + "&controls=0&playsinline=1&rel=0"
        : "autoplay=1&rel=0&playsinline=1";
      return '<iframe src="https://www.youtube-nocookie.com/embed/' + v.id + "?" + params +
        '" title="Video" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>';
    }
    if (v.type === "vimeo") {
      const params = background ? "autoplay=1&muted=1&loop=1&background=1" : "autoplay=1";
      return '<iframe src="https://player.vimeo.com/video/' + v.id + "?" + params +
        '" title="Video" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>';
    }
    const src = escapeHtml(v.src);
    return background
      ? '<video src="' + src + '" autoplay muted loop playsinline></video>'
      : '<video src="' + src + '" controls autoplay playsinline></video>';
  }

  function thumbnail(p) {
    if (p.image) return p.image;
    const v = parseVideo(p.video);
    if (v && v.type === "youtube") return "https://img.youtube.com/vi/" + v.id + "/hqdefault.jpg";
    return "images/night-drive.svg";
  }

  /* ---- Showreel ---- */
  const reel = document.getElementById("reel");
  if (typeof SHOWREEL !== "undefined" && SHOWREEL) {
    reel.innerHTML = playerHtml(SHOWREEL, true);
    reel.classList.add("has-video");
  }

  /* Running timecode on the monitor, purely decorative. */
  const timecode = document.getElementById("timecode");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (timecode && !reduceMotion) {
    const start = performance.now();
    const pad = function (n) { return String(n).padStart(2, "0"); };
    setInterval(function () {
      const t = (performance.now() - start) / 1000;
      const f = Math.floor((t % 1) * 24);
      const s = Math.floor(t) % 60;
      const m = Math.floor(t / 60) % 60;
      const h = Math.floor(t / 3600);
      timecode.textContent = pad(h) + ":" + pad(m) + ":" + pad(s) + ":" + pad(f);
    }, 1000 / 24);
  }

  /* ---- Project grid ---- */
  function renderCards(filter) {
    const list = PROJECTS.map(function (p, i) { return Object.assign({ index: i }, p); })
      .filter(function (p) { return filter === "all" || p.category === filter; });

    grid.innerHTML = list.map(function (p) {
      return (
        '<article class="card">' +
        '  <button type="button" class="card-media" data-open="' + p.index + '" aria-label="Play ' + escapeHtml(p.title) + '">' +
        '    <img src="' + escapeHtml(thumbnail(p)) + '" alt="" loading="lazy" />' +
        '    <span class="card-play" aria-hidden="true"></span>' +
        '    <span class="badge">' + escapeHtml(CATEGORY_LABELS[p.category] || p.category) + "</span>" +
        (p.featured ? '<span class="badge is-featured">Featured</span>' : "") +
        (p.duration ? '<span class="duration">' + escapeHtml(p.duration) + "</span>" : "") +
        "  </button>" +
        '  <div class="card-body">' +
        '    <h3><button type="button" data-open="' + p.index + '">' + escapeHtml(p.title) + "</button></h3>" +
        '    <p class="card-client">' + escapeHtml(p.client) + "</p>" +
        '    <p class="card-desc">' + escapeHtml(p.description) + "</p>" +
        '    <p class="card-role">' + escapeHtml(p.role) + "</p>" +
        "  </div>" +
        "</article>"
      );
    }).join("");

    emptyState.hidden = list.length > 0;
  }

  filterButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filterButtons.forEach(function (b) { b.classList.remove("is-active"); });
      btn.classList.add("is-active");
      renderCards(btn.dataset.filter);
    });
  });

  const statEl = document.querySelector('[data-stat="projects"]');
  if (statEl) statEl.textContent = PROJECTS.length;

  /* ---- Video modal ---- */
  const modal = document.getElementById("modal");
  const player = document.getElementById("modal-player");
  let lastFocus = null;

  function openModal(index) {
    const p = PROJECTS[index];
    if (!p) return;
    lastFocus = document.activeElement;

    document.getElementById("modal-title").textContent = p.title;
    document.getElementById("modal-category").textContent = CATEGORY_LABELS[p.category] || p.category;
    document.getElementById("modal-desc").textContent = p.description;
    document.getElementById("modal-client").textContent = p.client || "—";
    document.getElementById("modal-role").textContent = p.role || "—";
    document.getElementById("modal-duration").textContent = p.duration || "—";

    player.classList.toggle("is-vertical", !!p.vertical);
    player.innerHTML = p.video
      ? playerHtml(p.video, false)
      : '<img src="' + escapeHtml(thumbnail(p)) + '" alt="" /><span class="player-note">Video coming soon</span>';

    modal.hidden = false;
    document.body.classList.add("modal-open");
    modal.querySelector(".modal-close").focus();
  }

  function closeModal() {
    modal.hidden = true;
    player.innerHTML = ""; // stops playback
    document.body.classList.remove("modal-open");
    if (lastFocus) lastFocus.focus();
  }

  grid.addEventListener("click", function (e) {
    const target = e.target.closest("[data-open]");
    if (target) openModal(Number(target.dataset.open));
  });
  modal.addEventListener("click", function (e) {
    if (e.target.closest("[data-close]")) closeModal();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.hidden) closeModal();
  });

  /* ---- Mobile nav ---- */
  const toggle = document.querySelector(".nav-toggle");
  const mobileNav = document.getElementById("mobile-nav");
  toggle.addEventListener("click", function () {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    mobileNav.hidden = open;
  });
  mobileNav.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      toggle.setAttribute("aria-expanded", "false");
      mobileNav.hidden = true;
    }
  });

  /* ---- Contact form (opens the visitor's email app) ---- */
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!form.reportValidity()) return;
    const d = new FormData(form);
    const subject = "Video project: " + d.get("type") + " (" + d.get("name") + ")";
    const body =
      d.get("message") + "\n\n" +
      "Name: " + d.get("name") + "\n" +
      "Email: " + d.get("email") + "\n" +
      "Type: " + d.get("type");
    window.location.href =
      "mailto:" + EMAIL + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  });

  document.getElementById("year").textContent = new Date().getFullYear();

  renderCards("all");
})();
