import { bottleneckTiers, frictionRegister, payload, remediationPosture, riskMap, summary, verification } from "./verticalBriefService.js";

const productTitle = "Operating Model Friction Index";
const domain = "https://friction.kineticgain.com";

const KG_FAVICON_DATA_URI =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64" role="img" aria-label="Kinetic Gain"><rect width="64" height="64" rx="15" fill="#0D0F12"/><g transform="translate(10 22.79) scale(0.25581)"><rect x="0" y="0" width="14" height="72" fill="#475B6B"/><polygon points="32,0 83,0 77,18 26,18" fill="#F5F2EB"/><polygon points="32,27 127,27 121,45 26,45" fill="#F5F2EB"/><polygon points="32,54 172,54 166,72 26,72" fill="#F5F2EB"/></g></svg>`
  );

const KG_MARK_SVG = `<svg class="kg-mark" viewBox="-8 -8 188 88" aria-hidden="true"><rect class="anchor" x="0" y="0" width="14" height="72"/><polygon class="bar" points="32,0 83,0 77,18 26,18"/><polygon class="bar" points="32,27 127,27 121,45 26,45"/><polygon class="bar" points="32,54 172,54 166,72 26,72"/></svg>`;

const KG_STYLE01_CSS = `:root{--onyx:#0D0F12;--cream:#F5F2EB;--bluegray:#475B6B;--bluegray-bright:#6E879A;--radius:16px;--maxw:1180px;--ease:cubic-bezier(.22,.61,.36,1);--font:"Geist",-apple-system,sans-serif;--mono:"Geist Mono",ui-monospace,monospace;--serif:"Newsreader",Georgia,serif;--a-emerald:#34D399;--a-cyan:#22D3EE;--a-violet:#A78BFA;--a-amber:#FBBF24;--a-pink:#F472B6;--a-blue:#60A5FA;--a-coral:#FB7185;--green:#69E3B3;--danger:#FF7F9B}html[data-theme="dark"]{--ground:#0A0B11;--ink:var(--cream);--ink-dim:#9AA1AD;--ink-faint:#565C68;--surface:rgba(255,255,255,.025);--surface-2:rgba(255,255,255,.045);--line:rgba(255,255,255,.08);--line-soft:rgba(255,255,255,.05);--signal:var(--bluegray-bright);--glow:1}html[data-theme="light"]{--ground:var(--cream);--ink:var(--onyx);--ink-dim:#5A5E63;--ink-faint:#A8A59C;--surface:rgba(13,15,18,.02);--surface-2:rgba(13,15,18,.04);--line:#E2DDD1;--line-soft:#EBE7DC;--signal:var(--bluegray);--glow:0}*{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}body{background:var(--ground);color:var(--ink);font-family:var(--font);line-height:1.5;letter-spacing:-.011em;-webkit-font-smoothing:antialiased;overflow-x:hidden;position:relative;transition:background .5s var(--ease),color .5s var(--ease)}body::after{content:"";position:fixed;inset:0;z-index:0;pointer-events:none;opacity:var(--glow);transition:opacity .5s var(--ease);background:radial-gradient(900px 600px at 12% -5%,rgba(124,92,232,.16),transparent 60%),radial-gradient(800px 600px at 92% 8%,rgba(34,211,238,.10),transparent 55%),radial-gradient(1000px 700px at 70% 100%,rgba(71,91,107,.18),transparent 60%),linear-gradient(180deg,#0A0B11 0%,#0C0E16 55%,#0A0C13 100%)}body::before{content:"";position:fixed;inset:0;pointer-events:none;z-index:1;opacity:.02;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")}::selection{background:var(--a-violet);color:#0A0B11}a{color:inherit}.wrap{max-width:var(--maxw);margin:0 auto;padding:0 28px}.eyebrow{font-family:var(--mono);font-size:11px;font-weight:500;letter-spacing:.18em;text-transform:uppercase;color:var(--ink-faint)}.kg-logo{display:flex;align-items:center;gap:11px;text-decoration:none;color:var(--ink)}.kg-mark{height:22px;width:auto;display:block;flex:none}.kg-mark .anchor{fill:var(--signal)}.kg-mark .bar{fill:var(--ink)}.kg-word{font-weight:600;font-size:18px;letter-spacing:-.035em;color:var(--ink);white-space:nowrap}header{position:sticky;top:0;z-index:50;background:color-mix(in srgb,var(--ground) 72%,transparent);backdrop-filter:blur(16px) saturate(150%);border-bottom:1px solid var(--line-soft)}.nav{display:flex;align-items:center;justify-content:space-between;height:68px;position:relative;z-index:2}.nav-links{display:flex;align-items:center;gap:22px;flex-wrap:wrap}.nav-links a{font-family:var(--mono);font-size:12px;letter-spacing:.06em;text-transform:uppercase;color:var(--ink-dim);text-decoration:none;transition:color .25s var(--ease)}.nav-links a:hover,.nav-links a.active{color:var(--ink)}.nav-links a.active{border-bottom:1px solid var(--a-cyan);padding-bottom:2px}.nav-right{display:flex;align-items:center;gap:14px}.theme-btn,.menu-btn{width:34px;height:34px;border:1px solid var(--line);border-radius:9px;background:transparent;color:var(--ink-dim);cursor:pointer;display:grid;place-items:center;transition:all .25s var(--ease)}.menu-btn{display:none;color:var(--ink)}.theme-btn:hover,.menu-btn:hover{color:var(--ink);border-color:var(--a-violet)}.theme-btn svg,.menu-btn svg{width:15px;height:15px}.hero{padding:84px 0 44px;position:relative;z-index:2}.hero .eyebrow{margin-bottom:22px;display:inline-flex;align-items:center;gap:10px}.hero .eyebrow .dot{width:7px;height:7px;border-radius:50%;background:linear-gradient(120deg,var(--a-violet),var(--a-cyan));box-shadow:0 0 12px rgba(124,92,232,.7)}.hero h1,.hero h2{font-size:clamp(40px,6vw,78px);font-weight:600;line-height:1.02;letter-spacing:-.04em;max-width:13ch;color:var(--ink)}.hero h1 .grad,.hero h2 .grad{background:linear-gradient(110deg,var(--a-violet),var(--a-cyan) 55%,var(--a-emerald));-webkit-background-clip:text;background-clip:text;color:transparent}.hero p,.section p{margin-top:22px;max-width:64ch;font-size:clamp(15px,1.4vw,17px);color:var(--ink-dim);line-height:1.6}.hero p strong{color:var(--ink);font-weight:500}.sec{padding:70px 0;border-top:1px solid var(--line-soft);position:relative;z-index:2}.sec-head{display:flex;gap:18px;align-items:baseline;margin-bottom:38px;flex-wrap:wrap}.sec-num{font-family:var(--mono);font-size:12px;letter-spacing:.1em;background:linear-gradient(120deg,var(--a-violet),var(--a-cyan));-webkit-background-clip:text;background-clip:text;color:transparent}.sec-title{font-size:clamp(24px,3vw,38px);font-weight:600;letter-spacing:-.03em;line-height:1.08}.sec-lead{color:var(--ink-dim);max-width:54ch;font-size:16px;line-height:1.6;margin-top:6px}.acard,.card{position:relative;background:var(--surface);border:1px solid var(--line);border-radius:var(--radius);overflow:hidden;transition:transform .3s var(--ease),border-color .3s var(--ease),background .3s var(--ease);padding:24px}.acard::before,.card::before{content:"";position:absolute;top:0;left:0;right:0;height:3px;background:var(--accent,linear-gradient(90deg,var(--a-violet),var(--a-cyan)));opacity:.9}.acard::after{content:"";position:absolute;inset:0;background:var(--accent,linear-gradient(90deg,var(--a-violet),var(--a-cyan)));opacity:0;filter:blur(40px);transition:opacity .4s var(--ease);z-index:-1}.acard:hover,.card:hover{transform:translateY(-3px);border-color:color-mix(in srgb,var(--ink) 22%,transparent);background:var(--surface-2)}.acard:hover::after{opacity:.08}footer{border-top:1px solid var(--line-soft);padding:44px 0 32px;position:relative;z-index:2;margin-top:48px}.foot-top{display:flex;justify-content:space-between;align-items:flex-start;gap:32px;flex-wrap:wrap;margin-bottom:32px}.foot-tag{max-width:38ch;color:var(--ink-dim);font-size:14.5px;line-height:1.6;margin-top:14px}.foot-cols{display:flex;gap:48px;flex-wrap:wrap}.foot-col h4{font-family:var(--mono);font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--ink-faint);margin-bottom:14px}.foot-col a{display:block;color:var(--ink-dim);text-decoration:none;font-size:13.5px;margin-bottom:8px;transition:color .2s var(--ease)}.foot-col a:hover{color:var(--ink)}.foot-bot{display:flex;justify-content:space-between;align-items:center;gap:20px;flex-wrap:wrap;padding-top:22px;border-top:1px solid var(--line-soft);font-family:var(--mono);font-size:11px;letter-spacing:.06em;text-transform:uppercase;color:var(--ink-faint)}.reveal{opacity:0;transform:translateY(20px);transition:opacity .8s var(--ease),transform .8s var(--ease)}.reveal.in{opacity:1;transform:none}@media(max-width:880px){.menu-btn{display:grid}.nav-links{position:absolute;top:68px;left:0;right:0;flex-direction:column;align-items:flex-start;background:var(--ground);border-bottom:1px solid var(--line);padding:20px 28px;gap:18px;display:none}.nav-links.open{display:flex}}@media(max-width:560px){.hero{padding:56px 0 32px}.wrap{padding:0 18px}}@media(prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}.reveal{opacity:1;transform:none}}`;

