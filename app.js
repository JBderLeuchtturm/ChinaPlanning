'use strict';
(function () {
  /* Jede Reise liegt als eigene Datei in trips/ und meldet sich über window.TRIPS an. */
  const TRIPS = window.TRIPS || [];
  const TRIP_BY_ID = Object.create(null);
  TRIPS.forEach(t => { TRIP_BY_ID[t.id] = t; });

  const LEGACY_KEY = 'china-reise-v1';
  const storeKey = id => `reise-${id}-v1`;
  const VIEWS = ['route', 'tage', 'ideen', 'tipps', 'check'];
  const SLOTS = ['Früh', 'Vormittag', 'Mittag', 'Nachmittag', 'Abend', 'Ganztags'];
  const SLOT_ORDER = [0, 1, 2, 3, 4, 1.5];
  const WEEKDAYS = ['Sonntags', 'Montags', 'Dienstags', 'Mittwochs', 'Donnerstags', 'Freitags', 'Samstags'];
  const WD_SHORT = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];
  const MONTHS = ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'];
  const CATEGORIES = {
    klassiker: 'Klassiker', verrueckt: 'Verrückt', essen: 'Essen & Trinken', natur: 'Natur', kultur: 'Kultur',
    nacht: 'Abends & Nachts', chill: 'Entspannt', ausflug: 'Tagesausflug', transport: 'Anreise & Transfers', eigene: 'Eigene'
  };
  // 'fra' (unterwegs) und 'any' (überall) sind in jeder Reise reserviert
  const BASE_COLORS = { fra: ['#5C6878', '#9AA7B6'], any: ['#8A6A17', '#D7B45A'] };
  const HOME_SEAL = '旅';

  const I = {
    train: '<svg viewBox="0 0 24 24" class="i-fill" aria-hidden="true"><path d="M7 2h10a4 4 0 0 1 4 4v9a3.5 3.5 0 0 1-3 3.46L19.5 21h-2.3l-1.5-2.5H8.3L6.8 21H4.5L6 18.46A3.5 3.5 0 0 1 3 15V6a4 4 0 0 1 4-4Zm-1 4.5V11h12V6.5A1.5 1.5 0 0 0 16.5 5h-9A1.5 1.5 0 0 0 6 6.5Zm1.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm9 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"/></svg>',
    flug: '<svg viewBox="0 0 24 24" class="i-fill" aria-hidden="true"><path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5Z"/></svg>',
    auto: '<svg viewBox="0 0 24 24" class="i-fill" aria-hidden="true"><path d="M5 11l1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11a2 2 0 0 1 2 2v4h-2v2h-3v-2H8v2H5v-2H3v-4a2 2 0 0 1 2-2Zm2.1 0h9.8l-1-3H8.1l-1 3ZM6.5 13a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm11 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"/></svg>',
    up: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 15l6-6 6 6"/></svg>',
    down: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>',
    move: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 8h13l-3.5-3.5M19 16H6l3.5 3.5"/></svg>',
    x: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    plus: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>',
    share: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="6.5" r="2.5"/><circle cx="18" cy="17.5" r="2.5"/><path d="M8.3 10.8l7.4-3.4M8.3 13.2l7.4 3.4"/></svg>',
    card: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M7 10h4M7 14h7"/></svg>',
    chili: '<svg viewBox="0 0 24 24" class="i-fill" aria-hidden="true"><path d="M15.2 3.2c.2-.8 1-1.3 1.8-1.1.4.1.5.6.2.9-.5.4-.7.9-.7 1.5 2.4.6 4 2.9 3.3 6-1.2 5.4-6.8 10.4-14.3 11.4-1.1.1-1.6-1.3-.6-1.9 4.6-2.7 6.4-6.4 7-10.2.3-2.2 1.4-3.8 3.3-4.4v-.2Z"/></svg>'
  };

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const num = n => Math.round(n).toLocaleString('de-DE');
  const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fmtDay = new Intl.DateTimeFormat('de-DE', { weekday: 'short', day: 'numeric', month: 'numeric' });
  const fmtDate = new Intl.DateTimeFormat('de-DE', { day: 'numeric', month: 'numeric', year: 'numeric' });
  const fmtLong = new Intl.DateTimeFormat('de-DE', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  const isDate = s => /^\d{4}-\d{2}-\d{2}$/.test(s || '');
  function parseDate(s) { const [y, m, d] = s.split('-').map(Number); return new Date(y, m - 1, d); }
  function mdDate(y, md) { const [m, d] = md.split('-').map(Number); return new Date(y, m - 1, d); }

  /* ---------- Aktuelle Reise ---------- */

  let T = null;               // aktuelle Reise
  let ACT = Object.create(null);
  let CITY_KEYS = [];
  let GROUP_ORDER = [];
  let state = null;
  let view = 'home';
  let undoSnap = null;
  let stampId = null;
  let pendingScroll = null;
  let modalCtx = null;
  const filters = { city: 'all', cat: 'all', crazy: 0, q: '' };
  const picker = { day: 0, q: '', city: 'all' };

  const LA = () => ` lang="${T.lang}"`;
  const cur = () => T.currency.label;
  const fontStack = t => `'${t.font.family}', ${t.font.fallback}`;
  const cityColors = (t, k) => (t.cities[k] && t.cities[k].color) || BASE_COLORS[k] || BASE_COLORS.fra;

  function setTrip(id) {
    if (T && T.id === id) return;
    T = TRIP_BY_ID[id];
    ACT = Object.create(null);
    T.activities.forEach(a => { ACT[a.id] = a; });
    CITY_KEYS = Object.keys(T.cities).filter(k => k !== 'fra' && k !== 'any');
    GROUP_ORDER = CITY_KEYS.concat(['any', 'fra']);
    state = loadState(T.id) || freshState();
    filters.city = 'all'; filters.cat = 'all'; filters.crazy = 0; filters.q = '';
    undoSnap = null;
    applyTheme();
  }
  function leaveTrip() {
    T = null;
    state = null;
    applyTheme();
  }

  function themeVars(t, dark) {
    const th = t.theme[dark ? 'dark' : 'light'];
    const vars = [`--ticket:${th.ticket}`, `--ticket-ink:${th.ink}`, `--ticket-line:${th.line}`];
    Object.keys(t.cities).forEach(k => vars.push(`--c-${k}:${cityColors(t, k)[dark ? 1 : 0]}`));
    return vars.join(';');
  }
  function applyTheme() {
    let el = document.getElementById('trip-theme');
    if (!el) { el = document.createElement('style'); el.id = 'trip-theme'; document.head.appendChild(el); }
    if (!T) { el.textContent = ''; return; }
    const dark = themeVars(T, true);
    el.textContent = `:root{${themeVars(T, false)};--font-hz:${fontStack(T)};--font-loc:${T.locFont}}`
      + `@media (prefers-color-scheme: dark){:root:not([data-theme="light"]){${dark}}}`
      + `:root[data-theme="dark"]{${dark}}`;
  }

  // Nur die Zeichen laden, die als Schmuckschrift vorkommen (Städte, Stempel, Fahrkarten)
  function loadFonts() {
    TRIPS.forEach(t => {
      const chars = new Set(('0123456789' + HOME_SEAL + t.seal + t.sealFmt.replace('{n}', '')).split(''));
      Object.values(t.cities).forEach(c => Array.from(c.loc || '').forEach(ch => chars.add(ch)));
      Object.values(t.tickets || {}).forEach(k => Array.from(k.from[0] + k.to[0]).forEach(ch => chars.add(ch)));
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.media = 'print';
      link.onload = () => { link.media = 'all'; };
      link.href = `https://fonts.googleapis.com/css2?family=${t.font.family.replace(/ /g, '+')}:wght@${t.font.weight}&display=swap&text=${encodeURIComponent(Array.from(chars).join(''))}`;
      document.head.appendChild(link);
    });
  }

  /* ---------- Zustand ---------- */

  function planFromDefault() {
    return T.defaultPlan.map(d => ({ city: d.city, hotel: '', note: '', items: d.items.map(([id, slot]) => ({ id, slot, done: false })) }));
  }
  function freshState() {
    return { v: 1, start: '', people: 2, rate: T.currency.rate, hotelTier: 1, foodTier: 1, days: planFromDefault(), custom: {}, checks: {} };
  }
  function clampInt(v, min, max, dflt) {
    const n = parseInt(v, 10);
    return Number.isFinite(n) ? Math.min(max, Math.max(min, n)) : dflt;
  }
  function normalize(s) {
    if (!s || !Array.isArray(s.days) || !s.days.length) return null;
    const out = freshState();
    out.start = isDate(s.start) ? s.start : '';
    out.people = clampInt(s.people, 1, 12, 2);
    out.rate = Number(s.rate) > 0 ? Number(s.rate) : T.currency.rate;
    out.hotelTier = clampInt(s.hotelTier, 0, T.budget.hotel.length - 1, 1);
    out.foodTier = clampInt(s.foodTier, 0, T.budget.food.length - 1, 1);
    out.custom = {};
    Object.entries(s.custom || {}).forEach(([id, c]) => {
      if (!/^c-[a-z0-9]+$/.test(id) || !c || !c.t) return;
      out.custom[id] = {
        t: String(c.t).slice(0, 80), loc: String(c.loc || c.zh || '').slice(0, 120), desc: String(c.desc || '').slice(0, 400),
        d: Math.max(0, Number(c.d) || 0), p: Math.max(0, Number(c.p) || 0), c: T.cities[c.c] ? c.c : 'any'
      };
    });
    out.days = s.days.map(d => ({
      city: T.cities[d && d.city] && d.city !== 'any' ? d.city : CITY_KEYS[0],
      hotel: String((d && d.hotel) || '').slice(0, 300),
      note: String((d && d.note) || '').slice(0, 2000),
      items: ((d && d.items) || [])
        .filter(it => it && (ACT[it.id] || out.custom[it.id]))
        .map(it => ({ id: it.id, slot: clampInt(it.slot, 0, 5, 1), done: !!it.done }))
    }));
    out.checks = {};
    Object.keys(s.checks || {}).forEach(k => { if (s.checks[k]) out.checks[k] = true; });
    return out;
  }
  function loadState(id) {
    try { return normalize(JSON.parse(localStorage.getItem(storeKey(id)))); } catch (e) { return null; }
  }
  function savedRaw(id) {
    try {
      const s = JSON.parse(localStorage.getItem(storeKey(id)));
      return s && Array.isArray(s.days) ? s : null;
    } catch (e) { return null; }
  }
  function save() {
    try { localStorage.setItem(storeKey(T.id), JSON.stringify(state)); } catch (e) { /* privates Fenster o. Ä. */ }
  }
  function migrateLegacy() {
    try {
      const old = localStorage.getItem(LEGACY_KEY);
      if (old && !localStorage.getItem(storeKey('china'))) localStorage.setItem(storeKey('china'), old);
      if (old) localStorage.removeItem(LEGACY_KEY);
    } catch (e) { /* ignorieren */ }
  }

  function snapshot() { undoSnap = JSON.stringify(state); }
  function commit() { save(); render(); }

  function getAct(id) {
    if (ACT[id]) return ACT[id];
    const c = state.custom[id];
    if (!c) return null;
    return { id, c: c.c, t: c.t, loc: c.loc, d: c.d, p: c.p, desc: c.desc || 'Eigene Aktivität.', tip: '', cat: ['eigene'], v: 0, w: 1, custom: true };
  }
  const isTransport = a => a.cat.indexOf('transport') >= 0;

  /* ---------- Datum & Formatierung ---------- */

  function dayDate(i) {
    if (!state.start) return null;
    const [y, m, d] = state.start.split('-').map(Number);
    return new Date(y, m - 1, d + i);
  }
  function sameDay(a, b) {
    return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
  }
  function todayIndex() {
    if (!state.start) return -1;
    const now = new Date();
    for (let i = 0; i < state.days.length; i++) if (sameDay(dayDate(i), now)) return i;
    return -1;
  }
  function fmtHours(h) {
    if (!h) return '–';
    if (h >= 24) return `${Math.round(h / 24)} Tage`;
    if (h < 1) return `${Math.round(h * 60)} Min.`;
    const whole = Math.floor(h);
    return (h - whole >= 0.5 ? `${whole}½` : `${whole}`) + ' Std.';
  }
  function priceText(a) {
    if (a.pt) return a.pt;
    return a.p ? `ca. ${num(a.p)} ${cur()}` : 'gratis';
  }
  function chilis(v) {
    if (!v) return '';
    const label = `Verrückt-Faktor ${v} von 3`;
    return `<span class="chili" role="img" aria-label="${label}" title="${label}">${I.chili.repeat(v)}</span>`;
  }
  function plannedMap() {
    const m = {};
    state.days.forEach((d, i) => d.items.forEach(it => { (m[it.id] = m[it.id] || []).push(i); }));
    return m;
  }
  function cityName(key) { return (T.cities[key] || T.cities.any).name; }
  function homeName() { return T.cities.fra.py || 'Frankfurt'; }
  function canTaxi(a) { return !!a.loc && a.taxi !== false; }
  function mapLinks(a) {
    if (!canTaxi(a) || a.c === 'any' || a.c === 'fra') return [];
    const c = T.cities[a.c] || {};
    return T.maps.map(m => ({
      label: m.label,
      url: m.url.replace('{q}', encodeURIComponent(a.loc)).replace('{cityLoc}', encodeURIComponent(c.loc || '')).replace('{cityName}', encodeURIComponent(c.name || ''))
    }));
  }
  function sealText(dayIdx) {
    const n = dayIdx + 1;
    return esc(T.sealFmt).replace('{n}', n > 9 ? `<span class="tcy">${n}</span>` : String(n));
  }
  const hzLen = s => Array.from(s || '').length;

  /* ---------- Hinweise ---------- */

  function itemWarnings(a, dayIdx) {
    const w = [];
    const day = state.days[dayIdx];
    const dt = dayDate(dayIdx);
    if (dt) {
      const wd = dt.getDay();
      if (a.closed && a.closed.indexOf(wd) >= 0) w.push(`${WEEKDAYS[wd]} geschlossen`);
      if (a.only && a.only.indexOf(wd) < 0) w.push(`nur ${a.only.map(x => WD_SHORT[x]).join('/')}`);
    }
    if (!isTransport(a) && T.cities[a.c] && a.c !== 'any' && a.c !== 'fra') {
      const allowed = [day.city];
      if (day.items.some(it => { const x = getAct(it.id); return x && isTransport(x); })) {
        if (state.days[dayIdx - 1]) allowed.push(state.days[dayIdx - 1].city);
        if (state.days[dayIdx + 1]) allowed.push(state.days[dayIdx + 1].city);
      }
      if (allowed.indexOf(a.c) < 0) w.push(`liegt in ${cityName(a.c)}`);
    }
    return w;
  }

  function tripWarnings() {
    const out = [];
    if (!state.start) return out;
    const w = T.warnings || {};
    const first = dayDate(0);
    const last = dayDate(state.days.length - 1);
    const today = new Date(); today.setHours(0, 0, 0, 0);
    if (last < today) out.push('Das Abflugdatum liegt in der Vergangenheit.');
    (w.after || []).forEach(x => { if (last > parseDate(x.date)) out.push(x.text); });
    (w.holidays || []).forEach(h => {
      const ranges = [];
      if (isDate(h.from)) ranges.push([parseDate(h.from), parseDate(h.to)]);
      else {
        for (let y = first.getFullYear() - 1; y <= last.getFullYear(); y++) {
          const a = mdDate(y, h.from);
          let b = mdDate(y, h.to);
          if (b < a) b = mdDate(y + 1, h.to);
          ranges.push([a, b]);
        }
      }
      if (ranges.some(([a, b]) => first <= b && last >= a)) out.push(`Eure Reise fällt in ${h.name}. ${h.text || w.holidayText || ''}`.trim());
    });
    const months = new Set();
    for (let i = 0; i < state.days.length; i++) months.add(dayDate(i).getMonth() + 1);
    (w.seasons || []).forEach(s => { if (s.months.some(m => months.has(m))) out.push(s.text); });
    return Array.from(new Set(out));
  }

  /* ---------- Startseite: alle Reisen ---------- */

  function renderHome() {
    const cards = TRIPS.map(t => {
      const s = savedRaw(t.id);
      const days = s ? s.days : t.defaultPlan;
      const stops = [];
      days.forEach(d => { if (d && t.cities[d.city] && d.city !== 'fra' && d.city !== 'any' && stops[stops.length - 1] !== d.city) stops.push(d.city); });
      const nights = days.filter(d => d && d.city !== 'fra').length;
      const start = s && isDate(s.start) ? parseDate(s.start) : null;
      const lt = t.theme.light, dk = t.theme.dark;
      return `<a class="trip" href="#${t.id}/route" style="--tk-l:${lt.ticket};--tk-d:${dk.ticket};--tki-l:${lt.ink};--tki-d:${dk.ink};--tkl-l:${lt.line};--tkl-d:${dk.line};--font-hz:${esc(fontStack(t))}">
        <div class="trip-head">
          <span class="trip-top"><span class="seal hz" lang="${t.lang}" aria-hidden="true">${t.seal}</span><span class="trip-days">${days.length} ${days.length === 1 ? 'Tag' : 'Tage'}, ${nightsText(nights)}</span></span>
          <h2 class="trip-name">${esc(t.name)}</h2>
          <span class="trip-stops" lang="${t.lang}">${stops.map(k => { const c = cityColors(t, k); return `<span class="hz dual" style="--c-l:${c[0]};--c-d:${c[1]}">${t.cities[k].loc}</span>`; }).join('')}</span>
        </div>
        <div class="trip-body">
          <span class="trip-cities">${stops.map(k => esc(t.cities[k].name)).join(' → ')}</span>
          <span class="trip-when">${start ? 'Abflug ' + fmtLong.format(start) : 'Noch kein Abflugdatum'}</span>
        </div>
      </a>`;
    }).join('');
    return `
    <section class="hero home-hero">
      <h1 class="hero-title">Unsere Reisen</h1>
      <p class="lede">Jede Reise hat ihren eigenen Plan mit Tagen, Ideen, Tipps und Checkliste. Was ihr ändert, bleibt in eurem Browser und lässt sich per Link teilen.</p>
    </section>
    <div class="trips">${cards}</div>`;
  }

  /* ---------- Route ---------- */

  function segments() {
    const segs = [];
    state.days.forEach((d, i) => {
      const last = segs[segs.length - 1];
      if (last && last.city === d.city) { last.to = i; last.count++; }
      else segs.push({ city: d.city, from: i, to: i, count: 1 });
    });
    return segs;
  }
  function hopBetween(a, b) {
    for (const d of [state.days[b.from], state.days[a.to]]) {
      for (const it of d.items) {
        const x = getAct(it.id);
        if (x && isTransport(x) && x.mode && x.mode !== 'auto') return x;
      }
    }
    return null;
  }
  function nightsText(n) { return `${n} ${n === 1 ? 'Nacht' : 'Nächte'}`; }

  function routeLine() {
    const segs = segments();
    const parts = [];
    segs.forEach((s, k) => {
      const c = T.cities[s.city];
      const isFra = s.city === 'fra';
      const label = isFra ? homeName() : c.name;
      const sub = isFra ? (k === 0 ? 'Abflug' : 'Landung') : nightsText(s.count);
      parts.push(`<div class="stop" role="listitem" style="--c:var(--c-${s.city})">
        <button class="stop-btn" data-action="jump" data-day="${s.from}">
          <span class="stop-dot" aria-hidden="true"></span>
          <span class="hz stop-hz${hzLen(c.loc) >= 5 ? ' is-long' : ''}"${LA()}>${c.loc}</span>
          <span class="stop-name">${esc(label)}</span>
          <span class="stop-sub">${sub}</span>
        </button></div>`);
      if (k < segs.length - 1) {
        const hop = hopBetween(s, segs[k + 1]);
        parts.push(`<div class="hop" aria-hidden="true">${hop ? `<span class="hop-icon">${I[hop.mode === 'zug' ? 'train' : 'flug']}</span><span class="hop-t">${hop.dshort}</span>` : '<span class="hop-icon hop-none"></span>'}</div>`);
      }
    });
    return `<div class="route" role="list" aria-label="Reiseroute">${parts.join('')}</div>`;
  }

  function ticketHtml(a, info, dayIdx) {
    const dt = dayDate(dayIdx);
    const size = s => `hz tk-hz-${Math.min(7, Math.max(2, hzLen(s)))}`;
    return `<article class="ticket">
      <div class="tk-head">
        <div class="tk-top">
          <span class="tk-serial">Tag ${dayIdx + 1}</span>
          ${dt ? `<span class="tk-date">${fmtDay.format(dt)}</span>` : ''}
          <span class="tk-mode">${I[a.mode === 'zug' ? 'train' : 'flug']}${esc(info.label)}</span>
        </div>
        <div class="tk-route">
          <div class="tk-st"><span class="${size(info.from[0])}"${LA()}>${info.from[0]}</span><span class="tk-py">${esc(info.from[1])}</span></div>
          <div class="tk-arrow"><span>${esc(a.dshort)}</span></div>
          <div class="tk-st tk-to"><span class="${size(info.to[0])}"${LA()}>${info.to[0]}</span><span class="tk-py">${esc(info.to[1])}</span></div>
        </div>
      </div>
      <div class="tk-body">
        <p class="tk-price">${esc(priceText(a))}</p>
        <p>${esc(a.desc)}</p>
        <p class="tk-tip">${esc(a.tip)}</p>
        ${a.book ? `<p class="tk-book">${esc(a.book)}</p>` : ''}
      </div>
    </article>`;
  }

  function cityHtml(key, nights) {
    const c = T.cities[key];
    return `<article class="city" style="--c:var(--c-${key})">
      <div class="city-mark hz${hzLen(c.loc) >= 4 ? ' is-long' : ''}" aria-hidden="true"${LA()}>${c.loc}</div>
      <div class="city-body">
        <h3 class="city-name">${c.name} <span class="city-py">${c.py}</span></h3>
        <p class="city-n">${nights ? nightsText(nights) + ' im Plan' : 'Aktuell nicht im Plan'}</p>
        <p class="city-why">${esc(c.why)}</p>
        <dl class="facts">
          <dt>Wo schlafen</dt><dd>${esc(c.stay)} ${esc(c.stayTip)}</dd>
          <dt>Hotelpreise</dt><dd>
            <table class="prices"><thead><tr>${c.prices.map(p => `<th scope="col">${p[0]}</th>`).join('')}</tr></thead>
            <tbody><tr>${c.prices.map(p => `<td>${p[1]}</td>`).join('')}</tr></tbody></table>
            <span class="muted">${esc(c.priceNote || 'pro Zimmer und Nacht')}</span></dd>
          <dt>Ankommen</dt><dd>${esc(c.arrive)}</dd>
          <dt>Unterwegs</dt><dd>${esc(c.move)}</dd>
        </dl>
        <button class="btn" data-action="ideas-city" data-city="${key}">Alle Ideen für ${c.name}</button>
      </div>
    </article>`;
  }

  function budgetHtml() {
    const B = T.budget;
    const nights = state.days.filter(d => d.city !== 'fra').length;
    const people = state.people;
    const rooms = Math.ceil(people / 2);
    const hotel = nights * B.hotel[state.hotelTier][1] * rooms / people;
    let transport = 0, entries = 0;
    state.days.forEach(d => d.items.forEach(it => {
      const a = getAct(it.id);
      if (!a || !a.p) return;
      if (isTransport(a)) transport += a.p / state.rate; else entries += a.p / state.rate;
    }));
    const food = nights * B.food[state.foodTier][1];
    const base = hotel + transport + entries + food + B.extra;
    const seg = (kind, tiers, curTier) => `<div class="seg" role="group" aria-label="${kind === 'hotel' ? 'Hotel-Niveau' : 'Essen pro Tag'}">${tiers.map((t, i) =>
      `<button class="seg-btn" data-action="tier" data-kind="${kind}" data-v="${i}" aria-pressed="${i === curTier}">${t[0]} <span>${t[1]} €</span></button>`).join('')}</div>`;
    return `<div class="panel budget">
      <div class="budget-controls">
        <div><p class="label">Hotel pro Zimmer und Nacht</p>${seg('hotel', B.hotel, state.hotelTier)}</div>
        <div><p class="label">Essen und Trinken pro Tag</p>${seg('food', B.food, state.foodTier)}</div>
      </div>
      <table class="budget-table">
        <caption>Geschätzt pro Person, ${people === 1 ? '1 Reisender' : people + ' Reisende'}${people > 1 ? ', Zimmer geteilt' : ''}</caption>
        <tbody>
          <tr><th scope="row">${esc(B.flightLabel)}</th><td>${num(B.flight[0])}–${num(B.flight[1])} €</td></tr>
          <tr><th scope="row">Hotels, ${nights} Nächte</th><td>${num(hotel)} €</td></tr>
          <tr><th scope="row">Züge und Inlandsflüge aus eurem Plan</th><td>${num(transport)} €</td></tr>
          <tr><th scope="row">Eintritte und Aktivitäten aus eurem Plan</th><td>${num(entries)} €</td></tr>
          <tr><th scope="row">Essen und Trinken</th><td>${num(food)} €</td></tr>
          <tr><th scope="row">${esc(B.extraLabel)}</th><td>${num(B.extra)} €</td></tr>
        </tbody>
        <tfoot><tr><th scope="row">Summe</th><td>${num(base + B.flight[0])}–${num(base + B.flight[1])} €</td></tr></tfoot>
      </table>
    </div>`;
  }

  function renderRoute() {
    const nights = {};
    state.days.forEach(d => { nights[d.city] = (nights[d.city] || 0) + 1; });
    const tickets = [];
    state.days.forEach((d, i) => d.items.forEach(it => {
      const info = T.tickets[it.id];
      if (info) tickets.push(ticketHtml(getAct(it.id), info, i));
    }));
    const warns = tripWarnings();
    return `
    <section class="hero">
      <h1 class="hero-title">${esc(T.title)}</h1>
      <p class="lede">${esc(T.lede)}</p>
      ${routeLine()}
    </section>

    <section class="panel setup" aria-labelledby="setup-h">
      <h2 id="setup-h" class="panel-title">Eckdaten</h2>
      <div class="fields">
        <label class="field"><span>Abflug in ${esc(homeName())}</span><input type="date" data-set="start" value="${esc(state.start)}"></label>
        <label class="field"><span>Reisende</span><input type="number" inputmode="numeric" min="1" max="12" data-set="people" value="${state.people}"></label>
        <label class="field"><span>${esc(T.currency.rateLabel)}</span><input type="number" inputmode="decimal" step="any" min="0.01" data-set="rate" value="${state.rate}"></label>
      </div>
      ${state.start
        ? `<p class="setup-sum">${fmtLong.format(dayDate(0))} bis ${fmtLong.format(dayDate(state.days.length - 1))}</p>`
        : '<p class="setup-sum muted">Mit Datum zeigt der Plan Wochentage, warnt vor Ruhetagen und Feiertagen und rechnet die Buchungsfristen aus.</p>'}
      ${warns.length ? `<ul class="alerts">${warns.map(w => `<li>${esc(w)}</li>`).join('')}</ul>` : ''}
    </section>

    <section aria-labelledby="legs-h">
      <h2 id="legs-h" class="sec-title">Die Strecke</h2>
      <p class="sec-lede">${esc(T.routeLede)}</p>
      <div class="tickets">${tickets.join('') || '<p class="muted">Keine Fahrten im Plan.</p>'}</div>
    </section>

    <section aria-labelledby="cities-h">
      <h2 id="cities-h" class="sec-title">Die Stationen</h2>
      <div class="cities">${CITY_KEYS.map(k => cityHtml(k, nights[k] || 0)).join('')}</div>
    </section>

    <section aria-labelledby="budget-h">
      <h2 id="budget-h" class="sec-title">Was kostet das?</h2>
      ${budgetHtml()}
    </section>`;
  }

  /* ---------- Tage ---------- */

  function cityOptions(sel) {
    return ['fra', ...CITY_KEYS].map(k => `<option value="${k}"${k === sel ? ' selected' : ''}>${k === 'fra' ? 'Unterwegs' : T.cities[k].name}</option>`).join('');
  }

  function itemHtml(it, i, j, len) {
    const a = getAct(it.id);
    if (!a) return '';
    const warns = itemWarnings(a, i);
    const tr = isTransport(a);
    return `<li class="item${tr ? ' is-transport' : ''}${it.done ? ' is-done' : ''}">
      <button class="slot" data-action="slot" data-day="${i}" data-idx="${j}" title="Tageszeit ändern">${SLOTS[it.slot]}</button>
      <div class="item-main">
        <button class="item-title" data-action="detail" data-id="${a.id}" data-day="${i}" data-idx="${j}">${tr && a.mode ? I[a.mode === 'zug' ? 'train' : a.mode] : ''}${esc(a.t)}</button>
        <div class="item-meta">${a.loc ? `<span class="loc"${LA()}>${esc(a.loc)}</span>` : ''}<span>${fmtHours(a.d)}</span><span>${esc(priceText(a))}</span>${chilis(a.v)}</div>
        ${warns.length ? `<p class="warn">${esc(warns.join(', '))}</p>` : ''}
      </div>
      <div class="item-actions">
        <button class="icon-btn" data-action="up" data-day="${i}" data-idx="${j}" aria-label="Nach oben" title="Nach oben"${j === 0 ? ' disabled' : ''}>${I.up}</button>
        <button class="icon-btn" data-action="down" data-day="${i}" data-idx="${j}" aria-label="Nach unten" title="Nach unten"${j === len - 1 ? ' disabled' : ''}>${I.down}</button>
        <button class="icon-btn" data-action="move" data-day="${i}" data-idx="${j}" aria-label="Auf anderen Tag verschieben" title="Auf anderen Tag verschieben">${I.move}</button>
        <button class="icon-btn" data-action="remove" data-day="${i}" data-idx="${j}" aria-label="Entfernen" title="Entfernen">${I.x}</button>
      </div>
    </li>`;
  }

  function dayHtml(d, i) {
    const dt = dayDate(i);
    const c = T.cities[d.city];
    const hours = d.items.reduce((s, it) => { const a = getAct(it.id); return s + (a ? Math.min(a.d || 0, 14) : 0); }, 0);
    const today = dt && sameDay(dt, new Date());
    return `<li class="day${today ? ' is-today' : ''}" id="day-${i}" style="--c:var(--c-${d.city})">
      <div class="day-stamp">
        <span class="day-word">Tag</span>
        <span class="day-n">${i + 1}</span>
        ${dt ? `<span class="day-date">${fmtDay.format(dt)}</span>` : ''}
        ${today ? '<span class="day-today">Heute</span>' : ''}
        ${d.city !== 'fra' ? `<span class="hz day-hz"${LA()}>${c.loc}</span>` : ''}
      </div>
      <div class="day-body">
        <div class="day-top">
          <label class="sr-only" for="city-${i}">Ort an Tag ${i + 1}</label>
          <select id="city-${i}" class="city-select" data-change="day-city" data-day="${i}">${cityOptions(d.city)}</select>
          ${hours ? `<span class="day-hours${hours > 12 ? ' is-warn' : ''}">${hours > 12 ? 'Sehr voll, ' : ''}ca. ${fmtHours(hours)}</span>` : ''}
        </div>
        ${d.items.length
          ? `<ul class="items">${d.items.map((it, j) => itemHtml(it, i, j, d.items.length)).join('')}</ul>`
          : '<p class="empty">Noch nichts geplant. Freier Tag – oder Ideen holen?</p>'}
        <button class="btn add" data-action="open-picker" data-day="${i}">${I.plus}Aktivität hinzufügen</button>
        <div class="day-extra">
          ${d.city !== 'fra' ? `<div class="hotel">
            <label class="field"><span>Hotel</span><input data-bind="hotel" data-day="${i}" value="${esc(d.hotel)}" placeholder="Name und Adresse in Landesschrift" autocomplete="off"></label>
            <button class="icon-btn big" data-action="taxi-hotel" data-day="${i}" aria-label="Hotel als Taxi-Karte zeigen" title="Als Taxi-Karte zeigen">${I.card}</button>
          </div>` : ''}
          <label class="field"><span>Notizen</span><textarea rows="1" data-bind="note" data-day="${i}" placeholder="Reservierungsnr., Treffpunkt …">${esc(d.note)}</textarea></label>
          ${d.note ? `<p class="print-only">${esc(d.note)}</p>` : ''}
        </div>
        <div class="day-foot"><button class="btn ghost small day-del" data-action="delete-day" data-day="${i}">Tag ${i + 1} löschen</button></div>
      </div>
    </li>`;
  }

  function renderDays() {
    const nights = state.days.filter(d => d.city !== 'fra').length;
    let entries = 0;
    state.days.forEach(d => d.items.forEach(it => { const a = getAct(it.id); if (a && !isTransport(a)) entries += a.p || 0; }));
    const ti = todayIndex();
    const strip = state.days.map((d, i) => {
      const dt = dayDate(i);
      return `<button class="strip-day" data-action="jump" data-day="${i}" style="--c:var(--c-${d.city})" title="Tag ${i + 1}${dt ? ', ' + fmtDay.format(dt) : ''}, ${cityName(d.city)}"><b>${i + 1}</b><span class="hz"${LA()}>${Array.from(T.cities[d.city].loc)[0] || ''}</span></button>`;
    }).join('');
    return `
    <section class="page-head">
      <h1 class="page-title">Tagesplan</h1>
      <p class="lede">${state.days.length} Tage, ${nights} Nächte in ${esc(T.name)}, Eintritte ca. ${num(entries)} ${cur()} pro Person (≈ ${num(entries / state.rate)} €). Antippen zeigt Details, mit den Pfeilen sortiert ihr um.</p>
      <div class="toolbar">
        <button class="btn primary" data-action="share">${I.share}Plan teilen</button>
        ${ti >= 0 ? `<button class="btn" data-action="jump" data-day="${ti}">Zu heute</button>` : ''}
        <button class="btn" data-action="print">Drucken</button>
        <button class="btn" data-action="export">Exportieren</button>
        <button class="btn" data-action="import">Importieren</button>
        <button class="btn ghost" data-action="reset">Vorschlag wiederherstellen</button>
      </div>
      <nav class="strip" aria-label="Zu einem Tag springen">${strip}</nav>
    </section>
    <ol class="days">${state.days.map(dayHtml).join('')}</ol>
    <div class="days-foot">
      <button class="btn" data-action="add-day">${I.plus}Tag hinzufügen</button>
      <p class="muted">Neue Tage landen vor dem Rückflug.</p>
    </div>`;
  }

  /* ---------- Ideen ---------- */

  const norm = s => String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  function allActs() {
    return T.activities.concat(Object.keys(state.custom).map(getAct));
  }
  function matches(a, f) {
    if (f.city !== 'all' && a.c !== f.city) return false;
    if (f.cat && f.cat !== 'all' && a.cat.indexOf(f.cat) < 0) return false;
    if (f.crazy && (a.v || 0) < f.crazy) return false;
    if (f.q) {
      const hay = norm([a.t, a.loc, a.desc, a.tip, cityName(a.c)].join(' '));
      if (norm(f.q).split(/\s+/).some(w => w && hay.indexOf(w) < 0)) return false;
    }
    return true;
  }

  function cardHtml(a, pm) {
    const days = pm[a.id] || [];
    const c = T.cities[a.c] || T.cities.any;
    const facts = [['Dauer', fmtHours(a.d)], ['Preis', priceText(a)]];
    if (a.book) facts.push(['Buchen', a.book]);
    if (a.closed) facts.push(['Ruhetag', a.closed.map(x => WD_SHORT[x]).join(', ')]);
    if (a.only) facts.push(['Nur', a.only.map(x => WD_SHORT[x]).join('/')]);
    const maps = mapLinks(a);
    return `<article class="act" style="--c:var(--c-${a.c})">
      ${days.length ? `<span class="seal-stamp${stampId === a.id ? ' is-new' : ''}"${LA()} title="Eingeplant an Tag ${days.map(x => x + 1).join(', ')}">${sealText(days[0])}</span>` : ''}
      <div class="act-top"><span class="act-city">${c.loc && a.c !== 'fra' ? `<span class="hz"${LA()}>${c.loc}</span>` : ''}${a.c === 'fra' ? 'An- und Abreise' : c.name}</span>${chilis(a.v)}</div>
      <h3 class="act-title">${esc(a.t)}</h3>
      ${a.loc ? `<p class="loc"${LA()}>${esc(a.loc)}</p>` : ''}
      <p class="act-desc">${esc(a.desc)}</p>
      ${a.tip ? `<p class="act-tip"><strong>Tipp:</strong> ${esc(a.tip)}</p>` : ''}
      <dl class="act-facts">${facts.map(f => `<div><dt>${f[0]}</dt><dd>${esc(f[1])}</dd></div>`).join('')}</dl>
      <div class="act-actions">
        <button class="btn primary" data-action="add" data-id="${a.id}">${I.plus}Einplanen</button>
        ${canTaxi(a) ? `<button class="btn" data-action="taxi" data-id="${a.id}">Taxi-Karte</button>` : ''}
        ${maps.length ? `<a class="link" href="${esc(maps[0].url)}" target="_blank" rel="noopener">${esc(maps[0].label)}</a>` : ''}
      </div>
    </article>`;
  }

  function ideasList() {
    const pm = plannedMap();
    const list = allActs().filter(a => matches(a, filters));
    if (!list.length) return '<p class="empty big">Nichts gefunden. Filter zurücksetzen oder anders suchen.</p>';
    return GROUP_ORDER.map(key => {
      const acts = list.filter(a => a.c === key);
      if (!acts.length) return '';
      const c = T.cities[key];
      const title = key === 'fra' ? 'An- und Abreise' : key === 'any' ? 'Überall möglich' : c.name;
      return `<section class="group" style="--c:var(--c-${key})">
        <h2 class="group-h">${c.loc && key !== 'fra' ? `<span class="hz"${LA()}>${c.loc}</span>` : ''}${title}<span class="count">${acts.length}</span></h2>
        <div class="acts">${acts.map(a => cardHtml(a, pm)).join('')}</div>
      </section>`;
    }).join('');
  }

  function chip(k, v, label, curVal) {
    return `<button class="chip" data-action="filter" data-k="${k}" data-v="${v}" aria-pressed="${String(v) === String(curVal)}">${label}</button>`;
  }

  function renderIdeas() {
    const cats = Object.keys(CATEGORIES).filter(k => k !== 'eigene' || Object.keys(state.custom).length);
    return `
    <section class="page-head">
      <h1 class="page-title">Ideen</h1>
      <p class="lede">${allActs().length} Ideen von klassisch bis komplett verrückt. „Einplanen“ legt sie direkt in einen Tag, der rote Stempel zeigt, wo sie schon drin sind.</p>
      <div class="filters">
        <label class="search"><span class="sr-only">Ideen durchsuchen</span><input type="search" id="q" value="${esc(filters.q)}" placeholder="Suchen, z. B. Markt, Tempel, Nacht" autocomplete="off"></label>
        <div class="chips" role="group" aria-label="Ort">
          ${chip('city', 'all', 'Alle Orte', filters.city)}
          ${CITY_KEYS.map(k => chip('city', k, T.cities[k].name, filters.city)).join('')}
          ${chip('city', 'any', 'Überall', filters.city)}
        </div>
        <div class="chips" role="group" aria-label="Art">
          ${chip('cat', 'all', 'Alles', filters.cat)}
          ${cats.map(k => chip('cat', k, CATEGORIES[k], filters.cat)).join('')}
        </div>
        <div class="chips" role="group" aria-label="Verrückt-Faktor">
          <span class="chips-label">Verrückt-Faktor</span>
          ${chip('crazy', 0, 'Egal', filters.crazy)}
          ${[1, 2, 3].map(v => chip('crazy', v, `<span class="chili">${I.chili.repeat(v)}</span><span class="sr-only">mindestens ${v}</span>`, filters.crazy)).join('')}
        </div>
      </div>
    </section>
    <div id="ideas-list">${ideasList()}</div>`;
  }

  /* ---------- Tipps & Checkliste ---------- */

  function weatherTable() {
    const months = new Set();
    if (state.start) for (let i = 0; i < state.days.length; i++) months.add(dayDate(i).getMonth());
    const keys = CITY_KEYS.filter(k => T.weather[k]);
    const rows = keys.map(k => `<tr><th scope="row">${T.cities[k].name}</th>${T.weather[k].map((t, m) =>
      `<td class="${months.has(m) ? 'is-trip' : ''}" style="--t:${Math.max(0, Math.min(1, (t + 2) / 38)).toFixed(2)}">${t}°</td>`).join('')}</tr>`).join('');
    return `<div class="table-wrap"><table class="weather">
      <caption>Durchschnittliche Tageshöchstwerte in °C${months.size ? ', euer Reisemonat ist markiert' : ''}</caption>
      <thead><tr><th scope="col"><span class="sr-only">Ort</span></th>${MONTHS.map((m, i) => `<th scope="col" class="${months.has(i) ? 'is-trip' : ''}">${m}</th>`).join('')}</tr></thead>
      <tbody>${rows}</tbody></table></div>`;
  }

  function renderTips() {
    const tips = T.tips.map(t => `<details class="tip" id="tip-${t.id}"><summary>${t.title}</summary><div class="tip-body">${t.html.replace('<div id="weather-table"></div>', weatherTable())}</div></details>`).join('');
    const phrases = T.phrases.map((p, k) => `<li><button class="phrase" data-action="phrase" data-i="${k}"><span class="loc-big"${LA()}>${p[0]}</span><span class="py">${esc(p[1])}</span><span class="de">${esc(p[2])}</span></button></li>`).join('');
    return `
    <section class="page-head">
      <h1 class="page-title">Tipps</h1>
      <p class="lede">Was man vor und während der Reise wissen muss: Einreise, Bezahlen, Internet, Bahn, Hotels, Essen. Antippen zum Aufklappen.</p>
    </section>
    <div class="tips">
      ${tips}
      <details class="tip" id="tip-sprache"><summary>Sprachführer</summary><div class="tip-body">
        <p>Antippen zeigt den Satz groß auf dem Display – einfach dem Gegenüber hinhalten.</p>
        <ul class="phrases">${phrases}</ul>
      </div></details>
    </div>`;
  }

  function relText(off) {
    const d = -off;
    if (d >= 90) return `ca. ${Math.round(d / 30)} Monate vorher`;
    if (d >= 28) return `ca. ${Math.round(d / 7)} Wochen vorher`;
    return `${d} Tage vorher`;
  }

  function renderCheck() {
    const prep = T.prep.slice().sort((a, b) => a.off - b.off);
    const total = prep.length + T.packing.length;
    const done = prep.filter(p => state.checks[p.id]).length + T.packing.filter((_, k) => state.checks['k-' + k]).length;
    const today = new Date(); today.setHours(0, 0, 0, 0);
    const prepHtml = prep.map(p => {
      const due = state.start ? dayDate(p.off) : null;
      const isDone = !!state.checks[p.id];
      const late = due && due < today && !isDone;
      return `<li class="check${isDone ? ' is-done' : ''}${late ? ' is-late' : ''}">
        <label><input type="checkbox" data-check="${p.id}"${isDone ? ' checked' : ''}>
          <span class="check-main"><span class="check-t">${esc(p.t)}</span><span class="check-d">${esc(p.d)}</span></span>
          <span class="check-due">${due ? (late ? 'überfällig, ' : 'bis ') + fmtDate.format(due) : relText(p.off)}</span>
        </label></li>`;
    }).join('');
    const packHtml = T.packing.map((t, k) => {
      const id = 'k-' + k;
      return `<li class="check${state.checks[id] ? ' is-done' : ''}"><label><input type="checkbox" data-check="${id}"${state.checks[id] ? ' checked' : ''}><span class="check-main"><span class="check-t">${esc(t)}</span></span></label></li>`;
    }).join('');
    return `
    <section class="page-head">
      <h1 class="page-title">Checkliste</h1>
      <p class="lede">${done} von ${total} erledigt.${state.start ? '' : ' Mit Abflugdatum unter „Route“ stehen hier die echten Fristen.'} Häkchen werden mit dem Teilen-Link mitgeschickt.</p>
      <div class="progress" role="progressbar" aria-valuemin="0" aria-valuemax="${total}" aria-valuenow="${done}" aria-label="Fortschritt"><span style="width:${(done / total * 100).toFixed(1)}%"></span></div>
    </section>
    <section class="panel">
      <h2 class="panel-title">Vor der Reise</h2>
      <ol class="checks">${prepHtml}</ol>
    </section>
    <section class="panel">
      <h2 class="panel-title">Packliste</h2>
      <ul class="checks">${packHtml}</ul>
    </section>`;
  }

  /* ---------- Rendern & Navigation ---------- */

  function updateHeader() {
    const home = view === 'home';
    document.body.classList.toggle('is-home', home);
    const seal = $('#brand-seal');
    const crumb = $('#crumb');
    seal.textContent = home ? HOME_SEAL : T.seal;
    seal.setAttribute('lang', home ? 'ja' : T.lang);
    crumb.hidden = home;
    crumb.textContent = home ? '' : T.name;
    document.title = home ? 'Reiseplaner' : `${T.name} – Reiseplaner`;
    $$('[data-view]').forEach(a => {
      if (!home) a.setAttribute('href', `#${T.id}/${a.dataset.view}`);
      if (!home && a.dataset.view === view) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });
  }

  function render() {
    const app = $('#app');
    app.innerHTML = view === 'home' ? renderHome()
      : view === 'tage' ? renderDays()
        : view === 'ideen' ? renderIdeas()
          : view === 'tipps' ? renderTips()
            : view === 'check' ? renderCheck()
              : renderRoute();
    updateHeader();
    if (pendingScroll != null && view === 'tage') {
      const el = document.getElementById('day-' + pendingScroll);
      pendingScroll = null;
      if (el) requestAnimationFrame(() => el.scrollIntoView({ behavior: reduceMotion() ? 'auto' : 'smooth', block: 'start' }));
    }
    stampId = null;
  }

  function parseHash() {
    const h = location.hash.replace(/^#/, '');
    if (!h) return { home: true };
    if (VIEWS.indexOf(h) >= 0 && TRIP_BY_ID.china) return { legacy: `china/${h}` };   // alte China-Links
    if (h.indexOf('plan=') === 0) return { plan: h.slice(5), trip: null };
    const i = h.indexOf('/');
    const trip = i < 0 ? h : h.slice(0, i);
    const rest = i < 0 ? '' : h.slice(i + 1);
    if (!TRIP_BY_ID[trip]) return { home: true };
    if (rest.indexOf('plan=') === 0) return { plan: rest.slice(5), trip };
    return { trip, view: VIEWS.indexOf(rest) >= 0 ? rest : 'route' };
  }

  async function route() {
    const r = parseHash();
    if (r.legacy) { location.replace('#' + r.legacy); return; }
    if (r.plan != null) { await openSharedPlan(r.plan, r.trip); return; }
    if (r.home) {
      const was = view;
      leaveTrip();
      view = 'home';
      if (was !== 'home') window.scrollTo(0, 0);
      render();
      return;
    }
    const tripChanged = !T || T.id !== r.trip;
    setTrip(r.trip);
    const changed = tripChanged || r.view !== view;
    const willScroll = pendingScroll != null;
    view = r.view;
    if (changed && !willScroll) window.scrollTo(0, 0);
    render();
  }

  function go(v) {
    const h = `#${T.id}/${v}`;
    if (location.hash === h) { view = v; render(); }
    else location.hash = h;
  }

  /* ---------- Plan ändern ---------- */

  function insertPos(items, slot) {
    const o = SLOT_ORDER[slot];
    for (let k = 0; k < items.length; k++) if (SLOT_ORDER[items[k].slot] > o) return k;
    return items.length;
  }
  function addItem(dayIdx, id) {
    const a = getAct(id);
    if (!a || !state.days[dayIdx]) return;
    snapshot();
    const items = state.days[dayIdx].items;
    const slot = Number.isInteger(a.w) ? a.w : 1;
    items.splice(insertPos(items, slot), 0, { id, slot, done: false });
    stampId = id;
    commit();
    toast(`„${a.t}“ an Tag ${dayIdx + 1} eingeplant`, true);
  }
  function moveItem(from, idx, to) {
    snapshot();
    const [it] = state.days[from].items.splice(idx, 1);
    const items = state.days[to].items;
    items.splice(insertPos(items, it.slot), 0, it);
    commit();
    const a = getAct(it.id);
    toast(`„${a ? a.t : 'Aktivität'}“ auf Tag ${to + 1} verschoben`, true);
  }
  function removeItem(day, idx) {
    snapshot();
    const [it] = state.days[day].items.splice(idx, 1);
    commit();
    const a = getAct(it.id);
    toast(`„${a ? a.t : 'Aktivität'}“ entfernt`, true);
  }

  /* ---------- Dialoge ---------- */

  const dlg = () => $('#modal');
  function openModal(title, body, ctx) {
    const d = dlg();
    $('#modal-title').textContent = title;
    $('#modal-body').innerHTML = body;
    modalCtx = ctx || null;
    if (!d.open) d.showModal();
    $('#modal-body').scrollTop = 0;
  }
  function closeModal() {
    const d = dlg();
    if (d.open) d.close();
    modalCtx = null;
  }

  function dayPickList(action, a, exclude) {
    return `<ul class="day-pick">${state.days.map((d, i) => {
      const dt = dayDate(i);
      const match = d.city === a.c;
      const wd = dt ? dt.getDay() : -1;
      const closed = dt && a.closed && a.closed.indexOf(wd) >= 0;
      const notOpen = dt && a.only && a.only.indexOf(wd) < 0;
      const status = closed ? 'geschlossen' : notOpen ? `nur ${a.only.map(x => WD_SHORT[x]).join('/')}` : d.items.length ? d.items.length + ' geplant' : 'frei';
      return `<li><button class="pick${match ? ' is-match' : ''}" data-action="${action}" data-day="${i}" style="--c:var(--c-${d.city})"${i === exclude ? ' disabled' : ''}>
        <b>${i + 1}</b>
        <span class="pick-date">${dt ? fmtDay.format(dt) : 'Tag ' + (i + 1)}</span>
        <span class="pick-city">${cityName(d.city)}</span>
        <span class="pick-count${closed || notOpen ? ' is-warn' : ''}">${status}</span>
      </button></li>`;
    }).join('')}</ul>`;
  }

  function openAdd(id) {
    const a = getAct(id);
    const c = T.cities[a.c];
    const hint = c && a.c !== 'any' && a.c !== 'fra' ? `Tage in ${c.name} sind hervorgehoben.` : 'Passt an jeden Tag.';
    openModal(`„${a.t}“ einplanen`, `<p class="modal-hint">${hint}</p>${dayPickList('pick-day', a)}`, { type: 'add', id });
  }
  function openMove(day, idx) {
    const a = getAct(state.days[day].items[idx].id);
    openModal(`„${a.t}“ verschieben`, `<p class="modal-hint">Auf welchen Tag?</p>${dayPickList('move-to', a, day)}`, { type: 'move', day, idx });
  }

  function pickerList() {
    const day = state.days[picker.day];
    const here = new Set(day.items.map(it => it.id));
    const pm = plannedMap();
    const list = allActs().filter(a => matches(a, { city: picker.city, cat: 'all', crazy: 0, q: picker.q }) && !isTransport(a));
    if (!list.length) return '<li class="empty">Nichts gefunden.</li>';
    return list.map(a => {
      const elsewhere = pm[a.id] && !here.has(a.id) ? `Tag ${pm[a.id].map(x => x + 1).join(', ')}` : '';
      return `<li class="pick-row" style="--c:var(--c-${a.c})">
        <button class="pick-info" data-action="detail" data-id="${a.id}">
          <span class="pick-t">${esc(a.t)}</span>
          <span class="pick-m"><span>${fmtHours(a.d)}</span><span>${esc(priceText(a))}</span>${chilis(a.v)}${elsewhere ? `<span class="pick-else">schon an ${elsewhere}</span>` : ''}</span>
        </button>
        ${here.has(a.id) ? `<span class="seal-mini${stampId === a.id ? ' is-new' : ''}"${LA()} title="Schon an diesem Tag">${sealText(picker.day)}</span>` : `<button class="btn small" data-action="pick-act" data-id="${a.id}">${I.plus}Dazu</button>`}
      </li>`;
    }).join('');
  }
  function pickerChips() {
    return ['all', ...CITY_KEYS, 'any'].map(k => `<button class="chip" data-action="picker-city" data-v="${k}" aria-pressed="${picker.city === k}">${k === 'all' ? 'Alle' : T.cities[k].name}</button>`).join('');
  }
  function openPicker(dayIdx) {
    const d = state.days[dayIdx];
    picker.day = dayIdx;
    picker.q = '';
    picker.city = d.city === 'fra' ? 'all' : d.city;
    openModal(`Tag ${dayIdx + 1}: Aktivität hinzufügen`, `
      <div class="picker-filters">
        <label class="search"><span class="sr-only">Suchen</span><input type="search" id="pq" placeholder="Suchen" autocomplete="off"></label>
        <div class="chips" id="picker-chips">${pickerChips()}</div>
      </div>
      <ul class="pick-list" id="pick-list">${pickerList()}</ul>
      <details class="custom">
        <summary>Eigene Aktivität anlegen</summary>
        <form id="custom-form" class="custom-form">
          <label class="field"><span>Titel</span><input name="t" required maxlength="80" placeholder="z. B. Abendessen mit Freunden"></label>
          <label class="field"><span>Name oder Adresse in Landesschrift (optional, für die Taxi-Karte)</span><input name="loc" maxlength="120"></label>
          <div class="fields">
            <label class="field"><span>Dauer in Std.</span><input name="d" type="number" min="0" step="0.5" value="2" inputmode="decimal"></label>
            <label class="field"><span>Preis p. P. in ${esc(cur())}</span><input name="p" type="number" min="0" step="any" value="0" inputmode="numeric"></label>
          </div>
          <label class="field"><span>Notiz</span><textarea name="desc" rows="2" maxlength="400"></textarea></label>
          <button class="btn primary" type="submit">Anlegen und einplanen</button>
        </form>
      </details>`, { type: 'picker', day: dayIdx });
  }
  function refreshPicker() {
    const list = $('#pick-list');
    if (list) list.innerHTML = pickerList();
    const chips = $('#picker-chips');
    if (chips) chips.innerHTML = pickerChips();
  }

  function openDetail(id, day, idx) {
    const a = getAct(id);
    if (!a) return;
    const inDay = day != null && idx != null && state.days[day] && state.days[day].items[idx];
    const it = inDay ? state.days[day].items[idx] : null;
    const warns = inDay ? itemWarnings(a, day) : [];
    const c = T.cities[a.c] || T.cities.any;
    const back = modalCtx && modalCtx.type === 'picker' ? modalCtx.day : null;
    const rows = [['Ort', a.c === 'fra' ? 'An- und Abreise' : c.name], ['Dauer', fmtHours(a.d)], ['Preis', priceText(a)]];
    if (a.book) rows.push(['Buchen', a.book]);
    if (a.closed) rows.push(['Ruhetag', a.closed.map(x => WD_SHORT[x]).join(', ')]);
    if (a.only) rows.push(['Nur', a.only.map(x => WD_SHORT[x]).join('/')]);
    const maps = mapLinks(a);
    openModal(a.t, `
      ${a.loc ? `<p class="loc-big detail-loc"${LA()}>${esc(a.loc)}</p>` : ''}
      ${a.v ? `<p class="detail-crazy">${chilis(a.v)} Verrückt-Faktor ${a.v} von 3</p>` : ''}
      <p>${esc(a.desc)}</p>
      ${a.tip ? `<p class="act-tip"><strong>Tipp:</strong> ${esc(a.tip)}</p>` : ''}
      <dl class="detail-facts">${rows.map(r => `<dt>${r[0]}</dt><dd>${esc(r[1])}</dd>`).join('')}</dl>
      ${warns.length ? `<p class="warn">${esc(warns.join(', '))}</p>` : ''}
      <div class="detail-actions">
        ${canTaxi(a) ? `<button class="btn" data-action="taxi" data-id="${a.id}">${I.card}Taxi-Karte</button>` : ''}
        ${maps.map(m => `<a class="btn" href="${esc(m.url)}" target="_blank" rel="noopener">${esc(m.label)}</a>`).join('')}
      </div>
      ${inDay ? `<div class="detail-actions">
          <button class="btn" data-action="done" data-day="${day}" data-idx="${idx}">${it.done ? 'Wieder offen' : 'Erledigt'}</button>
          <button class="btn" data-action="move" data-day="${day}" data-idx="${idx}">${I.move}Anderer Tag</button>
          <button class="btn danger" data-action="remove" data-day="${day}" data-idx="${idx}">${I.x}Entfernen</button>
        </div>`
        : back != null
          ? `<div class="detail-actions"><button class="btn primary" data-action="pick-act" data-id="${a.id}" data-back="${back}">${I.plus}Zu Tag ${back + 1}</button><button class="btn" data-action="open-picker" data-day="${back}">Zurück zur Liste</button></div>`
          : `<div class="detail-actions"><button class="btn primary" data-action="add" data-id="${a.id}">${I.plus}Einplanen</button></div>`}
      ${a.custom ? `<div class="detail-actions"><button class="btn ghost" data-action="delete-custom" data-id="${a.id}">Eigene Aktivität ganz löschen</button></div>` : ''}`,
    { type: 'detail', id, day, idx, back });
  }

  function confirmModal(title, text, action, label) {
    openModal(title, `<p>${text}</p><div class="detail-actions"><button class="btn primary" data-action="${action}">${label}</button><button class="btn" data-action="close-modal">Abbrechen</button></div>`, { type: 'confirm' });
  }

  /* ---------- Taxi-Karte ---------- */

  function showBig(text, opts) {
    const o = opts || {};
    const d = $('#taxi');
    const len = hzLen(text);
    const size = len > 24 ? 'is-long' : len > 10 ? 'is-mid' : '';
    d.innerHTML = `<div class="taxi-inner">
      ${o.ask ? `<p class="taxi-ask"${LA()}>${esc(T.taxiAsk)}</p>` : ''}
      ${o.city ? `<p class="taxi-city"${LA()}>${esc(o.city)}</p>` : ''}
      <p class="taxi-loc ${size}"${LA()}>${esc(text)}</p>
      ${o.py ? `<p class="taxi-py">${esc(o.py)}</p>` : ''}
      ${o.de ? `<p class="taxi-de">${esc(o.de)}</p>` : ''}
      <div class="taxi-actions">
        <button class="btn" data-action="copy" data-text="${esc(text)}">Kopieren</button>
        <button class="btn primary" data-action="close-taxi">Schließen</button>
      </div>
    </div>`;
    if (!d.open) d.showModal();
  }

  /* ---------- Teilen, Export, Import ---------- */

  function pack() {
    return {
      v: 1, t: T.id, s: state.start, n: state.people, r: state.rate, h: state.hotelTier, f: state.foodTier,
      d: state.days.map(d => [d.city, d.hotel, d.note, d.items.map(it => [it.id, it.slot, it.done ? 1 : 0])]),
      c: state.custom, k: Object.keys(state.checks).filter(k => state.checks[k])
    };
  }
  function unpack(o) {
    if (!o || o.v !== 1 || !Array.isArray(o.d)) return null;
    const checks = {};
    (o.k || []).forEach(k => { checks[k] = true; });
    return normalize({
      start: o.s, people: o.n, rate: o.r, hotelTier: o.h, foodTier: o.f, custom: o.c, checks,
      days: o.d.map(d => ({ city: d[0], hotel: d[1], note: d[2], items: (d[3] || []).map(x => ({ id: x[0], slot: x[1], done: !!x[2] })) }))
    });
  }
  function b64u(bytes) {
    let s = '';
    for (let i = 0; i < bytes.length; i++) s += String.fromCharCode(bytes[i]);
    return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  }
  function unb64u(str) {
    let s = str.replace(/-/g, '+').replace(/_/g, '/');
    while (s.length % 4) s += '=';
    const bin = atob(s);
    const out = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
    return out;
  }
  async function encodePlan(obj) {
    const bytes = new TextEncoder().encode(JSON.stringify(obj));
    if (window.CompressionStream) {
      try {
        const stream = new Blob([bytes]).stream().pipeThrough(new CompressionStream('deflate-raw'));
        return 'z' + b64u(new Uint8Array(await new Response(stream).arrayBuffer()));
      } catch (e) { /* unkomprimiert weiter */ }
    }
    return 'j' + b64u(bytes);
  }
  async function decodePlan(str) {
    let bytes = unb64u(str.slice(1));
    if (str[0] === 'z') {
      const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream('deflate-raw'));
      bytes = new Uint8Array(await new Response(stream).arrayBuffer());
    }
    return JSON.parse(new TextDecoder().decode(bytes));
  }

  async function share() {
    const url = location.origin + location.pathname + `#${T.id}/plan=` + await encodePlan(pack());
    openModal('Plan teilen', `
      <p>Mit diesem Link sieht euer Mitreisender genau diesen Plan, inklusive Hotels, Notizen und Checkliste, und kann ihn übernehmen.</p>
      <label class="field"><span>Link</span><input id="share-url" readonly value="${esc(url)}"></label>
      <div class="detail-actions">
        <button class="btn primary" data-action="copy" data-text="${esc(url)}">Link kopieren</button>
        ${navigator.share ? '<button class="btn" data-action="native-share">Teilen …</button>' : ''}
        <a class="btn" href="https://wa.me/?text=${encodeURIComponent(`Unser ${T.name}-Plan: ` + url)}" target="_blank" rel="noopener">Per WhatsApp</a>
      </div>
      <p class="modal-hint">Der Plan steckt komplett im Link, nichts liegt auf einem Server. Ändert ihr später etwas, einfach neu teilen.</p>`, { type: 'share', url });
  }

  async function openSharedPlan(str, hashTrip) {
    let obj = null;
    try { if (/^[A-Za-z0-9_-]+$/.test(str)) obj = await decodePlan(str); } catch (e) { obj = null; }
    const tripId = (obj && TRIP_BY_ID[obj.t] && obj.t) || hashTrip || (TRIP_BY_ID.china ? 'china' : TRIPS[0].id);
    history.replaceState(null, '', location.pathname + location.search + `#${tripId}/tage`);
    setTrip(tripId);
    view = 'tage';
    render();
    const s = obj && unpack(obj);
    if (!s) { toast('Der Link enthält keinen lesbaren Plan.'); return; }
    openModal('Geteilten Plan übernehmen?', `
      <p>Du hast einen ${esc(T.name)}-Plan mit ${s.days.length} Tagen bekommen${s.start ? `, Abflug am ${fmtLong.format(parseDate(s.start))}` : ''}. Übernehmen ersetzt den ${esc(T.name)}-Plan, der gerade in diesem Browser gespeichert ist.</p>
      <div class="detail-actions"><button class="btn primary" data-action="accept-shared">Plan übernehmen</button><button class="btn" data-action="close-modal">Meinen behalten</button></div>`,
    { type: 'shared', s });
  }

  function exportPlan() {
    const blob = new Blob([JSON.stringify(Object.assign({ trip: T.id }, state), null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `reiseplan-${T.id}.json`;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
    toast('Plan als Datei gespeichert');
  }
  function importPlan(file) {
    const r = new FileReader();
    r.onload = () => {
      try {
        const raw = JSON.parse(r.result);
        if (raw.trip && raw.trip !== T.id) {
          toast(`Diese Datei ist ein ${TRIP_BY_ID[raw.trip] ? TRIP_BY_ID[raw.trip].name : 'anderer'}-Plan. Bitte in der passenden Reise importieren.`);
          return;
        }
        const s = normalize(raw);
        if (!s) throw new Error('ungültig');
        snapshot();
        state = s;
        commit();
        toast('Plan importiert', true);
      } catch (e) {
        toast('Die Datei ist kein Reiseplan von dieser Seite.');
      }
    };
    r.readAsText(file);
  }

  async function copyText(text) {
    try {
      await navigator.clipboard.writeText(text);
      toast('Kopiert');
    } catch (e) {
      const inp = $('#share-url');
      if (inp) { inp.select(); toast('Link markiert – jetzt kopieren'); } else toast('Kopieren nicht möglich');
    }
  }

  /* ---------- Toast ---------- */

  let toastTimer = null;
  function toast(msg, undo) {
    const t = $('#toast');
    const host = document.querySelector('dialog[open]') || document.body;
    if (t.parentNode !== host) host.appendChild(t);
    t.innerHTML = `<span>${esc(msg)}</span>${undo && undoSnap ? '<button class="toast-btn" data-action="undo">Rückgängig</button>' : ''}`;
    t.classList.add('is-on');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('is-on'), 5000);
  }

  /* ---------- Ereignisse ---------- */

  const actions = {
    'jump': el => {
      pendingScroll = +el.dataset.day;
      if (view !== 'tage') go('tage'); else render();
    },
    'ideas-city': el => { filters.city = el.dataset.city; filters.cat = 'all'; go('ideen'); },
    'tier': el => {
      state[el.dataset.kind === 'hotel' ? 'hotelTier' : 'foodTier'] = +el.dataset.v;
      commit();
    },
    'filter': el => {
      const k = el.dataset.k;
      filters[k] = k === 'crazy' ? +el.dataset.v : el.dataset.v;
      $$(`.chip[data-k="${k}"]`).forEach(c => c.setAttribute('aria-pressed', String(c.dataset.v === String(filters[k]))));
      $('#ideas-list').innerHTML = ideasList();
    },
    'add': el => openAdd(el.dataset.id),
    'pick-day': el => {
      const id = modalCtx && modalCtx.id;
      closeModal();
      if (id) addItem(+el.dataset.day, id);
    },
    'move-to': el => {
      const ctx = modalCtx;
      closeModal();
      if (ctx && ctx.type === 'move') moveItem(ctx.day, ctx.idx, +el.dataset.day);
    },
    'open-picker': el => openPicker(+el.dataset.day),
    'picker-city': el => { picker.city = el.dataset.v; refreshPicker(); },
    'pick-act': el => {
      if (el.dataset.back != null) {
        const day = +el.dataset.back;
        addItem(day, el.dataset.id);
        openPicker(day);
        return;
      }
      addItem(picker.day, el.dataset.id);
      stampId = el.dataset.id;
      refreshPicker();
      stampId = null;
    },
    'detail': el => openDetail(el.dataset.id, el.dataset.day != null ? +el.dataset.day : null, el.dataset.idx != null ? +el.dataset.idx : null),
    'slot': el => {
      const it = state.days[+el.dataset.day].items[+el.dataset.idx];
      it.slot = (it.slot + 1) % SLOTS.length;
      commit();
    },
    'up': el => {
      const items = state.days[+el.dataset.day].items, j = +el.dataset.idx;
      if (j > 0) { [items[j - 1], items[j]] = [items[j], items[j - 1]]; commit(); }
    },
    'down': el => {
      const items = state.days[+el.dataset.day].items, j = +el.dataset.idx;
      if (j < items.length - 1) { [items[j + 1], items[j]] = [items[j], items[j + 1]]; commit(); }
    },
    'move': el => openMove(+el.dataset.day, +el.dataset.idx),
    'remove': el => { closeModal(); removeItem(+el.dataset.day, +el.dataset.idx); },
    'done': el => {
      const it = state.days[+el.dataset.day].items[+el.dataset.idx];
      it.done = !it.done;
      closeModal();
      commit();
    },
    'delete-custom': el => {
      const id = el.dataset.id;
      snapshot();
      state.days.forEach(d => { d.items = d.items.filter(it => it.id !== id); });
      delete state.custom[id];
      closeModal();
      commit();
      toast('Eigene Aktivität gelöscht', true);
    },
    'add-day': () => {
      snapshot();
      const days = state.days;
      const lastIsHome = days.length > 1 && days[days.length - 1].city === 'fra';
      const pos = lastIsHome ? days.length - 1 : days.length;
      const prev = days[pos - 1];
      days.splice(pos, 0, { city: prev && prev.city !== 'fra' ? prev.city : CITY_KEYS[0], hotel: prev ? prev.hotel : '', note: '', items: [] });
      pendingScroll = pos;
      commit();
      toast(`Tag ${pos + 1} hinzugefügt`, true);
    },
    'delete-day': el => {
      if (state.days.length <= 1) return;
      snapshot();
      const i = +el.dataset.day;
      state.days.splice(i, 1);
      commit();
      toast(`Tag ${i + 1} gelöscht`, true);
    },
    'taxi': el => {
      const a = getAct(el.dataset.id);
      if (!a || !a.loc) return;
      const c = T.cities[a.c];
      showBig(a.loc, { ask: true, city: c && c.loc && a.c !== 'fra' && a.c !== 'any' ? c.loc : '', de: a.t });
    },
    'taxi-hotel': el => {
      const h = state.days[+el.dataset.day].hotel.trim();
      if (!h) { toast('Erst das Hotel eintragen, am besten mit Adresse in Landesschrift.'); return; }
      showBig(h, { ask: true });
    },
    'phrase': el => {
      const p = T.phrases[+el.dataset.i];
      showBig(p[0], { py: p[1], de: p[2] });
    },
    'close-taxi': () => $('#taxi').close(),
    'copy': el => copyText(el.dataset.text),
    'native-share': () => { if (modalCtx && modalCtx.url) navigator.share({ title: `Unser ${T.name}-Plan`, url: modalCtx.url }).catch(() => {}); },
    'share': () => share(),
    'accept-shared': () => {
      const s = modalCtx && modalCtx.s;
      closeModal();
      if (!s) return;
      snapshot();
      state = s;
      commit();
      toast('Geteilter Plan übernommen', true);
    },
    'export': () => exportPlan(),
    'import': () => $('#import-file').click(),
    'print': () => {
      if (view !== 'tage') go('tage');
      setTimeout(() => window.print(), 150);
    },
    'reset': () => confirmModal('Vorschlag wiederherstellen?', 'Die Tage werden durch den ursprünglichen Vorschlag ersetzt, Hotels und Notizen gehen dabei verloren. Datum, eigene Aktivitäten und Checkliste bleiben.', 'do-reset', 'Wiederherstellen'),
    'do-reset': () => {
      closeModal();
      snapshot();
      state.days = planFromDefault();
      commit();
      toast('Vorschlag wiederhergestellt', true);
    },
    'undo': () => {
      if (!undoSnap) return;
      const s = normalize(JSON.parse(undoSnap));
      undoSnap = null;
      if (s) { state = s; commit(); }
      if (modalCtx && modalCtx.type === 'picker') refreshPicker();
      $('#toast').classList.remove('is-on');
    },
    'close-modal': () => closeModal()
  };

  document.addEventListener('click', e => {
    const el = e.target.closest('[data-action]');
    if (el && actions[el.dataset.action] && !el.disabled) {
      e.preventDefault();
      actions[el.dataset.action](el, e);
      return;
    }
    // Klick auf den Hintergrund schließt Dialoge
    if (e.target === dlg()) closeModal();
    if (e.target === $('#taxi')) $('#taxi').close();
  });

  document.addEventListener('input', e => {
    const el = e.target;
    if (el.dataset.bind) {
      const d = state.days[+el.dataset.day];
      if (d) { d[el.dataset.bind] = el.value; save(); }
    } else if (el.id === 'q') {
      filters.q = el.value;
      $('#ideas-list').innerHTML = ideasList();
    } else if (el.id === 'pq') {
      picker.q = el.value;
      $('#pick-list').innerHTML = pickerList();
    }
  });

  document.addEventListener('change', e => {
    const el = e.target;
    if (el.dataset.set) {
      const k = el.dataset.set;
      if (k === 'start') state.start = isDate(el.value) ? el.value : '';
      if (k === 'people') state.people = clampInt(el.value, 1, 12, 2);
      if (k === 'rate') state.rate = Number(el.value) > 0 ? Number(el.value) : T.currency.rate;
      commit();
    } else if (el.dataset.change === 'day-city') {
      state.days[+el.dataset.day].city = el.value;
      commit();
    } else if (el.dataset.check) {
      if (el.checked) state.checks[el.dataset.check] = true; else delete state.checks[el.dataset.check];
      commit();
    } else if (el.dataset.bind === 'hotel') {
      // gleiches Hotel für die Folgetage in derselben Stadt übernehmen
      const i = +el.dataset.day;
      const city = state.days[i].city;
      for (let j = i + 1; j < state.days.length && state.days[j].city === city; j++) {
        if (state.days[j].hotel) break;
        state.days[j].hotel = el.value;
        const other = $(`input[data-bind="hotel"][data-day="${j}"]`);
        if (other) other.value = el.value;
      }
      save();
    } else if (el.id === 'import-file' && el.files && el.files[0]) {
      importPlan(el.files[0]);
      el.value = '';
    }
  });

  document.addEventListener('submit', e => {
    if (e.target.id !== 'custom-form') return;
    e.preventDefault();
    const f = new FormData(e.target);
    const title = String(f.get('t') || '').trim();
    if (!title) return;
    const day = picker.day;
    const city = state.days[day].city;
    const id = 'c-' + Date.now().toString(36);
    state.custom[id] = {
      t: title.slice(0, 80), loc: String(f.get('loc') || '').trim().slice(0, 120), desc: String(f.get('desc') || '').trim().slice(0, 400),
      d: Math.max(0, Number(f.get('d')) || 0), p: Math.max(0, Number(f.get('p')) || 0), c: city === 'fra' ? 'any' : city
    };
    addItem(day, id);
    e.target.reset();
    refreshPicker();
  });

  dlg().addEventListener('close', () => { modalCtx = null; });
  window.addEventListener('hashchange', () => { route(); });

  /* ---------- Start ---------- */

  (async function init() {
    if (!TRIPS.length) { $('#app').innerHTML = '<p class="panel">Keine Reise gefunden. Lege eine Datei in trips/ an.</p>'; return; }
    migrateLegacy();
    loadFonts();
    // Läuft gerade eine Reise? Dann direkt zum heutigen Tag.
    if (!location.hash) {
      const today = new Date(); today.setHours(0, 0, 0, 0);
      for (const t of TRIPS) {
        const s = savedRaw(t.id);
        if (!s || !isDate(s.start)) continue;
        const idx = Math.round((today - parseDate(s.start)) / 864e5);
        if (idx >= 0 && idx < s.days.length) {
          pendingScroll = idx;
          history.replaceState(null, '', `#${t.id}/tage`);
          break;
        }
      }
    }
    await route();
    if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost')) {
      navigator.serviceWorker.register('./sw.js').catch(() => {});
    }
  })();
})();
