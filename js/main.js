/* =========================================================
   Shared layout (header/footer) + page interactions
   ========================================================= */

// ---------- Icons (inline SVG, stroke style) ----------
const ICONS = {
  truck: '<path d="M1 3h15v13H1z"/><path d="M16 8h4l3 3v5h-7z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>',
  box: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M3.27 6.96 12 12.01l8.73-5.05"/><path d="M12 22.08V12"/>',
  warehouse: '<path d="M3 21V8l9-5 9 5v13"/><path d="M7 21v-8h10v8"/><path d="M7 17h10"/>',
  gear: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
  map: '<path d="M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4z"/><path d="M8 2v16"/><path d="M16 6v16"/>',
  clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  layers: '<path d="m12 2 10 5-10 5L2 7l10-5z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/>',
  phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/>',
  pin: '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>',
  arrow: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  award: '<circle cx="12" cy="8" r="7"/><path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.12"/>',
  users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  eye: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',
  heart: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  leaf: '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>',
  plane: '<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>',
  train: '<rect x="4" y="3" width="16" height="13" rx="2"/><path d="M4 11h16"/><path d="M12 3v8"/><path d="m8 19-2 3"/><path d="m18 22-2-3"/><circle cx="8" cy="15" r="0.5"/><circle cx="16" cy="15" r="0.5"/>',
  briefcase: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
  quote: '<path d="M3 21c3 0 7-1 7-8V5c0-1.25-.76-2-2-2H4c-1.25 0-2 .75-2 2v6c0 1.25.75 2 2 2h3c0 4-2 6-4 6z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.76-2-2-2h-4c-1.25 0-2 .75-2 2v6c0 1.25.75 2 2 2h3c0 4-2 6-4 6z"/>',
  instagram: '<rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><path d="M17.5 6.5h.01"/>',
  linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
  facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
  up: '<path d="m18 15-6-6-6 6"/>'
};

function svgIcon(name, size = 24) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ""}</svg>`;
}

const WA_SVG = '<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.48.71.31 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.31l-.34-.2-3.57.93.95-3.48-.22-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.2 4.24-9.43 9.44-9.43a9.4 9.4 0 0 1 9.43 9.44c0 5.2-4.24 9.43-9.44 9.43zm8.03-17.46A11.3 11.3 0 0 0 12.05.7C5.8.7.7 5.8.7 12.05c0 2 .52 3.95 1.52 5.66L.6 23.6l6.03-1.58a11.3 11.3 0 0 0 5.42 1.38h.01c6.26 0 11.35-5.09 11.35-11.35 0-3.03-1.18-5.88-3.33-8.02z"/></svg>';

const NAV = [
  { href: "index.html", label: "Home" },
  { href: "about.html", label: "About Us" },
  { href: "services.html", label: "Services" },
  { href: "fleet.html", label: "Our Fleet" },
  { href: "contact.html", label: "Contact" }
];

const telHref = p => "tel:" + p.replace(/[^\d+]/g, "");
const waLink = msg => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;

function currentPage() {
  const file = location.pathname.split("/").pop();
  return file === "" ? "index.html" : file;
}

function socialLinks() {
  return ["instagram", "linkedin", "facebook"]
    .filter(k => SITE.social[k])
    .map(k => `<a href="${SITE.social[k]}" target="_blank" rel="noopener" aria-label="${k}">${svgIcon(k, 18)}</a>`)
    .join("");
}

// ---------- Header ----------
function renderHeader() {
  const el = document.getElementById("site-header");
  if (!el) return;
  const page = currentPage();
  const links = NAV.map(n =>
    `<li><a href="${n.href}" class="${n.href === page ? "active" : ""}">${n.label}</a></li>`).join("");

  el.innerHTML = `
    <div class="topbar">
      <div class="container topbar-inner">
        <div class="topbar-left">
          ${SITE.phones.map(p => `<a href="${telHref(p)}">${svgIcon("phone", 14)} ${p}</a>`).join("")}
          <a href="mailto:${SITE.email}">${svgIcon("mail", 14)} ${SITE.email}</a>
        </div>
        <div class="topbar-right">
          <span>${SITE.about}</span>
        </div>
      </div>
    </div>
    <nav class="navbar">
      <div class="container nav-inner">
        <a href="index.html" class="brand" aria-label="${SITE.name} home">
          <img src="images/logo.png" alt="${SITE.name}" width="150" height="79">
        </a>
        <ul class="nav-links" id="navLinks">${links}
          <li class="nav-cta-mobile"><a href="contact.html" class="btn btn-primary">Book a Truck</a></li>
        </ul>
        <a href="contact.html" class="btn btn-primary nav-cta">Book a Truck</a>
        <button class="nav-toggle" id="navToggle" aria-label="Open menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>`;

  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("navLinks");
  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    toggle.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", open);
    document.body.classList.toggle("menu-open", open);
  });
}