const FRICTION_CSS = `main{position:relative;z-index:2}.shell{max-width:var(--maxw);margin:0 auto;padding:0 28px 60px}.hero-panel{position:relative;overflow:hidden}.hero-panel::after{content:"";position:absolute;right:-80px;top:40px;width:260px;height:260px;border-radius:50%;background:radial-gradient(circle,rgba(96,165,250,.12),transparent 68%);pointer-events:none}.hero-grid{display:grid;grid-template-columns:minmax(0,1.35fr) minmax(280px,.65fr);gap:28px;align-items:start}.hero-copy{min-width:0}.hero-panel h1{max-width:15ch;font-size:clamp(38px,5vw,70px);line-height:1.02;text-wrap:balance}.hero-subtle{max-width:64ch}.hero-aside{display:grid;gap:14px;min-width:0}.hero-aside .acard{padding:18px 18px 20px}.hero-aside h3{font-size:18px;font-weight:600;line-height:1.2;color:var(--ink);margin:10px 0 8px}.hero-aside p{margin:0;color:var(--ink-dim);font-size:13.5px;line-height:1.6}.hero-mini-list{display:grid;gap:10px;list-style:none}.hero-mini-list li{padding:12px 0;border-top:1px solid var(--line-soft)}.hero-mini-list li:first-child{border-top:0;padding-top:0}.hero-mini-list strong{display:block;color:var(--ink);font-size:14px;line-height:1.35;margin-bottom:4px}.hero-mini-list span{display:block;color:var(--ink-dim);font-size:12.5px;line-height:1.55}.hero-nav{display:flex;gap:10px;flex-wrap:wrap;margin-top:28px}.hero-nav a{padding:10px 14px;border:1px solid var(--line);border-radius:999px;color:var(--ink-dim);font-family:var(--mono);font-size:11px;letter-spacing:.04em;text-decoration:none;transition:border-color .2s var(--ease),color .2s var(--ease)}.hero-nav a:hover,.hero-nav a.active{color:var(--ink);border-color:var(--a-cyan)}.stat-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-top:28px}.stat{padding:18px 20px;background:var(--surface-2);border:1px solid var(--line);border-radius:14px}.stat label{display:block;font-family:var(--mono);font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--a-emerald);margin-bottom:10px}.stat strong{display:block;font-size:clamp(30px,3.8vw,44px);font-weight:600;letter-spacing:-.04em;line-height:1;color:var(--ink)}.stat span{display:block;margin-top:9px;color:var(--ink-dim);font-size:13px;line-height:1.55}.card-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}.lane-card{display:flex;flex-direction:column;gap:12px;min-height:100%}.lane-card h3{font-size:18px;font-weight:600;line-height:1.2;color:var(--ink)}.lane-meta{display:grid;gap:6px}.lane-meta p{margin:0;color:var(--ink-dim);font-size:13.5px;line-height:1.55}.lane-meta strong{color:var(--ink)}.lane-copy{margin-top:2px;color:var(--ink-dim);font-size:14px;line-height:1.6}.lane-next{margin-top:auto;padding-top:6px;color:var(--ink);font-size:14px;line-height:1.6}.tag{display:inline-flex;align-items:center;padding:5px 10px;border-radius:999px;font-family:var(--mono);font-size:10.5px;letter-spacing:.08em;text-transform:uppercase;border:1px solid var(--line);width:max-content}.tag.simplify,.tag.automate{color:var(--a-emerald);border-color:color-mix(in srgb,var(--a-emerald) 38%,transparent);background:color-mix(in srgb,var(--a-emerald) 12%,transparent)}.tag.standardize,.tag.escalate{color:var(--a-cyan);border-color:color-mix(in srgb,var(--a-cyan) 38%,transparent);background:color-mix(in srgb,var(--a-cyan) 12%,transparent)}.tag.contain{color:var(--a-amber);border-color:color-mix(in srgb,var(--a-amber) 38%,transparent);background:color-mix(in srgb,var(--a-amber) 12%,transparent)}.risk-list{display:grid;gap:10px;list-style:none;margin-top:16px}.risk-list li{position:relative;padding-left:18px;color:var(--ink-dim);font-size:14px;line-height:1.6}.risk-list li::before{content:"";position:absolute;left:0;top:8px;width:7px;height:7px;border-radius:50%;background:linear-gradient(135deg,var(--a-violet),var(--a-cyan))}.table-wrap{background:var(--surface);border:1px solid var(--line);border-radius:var(--radius);padding:18px 20px 20px;position:relative;overflow:hidden}.table-wrap::before{content:"";position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--a-cyan),var(--a-violet));opacity:.9}table{width:100%;border-collapse:collapse;font:13.5px/1.55 var(--font)}th,td{text-align:left;padding:12px 10px;border-bottom:1px solid var(--line-soft);vertical-align:top;color:var(--ink)}th{font-family:var(--mono);font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--ink-faint)}tbody tr:last-child td{border-bottom:0}tbody tr:hover{background:var(--surface-2)}td strong{color:var(--ink)}.metric-chip{display:inline-flex;align-items:center;gap:7px;padding:6px 11px;border-radius:999px;border:1px solid var(--line);color:var(--ink-faint);font-family:var(--mono);font-size:10.5px;letter-spacing:.08em;text-transform:uppercase}.metric-chip::before{content:"";width:7px;height:7px;border-radius:50%;background:linear-gradient(135deg,var(--a-violet),var(--a-cyan))}.section-stack{display:grid;gap:18px}.verification-list{display:grid;gap:12px;list-style:none}.verification-list li{padding:16px 18px;border:1px solid var(--line);border-radius:14px;background:var(--surface-2);color:var(--ink-dim);line-height:1.6}.footer-note{color:var(--ink-faint);font-size:13px;line-height:1.6;margin-top:14px}.code-block{margin-top:18px;white-space:pre-wrap;overflow-wrap:anywhere;color:var(--ink-dim);background:rgba(7,17,29,.75);border:1px solid rgba(125,196,255,.12);border-radius:18px;padding:18px;font-family:var(--mono);font-size:12.5px;line-height:1.65}.route-list{display:flex;flex-wrap:wrap;gap:8px;margin-top:18px}.route-list span{font-family:var(--mono);font-size:11px;letter-spacing:.04em;color:var(--a-cyan);border:1px solid color-mix(in srgb,var(--a-cyan) 30%,transparent);background:color-mix(in srgb,var(--a-cyan) 8%,transparent);border-radius:999px;padding:7px 11px}.foot-tag code,.code-block code{font-family:var(--mono)}@media(max-width:1080px){.hero-grid{grid-template-columns:1fr}.card-grid{grid-template-columns:repeat(2,1fr)}.stat-grid{grid-template-columns:repeat(2,1fr)}}@media(max-width:760px){.hero-panel h1{max-width:100%;font-size:clamp(34px,11vw,56px)}.hero-subtle{max-width:100%}.card-grid{grid-template-columns:1fr}.stat-grid{grid-template-columns:1fr}.shell{padding:0 18px 46px}}`;

