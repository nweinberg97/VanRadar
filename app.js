(() => {
  "use strict";

  // Twelve categories = twelve 30° sectors on the scope, like a clock face.
  const CATEGORIES = [
    { id: "ai",        label: "AI & Robotics",  h: 262 },
    { id: "quantum",   label: "Quantum",        h: 192 },
    { id: "bio",       label: "Biotech",        h: 328 },
    { id: "health",    label: "Health",         h: 4 },
    { id: "climate",   label: "Climate & Energy", h: 148 },
    { id: "fintech",   label: "Fintech",        h: 44 },
    { id: "software",  label: "Software",       h: 214 },
    { id: "marketing", label: "Marketing",      h: 292 },
    { id: "commerce",  label: "Commerce",       h: 24 },
    { id: "mobility",  label: "Mobility",       h: 172 },
    { id: "media",     label: "Games & Media",  h: 350 },
    { id: "earth",     label: "Earth & Ag",     h: 96 }
  ];
  const CAT = Object.fromEntries(CATEGORIES.map((c, i) => [c.id, { ...c, i }]));

  // Query expansion so "healthcare" also finds "clinic", "ai" finds "robots", etc.
  const SYNONYMS = [
    ["ai", "artificial intelligence", "machine learning", "ml", "llm", "generative", "robot", "robotics", "neural"],
    ["health", "healthcare", "medical", "medtech", "clinic", "patient", "heart"],
    ["biotech", "bio", "life sciences", "drug", "pharma", "therapeutic", "antibody", "mrna", "cell"],
    ["climate", "cleantech", "clean", "energy", "carbon", "hydrogen", "fusion", "sustainability", "green"],
    ["fintech", "finance", "bank", "banking", "payments", "money", "investing"],
    ["quantum", "qubit", "qubits"],
    ["games", "gaming", "game"],
    ["ecommerce", "commerce", "retail", "shop", "store", "dtc"],
    ["transit", "transportation", "mobility", "logistics", "delivery", "fleet"],
    ["agtech", "agriculture", "farming", "farm", "food"],
    ["security", "cybersecurity", "identity"],
    ["devtools", "developer", "developers", "api", "open source"]
  ];

  const DATA = (window.VANRADAR_COMPANIES || []).map((c, idx) => {
    const cat = CAT[c.c] || CAT.software;
    const hay = `${c.n} ${c.l} ${cat.label} ${c.k || ""}`.toLowerCase();
    return {
      id: idx,
      name: c.n,
      line: c.l,
      url: c.u,
      domain: c.u.replace(/^https?:\/\/(www\.)?/, "").replace(/\/.*$/, ""),
      cat,
      hay,
      initials: initialsOf(c.n),
      h1: hash(c.n + "a"),
      h2: hash(c.n + "b")
    };
  });

  // ---------- helpers ----------
  function hash(s) {
    let h = 2166136261;
    for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
    return ((h >>> 0) % 10000) / 10000;
  }
  function initialsOf(name) {
    const words = name.replace(/[^A-Za-z0-9 \-]/g, "").split(/[\s\-]+/).filter(Boolean);
    if (words.length === 1) return words[0].slice(0, 2);
    return (words[0][0] + words[1][0]).toUpperCase();
  }
  const esc = (s) => s.replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));
  const reEsc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  function seeded(seed) {
    let t = seed >>> 0;
    return () => { t += 0x6d2b79f5; let r = Math.imul(t ^ (t >>> 15), 1 | t); r ^= r + Math.imul(r ^ (r >>> 7), 61 | r); return ((r ^ (r >>> 14)) >>> 0) / 4294967296; };
  }
  function shuffle(arr, rand) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rand() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  }

  // ---------- state ----------
  const today = new Date();
  const daySeed = today.getFullYear() * 1000 + Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 864e5);
  const state = {
    q: "",
    cat: null,
    order: "radar",
    shuffled: shuffle(DATA, seeded(daySeed))
  };

  // ---------- search ----------
  function expandToken(tok) {
    const out = new Set([tok]);
    for (const group of SYNONYMS) {
      if (group.some((g) => g === tok || (tok.length >= 3 && g.startsWith(tok)))) group.forEach((g) => out.add(g));
    }
    return [...out];
  }
  function compile(q) {
    const tokens = q.toLowerCase().trim().split(/\s+/).filter(Boolean);
    return tokens.map((t) => {
      const terms = expandToken(t);
      // Word-start matching so "ai" doesn't match "maintain".
      return { raw: t, re: new RegExp(`(^|[^a-z0-9])(${terms.map(reEsc).join("|")})`, "i"), terms };
    });
  }
  function score(item, compiled) {
    let s = 0;
    for (const c of compiled) {
      if (!c.re.test(item.hay)) return -1;
      const nameHit = item.name.toLowerCase().startsWith(c.raw) ? 6 : c.re.test(item.name.toLowerCase()) ? 4 : 0;
      const lineHit = c.re.test(item.line.toLowerCase()) ? 2 : 0;
      const catHit = c.re.test(item.cat.label.toLowerCase()) ? 2 : 0;
      s += 1 + nameHit + lineHit + catHit;
    }
    return s;
  }
  function highlight(text, compiled) {
    let html = esc(text);
    if (!compiled.length) return html;
    const terms = [...new Set(compiled.flatMap((c) => c.terms))].sort((a, b) => b.length - a.length);
    const re = new RegExp(`(^|[^A-Za-z0-9])(${terms.map((t) => reEsc(esc(t))).join("|")})`, "gi");
    return html.replace(re, (m, pre, word) => `${pre}<mark>${word}</mark>`);
  }
  function results() {
    const compiled = compile(state.q);
    const base = state.order === "az" ? DATA.slice().sort((a, b) => a.name.localeCompare(b.name)) : state.shuffled;
    let list = base.filter((d) => !state.cat || d.cat.id === state.cat);
    if (compiled.length) {
      list = list.map((d) => ({ d, s: score(d, compiled) })).filter((x) => x.s >= 0);
      if (state.order === "radar") list.sort((a, b) => b.s - a.s);
      list = list.map((x) => x.d);
    }
    return { list, compiled };
  }

  // ---------- DOM ----------
  const $ = (sel) => document.querySelector(sel);
  const grid = $("#grid");
  const empty = $("#empty");
  const input = $("#q");
  const chipsEl = $("#chips");
  const countEl = $("#count");

  function renderChips() {
    const compiled = compile(state.q);
    const counts = {};
    DATA.forEach((d) => { if (!compiled.length || score(d, compiled) >= 0) counts[d.cat.id] = (counts[d.cat.id] || 0) + 1; });
    const total = Object.values(counts).reduce((a, b) => a + b, 0);
    const all = `<button class="chip" type="button" data-cat="" aria-pressed="${!state.cat}">All <span class="n">${total}</span></button>`;
    chipsEl.innerHTML = all + CATEGORIES.map((c) =>
      `<button class="chip" type="button" data-cat="${c.id}" style="--h:${c.h}" aria-pressed="${state.cat === c.id}"><span class="dot"></span>${esc(c.label)} <span class="n">${counts[c.id] || 0}</span></button>`
    ).join("");
  }

  function cardHTML(d, compiled) {
    return `<li><a class="card" id="co-${d.id}" href="${esc(d.url)}" target="_blank" rel="noopener" style="--h:${d.cat.h}">
      <div class="head"><span class="logo" aria-hidden="true">${esc(d.initials)}</span><h3 class="name">${highlight(d.name, compiled)}</h3></div>
      <p class="line">${highlight(d.line, compiled)}</p>
      <div class="foot"><span class="tag">${esc(d.cat.label)}</span><span class="go"><span class="dom">${esc(d.domain)}</span><span class="arrow" aria-hidden="true">↗</span></span></div>
    </a></li>`;
  }

  let visible = new Set();
  function render() {
    const { list, compiled } = results();
    visible = new Set(list.map((d) => d.id));
    grid.innerHTML = list.map((d) => cardHTML(d, compiled)).join("");
    grid.hidden = list.length === 0;
    empty.hidden = list.length !== 0;
    if (!list.length) {
      $("#empty-q").textContent = state.q ? `“${state.q}”` : "this filter";
    }
    const scope = state.cat ? CAT[state.cat].label : "Vancouver";
    countEl.innerHTML = `${list.length} ${list.length === 1 ? "signal" : "signals"}<small>${esc(scope)}${state.q ? " · matching “" + esc(state.q) + "”" : ""}</small>`;
    renderChips();
    $("#clear").hidden = !state.q;
  }

  // ---------- events ----------
  let t;
  input.addEventListener("input", () => {
    clearTimeout(t);
    t = setTimeout(() => { state.q = input.value; render(); }, 60);
  });
  $("#clear").addEventListener("click", () => { input.value = ""; state.q = ""; render(); input.focus(); });
  document.addEventListener("click", (e) => {
    const chip = e.target.closest(".chip[data-cat]");
    if (chip) { state.cat = chip.dataset.cat || null; render(); return; }
    const sug = e.target.closest("[data-suggest]");
    if (sug) { input.value = sug.dataset.suggest; state.q = input.value; state.cat = null; render(); input.focus(); return; }
    const ord = e.target.closest("[data-order]");
    if (ord) {
      if (ord.dataset.order === "shuffle") { state.shuffled = shuffle(DATA, Math.random); state.order = "radar"; }
      else state.order = ord.dataset.order;
      document.querySelectorAll("[data-order]").forEach((b) => b.setAttribute("aria-pressed", b.dataset.order === state.order || (b.dataset.order === "radar" && state.order === "radar") ? "true" : "false"));
      $('[data-order="shuffle"]').setAttribute("aria-pressed", "false");
      render();
    }
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "/" && document.activeElement !== input) { e.preventDefault(); input.focus(); input.select(); }
    if (e.key === "Escape" && document.activeElement === input) { input.value = ""; state.q = ""; render(); }
  });

  // ---------- radar scope ----------
  const canvas = $("#scope");
  const ctx = canvas.getContext("2d");
  const readout = $("#readout");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  const TAU = Math.PI * 2;
  const SECTOR = TAU / CATEGORIES.length;
  let colors = {};
  let size = 0;
  let hover = null;

  // Bearing 0° = north (up), clockwise, like a real scope.
  DATA.forEach((d) => {
    d.bearing = (d.cat.i + 0.14 + 0.72 * d.h1) * SECTOR;
    d.range = 0.24 + 0.68 * d.h2;
  });

  function readColors() {
    const cs = getComputedStyle(document.documentElement);
    const v = (n) => cs.getPropertyValue(n).trim();
    colors = { bg: v("--scope"), line: v("--scope-line"), ink: v("--scope-ink"), sweep: v("--sweep") };
  }
  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    size = canvas.clientWidth;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  const toXY = (bearing, range) => {
    const R = size / 2 - 6;
    return [size / 2 + Math.sin(bearing) * range * R, size / 2 - Math.cos(bearing) * range * R];
  };
  function hexA(hex, a) {
    const m = hex.replace("#", "");
    const n = parseInt(m.length === 3 ? m.split("").map((x) => x + x).join("") : m, 16);
    return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`;
  }

  function draw(sweep) {
    const c = size / 2, R = size / 2 - 6;
    ctx.clearRect(0, 0, size, size);
    ctx.fillStyle = colors.bg;
    ctx.beginPath(); ctx.arc(c, c, c, 0, TAU); ctx.fill();

    // active sector wash
    const activeCat = state.cat ? CAT[state.cat].i : hover && hover.type === "sector" ? hover.i : null;
    if (activeCat !== null) {
      ctx.fillStyle = hexA(colors.sweep, state.cat ? 0.14 : 0.08);
      ctx.beginPath(); ctx.moveTo(c, c);
      ctx.arc(c, c, R, activeCat * SECTOR - Math.PI / 2, (activeCat + 1) * SECTOR - Math.PI / 2);
      ctx.closePath(); ctx.fill();
    }

    // rings + spokes
    ctx.strokeStyle = colors.line; ctx.lineWidth = 1;
    [0.33, 0.66, 1].forEach((r) => { ctx.beginPath(); ctx.arc(c, c, R * r, 0, TAU); ctx.stroke(); });
    CATEGORIES.forEach((_, i) => {
      const [x, y] = toXY(i * SECTOR, 1);
      ctx.beginPath(); ctx.moveTo(c, c); ctx.lineTo(x, y); ctx.stroke();
    });

    // sweep wedge
    if (sweep !== null) {
      const start = sweep - Math.PI / 2;
      if (ctx.createConicGradient) {
        const g = ctx.createConicGradient(start - 1.1, c, c);
        g.addColorStop(0, hexA(colors.sweep, 0));
        g.addColorStop(1.1 / TAU, hexA(colors.sweep, 0.28));
        g.addColorStop(1.1 / TAU + 0.001, hexA(colors.sweep, 0));
        g.addColorStop(1, hexA(colors.sweep, 0));
        ctx.fillStyle = g;
        ctx.beginPath(); ctx.moveTo(c, c); ctx.arc(c, c, R, start - 1.1, start); ctx.closePath(); ctx.fill();
      }
      ctx.strokeStyle = hexA(colors.sweep, 0.9); ctx.lineWidth = 1.5;
      const [x, y] = toXY(sweep, 1);
      ctx.beginPath(); ctx.moveTo(c, c); ctx.lineTo(x, y); ctx.stroke();
    }

    // blips
    const dot = Math.max(1.6, size / (DATA.length > 100 ? 95 : 75));
    DATA.forEach((d) => {
      const on = visible.has(d.id);
      let glow = 0.75;
      if (sweep !== null) {
        const delta = ((sweep - d.bearing) % TAU + TAU) % TAU;
        glow = Math.exp(-delta * 0.9);
      }
      const [x, y] = toXY(d.bearing, d.range);
      const isHover = hover && hover.type === "blip" && hover.d === d;
      if (on) {
        const a = Math.max(0.42, glow);
        if (glow > 0.5 || isHover) {
          ctx.fillStyle = hexA(colors.sweep, (isHover ? 0.35 : 0.22 * glow));
          ctx.beginPath(); ctx.arc(x, y, dot * 3.2, 0, TAU); ctx.fill();
        }
        ctx.fillStyle = hexA(colors.sweep, isHover ? 1 : a);
        ctx.beginPath(); ctx.arc(x, y, isHover ? dot * 1.5 : dot, 0, TAU); ctx.fill();
      } else {
        ctx.fillStyle = hexA(colors.ink, 0.22);
        ctx.beginPath(); ctx.arc(x, y, dot * 0.7, 0, TAU); ctx.fill();
      }
    });

    // centre (Vancouver)
    ctx.fillStyle = colors.ink;
    ctx.beginPath(); ctx.arc(c, c, 2, 0, TAU); ctx.fill();
  }

  function setReadout() {
    if (hover && hover.type === "blip") {
      const deg = String(Math.round(hover.d.bearing * 180 / Math.PI)).padStart(3, "0");
      readout.innerHTML = `<b>${esc(hover.d.name)}</b><br>${deg}° · ${esc(hover.d.cat.label)}`;
    } else if (hover && hover.type === "sector") {
      const cat = CATEGORIES[hover.i];
      const n = DATA.filter((d) => d.cat.id === cat.id && visible.has(d.id)).length;
      readout.innerHTML = `<b>${esc(cat.label)}</b><br>${String(hover.i * 30).padStart(3, "0")}–${String(hover.i * 30 + 30).padStart(3, "0")}° · ${n} ${n === 1 ? "signal" : "signals"}`;
    } else {
      const shown = visible.size;
      readout.innerHTML = state.cat
        ? `Scanning <b>${esc(CAT[state.cat].label)}</b><br>${shown} in view`
        : `<b>${shown}</b> of ${DATA.length} signals in view<br>tap a sector to filter`;
    }
  }

  function hitTest(ev) {
    const r = canvas.getBoundingClientRect();
    const x = ev.clientX - r.left, y = ev.clientY - r.top;
    const c = size / 2, R = size / 2 - 6;
    const dx = x - c, dy = y - c, dist = Math.hypot(dx, dy);
    if (dist > R + 4) return null;
    let best = null, bestD = 10;
    DATA.forEach((d) => {
      if (!visible.has(d.id)) return;
      const [bx, by] = toXY(d.bearing, d.range);
      const dd = Math.hypot(bx - x, by - y);
      if (dd < bestD) { bestD = dd; best = d; }
    });
    if (best) return { type: "blip", d: best };
    if (dist < 8) return null;
    const bearing = (Math.atan2(dx, -dy) + TAU) % TAU;
    return { type: "sector", i: Math.floor(bearing / SECTOR) % CATEGORIES.length };
  }

  canvas.addEventListener("mousemove", (e) => { hover = hitTest(e); setReadout(); if (reduce.matches) draw(null); });
  canvas.addEventListener("mouseleave", () => { hover = null; setReadout(); if (reduce.matches) draw(null); });
  canvas.addEventListener("click", (e) => {
    const h = hitTest(e);
    if (!h) { state.cat = null; render(); return; }
    if (h.type === "sector") {
      const id = CATEGORIES[h.i].id;
      state.cat = state.cat === id ? null : id;
      render();
    } else {
      const el = document.getElementById(`co-${h.d.id}`);
      if (el) {
        el.scrollIntoView({ behavior: reduce.matches ? "auto" : "smooth", block: "center" });
        el.classList.remove("flash"); void el.offsetWidth; el.classList.add("flash");
      }
    }
    setReadout();
  });

  let start = performance.now();
  function frame(now) {
    const sweep = (((now - start) / 6000) * TAU) % TAU; // one rotation every 6 s
    draw(sweep);
    if (!reduce.matches) requestAnimationFrame(frame);
  }
  function boot() {
    readColors(); resize();
    if (reduce.matches) draw(null); else requestAnimationFrame(frame);
  }
  window.addEventListener("resize", () => { resize(); if (reduce.matches) draw(null); });
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener?.("change", readColors);
  new MutationObserver(readColors).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  reduce.addEventListener?.("change", boot);

  // Deep link a category with #biotech-style anchors.
  const fromHash = location.hash.replace("#", "");
  if (CAT[fromHash]) state.cat = fromHash;

  // Wrap render so the scope readout follows every update.
  const baseRender = render;
  render = function () { baseRender(); setReadout(); if (reduce.matches) draw(null); };

  $("#total").textContent = DATA.length;
  render();
  boot();
})();
