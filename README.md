# ASH Microlearning App

A lightweight, responsive web application and embeddable widget for tracking ASH Microlearning activities (Trivia Tuesdays, Women Wednesdays, Slide Saturdays) across **Tiles View**, **Tabs View**, and **Calendar View**.

---

## 🚀 CDN & LMS Embedding Instructions

### Step 1: Add the Loader Script globally to your LMS / Platform Header

Add this single script tag to your platform's global header or script manager:

```html
<script src="https://cdn.jsdelivr.net/gh/jpjuliao/ash-microlearning-app@main/loader.js" defer></script>
```

*(Or via GitHub Pages direct URL once GitHub Pages is enabled)*:
```html
<script src="https://jpjuliao.github.io/ash-microlearning-app/loader.js" defer></script>
```

### Step 2: Embed the App Container on any Target Page

On any page where you want the Microlearning Hub to appear, insert this container `div`:

```html
<div class="ash-microlearning-app"></div>
```

---

## 📦 Repository Structure

- `loader.js` — Universal embedded loader script. Checks for `.ash-microlearning-app` and dynamically loads styles and scripts.
- `styles.css` — CSS design system (Tiles grid, group accordions, monthly calendar, badges).
- `script.js` — Core application logic for view switching, group filtering, and calendar rendering.
- `activities.json` — Microlearning activity dataset with dates, links, and group names.
- `sample-cdn.html` — Live sample page demonstrating jsDelivr CDN embedding.
- `sample.html` — Local preview page.
- `index.html` — Component HTML fragment.
- `*.png` — Series PNG logos (`Trivia-Tuesday-Logo.png`, `Women-Wednesday-Logo.png`, `Slide-Saturday-Logo.png`).

---

## 🛠️ How to Publish Updates

To deploy changes to the live jsDelivr CDN:

1. Commit and push your changes to the `main` branch of `https://github.com/jpjuliao/ash-microlearning-app`:
   ```bash
   git add .
   git commit -m "Update microlearning app assets"
   git push origin main
   ```
2. jsDelivr will automatically serve the updated files immediately!
