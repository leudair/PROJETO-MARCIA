/* ==========================================================================
   AMANI MIAMI — Global interactions
   Header scroll state, mega menu, mobile menu, FAQ accordion, reveal-on-
   scroll, favorites (local, account-free), form handling, active nav state.
   ========================================================================== */

(function () {
  "use strict";

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ------------------------- Cinematic background video performance ------------------------- */
  /* Background videos in .media-bg only play while their panel is on screen, and never at all
     if the visitor has requested reduced motion (the poster frame is shown instead). */
  const bgVideos = document.querySelectorAll(".media-bg video");
  if (bgVideos.length) {
    if (prefersReducedMotion) {
      bgVideos.forEach((v) => v.pause());
    } else if ("IntersectionObserver" in window) {
      const videoIO = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) entry.target.play().catch(() => {});
            else entry.target.pause();
          });
        },
        { threshold: 0.2 }
      );
      bgVideos.forEach((v) => videoIO.observe(v));
    }
  }

  /* ------------------------------ Header scroll state ------------------------------ */
  const header = document.querySelector(".site-header");
  if (header) {
    const setScrolled = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 40);
    };
    setScrolled();
    window.addEventListener("scroll", setScrolled, { passive: true });
  }

  /* --------------------------------- Active nav link -------------------------------- */
  const currentPage = document.body.getAttribute("data-page");
  if (currentPage) {
    document.querySelectorAll("[data-nav-key]").forEach((link) => {
      if (link.getAttribute("data-nav-key") === currentPage) {
        link.setAttribute("aria-current", "page");
      }
    });
  }

  /* ------------------------------------ Mega menu ------------------------------------ */
  const navItems = document.querySelectorAll(".nav-item");
  navItems.forEach((item) => {
    const trigger = item.querySelector("button.nav-link");
    if (!trigger) return;
    const open = () => {
      navItems.forEach((i) => i.classList.remove("is-open"));
      item.classList.add("is-open");
      trigger.setAttribute("aria-expanded", "true");
    };
    const close = () => {
      item.classList.remove("is-open");
      trigger.setAttribute("aria-expanded", "false");
    };
    trigger.addEventListener("click", (e) => {
      e.stopPropagation();
      item.classList.contains("is-open") ? close() : open();
    });
    item.addEventListener("mouseenter", () => window.innerWidth > 1080 && open());
    item.addEventListener("mouseleave", () => window.innerWidth > 1080 && close());
    trigger.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close();
    });
  });
  document.addEventListener("click", () => {
    navItems.forEach((i) => {
      i.classList.remove("is-open");
      const t = i.querySelector("button.nav-link");
      if (t) t.setAttribute("aria-expanded", "false");
    });
  });

  /* ------------------------------------ Mobile menu ----------------------------------- */
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileClose = document.querySelector(".mobile-menu-close");
  if (menuToggle && mobileMenu) {
    const openMobile = () => {
      mobileMenu.classList.add("is-open");
      menuToggle.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
    };
    const closeMobile = () => {
      mobileMenu.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    };
    menuToggle.addEventListener("click", openMobile);
    if (mobileClose) mobileClose.addEventListener("click", closeMobile);
    mobileMenu.querySelectorAll(".mobile-menu > nav > a").forEach((a) => a.addEventListener("click", closeMobile));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMobile();
    });
  }

  /* -------------------------------------- FAQ accordion -------------------------------- */
  document.querySelectorAll(".faq-question").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq-item");
      const isOpen = item.classList.contains("is-open");
      if (item.closest(".faq-list").hasAttribute("data-single-open")) {
        item.parentElement.querySelectorAll(".faq-item").forEach((i) => {
          i.classList.remove("is-open");
          i.querySelector(".faq-question").setAttribute("aria-expanded", "false");
        });
      }
      item.classList.toggle("is-open", !isOpen);
      btn.setAttribute("aria-expanded", String(!isOpen));
    });
  });

  document.querySelectorAll(".faq-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      const group = tab.closest(".faq-category-tabs");
      group.querySelectorAll(".faq-tab").forEach((t) => t.classList.remove("is-active"));
      tab.classList.add("is-active");
      const target = tab.getAttribute("data-target");
      document.querySelectorAll("[data-faq-category]").forEach((section) => {
        section.hidden = section.getAttribute("data-faq-category") !== target && target !== "all";
      });
    });
  });

  /* ------------------------------------ Reveal on scroll -------------------------------- */
  if (!prefersReducedMotion && "IntersectionObserver" in window) {
    const revealTargets = document.querySelectorAll("[data-reveal], [data-reveal-group]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    revealTargets.forEach((el) => io.observe(el));
  } else {
    document.querySelectorAll("[data-reveal], [data-reveal-group]").forEach((el) => el.classList.add("is-visible"));
  }

  /* ---------------------------------------- Favorites ------------------------------------ */
  const FAV_KEY = "amani_favorites";
  const getFavorites = () => {
    try { return JSON.parse(localStorage.getItem(FAV_KEY)) || []; } catch (e) { return []; }
  };
  const setFavorites = (list) => localStorage.setItem(FAV_KEY, JSON.stringify(list));

  document.addEventListener("click", (e) => {
    const favBtn = e.target.closest(".card-fav");
    if (!favBtn) return;
    const id = favBtn.getAttribute("data-fav-id");
    if (!id) return;
    let favs = getFavorites();
    if (favs.includes(id)) {
      favs = favs.filter((f) => f !== id);
      favBtn.classList.remove("is-active");
      favBtn.setAttribute("aria-pressed", "false");
    } else {
      favs.push(id);
      favBtn.classList.add("is-active");
      favBtn.setAttribute("aria-pressed", "true");
    }
    setFavorites(favs);
  });

  document.querySelectorAll(".card-fav").forEach((btn) => {
    const id = btn.getAttribute("data-fav-id");
    if (id && getFavorites().includes(id)) {
      btn.classList.add("is-active");
      btn.setAttribute("aria-pressed", "true");
    }
  });

  /* -------------------------------------- Filter chips ------------------------------------ */
  document.querySelectorAll("[data-filter-group]").forEach((group) => {
    group.querySelectorAll(".filter-chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        group.querySelectorAll(".filter-chip").forEach((c) => c.classList.remove("is-active"));
        chip.classList.add("is-active");
        const evt = new CustomEvent("amani:filter-change", { detail: { group: group.getAttribute("data-filter-group"), value: chip.getAttribute("data-value") } });
        document.dispatchEvent(evt);
      });
    });
  });

  /* -------------------------------------- Newsletter (footer) ------------------------------ */
  document.querySelectorAll("form[data-newsletter-form]").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const note = form.querySelector(".form-note-status");
      if (note) note.textContent = "Thank you — you're on the list.";
      form.reset();
    });
  });
})();
