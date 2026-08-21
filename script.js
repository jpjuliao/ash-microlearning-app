(function () {
  "use strict";

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  let allActivities = [];
  let currentView = "tabs";
  let currentGroupFilter = "all";
  let currentCalYear = 2025;
  let currentCalMonth = 2; // March (0-indexed)
  let selectedStatuses = new Set(["completed", "wrong", "progress", "empty"]);

  // ── Helper: Base URL Resolution ──
  function getBaseUrl() {
    return window.ASH_MICROLEARNING_BASE_URL || ".";
  }

  // ── Helper: Parse Date Field ──
  function parseItemDate(item) {
    const months = monthNames;
    let year = 2025, month = 0, day = 1;
    
    if (item.date) {
      const parts = item.date.split(" ");
      if (parts.length >= 3) {
        const mStr = parts[0];
        const dStr = parts[1].replace(",", "");
        const yStr = parts[2];
        
        const mIdx = months.findIndex(m => m.toLowerCase() === mStr.toLowerCase());
        if (mIdx >= 0) month = mIdx;
        day = parseInt(dStr, 10) || 1;
        year = parseInt(yStr, 10) || 2025;
        if (year > 2050) year = 2026;
      }
    }
    return { year, month, day, dateStr: `${months[month]} ${day}, ${year}` };
  }

  function getLogo(group) {
    const bUrl = getBaseUrl();
    if (group.includes("Women")) return `${bUrl}/Women-Wednesday-Logo.png`;
    if (group.includes("Slide")) return `${bUrl}/Slide-Saturday-Logo.png`;
    return `${bUrl}/Trivia-Tuesday-Logo.png`;
  }

  function statusClass(s) {
    if (s === "completed") return "status-completed-correct";
    if (s === "wrong")     return "status-completed-wrong";
    if (s === "progress")  return "status-in-progress";
    return "status-not-attempted";
  }

  function statusIcon(s) {
    if (s === "completed") return `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
    if (s === "wrong")     return `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#dc2626" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;
    if (s === "progress")  return `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#b45309" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`;
    return "";
  }

  // Dynamic activity scraping from current page DOM
  function scrapeActivitiesFromDOM() {
    const nodes = document.querySelectorAll(".course-content-item-content li.activity.activity-wrapper.modtype_h5pactivity");
    if (!nodes || nodes.length === 0) return null;

    const scraped = [];
    nodes.forEach(node => {
      // 1. Locate .activityname container or link element
      const actNameContainer = node.querySelector(".activityname");
      const linkEl = actNameContainer
        ? actNameContainer.querySelector("a")
        : node.querySelector("a.aalink, a.activityname, a[href*='mod/h5pactivity'], a");

      if (!linkEl) return;

      const link = linkEl.getAttribute("href") || "#";

      // Extract title from .instancename inside .activityname, stripping .accesshide
      const titleEl = (actNameContainer && actNameContainer.querySelector(".instancename")) ||
                      node.querySelector(".instancename") ||
                      linkEl;
      let title = "";
      if (titleEl) {
        const clone = titleEl.cloneNode(true);
        clone.querySelectorAll(".accesshide, .sr-only").forEach(el => el.remove());
        title = clone.textContent.trim();
      }
      if (!title) title = linkEl.textContent.trim();
      title = title.replace(/\s+/g, " ");

      // 2. Detect series group from title
      let group = "Trivia Tuesdays";
      if (/women\s*wednesday/i.test(title)) {
        group = "Women Wednesdays";
      } else if (/slide\s*saturday/i.test(title)) {
        group = "Slide Saturdays";
      } else if (/trivia\s*tuesday/i.test(title)) {
        group = "Trivia Tuesdays";
      }

      // 3. Extract date string from title (e.g., "March 4, 2025")
      let dateStr = "";
      const dateMatch = title.match(/([A-Z][a-z]+\s+\d{1,2}(?:,\s*|\s+)\d{4})/i);
      if (dateMatch) {
        dateStr = dateMatch[1];
        if (!dateStr.includes(",")) {
          dateStr = dateStr.replace(/([A-Z][a-z]+\s+\d{1,2})\s+(\d{4})/i, "$1, $2");
        }
      }

      // 4. Status determination from element HTML content
      // Mark 'Started, not completed' ("progress") if element contains:
      // 'Done: Student must view this activity to complete it'
      // The rest are marked 'Not yet attempted' ("empty").
      const fullText = (node.innerText || node.textContent || "").replace(/\s+/g, " ");
      let status = "empty"; // 'Not yet attempted'

      const hasDoneBadge =
        node.querySelector('.badge-success') !== null ||
        fullText.includes("Done: Student must view this activity to complete it") ||
        fullText.includes("Done:");

      if (hasDoneBadge) {
        status = "progress"; // 'Started, not completed'
      }

      scraped.push({
        name: title,
        date: dateStr,
        link: link,
        group: group,
        status: status
      });
    });

    return scraped.length > 0 ? scraped : null;
  }

  // Process raw scraped data into structured items
  function processActivities(raw) {
    if (!Array.isArray(raw)) return [];
    return raw.map(item => {
      const dInfo = parseItemDate(item);
      return {
        ...item,
        year: dInfo.year,
        month: dInfo.month,
        day: dInfo.day,
        formattedDate: dInfo.dateStr || item.date,
        status: item.status || "empty",
        logo: getLogo(item.group || "")
      };
    }).sort((a, b) => (a.year - b.year) || (a.month - b.month) || (a.day - b.day));
  }

  const STORAGE_KEY = "ash_microlearning_activities_data";

  function saveActivitiesToStorage(data) {
    try {
      if (Array.isArray(data) && data.length > 0) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      }
    } catch (e) {
      console.warn("Could not save microlearning activities to browser storage:", e);
    }
  }

  function loadActivitiesFromStorage() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn("Could not load microlearning activities from browser storage:", e);
    }
    return null;
  }

  const REVAL_KEY = "ash_microlearning_pending_revalidation";

  function getPendingRevalidationIds() {
    try {
      const stored = localStorage.getItem(REVAL_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch (e) {
      console.warn("Could not read pending revalidation IDs:", e);
    }
    return [];
  }

  function matchesPendingId(act, pendingIds) {
    if (!pendingIds || pendingIds.length === 0 || !act.link) return false;
    return pendingIds.some(id => act.link.includes(`id=${id}`) || act.link.includes(id));
  }

  function setUpdateLoading(isLoading) {
    const updateBtn = document.getElementById("updateBtn");
    if (updateBtn) {
      if (isLoading) {
        updateBtn.classList.add("loading");
        updateBtn.setAttribute("disabled", "true");
      } else {
        updateBtn.classList.remove("loading");
        updateBtn.removeAttribute("disabled");
      }
    }
  }

  // Asynchronously resolve detailed status for started activities only
  async function resolveProgressActivitiesAsync() {
    const pendingIds = getPendingRevalidationIds();

    const targetItems = allActivities.filter(act => {
      const isStarted = act.status === "progress" || act.status === "wrong";
      return isStarted || matchesPendingId(act, pendingIds);
    });

    setUpdateLoading(true);
    const startTime = Date.now();

    if (targetItems.length === 0) {
      setTimeout(() => setUpdateLoading(false), 600);
      return;
    }

    let hasUpdates = false;
    const processedIds = new Set();

    try {
      for (const act of targetItems) {
        if (!act.link) continue;

        const match = act.link.match(/id=(\d+)/);
        const actId = match ? match[1] : null;

        try {
          // 1. Fetch activity page HTML (with local fallback for local environment testing)
          let pageHtml = "";
          try {
            const pageRes = await fetch(act.link);
            if (pageRes.ok) pageHtml = await pageRes.text();
          } catch (e) {
            if (window.location.protocol === "file:" || window.location.hostname === "localhost") {
              try {
                const fb = await fetch("sample-activity-page.html");
                if (fb.ok) pageHtml = await fb.text();
              } catch (e2) {}
            }
          }
          if (!pageHtml) continue;

          // Parse activity page for Attempts Report link element
          const docPage = new DOMParser().parseFromString(pageHtml, "text/html");
          const reportEl = docPage.querySelector('li[data-key="attemptsreport"] a') ||
                           docPage.querySelector('a[href*="mod/h5pactivity/report.php"]');
          if (!reportEl) continue;

          let reportUrl = reportEl.getAttribute("href");
          if (!reportUrl) continue;

          if (!reportUrl.startsWith("http://") && !reportUrl.startsWith("https://")) {
            const base = new URL(act.link, window.location.href);
            reportUrl = new URL(reportUrl, base).href;
          }

          // 2. Fetch Attempts Report page HTML (with local fallback for local environment testing)
          let reportHtml = "";
          try {
            const reportRes = await fetch(reportUrl);
            if (reportRes.ok) reportHtml = await reportRes.text();
          } catch (e) {
            if (window.location.protocol === "file:" || window.location.hostname === "localhost") {
              try {
                const fb = await fetch("sample-activity-attempts.html");
                if (fb.ok) reportHtml = await fb.text();
              } catch (e2) {}
            }
          }
          if (!reportHtml) continue;

          // 3. Analyze Attempts Report page
          const docReport = new DOMParser().parseFromString(reportHtml, "text/html");
          
          const failIcon = docReport.querySelector('i[title="Fail"], i[aria-label="Fail"], i[title="Failed"], i[aria-label="Failed"]');
          const passIcon = docReport.querySelector('i[title="Pass"], i[aria-label="Pass"], i[title="Success"], i[aria-label="Success"], i.fa-check-circle, i.text-success');

          let newStatus = null;
          if (passIcon) {
            newStatus = "completed";
          } else if (failIcon) {
            newStatus = "wrong";
          } else {
            const text = docReport.body ? (docReport.body.innerText || docReport.body.textContent || "") : "";
            if (text.includes("Pass") || text.includes("Passed")) {
              newStatus = "completed";
            } else if (text.includes("Fail") || text.includes("Failed")) {
              newStatus = "wrong";
            }
          }

          if (newStatus && newStatus !== act.status) {
            act.status = newStatus;
            hasUpdates = true;
          }

          if (actId) processedIds.add(actId);
        } catch (err) {
          console.warn(`Could not resolve attempts report for activity: ${act.name}`, err);
          if (actId) processedIds.add(actId);
        }
      }

      // Clean up processed pending IDs from storage
      if (pendingIds.length > 0) {
        const remaining = pendingIds.filter(id => !processedIds.has(id));
        try {
          localStorage.setItem(REVAL_KEY, JSON.stringify(remaining));
        } catch (e) {}
      }

      saveActivitiesToStorage(allActivities);
      renderTilesView();
      renderTabsView();
      renderCalendarView();
    } finally {
      // Ensure at least 800ms of visible spinning animation for smooth UX
      const elapsed = Date.now() - startTime;
      const minDelay = Math.max(0, 800 - elapsed);
      setTimeout(() => {
        setUpdateLoading(false);
      }, minDelay);
    }
  }

  // Load activities: Use browser storage first; scrape DOM to update storage when available
  function initData() {
    let rawItems = loadActivitiesFromStorage();
    const domItems = scrapeActivitiesFromDOM();

    if (domItems && domItems.length > 0) {
      // Preserve detailed resolved statuses ('completed' / 'wrong') from stored items
      if (rawItems && rawItems.length > 0) {
        const storedMap = new Map();
        rawItems.forEach(item => {
          if (item.link) storedMap.set(item.link, item.status);
        });
        domItems.forEach(item => {
          const storedStatus = storedMap.get(item.link);
          if (storedStatus && (storedStatus === "completed" || storedStatus === "wrong")) {
            item.status = storedStatus;
          }
        });
      }
      rawItems = domItems;
      saveActivitiesToStorage(domItems);
    }

    allActivities = processActivities(rawItems || []);
    
    initControls();
    renderTilesView();
    renderTabsView();
    renderCalendarView();

    // Background asynchronous resolution of 'progress' items after page is fully loaded
    setTimeout(() => {
      resolveProgressActivitiesAsync();
    }, 300);
  }

  // ── Controls & Switching ──
  function initControls() {
    const tilesBtn = document.getElementById("tilesViewBtn");
    const tabsBtn = document.getElementById("tabsViewBtn");
    const calendarBtn = document.getElementById("calendarViewBtn");
    
    const tilesSec = document.getElementById("tilesViewSection");
    const tabsSec = document.getElementById("tabsViewSection");
    const calendarSec = document.getElementById("calendarViewSection");

    function setView(v) {
      currentView = v;
      [tilesBtn, tabsBtn, calendarBtn].forEach(b => {
        if (b) {
          b.classList.remove("active");
          b.setAttribute("aria-selected", "false");
        }
      });
      [tilesSec, tabsSec, calendarSec].forEach(s => {
        if (s) s.classList.add("hidden");
      });

      if (v === "tiles") {
        if (tilesBtn) { tilesBtn.classList.add("active"); tilesBtn.setAttribute("aria-selected", "true"); }
        if (tilesSec) tilesSec.classList.remove("hidden");
        renderTilesView();
      } else if (v === "tabs") {
        if (tabsBtn) { tabsBtn.classList.add("active"); tabsBtn.setAttribute("aria-selected", "true"); }
        if (tabsSec) tabsSec.classList.remove("hidden");
        renderTabsView();
      } else {
        if (calendarBtn) { calendarBtn.classList.add("active"); calendarBtn.setAttribute("aria-selected", "true"); }
        if (calendarSec) calendarSec.classList.remove("hidden");
        renderCalendarView();
      }
    }

    if (tilesBtn) tilesBtn.addEventListener("click", () => setView("tiles"));
    if (tabsBtn) tabsBtn.addEventListener("click", () => setView("tabs"));
    if (calendarBtn) calendarBtn.addEventListener("click", () => setView("calendar"));

    // Filter pills in tiles view
    const filterBtns = document.querySelectorAll(".filter-btn");
    filterBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentGroupFilter = btn.getAttribute("data-group");
        renderTilesView();
      });
    });

    // Update button click listener: re-validates started activities only
    const updateBtn = document.getElementById("updateBtn");
    if (updateBtn) {
      updateBtn.addEventListener("click", () => {
        resolveProgressActivitiesAsync();
      });
    }

    // 1-minute recurring timer to refresh started activities
    if (!window.ashMicrolearningRefreshTimer) {
      window.ashMicrolearningRefreshTimer = setInterval(() => {
        resolveProgressActivitiesAsync();
      }, 60000); // Every 60 seconds
    }

    // Status legend filter checkboxes
    const statusCheckboxes = document.querySelectorAll(".status-filter-checkbox");
    statusCheckboxes.forEach(cb => {
      cb.addEventListener("change", () => {
        if (cb.checked) {
          selectedStatuses.add(cb.value);
        } else {
          selectedStatuses.delete(cb.value);
        }
        renderTilesView();
        renderTabsView();
        renderCalendarView();
      });
    });

    // Calendar select controls
    const mSelect = document.getElementById("monthSelect");
    const ySelect = document.getElementById("yearSelect");
    const prevBtn = document.getElementById("prevMonthBtn");
    const nextBtn = document.getElementById("nextMonthBtn");

    if (mSelect) {
      mSelect.innerHTML = "";
      monthNames.forEach((m, idx) => {
        const opt = document.createElement("option");
        opt.value = idx;
        opt.textContent = m;
        mSelect.appendChild(opt);
      });
      mSelect.value = currentCalMonth;
      mSelect.addEventListener("change", (e) => {
        currentCalMonth = parseInt(e.target.value, 10);
        renderCalendarView();
      });
    }

    if (ySelect) {
      ySelect.innerHTML = "";
      const years = [2024, 2025, 2026];
      years.forEach(y => {
        const opt = document.createElement("option");
        opt.value = y;
        opt.textContent = y;
        ySelect.appendChild(opt);
      });
      ySelect.value = currentCalYear;
      ySelect.addEventListener("change", (e) => {
        currentCalYear = parseInt(e.target.value, 10);
        renderCalendarView();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        currentCalMonth--;
        if (currentCalMonth < 0) {
          currentCalMonth = 11;
          currentCalYear--;
        }
        if (mSelect) mSelect.value = currentCalMonth;
        if (ySelect) ySelect.value = currentCalYear;
        renderCalendarView();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        currentCalMonth++;
        if (currentCalMonth > 11) {
          currentCalMonth = 0;
          currentCalYear++;
        }
        if (mSelect) mSelect.value = currentCalMonth;
        if (ySelect) ySelect.value = currentCalYear;
        renderCalendarView();
      });
    }
  }

  // ── Render Tiles View ──
  function renderTilesView() {
    const grid = document.getElementById("tilesGrid");
    const countEl = document.getElementById("activitiesCount");
    if (!grid) return;
    grid.innerHTML = "";

    const filtered = allActivities.filter(x => {
      const matchesGroup = currentGroupFilter === "all" || x.group === currentGroupFilter;
      const matchesStatus = selectedStatuses.has(x.status || "empty");
      return matchesGroup && matchesStatus;
    });

    if (countEl) {
      countEl.textContent = `Showing ${filtered.length} of ${allActivities.length} activities`;
    }

    if (filtered.length === 0) {
      grid.innerHTML = `<div class="no-results" style="grid-column:1/-1;text-align:center;padding:40px;background:#fff;border-radius:16px;">No activities found.</div>`;
      return;
    }

    filtered.forEach(item => {
      const status = item.status || "empty";
      const sClass = statusClass(status);
      const icon = statusIcon(status);

      const tile = document.createElement(item.link ? "a" : "div");
      tile.className = `tile ${sClass}`;
      if (item.link) {
        tile.href = item.link;
        tile.target = "_blank";
        tile.rel = "noopener noreferrer";
      }
      tile.setAttribute("aria-label", `${item.group} – ${item.formattedDate} – ${status}`);

      const thumb = document.createElement("div");
      thumb.className = "tile-thumb";
      thumb.innerHTML = `<img src="${item.logo}" alt="${item.group}" class="tile-thumb-img" />`;

      const content = document.createElement("div");
      content.className = "tile-content";
      content.innerHTML = `
        <span class="tile-title">${item.group}</span>
        <span class="tile-date-sub">${item.formattedDate}</span>
      `;

      if (icon) {
        const badge = document.createElement("div");
        badge.className = "tile-status-badge";
        badge.innerHTML = icon;
        tile.appendChild(badge);
      }

      tile.appendChild(thumb);
      tile.appendChild(content);
      grid.appendChild(tile);
    });
  }

  // ── Render Tabs View ──
  function renderTabsView() {
    const container = document.getElementById("tabsContainer");
    if (!container) return;
    container.innerHTML = "";

    const groupsList = ["Trivia Tuesdays", "Women Wednesdays", "Slide Saturdays"];

    groupsList.forEach(groupName => {
      const allGroupItems = allActivities.filter(x => x.group === groupName);
      if (allGroupItems.length === 0) return;

      const total = allGroupItems.length;
      const completedCount = allGroupItems.filter(x => x.status === "completed").length;

      const items = allGroupItems.filter(x => selectedStatuses.has(x.status || "empty"));
      if (items.length === 0) return;

      const bodyId = `tabs-group-${groupName.replace(/[^a-zA-Z0-9]/g, "-")}`;

      const accEl = document.createElement("section");
      accEl.className = "month-accordion";

      const header = document.createElement("div");
      header.className = "accordion-header";
      header.setAttribute("role", "button");
      header.setAttribute("aria-expanded", "true");
      header.setAttribute("aria-controls", bodyId);
      header.setAttribute("tabindex", "0");

      header.innerHTML = `
        <div class="accordion-header-left">
          <span class="accordion-title">${groupName}</span>
          <span class="accordion-badge">${completedCount}/${total} completed</span>
        </div>
        <svg class="accordion-chevron" viewBox="0 0 24 24" width="22" height="22" fill="none"
            stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      `;

      function toggleAccordion() {
        const body = document.getElementById(bodyId);
        const chevron = header.querySelector(".accordion-chevron");
        const expanded = header.getAttribute("aria-expanded") === "true";
        header.setAttribute("aria-expanded", String(!expanded));
        if (body) body.classList.toggle("collapsed", expanded);
        if (chevron) chevron.classList.toggle("collapsed", expanded);
      }

      header.addEventListener("click", toggleAccordion);
      header.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggleAccordion();
        }
      });

      const body = document.createElement("div");
      body.className = "accordion-body";
      body.id = bodyId;

      const grid = document.createElement("div");
      grid.className = "tiles-grid";

      items.forEach(item => {
        const status = item.status || "empty";
        const sClass = statusClass(status);
        const icon = statusIcon(status);

        const tile = document.createElement(item.link ? "a" : "div");
        tile.className = `tile ${sClass}`;
        if (item.link) {
          tile.href = item.link;
          tile.target = "_blank";
          tile.rel = "noopener noreferrer";
        }
        tile.setAttribute("aria-label", `${item.group} – ${item.formattedDate} – ${status}`);

        const thumb = document.createElement("div");
        thumb.className = "tile-thumb";
        thumb.innerHTML = `<img src="${item.logo}" alt="${item.group}" class="tile-thumb-img" />`;

        const content = document.createElement("div");
        content.className = "tile-content";
        content.innerHTML = `
          <span class="tile-title">${item.group}</span>
          <span class="tile-date-sub">${item.formattedDate}</span>
        `;

        if (icon) {
          const badge = document.createElement("div");
          badge.className = "tile-status-badge";
          badge.innerHTML = icon;
          tile.appendChild(badge);
        }

        tile.appendChild(thumb);
        tile.appendChild(content);
        grid.appendChild(tile);
      });

      body.appendChild(grid);
      accEl.appendChild(header);
      accEl.appendChild(body);
      container.appendChild(accEl);
    });
  }

  // ── Render Calendar View ──
  function renderCalendarView() {
    const grid = document.getElementById("calendarGrid");
    if (!grid) return;
    grid.innerHTML = "";

    const year = currentCalYear;
    const month = currentCalMonth;

    const firstDay = new Date(year, month, 1).getDay(); // 0 = Sun
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const dayMap = {};
    allActivities.forEach(act => {
      if (act.year === year && act.month === month && selectedStatuses.has(act.status || "empty")) {
        if (!dayMap[act.day]) dayMap[act.day] = [];
        dayMap[act.day].push(act);
      }
    });

    for (let i = 0; i < firstDay; i++) {
      const cell = document.createElement("div");
      cell.className = "cal-day-cell empty-slot";
      grid.appendChild(cell);
    }

    const today = new Date();
    const isCurrentMonthYear = today.getFullYear() === year && today.getMonth() === month;

    for (let day = 1; day <= daysInMonth; day++) {
      const cell = document.createElement("div");
      cell.className = "cal-day-cell";
      if (isCurrentMonthYear && today.getDate() === day) {
        cell.classList.add("today");
      }

      const dayHeader = document.createElement("div");
      dayHeader.className = "cal-day-header";
      dayHeader.innerHTML = `<span class="cal-day-number">${day}</span>`;
      cell.appendChild(dayHeader);

      const items = dayMap[day] || [];
      items.forEach(act => {
        const status = act.status || "empty";
        const sClass = statusClass(status);
        const icon = statusIcon(status);

        const card = document.createElement(act.link ? "a" : "div");
        card.className = `cal-activity-card ${sClass}`;
        if (act.link) {
          card.href = act.link;
          card.target = "_blank";
          card.rel = "noopener noreferrer";
        }
        card.setAttribute("aria-label", `${act.group} – ${act.formattedDate} – ${status}`);

        card.innerHTML = `
          <div class="cal-activity-top">
            <img src="${act.logo}" alt="${act.group}" class="cal-logo-img" />
            ${icon ? `<span class="cal-badge">${icon}</span>` : ""}
          </div>
          <span class="cal-activity-title">${act.group}</span>
        `;
        cell.appendChild(card);
      });

      grid.appendChild(cell);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initData);
  } else {
    initData();
  }
})();
