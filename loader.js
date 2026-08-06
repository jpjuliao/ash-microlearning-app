/**
 * ASH Microlearning App - Universal Embedded Loader
 * 
 * Instructions for LMS / CMS Integration:
 * 1. Place a single script tag in your global LMS header/footer:
 *    <script src="https://YOUR_HOSTING_URL/loader.js" defer></script>
 * 
 * 2. On any page where you want the app to appear, simply place an empty div:
 *    <div class="ash-microlearning-app"></div>
 */

(function () {
  "use strict";

  // Base URL pointing to hosted assets (GitHub Pages, jsDelivr, Cloudflare Pages, etc.)
  // Change this URL to your production hosting endpoint.
  const BASE_URL = (function () {
    const scripts = document.getElementsByTagName("script");
    const currentScript = scripts[scripts.length - 1];
    if (currentScript && currentScript.src) {
      return currentScript.src.substring(0, currentScript.src.lastIndexOf("/"));
    }
    return "https://cdn.jsdelivr.net/gh/jpjuliao/ash-microlearning-app@main";
  })();

  // 1. Guard check: Only execute if container element exists on page
  const container = document.querySelector(".ash-microlearning-app");
  if (!container) return; // Exit immediately - 0 overhead on other pages!

  // Prevent double initialization
  if (container.dataset.loaded === "true") return;
  container.dataset.loaded = "true";

  // 2. Inject CSS stylesheet dynamically
  if (!document.getElementById("ash-microlearning-css")) {
    const cssLink = document.createElement("link");
    cssLink.id = "ash-microlearning-css";
    cssLink.rel = "stylesheet";
    cssLink.href = `${BASE_URL}/styles.css`;
    document.head.appendChild(cssLink);
  }

  // 4. Inject HTML Skeleton markup into target container
  container.innerHTML = `
    <header class="app-header" role="banner">
      <div class="app-branding">
        <div class="app-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="26" height="26">
            <rect x="2"   y="2"    width="5" height="5" rx="1.5" fill="#cbd5e1" />
            <rect x="9.5" y="2"    width="5" height="5" rx="1.5" fill="#fff" />
            <rect x="17"  y="2"    width="5" height="5" rx="1.5" fill="#cbd5e1" />
            <rect x="2"   y="9.5"  width="5" height="5" rx="1.5" fill="#d32232" />
            <rect x="9.5" y="9.5"  width="5" height="5" rx="1.5" fill="#fff" />
            <rect x="17"  y="9.5"  width="5" height="5" rx="1.5" fill="#cbd5e1" />
            <rect x="2"   y="17"   width="5" height="5" rx="1.5" fill="#cbd5e1" />
            <rect x="9.5" y="17"   width="5" height="5" rx="1.5" fill="#cbd5e1" />
            <rect x="17"  y="17"   width="5" height="5" rx="1.5" fill="#d32232" />
          </svg>
        </div>
        <div class="app-header-text">
          <h1>Microlearning Activities</h1>
          <p>Track your progress across all trivia activities</p>
        </div>
      </div>

      <div class="view-switcher" role="tablist" aria-label="Switch views">
        <button class="switcher-btn active" id="tilesViewBtn" role="tab" aria-selected="true" aria-controls="tilesViewSection">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/></svg>
          Tiles View
        </button>
        <button class="switcher-btn" id="tabsViewBtn" role="tab" aria-selected="false" aria-controls="tabsViewSection">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"/></svg>
          Tabs View
        </button>
        <button class="switcher-btn" id="calendarViewBtn" role="tab" aria-selected="false" aria-controls="calendarViewSection">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          Calendar View
        </button>
      </div>
    </header>

    <div class="legend" role="note" aria-label="Completion status legend">
      <span class="legend-label">Status:</span>
      <span class="legend-item"><span class="legend-dot green"></span>Completed correctly</span>
      <span class="legend-item"><span class="legend-dot red"></span>Completed, got it wrong</span>
      <span class="legend-item"><span class="legend-dot yellow"></span>Started, not completed</span>
      <span class="legend-item"><span class="legend-dot gray"></span>Not yet attempted</span>
    </div>

    <section id="tilesViewSection" class="view-section" role="tabpanel">
      <div class="filter-bar" role="navigation">
        <button class="filter-btn active" data-group="all">All Activities</button>
        <button class="filter-btn" data-group="Trivia Tuesdays">Trivia Tuesdays</button>
        <button class="filter-btn" data-group="Women Wednesdays">Women Wednesdays</button>
        <button class="filter-btn" data-group="Slide Saturdays">Slide Saturdays</button>
        <span class="activities-count" id="activitiesCount">Showing all activities</span>
      </div>
      <div id="tilesGrid" class="tiles-grid"></div>
    </section>

    <section id="tabsViewSection" class="view-section hidden" role="tabpanel">
      <div id="tabsContainer" class="tabs-container"></div>
    </section>

    <section id="calendarViewSection" class="view-section hidden" role="tabpanel">
      <div class="calendar-card">
        <div class="calendar-controls">
          <button class="calendar-nav-btn" id="prevMonthBtn" aria-label="Previous Month">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <div class="calendar-select-group">
            <select class="calendar-select" id="monthSelect" aria-label="Select Month"></select>
            <select class="calendar-select" id="yearSelect" aria-label="Select Year"></select>
          </div>
          <button class="calendar-nav-btn" id="nextMonthBtn" aria-label="Next Month">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
        <div class="calendar-weekdays">
          <span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span>
        </div>
        <div class="calendar-grid" id="calendarGrid"></div>
      </div>
    </section>
  `;

  // 5. Inject Application Logic Script dynamically
  if (!document.getElementById("ash-microlearning-js")) {
    window.ASH_MICROLEARNING_BASE_URL = BASE_URL;
    const appJs = document.createElement("script");
    appJs.id = "ash-microlearning-js";
    appJs.src = `${BASE_URL}/script.js`;
    document.body.appendChild(appJs);
  }
})();