const KG_THEME_JS = `(function(){var key='kg-theme';var saved=null;try{saved=localStorage.getItem(key)}catch(e){}var t=saved||'dark';document.documentElement.setAttribute('data-theme',t);document.addEventListener('DOMContentLoaded',function(){var btn=document.getElementById('themeBtn');if(btn){btn.addEventListener('click',function(){var cur=document.documentElement.getAttribute('data-theme');var n=cur==='dark'?'light':'dark';document.documentElement.setAttribute('data-theme',n);try{localStorage.setItem(key,n)}catch(e){}})}var m=document.getElementById('menuBtn');if(m){m.addEventListener('click',function(){var nl=document.querySelector('.nav-links');if(nl){nl.classList.toggle('open')}})}if('IntersectionObserver'in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});document.querySelectorAll('.reveal').forEach(function(el){io.observe(el)})}})})();`;

function escapeHtml(value: string) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function navLink(href: string, label: string, activePath: string) {
  return `<a${href === activePath ? ' class="active"' : ""} href="${href}">${label}</a>`;
}

function routeNav(activePath: string) {
  return [
    ["/", "Overview"],
    ["/friction-register", "Friction register"],
    ["/bottleneck-tiers", "Bottleneck tiers"],
    ["/remediation-posture", "Remediation posture"],
    ["/verification", "Verification"],
    ["/docs", "Docs"]
  ]
    .map(([href, label]) => navLink(href, label, activePath))
    .join("");
}