// ---------- Footer ----------
function renderFooter() {
  const el = document.getElementById("site-footer");
  if (!el) return;
  const phones = SITE.phones.map(p => `<a href="${telHref(p)}">${p}</a>`).join("");
  const social = socialLinks();
  el.innerHTML = `
    <footer class="footer">
      <div class="container footer-grid">
        <div class="footer-about">
          <a href="index.html" class="footer-logo"><img src="images/logo.png" alt="${SITE.name}" width="170" height="90"></a>
          <p>${SITE.about}. Trucks from 14 ft to 32 ft multi-axle containers, available for transport all over India.</p>
          ${social ? `<div class="social">${social}</div>` : ""}
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="about.html">About Us</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="fleet.html">Our Fleet</a></li>
            <li><a href="contact.html">Book a Truck</a></li>
            <li><a href="contact.html">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h4>Services</h4>
          <ul>
            <li><a href="services.html#ftl">Full Truck Load</a></li>
            <li><a href="services.html#container">Container Transport</a></li>
            <li><a href="services.html#contract">Contract Vehicles</a></li>
            <li><a href="services.html#industrial">Industrial Goods</a></li>
          </ul>
        </div>
        <div class="footer-contact">
          <h4>Office</h4>
          <p>${svgIcon("pin", 16)} <span>${SITE.address}</span></p>
          <p>${svgIcon("phone", 16)} <span class="stack">${phones}</span></p>
          <p>${svgIcon("mail", 16)} <a href="mailto:${SITE.email}">${SITE.email}</a></p>
          <p>${svgIcon("clock", 16)} <span>${SITE.hours}</span></p>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container footer-bottom-inner">
          <span>© ${new Date().getFullYear()} ${SITE.name}. All rights reserved.</span>
          <span>${SITE.tagline}</span>
        </div>
      </div>
    </footer>
    <a class="wa-float" href="${waLink("Hello " + SITE.name + ", I need a truck.")}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">${WA_SVG}</a>
    <button class="to-top" id="toTop" aria-label="Back to top">${svgIcon("up", 20)}</button>`;

  const toTop = document.getElementById("toTop");
  toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

// ---------- Truck drawing (side view, scales with length) ----------
function truckSVG({ length = 20, axles = 1, label = true, cls = "" } = {}) {
  const W = 70 + length * 7;           // cargo box width
  const x0 = 10 + W + 4;               // cab start
  const total = x0 + 70;
  const rear = [];
  const firstRear = 10 + Math.min(40, W * 0.2);
  if (axles >= 3) rear.push(10 + W - 70, 10 + W - 42, 10 + W - 14);
  else rear.push(firstRear, 10 + W - 30);
  const wheel = cx => `<g class="wheel"><circle cx="${cx}" cy="96" r="14" fill="#1b2433"/><circle cx="${cx}" cy="96" r="8" fill="#cbd5e1"/><circle cx="${cx}" cy="96" r="5.5" fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="3 2.8"/><circle cx="${cx}" cy="96" r="2" fill="#475569"/></g>`;
  const fs = Math.min(22, W / 9);
  return `<svg class="${cls}" viewBox="0 0 ${total} 118" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${length} ft truck">
    <ellipse cx="${total / 2}" cy="112" rx="${total / 2 - 6}" ry="4" fill="rgba(0,0,0,.18)"/>
    <g class="truck-body">
      <rect x="10" y="14" width="${W}" height="72" rx="5" fill="#022a64"/>
      <rect x="10" y="74" width="${W}" height="8" fill="#ee5505"/>
      <path d="M10 22 H${10 + W}" stroke="rgba(255,255,255,.12)" stroke-width="2"/>
      ${label ? `<text x="${10 + W / 2}" y="${50 + fs / 3}" text-anchor="middle" font-family="Poppins, sans-serif" font-weight="800" font-size="${fs}" fill="#fff" letter-spacing="1">OM TRANS INDIA</text>
      <text x="${10 + W / 2}" y="${66 + fs / 6}" text-anchor="middle" font-family="Poppins, sans-serif" font-weight="600" font-size="${fs * 0.42}" fill="#ee5505" letter-spacing="2">SAFE • RELIABLE • ON TIME</text>` : ""}
      <rect x="6" y="86" width="${x0 + 52}" height="6" rx="2" fill="#2b3442"/>
      <path d="M${x0} 88 V40 Q${x0} 30 ${x0 + 10} 30 H${x0 + 36} Q${x0 + 43} 30 ${x0 + 47} 37 L${x0 + 62} 60 Q${x0 + 65} 64 ${x0 + 65} 69 V88 Z" fill="#ee5505"/>
      <path d="M${x0 + 32} 37 H${x0 + 42} L${x0 + 55} 59 H${x0 + 32} Z" fill="#cfe3ff"/>
      <path d="M${x0 + 28} 37 V84" stroke="rgba(0,0,0,.18)" stroke-width="1.5"/>
      <rect x="${x0 + 20}" y="62" width="6" height="2.5" rx="1" fill="rgba(0,0,0,.3)"/>
      <rect x="${x0 + 58}" y="72" width="7" height="6" rx="1.5" fill="#ffe08a"/>
      <rect x="${x0 + 4}" y="40" width="20" height="16" rx="2" fill="#cfe3ff"/>
    </g>
    ${rear.map(wheel).join("")}
    ${wheel(x0 + 44)}
  </svg>`;
}

function renderTrucks() {
  document.querySelectorAll("[data-truck]").forEach(el => {
    el.innerHTML = truckSVG({ length: +el.dataset.truck, axles: +(el.dataset.axles || 1), label: el.dataset.label !== "false", cls: el.dataset.cls || "" });
  });
  document.querySelectorAll("[data-fleet]").forEach(el => {
    const items = el.dataset.fleet === "short" ? FLEET.slice(0, 3) : FLEET;
    el.innerHTML = items.map((f, i) => `
      <article class="fleet-card reveal${i % 3 ? " d" + (i % 3) : ""}">
        <div class="fleet-visual">
          <span class="fleet-size">${f.size}</span>
          ${truckSVG({ length: f.length, axles: f.axles, label: true })}
        </div>
        <div class="fleet-body">
          <h3>${f.name}</h3>
          <p>${f.use}</p>
          <div class="fleet-specs">
            <div><small>Length</small><b>${f.size}</b></div>
            <div><small>Capacity*</small><b>${f.capacity}</b></div>
          </div>
          <a class="btn btn-navy" href="${waLink(`Hello ${SITE.name}, I need a ${f.name}.`)}" target="_blank" rel="noopener">Book this truck ${svgIcon("arrow", 16)}</a>
        </div>
      </article>`).join("");
  });
}

// ---------- Fill [data-icon] and [data-site] placeholders ----------
function fillPlaceholders() {
  document.querySelectorAll("[data-icon]").forEach(el => {
    el.innerHTML = svgIcon(el.dataset.icon, el.dataset.size || 24);
  });
  document.querySelectorAll("[data-site]").forEach(el => {
    const key = el.dataset.site;
    if (key === "phones") el.innerHTML = SITE.phones.map(p => `<a href="${telHref(p)}">${p}</a>`).join("<br>");
    else if (key === "email") el.innerHTML = `<a href="mailto:${SITE.email}">${SITE.email}</a>`;
    else if (SITE[key] !== undefined) el.textContent = SITE[key];
  });
  document.querySelectorAll("[data-map]").forEach(el => { el.src = SITE.mapEmbed; });
  document.querySelectorAll("[data-call]").forEach(el => { el.href = telHref(SITE.phones[0]); });
  document.querySelectorAll("[data-wa-link]").forEach(el => { el.href = waLink(el.dataset.waLink || "Hello " + SITE.name); el.target = "_blank"; el.rel = "noopener"; });
}

// ---------- Scroll effects ----------
function initScroll() {
  const nav = document.querySelector(".navbar");
  const toTop = document.getElementById("toTop");
  const onScroll = () => {
    const y = window.scrollY;
    if (nav) nav.classList.toggle("scrolled", y > 40);
    if (toTop) toTop.classList.toggle("show", y > 500);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Reveal on scroll
  const items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    items.forEach(i => io.observe(i));
  } else {
    items.forEach(i => i.classList.add("visible"));
  }

  // Counters
  const counters = document.querySelectorAll("[data-count]");
  const run = el => {
    const target = +el.dataset.count;
    const suffix = el.dataset.suffix || "";
    const start = performance.now();
    const dur = 1600;
    const step = now => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.floor(target * eased).toLocaleString("en-IN") + suffix;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  if ("IntersectionObserver" in window) {
    const co = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { run(e.target); co.unobserve(e.target); } });
    }, { threshold: 0.5 });
    counters.forEach(c => co.observe(c));
  } else {
    counters.forEach(c => c.textContent = c.dataset.count + (c.dataset.suffix || ""));
  }
}

