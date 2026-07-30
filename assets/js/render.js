/* ==========================================================================
   AMANI MIAMI — Card/grid renderers driven by assets/js/data.js
   Every page sets `window.BASE_PATH` ("" at root, "../" one level down)
   before this file loads, so generated links resolve correctly.
   ========================================================================== */

(function () {
  "use strict";
  const BASE = window.BASE_PATH || "";
  const icon = window.amaniIcon;

  function placeholderMedia(label, ratio) {
    return (
      '<div class="placeholder-media' + (ratio ? " ratio-" + ratio : "") + '">' +
      icon("car").replace("<svg", '<svg aria-hidden="true"') +
      '<span class="placeholder-label">' + label + "</span></div>"
    );
  }

  function priceBlock(price, unit) {
    if (price) return '<div class="card-price">$' + price + '<small>' + (unit || "per day") + "</small></div>";
    return '<div class="card-price">Request<small>Pricing</small></div>';
  }

  function waLink(message) {
    return SITE.whatsappHref + "?text=" + encodeURIComponent(message);
  }

  /* ------------------------------------ Vehicle row ----------------------------------------- */
  function vehicleCard(v) {
    const href = waLink("Hi, I'm interested in the " + v.brand + " " + v.model + ". Could you share availability and pricing?");
    return (
      '<a class="fleet-row" href="' + href + '" target="_blank" rel="noopener">' +
      '<div class="fleet-row-info">' +
      '<span class="fleet-row-eyebrow">' + v.category + (v.badge ? " · " + v.badge : "") + "</span>" +
      '<h3 class="fleet-row-title">' + v.brand + " " + v.model + "</h3>" +
      '<div class="fleet-row-meta">' +
      "<span>" + v.seats + " seats</span>" +
      "<span>" + v.doors + " doors</span>" +
      "<span>" + v.transmission + "</span>" +
      "</div></div>" +
      '<div class="fleet-row-cta">' +
      '<span class="fleet-row-price">' + (v.price ? "$" + v.price + "/day" : "Request Pricing") + "</span>" +
      icon("whatsapp") +
      "</div></a>"
    );
  }

  /* ------------------------------------- Yacht card ----------------------------------------- */
  function yachtCard(y) {
    const href = waLink("Hi, I'm interested in the " + y.name + " yacht. Could you share availability and pricing?");
    return (
      '<article class="card yacht-card">' +
      '<div class="card-media">' +
      (y.badge ? '<span class="card-badge">' + y.badge + "</span>" : "") +
      '<button class="card-fav" data-fav-id="yacht-' + y.slug + '" aria-pressed="false" aria-label="Save ' + y.name + ' to favorites">' + icon("heart") + "</button>" +
      '<a href="' + href + '" target="_blank" rel="noopener" aria-hidden="true" tabindex="-1">' + placeholderMedia(y.name, "4-3") + "</a>" +
      "</div>" +
      '<div class="card-body">' +
      '<span class="card-eyebrow">' + y.category + "</span>" +
      '<h3 class="card-title"><a href="' + href + '" target="_blank" rel="noopener">' + y.name + "</a></h3>" +
      '<div class="card-meta">' +
      '<span>' + icon("anchor") + y.length + "</span>" +
      '<span>' + icon("users") + y.guests + " guests</span>" +
      '<span>' + icon("crew") + y.crew + "</span>" +
      "</div>" +
      '<div class="card-footer">' +
      priceBlock(y.price, "starting") +
      '<a class="btn btn-gold" href="' + href + '" target="_blank" rel="noopener">' + icon("whatsapp") + " Inquire</a>" +
      "</div></div></article>"
    );
  }

  /* ----------------------------------- Property card ---------------------------------------- */
  function propertyCard(p) {
    const href = waLink("Hi, I'm interested in the " + p.name + ". Could you share availability and pricing?");
    return (
      '<article class="card property-card">' +
      '<div class="card-media">' +
      (p.badge ? '<span class="card-badge">' + p.badge + "</span>" : "") +
      '<button class="card-fav" data-fav-id="property-' + p.slug + '" aria-pressed="false" aria-label="Save ' + p.name + ' to favorites">' + icon("heart") + "</button>" +
      '<a href="' + href + '" target="_blank" rel="noopener" aria-hidden="true" tabindex="-1">' + placeholderMedia(p.name, "4-3") + "</a>" +
      "</div>" +
      '<div class="card-body">' +
      '<span class="card-eyebrow">' + p.category + " · " + p.area + "</span>" +
      '<h3 class="card-title"><a href="' + href + '" target="_blank" rel="noopener">' + p.name + "</a></h3>" +
      '<div class="card-meta">' +
      '<span>' + icon("bed") + p.bedrooms + " bed</span>" +
      '<span>' + icon("bath") + p.bathrooms + " bath</span>" +
      '<span>' + icon("users") + p.guests + " guests</span>" +
      "</div>" +
      '<div class="card-footer">' +
      priceBlock(p.price, "per night") +
      '<a class="btn btn-gold" href="' + href + '" target="_blank" rel="noopener">' + icon("whatsapp") + " Inquire</a>" +
      "</div></div></article>"
    );
  }

  /* ------------------------------------ Service row ----------------------------------------- */
  function serviceCard(s) {
    const href = waLink("Hi, I'm interested in " + s.name + ". Could you share more details?");
    return (
      '<a class="fleet-row" href="' + href + '" target="_blank" rel="noopener">' +
      '<div class="fleet-row-info">' +
      '<h3 class="fleet-row-title">' + s.name + "</h3>" +
      '<p class="fleet-row-desc">' + s.short + "</p>" +
      "</div>" +
      '<div class="fleet-row-cta">' + icon("whatsapp") + "</div></a>"
    );
  }

  /* ------------------------------------- Location chips ------------------------------------- */
  function locationChips(list) {
    return list.map((l) => '<span class="location-chip">' + icon("pin") + l.name + "</span>").join("");
  }

  /* ---------------------------------------- FAQ list ------------------------------------------ */
  function faqList(items, singleOpen) {
    return items
      .map(
        (item, idx) =>
          '<div class="faq-item">' +
          '<h3><button class="faq-question" aria-expanded="false" id="faq-q-' + idx + '">' +
          "<span>" + item.q + "</span>" + icon("plus") +
          "</button></h3>" +
          '<div class="faq-answer"><div class="faq-answer-inner">' + item.a + "</div></div>" +
          "</div>"
      )
      .join("");
  }

  /* ------------------------------------- Generic mount helper ---------------------------------- */
  function mount(id, html) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
    return el;
  }

  /* =========================================== INIT =========================================== */
  document.addEventListener("DOMContentLoaded", () => {
    /* Home — featured fleet */
    const featuredGrid = document.getElementById("featured-fleet-grid");
    if (featuredGrid) {
      mount("featured-fleet-grid", VEHICLES.filter((v) => v.featured).map(vehicleCard).join(""));
    }

    /* Home — beyond the drive locations, faq preview */
    mount("home-locations", locationChips(LOCATIONS));
    const homeYachts = document.getElementById("home-yacht-grid");
    if (homeYachts) mount("home-yacht-grid", YACHTS.slice(0, 3).map(yachtCard).join(""));
    const homeProperties = document.getElementById("home-property-grid");
    if (homeProperties) mount("home-property-grid", PROPERTIES.slice(0, 3).map(propertyCard).join(""));
    const homeFaq = document.getElementById("home-faq-list");
    if (homeFaq) {
      const flatFaqs = [].concat(...Object.values(FAQS)).slice(0, 10);
      mount("home-faq-list", faqList(flatFaqs));
    }

    /* Cars listing page */
    const fleetGrid = document.getElementById("fleet-grid");
    if (fleetGrid) {
      const resultCount = document.getElementById("fleet-result-count");
      const emptyState = document.getElementById("fleet-empty-state");
      const brandSelect = document.getElementById("filter-brand");
      const sortSelect = document.getElementById("filter-sort");
      const clearBtn = document.getElementById("fleet-clear-filters");
      const params = new URLSearchParams(window.location.search);
      const state = { category: params.get("category") || "all", brand: params.get("brand") || "", sort: "featured" };

      const renderFleet = () => {
        let list = VEHICLES.slice();
        if (state.category !== "all") list = list.filter((v) => v.category === state.category);
        if (state.brand) list = list.filter((v) => v.brand === state.brand);
        if (state.sort === "newest") list.sort((a, b) => b.year - a.year);
        else if (state.sort === "featured") list.sort((a, b) => (b.featured === true) - (a.featured === true));
        fleetGrid.innerHTML = list.map(vehicleCard).join("");
        fleetGrid.style.display = list.length ? "" : "none";
        if (emptyState) emptyState.hidden = list.length > 0;
        if (resultCount) resultCount.textContent = list.length + (list.length === 1 ? " vehicle" : " vehicles") + " found";
      };

      if (brandSelect) {
        VEHICLE_BRANDS.forEach((b) => {
          const opt = document.createElement("option");
          opt.value = b; opt.textContent = b;
          if (b === state.brand) opt.selected = true;
          brandSelect.appendChild(opt);
        });
        brandSelect.addEventListener("change", () => { state.brand = brandSelect.value; renderFleet(); });
      }
      if (sortSelect) sortSelect.addEventListener("change", () => { state.sort = sortSelect.value; renderFleet(); });
      if (clearBtn) clearBtn.addEventListener("click", () => {
        state.category = "all"; state.brand = ""; state.sort = "featured";
        if (brandSelect) brandSelect.value = "";
        if (sortSelect) sortSelect.value = "featured";
        const chipGroup = document.querySelector('[data-filter-group="vehicle-category"]');
        if (chipGroup) { chipGroup.querySelectorAll(".filter-chip").forEach((c) => c.classList.remove("is-active")); chipGroup.querySelector('[data-value="all"]').classList.add("is-active"); }
        renderFleet();
      });

      renderFleet();
      const chipGroup = document.querySelector('[data-filter-group="vehicle-category"]');
      if (chipGroup && state.category !== "all") {
        chipGroup.querySelectorAll(".filter-chip").forEach((c) => c.classList.remove("is-active"));
        const match = chipGroup.querySelector('[data-value="' + state.category + '"]');
        if (match) match.classList.add("is-active");
      }
      document.addEventListener("amani:filter-change", (e) => {
        if (e.detail.group === "vehicle-category") { state.category = e.detail.value; renderFleet(); }
      });
    }

    /* Yachts listing page */
    const yachtGrid = document.getElementById("yacht-grid");
    if (yachtGrid) mount("yacht-grid", YACHTS.map(yachtCard).join(""));

    /* Properties listing page */
    const propertyGrid = document.getElementById("property-grid");
    if (propertyGrid) {
      const renderProperties = (category) => {
        const list = !category || category === "all" ? PROPERTIES : PROPERTIES.filter((p) => p.category === category);
        propertyGrid.innerHTML = list.map(propertyCard).join("");
      };
      renderProperties("all");
      document.querySelectorAll('[data-filter-group] .filter-chip').forEach((chip) => {
        chip.addEventListener("click", () => {
          const group = chip.closest('[data-filter-group]');
          group.querySelectorAll(".filter-chip").forEach((c) => c.classList.remove("is-active"));
          chip.classList.add("is-active");
          renderProperties(chip.getAttribute("data-value"));
        });
      });
    }

    /* Services overview page */
    const serviceGrid = document.getElementById("service-grid");
    if (serviceGrid) mount("service-grid", SERVICES.map(serviceCard).join(""));

    /* Related grids on detail pages */
    document.querySelectorAll("[data-related-vehicles]").forEach((el) => {
      const excludeSlug = el.getAttribute("data-exclude");
      el.innerHTML = VEHICLES.filter((v) => v.slug !== excludeSlug).slice(0, 3).map(vehicleCard).join("");
    });
    document.querySelectorAll("[data-related-yachts]").forEach((el) => {
      const excludeSlug = el.getAttribute("data-exclude");
      el.innerHTML = YACHTS.filter((y) => y.slug !== excludeSlug).slice(0, 3).map(yachtCard).join("");
    });
    document.querySelectorAll("[data-related-properties]").forEach((el) => {
      const excludeSlug = el.getAttribute("data-exclude");
      el.innerHTML = PROPERTIES.filter((p) => p.slug !== excludeSlug).slice(0, 3).map(propertyCard).join("");
    });
    document.querySelectorAll("[data-related-services]").forEach((el) => {
      const excludeSlug = el.getAttribute("data-exclude");
      el.innerHTML = SERVICES.filter((s) => s.slug !== excludeSlug).slice(0, 3).map(serviceCard).join("");
    });

    /* FAQ page (full, grouped by category with tabs) */
    const faqFull = document.getElementById("faq-full");
    if (faqFull) {
      let html = "";
      Object.keys(FAQS).forEach((cat) => {
        html += '<div data-faq-category="' + cat + '"><h2 class="h3 mb-3">' + cat + '</h2><div class="faq-list" data-single-open>' + faqList(FAQS[cat]) + "</div></div>";
      });
      faqFull.innerHTML = html;
      rebindFaq();
    }

    /* Filter chip groups: category filter on cars.html */
    document.querySelectorAll("[data-filter-group]").forEach((group) => {
      const first = group.querySelector(".filter-chip");
      if (first) first.classList.add("is-active");
    });

    rebindFaq();
    rebindFav();
  });

  function rebindFaq() {
    document.querySelectorAll(".faq-question").forEach((btn) => {
      if (btn.dataset.bound) return;
      btn.dataset.bound = "1";
      btn.addEventListener("click", () => {
        const item = btn.closest(".faq-item");
        const list = item.closest(".faq-list");
        const isOpen = item.classList.contains("is-open");
        if (list && list.hasAttribute("data-single-open")) {
          list.querySelectorAll(".faq-item").forEach((i) => {
            i.classList.remove("is-open");
            const q = i.querySelector(".faq-question");
            if (q) q.setAttribute("aria-expanded", "false");
          });
        }
        item.classList.toggle("is-open", !isOpen);
        btn.setAttribute("aria-expanded", String(!isOpen));
      });
    });
  }
  function rebindFav() {
    document.querySelectorAll(".card-fav").forEach((btn) => {
      const id = btn.getAttribute("data-fav-id");
      try {
        const favs = JSON.parse(localStorage.getItem("amani_favorites")) || [];
        if (id && favs.includes(id)) {
          btn.classList.add("is-active");
          btn.setAttribute("aria-pressed", "true");
        }
      } catch (e) {}
    });
  }

  window.amaniPlaceholderMedia = placeholderMedia;
  window.amaniCards = { vehicleCard, yachtCard, propertyCard, serviceCard, faqList, locationChips };
})();