function pageFrame(title: string, description: string, activePath: string, body: string) {
  return `<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
  <title>${escapeHtml(title)} · Kinetic Gain</title>
  <meta name="description" content="${escapeHtml(description)}" />
  <meta name="theme-color" content="#0A0B11" />
  <meta name="referrer" content="strict-origin-when-cross-origin" />
  <meta http-equiv="Content-Security-Policy" content="default-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'; object-src 'none'; upgrade-insecure-requests" />
  <link rel="canonical" href="${domain}${activePath === "/" ? "/" : `${activePath}/`}" />
  <link rel="icon" type="image/svg+xml" href="${KG_FAVICON_DATA_URI}" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Kinetic Gain" />
  <meta property="og:title" content="${escapeHtml(title)}" />
  <meta property="og:url" content="${domain}${activePath === "/" ? "/" : `${activePath}/`}" />
  <meta property="og:description" content="${escapeHtml(description)}" />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="${escapeHtml(title)}" />
  <meta name="twitter:description" content="${escapeHtml(description)}" />
  <style>${KG_STYLE01_CSS}${FRICTION_CSS}</style>
</head>
<body>
  <header>
    <div class="wrap nav">
      <a class="kg-logo" href="/" aria-label="Kinetic Gain — Operating Model Friction Index">
        ${KG_MARK_SVG}
        <span class="kg-word">Kinetic Gain</span>
      </a>
      <nav class="nav-links" id="primaryNav">
        ${routeNav(activePath)}
      </nav>
      <div class="nav-right">
        <button class="theme-btn" id="themeBtn" aria-label="Toggle theme">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
        </button>
        <button class="menu-btn" id="menuBtn" aria-label="Menu">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </div>
    </div>
  </header>
  <main class="wrap shell">
    ${body}
  </main>
  <footer>
    <div class="wrap">
      <div class="foot-top">
        <div>
          <a class="kg-logo" href="/" aria-label="Kinetic Gain">${KG_MARK_SVG}<span class="kg-word">Kinetic Gain</span></a>
          <p class="foot-tag">Operating Model Friction Index turns coordination drag, tool sprawl, decision latency, and ownership ambiguity into one board-readable operating surface. Static demo data only.</p>
        </div>
        <div class="foot-cols">
          <div class="foot-col">
            <h4>Surface</h4>
            <a href="${domain}/">Overview</a>
            <a href="${domain}/friction-register/">Friction register</a>
            <a href="${domain}/bottleneck-tiers/">Bottleneck tiers</a>
          </div>
          <div class="foot-col">
            <h4>Links</h4>
            <a href="${domain}">${domain.replace("https://", "")}</a>
            <a href="https://github.com/mizcausevic-dev/operating-model-friction-index">GitHub repo</a>
            <a href="https://www.linkedin.com/in/mirzacausevic/">LinkedIn</a>
            <a href="https://kineticgain.com/">Kinetic Gain</a>
          </div>
        </div>
      </div>
      <div class="foot-bot">
        <span>Operating Model Friction Index</span>
        <span>Style01 · board-readable operating drag</span>
      </div>
    </div>
  </footer>
  <script>${KG_THEME_JS}</script>
</body>
</html>`;
}

