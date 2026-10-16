/* ============================================================
   Page behaviour: catalog, filters, build details, contact form.
   You should not need to edit this file.
   ============================================================ */

(function () {
  "use strict";

  const CATEGORY_LABELS = {
    spawn: "Spawn & hub",
    medieval: "Medieval",
    modern: "Modern",
    fantasy: "Fantasy",
    redstone: "Redstone"
  };

  const grid = document.getElementById("build-grid");
  const emptyState = document.getElementById("empty-state");
  const filterButtons = document.querySelectorAll(".chip[data-filter]");

  function formatPrice(build) {
    try {
      return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(build.price);
    } catch (e) {
      return "$" + Number(build.price).toFixed(2);
    }
  }

  function buyLinkAttrs(build) {
    const ready = build.buyUrl && build.buyUrl !== "#";
    if (ready) return 'href="' + build.buyUrl + '" target="_blank" rel="noopener"';
    return 'href="#contact" title="Checkout coming soon — message me to order"';
  }

  function renderCards(filter) {
    const list = BUILDS.filter(function (b) {
      return filter === "all" || b.category === filter;
    });

    grid.innerHTML = list
      .map(function (b) {
        return (
          '<article class="card" data-id="' + b.id + '">' +
          '  <div class="card-media" data-open="' + b.id + '">' +
          '    <img src="' + b.image + '" alt="' + b.name + '" loading="lazy" />' +
          '    <span class="badge">' + (CATEGORY_LABELS[b.category] || b.category) + "</span>" +
          (b.featured ? '<span class="badge is-featured">Featured</span>' : "") +
          "  </div>" +
          '  <div class="card-body">' +
          '    <h3><button type="button" data-open="' + b.id + '">' + b.name + "</button></h3>" +
          '    <p class="card-desc">' + b.description + "</p>" +
          '    <div class="card-meta"><span>' + b.size + "</span></div>" +
          '    <div class="card-foot">' +
          '      <span class="price">' + formatPrice(b) + "</span>" +
          '      <a class="btn btn-primary btn-sm" ' + buyLinkAttrs(b) + ">Buy</a>" +
          "    </div>" +
          "  </div>" +
          "</article>"
        );
      })
      .join("");

    emptyState.hidden = list.length > 0;
  }

  // ----- Filters -----
  filterButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filterButtons.forEach(function (b) { b.classList.remove("is-active"); });
      btn.classList.add("is-active");
      renderCards(btn.dataset.filter);
    });
  });

  // ----- Modal -----
  const modal = document.getElementById("modal");
  const modalEls = {
    img: document.getElementById("modal-img"),
    category: document.getElementById("modal-category"),
    title: document.getElementById("modal-title"),
    desc: document.getElementById("modal-desc"),
    size: document.getElementById("modal-size"),
    version: document.getElementById("modal-version"),
    includes: document.getElementById("modal-includes"),
    price: document.getElementById("modal-price"),
    buy: document.getElementById("modal-buy")
  };
  let lastFocused = null;

  function openModal(id) {
    const b = BUILDS.find(function (x) { return x.id === id; });
    if (!b) return;
    modalEls.img.src = b.image;
    modalEls.img.alt = b.name;
    modalEls.category.textContent = CATEGORY_LABELS[b.category] || b.category;
    modalEls.title.textContent = b.name;
    modalEls.desc.textContent = b.description;
    modalEls.size.textContent = b.size;
    modalEls.version.textContent = b.version;
    modalEls.includes.textContent = b.includes;
    modalEls.price.textContent = formatPrice(b);

    const ready = b.buyUrl && b.buyUrl !== "#";
    modalEls.buy.href = ready ? b.buyUrl : "#contact";
    modalEls.buy.textContent = ready ? "Buy now" : "Message to order";
    if (ready) {
      modalEls.buy.setAttribute("target", "_blank");
    } else {
      modalEls.buy.removeAttribute("target");
    }

    lastFocused = document.activeElement;
    modal.hidden = false;
    document.body.classList.add("modal-open");
    modal.querySelector(".modal-close").focus();
  }

  function closeModal() {
    modal.hidden = true;
    document.body.classList.remove("modal-open");
    if (lastFocused && lastFocused.focus) lastFocused.focus();
  }

  document.addEventListener("click", function (e) {
    const opener = e.target.closest("[data-open]");
    if (opener) { openModal(opener.dataset.open); return; }
    if (e.target.closest("[data-close]")) closeModal();
    if (e.target.id === "modal-buy" && modalEls.buy.getAttribute("href") === "#contact") closeModal();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.hidden) closeModal();
  });

  // ----- Mobile nav -----
  const navToggle = document.querySelector(".nav-toggle");
  const mobileNav = document.getElementById("mobile-nav");
  navToggle.addEventListener("click", function () {
    const open = mobileNav.hidden;
    mobileNav.hidden = !open;
    navToggle.setAttribute("aria-expanded", String(open));
  });
  mobileNav.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      mobileNav.hidden = true;
      navToggle.setAttribute("aria-expanded", "false");
    }
  });

  // ----- Contact form (opens the visitor's email app) -----
  const CONTACT_EMAIL = "hello@example.com"; // <-- change this to your email address

  const form = document.getElementById("contact-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let valid = true;
    form.querySelectorAll("[required]").forEach(function (field) {
      const ok = field.checkValidity();
      field.classList.toggle("is-invalid", !ok);
      if (!ok) valid = false;
    });
    if (!valid) return;

    const data = new FormData(form);
    const subject = "Custom build request from " + data.get("name");
    const body =
      "Name: " + data.get("name") + "\n" +
      "Email: " + data.get("email") + "\n" +
      "Discord: " + (data.get("discord") || "-") + "\n\n" +
      data.get("message");

    window.location.href =
      "mailto:" + CONTACT_EMAIL +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);
  });

  // ----- Hero video -----
  (function setupHeroVideo() {
    const slot = document.getElementById("hero-video");
    if (!slot) return;
    const src = (typeof HERO_VIDEO === "string" ? HERO_VIDEO : "").trim();
    if (!src) return; // keep the placeholder

    const yt = src.match(/(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([A-Za-z0-9_-]{6,})/);
    if (yt) {
      const iframe = document.createElement("iframe");
      iframe.src = "https://www.youtube-nocookie.com/embed/" + yt[1] + "?autoplay=1&mute=1&loop=1&playlist=" + yt[1] + "&controls=0&rel=0&playsinline=1";
      iframe.title = "CaperBuilds showreel";
      iframe.allow = "autoplay; encrypted-media; picture-in-picture";
      iframe.setAttribute("allowfullscreen", "");
      slot.replaceChildren(iframe);
    } else {
      const video = document.createElement("video");
      video.src = src;
      video.autoplay = true;
      video.muted = true;
      video.loop = true;
      video.playsInline = true;
      video.setAttribute("aria-label", "CaperBuilds showreel");
      slot.replaceChildren(video);
    }
    slot.classList.add("has-video");
  })();

  // ----- Misc -----
  document.getElementById("year").textContent = new Date().getFullYear();
  const statEl = document.querySelector("[data-stat='builds']");
  if (statEl) statEl.textContent = String(BUILDS.length);

  renderCards("all");
})();