// ---------- Tabs (contact page, service tabs) ----------
function initTabs() {
  document.querySelectorAll("[data-tabs]").forEach(group => {
    const buttons = group.querySelectorAll("[data-tab]");
    const activate = id => {
      buttons.forEach(b => b.classList.toggle("active", b.dataset.tab === id));
      group.querySelectorAll("[data-panel]").forEach(p => p.classList.toggle("active", p.dataset.panel === id));
    };
    buttons.forEach(b => b.addEventListener("click", () => activate(b.dataset.tab)));
    const hash = location.hash.replace("#", "");
    if (hash && group.querySelector(`[data-tab="${hash}"]`)) activate(hash);
  });
}

// ---------- Forms: no backend yet, so send details via WhatsApp ----------
function initForms() {
  document.querySelectorAll("form[data-wa]").forEach(form => {
    form.addEventListener("submit", e => {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      const lines = [form.dataset.wa];
      new FormData(form).forEach((val, key) => {
        if (String(val).trim()) lines.push(`${key}: ${val}`);
      });
      window.open(waLink(lines.join("\n")), "_blank", "noopener");
      const note = form.querySelector(".form-note");
      if (note) {
        note.textContent = "Thank you! WhatsApp has opened with your details — just press send.";
        note.classList.add("success");
      }
      form.reset();
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
  renderTrucks();
  fillPlaceholders();
  initScroll();
  initTabs();
  initForms();
});