function actionClass(action: string) {
  return action.toLowerCase();
}

function laneCard(item: ReturnType<typeof frictionRegister>[number]) {
  return `<article class="acard lane-card reveal">
    <span class="tag ${actionClass(item.action)}">${escapeHtml(item.action)}</span>
    <h3>${escapeHtml(item.operatingCluster)}</h3>
    <div class="lane-meta">
      <p><strong>Tier:</strong> ${escapeHtml(item.frictionTier)}</p>
      <p><strong>Owner:</strong> ${escapeHtml(item.owner)}</p>
      <p><strong>Audience:</strong> ${escapeHtml(item.audience)}</p>
    </div>
    <p class="lane-copy"><strong>Narrative:</strong> ${escapeHtml(item.frictionNarrative)}</p>
    <p class="lane-copy"><strong>Friction score:</strong> ${item.frictionScore}</p>
    <p class="lane-next">${escapeHtml(item.nextMove)}</p>
  </article>`;
}

export function renderFrictionOverview() {
  const executiveSummary = summary();
  const lanes = frictionRegister().slice(0, 4);
  const findings = riskMap().slice(0, 5);
  const hotspots = findings.slice(0, 3);

  return pageFrame(
    productTitle,
    "Board-ready surface for exposing operating-model drag, decision latency, ownership ambiguity, and recoverable margin.",
    "/",
    `<section class="hero reveal">
      <div class="acard hero-panel">
        <div class="hero-grid">
          <div class="hero-copy">
            <span class="eyebrow"><span class="dot"></span>Operating model</span>
            <h1>Where is coordination drag, tool sprawl, and decision overhead quietly eroding execution quality across the suite?</h1>
            <p class="hero-subtle">Operating Model Friction Index turns handoff complexity, tooling fragmentation, decision latency, and ownership ambiguity into one reusable board-facing friction surface.</p>
            <div class="hero-nav">${routeNav("/")}</div>
            <div class="stat-grid">
              <div class="stat"><label>Systems tracked</label><strong>${executiveSummary.systemsTracked}</strong><span>Modeled lanes in the current operating-model view.</span></div>
              <div class="stat"><label>High-friction lanes</label><strong>${executiveSummary.highFrictionLanes}</strong><span>Lanes where coordination or tooling drag is already materially visible.</span></div>
              <div class="stat"><label>Reset-required lanes</label><strong>${executiveSummary.resetRequiredLanes}</strong><span>Lanes where ownership or tooling should be reset before the next operating cycle.</span></div>
              <div class="stat"><label>Recoverable margin</label><strong>$${executiveSummary.recoverableMarginMillions}M</strong><span>Modeled margin recoverable by removing avoidable operating friction.</span></div>
            </div>
          </div>
          <aside class="hero-aside">
            <div class="acard">
              <span class="metric-chip">Board takeaway</span>
              <h3>What this operating model is telling leadership now</h3>
              <p>${escapeHtml(executiveSummary.leadingMessage)}</p>
            </div>
            <div class="acard">
              <span class="metric-chip">Hotspots</span>
              <h3>Where drag is compounding fastest</h3>
              <ul class="hero-mini-list">
                ${hotspots
                  .map(
                    (item) =>
                      `<li><strong>${escapeHtml(item.lane)}</strong><span>${escapeHtml(item.dimension)} drag · friction ${item.frictionScore} · remediation ${item.compositeRemediationScore} · $${item.recoverableMarginMillions}M recoverable</span></li>`
                  )
                  .join("")}
              </ul>
            </div>
            <div class="acard">
              <span class="metric-chip">Next board conversation</span>
              <p>${escapeHtml(executiveSummary.boardMessage)}</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
    <section class="sec reveal">
      <div class="sec-head">
        <span class="sec-num">01</span>
        <div>
          <h2 class="sec-title">Friction register</h2>
          <p class="sec-lead">${escapeHtml(executiveSummary.boardMessage)}</p>
        </div>
      </div>
      <div class="card-grid">
        ${lanes.map((item) => laneCard(item)).join("")}
      </div>
    </section>
    <section class="sec reveal">
      <div class="acard">
        <div class="sec-head">
          <span class="sec-num">02</span>
          <div>
            <h2 class="sec-title">Board-visible drag pressure</h2>
            <p class="sec-lead">The pressure map keeps remediation score, friction score, and recoverable margin visible in the same board-readable view.</p>
          </div>
        </div>
        <ul class="risk-list">
          ${findings
            .map(
              (item) =>
                `<li><strong>${escapeHtml(item.lane)}</strong> · remediation ${item.compositeRemediationScore} · friction ${item.frictionScore} · $${item.recoverableMarginMillions}M recoverable</li>`
            )
            .join("")}
        </ul>
      </div>
    </section>`
  );
}

