/* ==========================================================================
   AMANI MIAMI — Shared header, mobile menu, footer and sticky mobile bar.
   Injected at parse time into mount points already present in each page's
   HTML, so there is one source of truth for global chrome across ~25 pages.
   Requires: icons.js, data.js loaded first. Runs synchronously (script tag
   placed after the mount divs) so main.js can bind to it immediately after.
   ========================================================================== */
(function () {
  "use strict";
  const BASE = window.BASE_PATH || "";
  const icon = window.amaniIcon;
  const page = document.body.getAttribute("data-page") || "";

  const topServices = SERVICES.slice(0, 6);
  const topBrands = VEHICLE_BRANDS.slice(0, 6);
  const topCategories = ["Supercars", "Luxury SUVs", "Ultra-Luxury Sedans", "Exotic Convertibles", "Sports Cars", "Long-Term Rental Vehicles"];

  function headerHTML() {
    return `
<a href="${BASE}index.html" class="skip-link">Skip to content</a>
<header class="site-header">
  <div class="container container--wide header-inner">
    <a href="${BASE}index.html" class="logo" aria-label="Amani Miami home">${icon("sparkle")}<span>Amani <em>Miami</em></span></a>

    <nav class="main-nav" aria-label="Primary">
      <ul>
        <li class="nav-item">
          <button class="nav-link" type="button" aria-expanded="false" aria-haspopup="true" data-nav-key="cars">Cars ${icon("chevronDown")}</button>
          <div class="mega-menu" role="menu">
            <div class="mega-menu-col">
              <h5>Brands</h5>
              ${topBrands.map((b) => `<a href="${BASE}cars.html?brand=${encodeURIComponent(b)}">${b}</a>`).join("")}
            </div>
            <div class="mega-menu-col">
              <h5>Categories</h5>
              ${topCategories.map((c) => `<a href="${BASE}cars.html?category=${encodeURIComponent(c)}">${c}</a>`).join("")}
            </div>
            <div class="mega-menu-col">
              <h5>Fleet</h5>
              <a href="${BASE}cars.html">View Full Fleet</a>
              <a href="${BASE}vehicle-partners.html">Vehicle Partner Program</a>
              <a href="${BASE}personalized-requests.html">Personalized Requests</a>
            </div>
          </div>
        </li>
        <li class="nav-item">
          <button class="nav-link" type="button" aria-expanded="false" aria-haspopup="true" data-nav-key="services">Services ${icon("chevronDown")}</button>
          <div class="mega-menu" role="menu">
            <div class="mega-menu-col">
              <h5>Popular Services</h5>
              ${topServices.slice(0, 3).map((s) => `<a href="${BASE}services/${s.slug}.html">${s.name}</a>`).join("")}
            </div>
            <div class="mega-menu-col">
              <h5>&nbsp;</h5>
              ${topServices.slice(3, 6).map((s) => `<a href="${BASE}services/${s.slug}.html">${s.name}</a>`).join("")}
            </div>
            <div class="mega-menu-col">
              <h5>Explore</h5>
              <a href="${BASE}services.html">All Services</a>
              <a href="${BASE}personalized-requests.html">Exclusive Inquiries</a>
            </div>
          </div>
        </li>
        <li><a class="nav-link" data-nav-key="yachts" href="${BASE}yachts.html">Yachts</a></li>
        <li><a class="nav-link" data-nav-key="properties" href="${BASE}properties.html">Properties</a></li>
        <li class="nav-item">
          <button class="nav-link" type="button" aria-expanded="false" aria-haspopup="true" data-nav-key="info">Info ${icon("chevronDown")}</button>
          <div class="mega-menu info-menu" role="menu">
            <div class="mega-menu-col">
              <a href="${BASE}about.html">About</a>
              <a href="${BASE}partners.html">Partners</a>
              <a href="${BASE}blog.html">Blog</a>
              <a href="${BASE}faq.html">FAQ</a>
              <a href="${BASE}contact.html">Contact</a>
              <a href="${BASE}terms-and-conditions.html">Terms and Conditions</a>
              <a href="${BASE}privacy-policy.html">Privacy Policy</a>
            </div>
          </div>
        </li>
      </ul>
    </nav>

    <div class="header-actions">
      <span class="rating-chip">${icon("star")} ${SITE.rating} · ${SITE.reviewCount}</span>
      <a class="header-phone" href="${SITE.phoneHref}">${icon("phone")}<span class="phone-label">${SITE.phone}</span></a>
      <a class="btn btn-gold" href="${BASE}personalized-requests.html">Reserve Now</a>
      <button class="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu">${icon("menu")}</button>
    </div>
  </div>
</header>`;
  }

  function mobileMenuHTML() {
    const groups = [
      { key: "cars", label: "Cars", href: BASE + "cars.html", items: topBrands.map((b) => ({ label: b, href: BASE + "cars.html?brand=" + encodeURIComponent(b) })) },
      { key: "services", label: "Services", href: BASE + "services.html", items: SERVICES.map((s) => ({ label: s.name, href: BASE + "services/" + s.slug + ".html" })) },
      { key: "info", label: "Info", href: null, items: [
        { label: "About", href: BASE + "about.html" }, { label: "Partners", href: BASE + "partners.html" },
        { label: "Blog", href: BASE + "blog.html" }, { label: "FAQ", href: BASE + "faq.html" },
        { label: "Contact", href: BASE + "contact.html" }, { label: "Terms and Conditions", href: BASE + "terms-and-conditions.html" },
        { label: "Privacy Policy", href: BASE + "privacy-policy.html" }
      ]}
    ];
    return `
<div class="mobile-menu" id="mobile-menu">
  <div class="mobile-menu-header">
    <a href="${BASE}index.html" class="logo">${icon("sparkle")}<span>Amani <em>Miami</em></span></a>
    <button class="btn-icon mobile-menu-close" aria-label="Close menu">${icon("close")}</button>
  </div>
  <nav>
    ${groups.map((g, i) => `
    <button class="mobile-accordion-trigger" aria-expanded="false" aria-controls="mm-sub-${i}">${g.label} ${icon("chevronDown")}</button>
    <div class="mobile-submenu" id="mm-sub-${i}">
      ${g.href ? `<a href="${g.href}">View All ${g.label}</a>` : ""}
      ${g.items.map((it) => `<a href="${it.href}">${it.label}</a>`).join("")}
    </div>`).join("")}
    <a href="${BASE}yachts.html">Yachts</a>
    <a href="${BASE}properties.html">Properties</a>
  </nav>
  <div class="mobile-menu-actions">
    <a class="btn btn-gold btn-block" href="${SITE.phoneHref}">${icon("phone")} Call ${SITE.phone}</a>
    <a class="btn btn-outline btn-block" href="${SITE.whatsappHref}" target="_blank" rel="noopener">${icon("whatsapp")} WhatsApp</a>
    <a class="btn btn-dark btn-block" href="${BASE}personalized-requests.html">Reserve Now</a>
  </div>
</div>`;
  }

  function stickyBarHTML() {
    return `
<div class="mobile-action-bar">
  <a href="${SITE.phoneHref}">${icon("phone")}Call</a>
  <a href="${SITE.whatsappHref}" target="_blank" rel="noopener">${icon("whatsapp")}WhatsApp</a>
  <a class="is-primary" href="${BASE}personalized-requests.html">${icon("sparkle")}Reserve</a>
</div>`;
  }

  function footerHTML() {
    return `
<footer class="site-footer">
  <div class="container container--wide">
    <div class="footer-grid">
      <div class="footer-col footer-brand">
        <a href="${BASE}index.html" class="logo">${icon("sparkle")}<span>Amani <em>Miami</em></span></a>
        <p>Amani Miami is South Florida's premier destination for luxury and exotic car rentals, offering an elite fleet of privately owned vehicles including Lamborghini, Ferrari, Rolls-Royce and more. The company specializes in personalized high-end experiences, premium delivery, airport coordination and luxury lifestyle services throughout Miami Beach, South Beach, Fort Lauderdale and beyond.</p>
        <div class="footer-rating">${icon("star")} <span>${SITE.rating} on Google · ${SITE.reviewCount} reviews</span></div>
        <div class="footer-social"><a class="btn-icon" href="${SITE.instagramUrl}" target="_blank" rel="noopener" aria-label="Amani Miami on Instagram">${icon("instagram")}</a></div>
      </div>
      <div class="footer-col">
        <h5>Info</h5>
        <a href="${BASE}about.html">About</a>
        <a href="${BASE}cars.html">Cars</a>
        <a href="${BASE}properties.html">Villas</a>
        <a href="${BASE}yachts.html">Yachts</a>
        <a href="${BASE}partners.html">Partners</a>
        <a href="${BASE}services.html">Services</a>
        <a href="${BASE}blog.html">Blog</a>
        <a href="${BASE}contact.html">Contact</a>
      </div>
      <div class="footer-col">
        <h5>Quick Links</h5>
        <a href="${BASE}index.html#featured-fleet">Highlights</a>
        <a href="${BASE}faq.html">FAQ</a>
        <a href="${BASE}personalized-requests.html">Personalized Requests</a>
        <a href="${BASE}vehicle-partners.html">Vehicle Partner Program</a>
        <a href="${BASE}terms-and-conditions.html">Terms and Conditions</a>
        <a href="${BASE}privacy-policy.html">Privacy Policy</a>
      </div>
      <div class="footer-col">
        <h5>Contact</h5>
        <a href="${SITE.phoneHref}">${SITE.phone}</a>
        <a href="mailto:${SITE.email}">${SITE.email}</a>
        <a href="${SITE.instagramUrl}" target="_blank" rel="noopener">Instagram: ${SITE.instagramHandle}</a>
      </div>
      <div class="footer-col">
        <h5>Locations</h5>
        ${LOCATIONS.slice(0, 7).map((l) => `<span>${l.name}</span>`).join("")}
      </div>
    </div>
    <div class="footer-bottom">
      <span>${SITE.copyrightLine}</span>
      <div class="footer-bottom-links">
        <a href="${BASE}terms-and-conditions.html">Terms and Conditions</a>
        <a href="${BASE}privacy-policy.html">Privacy Policy</a>
      </div>
    </div>
  </div>
</footer>`;
  }

  function whatsappFloatHTML() {
    return `<a class="whatsapp-float" href="${SITE.whatsappHref}" target="_blank" rel="noopener" aria-label="Chat with Amani Miami on WhatsApp">${icon("whatsapp")}</a>`;
  }

  const headerMount = document.getElementById("site-header-mount");
  const footerMount = document.getElementById("site-footer-mount");
  if (headerMount) headerMount.outerHTML = headerHTML() + mobileMenuHTML() + stickyBarHTML();
  if (footerMount) footerMount.outerHTML = footerHTML() + whatsappFloatHTML();
})();
