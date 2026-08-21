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
  const BASE_URL = (function () {
    const cs = document.currentScript;
    if (cs && cs.src) {
      return cs.src.substring(0, cs.src.lastIndexOf("/"));
    }
    const scripts = document.getElementsByTagName("script");
    for (let i = scripts.length - 1; i >= 0; i--) {
      if (scripts[i].src && scripts[i].src.includes("loader")) {
        return scripts[i].src.substring(0, scripts[i].src.lastIndexOf("/"));
      }
    }
    return "https://cdn.jsdelivr.net/gh/jpjuliao/ash-microlearning-app@main";
  })();

  // Track pending activity IDs for revalidation when visiting individual activity pages
  function checkActivityPageBreadcrumbs() {
    const currentUrl = window.location.href;
    if (currentUrl.includes("/mod/h5pactivity/view.php?id=") || currentUrl.includes("mod/h5pactivity/view.php?id=")) {
      const breadcrumbNav = document.querySelector("#page-navbar, .breadcrumbs-container, .breadcrumb, nav[aria-label='Navigation bar']");
      const breadcrumbText = breadcrumbNav ? (breadcrumbNav.innerText || breadcrumbNav.textContent || "") : (document.body ? (document.body.innerText || document.body.textContent || "") : "");

      if (breadcrumbText.includes("ASH Education Microlearnings")) {
        const urlMatch = currentUrl.match(/id=(\d+)/);
        if (urlMatch) {
          const actId = urlMatch[1];
          try {
            const REVAL_KEY = "ash_microlearning_pending_revalidation";
            let pending = JSON.parse(localStorage.getItem(REVAL_KEY) || "[]");
            if (!Array.isArray(pending)) pending = [];
            if (!pending.includes(actId)) {
              pending.push(actId);
              localStorage.setItem(REVAL_KEY, JSON.stringify(pending));
            }
          } catch (e) {
            console.warn("Could not save pending revalidation activity ID:", e);
          }
        }
      }
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", checkActivityPageBreadcrumbs);
  } else {
    checkActivityPageBreadcrumbs();
  }

  // 1. Guard check: Only execute if container element exists on page
  const container = document.querySelector(".ash-microlearning-app");
  if (!container) return; // Exit immediately - 0 overhead on other pages!

  // Prevent double initialization
  if (container.dataset.loaded === "true") return;
  container.dataset.loaded = "true";

  // 2. Prevent FOUC (Flash of Unstyled Content) by keeping container hidden until CSS is loaded
  container.style.opacity = "0";
  container.style.transition = "opacity 0.2s ease-in-out";

  function showAppContainer() {
    requestAnimationFrame(() => {
      container.style.opacity = "1";
    });
  }

  const cssId = "ash-microlearning-css";
  let cssLink = document.getElementById(cssId);
  if (!cssLink) {
    cssLink = document.createElement("link");
    cssLink.id = cssId;
    cssLink.rel = "stylesheet";
    cssLink.href = `${BASE_URL}/styles.css`;
    cssLink.onload = showAppContainer;
    cssLink.onerror = showAppContainer;
    document.head.appendChild(cssLink);
  } else {
    showAppContainer();
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

      <div class="header-controls">
        <button class="update-btn" id="updateBtn" title="Refresh activities status" aria-label="Refresh activities status">
          <span class="update-icon-spinner">
            <svg class="update-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 12a9 9 0 1 1-6.21-8.58"></path>
              <polyline points="21 3 21 9 15 9"></polyline>
            </svg>
          </span>
        </button>

        <div class="view-switcher" role="tablist" aria-label="Switch views">
          <button class="switcher-btn active" id="tabsViewBtn" role="tab" aria-selected="true" aria-controls="tabsViewSection">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"/></svg>
            Tabs View
          </button>
          <button class="switcher-btn" id="calendarViewBtn" role="tab" aria-selected="false" aria-controls="calendarViewSection">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            Calendar View
          </button>
        </div>
      </div>
    </header>

    <div class="legend" role="note" aria-label="Completion status legend">
      <span class="legend-label">Status:</span>
      <label class="legend-item"><input type="checkbox" class="status-filter-checkbox" value="completed" checked /><span class="legend-dot green"></span>Completed correctly</label>
      <label class="legend-item"><input type="checkbox" class="status-filter-checkbox" value="wrong" checked /><span class="legend-dot red"></span>Completed, got it wrong</label>
      <label class="legend-item"><input type="checkbox" class="status-filter-checkbox" value="progress" checked /><span class="legend-dot yellow"></span>Started, not completed</label>
      <label class="legend-item"><input type="checkbox" class="status-filter-checkbox" value="empty" checked /><span class="legend-dot gray"></span>Not yet attempted</label>
    </div>

    <section id="tabsViewSection" class="view-section" role="tabpanel">
      <div id="tabsContainer" class="tabs-container"></div>
    </section>

    <section id="tilesViewSection" class="view-section hidden" role="tabpanel">
      <div class="filter-bar" role="navigation">
        <button class="filter-btn active" data-group="all">All Activities</button>
        <button class="filter-btn" data-group="Trivia Tuesdays">Trivia Tuesdays</button>
        <button class="filter-btn" data-group="Women Wednesdays">Women Wednesdays</button>
        <button class="filter-btn" data-group="Slide Saturdays">Slide Saturdays</button>
        <span class="activities-count" id="activitiesCount">Showing all activities</span>
      </div>
      <div id="tilesGrid" class="tiles-grid"></div>
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