export function renderFrictionRegister() {
  const items = frictionRegister();
  return pageFrame(
    "Friction register",
    "Friction-register view showing which lanes deserve cleanup before the next board or operator cycle.",
    "/friction-register",
    `<section class="hero reveal">
      <div class="acard hero-panel">
        <span class="eyebrow"><span class="dot"></span>Friction register</span>
        <h1>Each lane keeps one owner, one drag tier, one board audience, and one cleanup move attached.</h1>
        <p class="hero-subtle">The friction register keeps the operating story tied to the exact lane where coordination or tool overhead is still distorting execution.</p>
        <div class="hero-nav">${routeNav("/friction-register")}</div>
      </div>
    </section>
    <section class="sec reveal">
      <div class="card-grid">
        ${items.map((item) => laneCard(item)).join("")}
      </div>
    </section>`
  );
}

export function renderBottleneckTiers() {
  const rows = bottleneckTiers()
    .map(
      (item) => `<tr>
        <td><strong>${escapeHtml(item.lane)}</strong></td>
        <td>${escapeHtml(item.frictionTier)}</td>
        <td>${escapeHtml(item.dimension)}</td>
        <td>${escapeHtml(item.riskHeadline)}</td>
        <td>${escapeHtml(item.blockingIssue)}</td>
        <td>${item.frictionScore}</td>
        <td>${item.handoffLoadScore}</td>
        <td>${item.toolingSprawlScore}</td>
        <td>${item.decisionLatencyScore}</td>
        <td>${item.ownershipClarityScore}</td>
      </tr>`
    )
    .join("");

  return pageFrame(
    "Bottleneck tiers",
    "Bottleneck-tier view showing which operating friction is strongest in each lane.",
    "/bottleneck-tiers",
    `<section class="hero reveal">
      <div class="acard hero-panel">
        <span class="eyebrow"><span class="dot"></span>Bottleneck tiers</span>
        <h1>The real bottleneck stays visible: is it handoffs, tools, ownership, evidence overhead, or raw decision delay?</h1>
        <p class="hero-subtle">This view keeps each lane tied to the dominant friction dimension so leadership can simplify the right thing first.</p>
        <div class="hero-nav">${routeNav("/bottleneck-tiers")}</div>
      </div>
    </section>
    <section class="sec reveal">
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Lane</th>
              <th>Tier</th>
              <th>Dimension</th>
              <th>Risk headline</th>
              <th>Blocking issue</th>
              <th>Friction</th>
              <th>Handoffs</th>
              <th>Tools</th>
              <th>Latency</th>
              <th>Ownership</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    </section>`
  );
}

export function renderRemediationPosture() {
  const items = remediationPosture();
  return pageFrame(
    "Remediation posture",
    "Remediation-posture view for sequencing operating-model cleanup and margin recovery.",
    "/remediation-posture",
    `<section class="hero reveal">
      <div class="acard hero-panel">
        <span class="eyebrow"><span class="dot"></span>Remediation posture</span>
        <h1>Cleanup decisions stay tied to one owner, one recoverable margin signal, and one next operating move.</h1>
        <p class="hero-subtle">This posture makes it clear where to simplify, standardize, automate, escalate, or contain before the next review cycle.</p>
        <div class="hero-nav">${routeNav("/remediation-posture")}</div>
      </div>
    </section>
    <section class="sec reveal">
      <div class="card-grid">
        ${items
          .map(
            (item) => `<article class="acard lane-card reveal">
              <span class="tag ${actionClass(item.action)}">${escapeHtml(item.action)}</span>
              <h3>${escapeHtml(item.lane)}</h3>
              <div class="lane-meta">
                <p><strong>Owner:</strong> ${escapeHtml(item.owner)}</p>
                <p><strong>Remediation score:</strong> ${item.compositeRemediationScore}</p>
                <p><strong>Recoverable margin:</strong> $${item.recoverableMarginMillions}M</p>
              </div>
              <p class="lane-next">${escapeHtml(item.nextMove)}</p>
            </article>`
          )
          .join("")}
      </div>
    </section>`
  );
}

export function renderVerification() {
  const notes = verification();
  return pageFrame(
    "Verification",
    "Verification notes for the Operating Model Friction Index sample and modeled outputs.",
    "/verification",
    `<section class="hero reveal">
      <div class="acard hero-panel">
        <span class="eyebrow"><span class="dot"></span>Verification</span>
        <h1>How this operating-model surface is modeled and what it is safe to infer from it.</h1>
        <p class="hero-subtle">The verification layer keeps synthetic assumptions and safe-use boundaries visible before anyone treats the sample like live restructuring guidance.</p>
        <div class="hero-nav">${routeNav("/verification")}</div>
      </div>
    </section>
    <section class="sec reveal section-stack">
      <ul class="verification-list">
        ${notes.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
      </ul>
      <div class="acard">
        <span class="metric-chip">Summary payload</span>
        <pre class="code-block">${escapeHtml(JSON.stringify(payload().report.summary, null, 2))}</pre>
      </div>
    </section>`
  );
}

export function renderDocs() {
  return pageFrame(
    "Docs",
    "Product documentation for Operating Model Friction Index and its operating-drag routes.",
    "/docs",
    `<section class="hero reveal">
      <div class="acard hero-panel">
        <span class="eyebrow"><span class="dot"></span>Docs</span>
        <h1>Operating Model Friction Index packages coordination drag, tooling sprawl, decision latency, and ownership ambiguity into one reproducible surface.</h1>
        <p class="hero-subtle">This route keeps the lane definitions, route map, and payload shape readable for anyone using the sample as a board-ready operating model.</p>
        <div class="hero-nav">${routeNav("/docs")}</div>
      </div>
    </section>
    <section class="sec reveal">
      <div class="acard">
        <div class="route-list">
          <span>/</span>
          <span>/friction-register</span>
          <span>/bottleneck-tiers</span>
          <span>/remediation-posture</span>
          <span>/verification</span>
          <span>/docs</span>
        </div>
        <ul class="risk-list">
          <li><strong>/friction-register</strong> keeps tier stories, owners, and next moves tied to one lane.</li>
          <li><strong>/bottleneck-tiers</strong> compares handoff load, tooling fragmentation, decision latency, and ownership clarity.</li>
          <li><strong>/remediation-posture</strong> sequences simplify, standardize, automate, escalate, and contain decisions.</li>
          <li><strong>/api/payload</strong> exposes the reproducible friction packet.</li>
        </ul>
        <p class="footer-note">The local rail remains <code>npm run verify</code>, <code>npm run prerender</code>, and <code>powershell -ExecutionPolicy Bypass -File ./scripts/render_readme_assets.ps1</code>.</p>
      </div>
    </section>`
  );
}
