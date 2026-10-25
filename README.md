# KrishiMitra ONE 🌱

**A photo-rich, responsive agricultural management website with 18 screens and eight connected farming workflows.**

This is a fully functioning **educational / pilot frontend**, suitable for college DevOps demonstrations and small supervised trials. It is **not** yet a production service for storing farmers' sensitive data or giving unsupervised agronomic advice.

## Quick start — important if you previously saw `package.json` errors

The download comes in **two different ZIPs**:

- **KrishiMitra-ONE-Complete-Source.zip:** Editable source project. Extract and open the folder containing `package.json` in VS Code. Run `npm run dev`. Node.js 18+ is required; there are no dependencies to install.
- **KrishiMitra-ONE-Hosting-Ready.zip:** Static hosting package. **Do not run `npm run dev` here**; it deliberately has no `package.json`. Right-click `index.html` → **Open with Live Server**, or upload the entire extracted folder to Netlify Drop.

Local source command:

```bash
npm run dev
```

Open `http://localhost:4173`. To verify:

```bash
npm test
npm run build
```

The static version will appear in `dist/` after build.

## Pages and features

| Page | What actually works |
|---|---|
| Home | Agricultural photo hero, responsive navigation, feature cards, calls to action |
| Crop-fit advisor | **Rule-based** matching across catalogue soil texture, broad water category and season, with soil pH context; NOT a validated crop recommendation or AI model |
| Crops | 16 crop profiles, text search, category/season filters, sorting, favorites, descriptions |
| Market hub | Browse product categories, create **private listing drafts**; no real buyer/payment integration |
| My farm / Dashboard | Profile, location, area, country, units and currency; record counts and linked tools |
| Soil | Save pH, N/P/K observations, report reference, track tests over time |
| Crop planning | Add/delete sowing plans with dates, plots, area and stages |
| Tasks | Record daily work, irrigation logs, due dates and mark tasks complete |
| Crop health | Store compressed crop photos and symptom observations locally; **not AI image-based disease identification** |
| Harvest | Illustrative yield scenario calculator and actual harvest records |
| Buyer quotes | Save and compare quotations and user-entered logistics costs, with links to official market portals |
| Storage | Track storage batches, locations and dispatch statuses |
| Finance | Income and expense recording, currency selection and links to official schemes |
| Weather | Search global locations and obtain forecasts from Open-Meteo **while online** |
| Knowledge | Field notes and educational crop management articles |
| Reports | Export/import JSON backup, financial CSV, saved-record overview |
| About | Detailed limitations and production roadmap |

Records use `localStorage` in the browser. The service worker caches the static pages and illustration files; live API data cannot be promised offline.

## Deployment — Netlify Drop

1. Extract **KrishiMitra-ONE-Hosting-Ready.zip**.
2. Visit https://app.netlify.com/drop.
3. Upload the **folder containing `index.html`, `app.js`, `styles.css` and `assets/`**, rather than a parent folder.
4. Netlify gives a public URL if publishing succeeds. Verify the homepage, crop-fit advisor, local storage behavior, mobile navigation, and weather internet connectivity.

For Netlify Git deployment from source use build command `npm run build` and output directory `dist`, or use the included `netlify.toml`. `Dockerfile`, `compose.yaml`, and `nginx.conf` are supplied for container demonstrations.

## DevOps ISE submission

The project includes GitHub Actions (`npm test`, `npm run build`), Docker + Nginx, an organized repository structure and screenshot-ready UI. **Create genuine Git commits as you work**; do not fabricate history. Run CI, Docker and capture screenshots of your own results for the README. The provided images are UI previews, not evidence of your Git activity.

## Safety, limitations and source integrity

- The downloadable application is **not hosted** until you deploy it to your account.
- This is not comparable with Amazon/Flipkart backend capability: it has no user-account service, multi-device synchronization, payment processing, verified seller network, support staff or security review.
- It does not have a trained AI disease classifier. Photo uploads are **crop-health journals** to show an agronomist; never treat a screenshot as a diagnosis or pesticide recommendation.
- Yield is a *user-input mathematical scenario*, not a trained ML forecast.
- Crop-fit scores are **transparent catalogue comparisons**, not verified crop suitability or probability.
- Mandi prices are **not auto-populated**: buyer prices must be entered and verified; e-NAM and AGMARKNET are linked as external official references.
- Open-Meteo weather API usage has rate and licensing conditions; verify suitability for your intended commercial/noncommercial deployment: https://open-meteo.com/.
- Government links provided relate to India and may not apply elsewhere. For other regions, consult local official providers.
- Browser-only data may be lost when users clear site storage or change devices. **Export regular backups** and avoid storing sensitive information until secure backend accounts are implemented.
- Multi-language interface is partial; full translations, accessibility, usability tests with farmers and agronomy expert validation remain necessary.

## Production roadmap before real farmer-scale rollout

1. Farmer research: pilot with diverse crops, languages, devices and low-bandwidth connectivity.
2. Secure authentication, verified phone flows, per-user encrypted cloud storage, consent notices and backups.
3. Region-aware crop calendars and local expert-reviewed recommendations.
4. Verified and licensed mandi price feeds, timestamps, crop/grade/units and reliable API/error handling.
5. Agricultural image dataset and independently validated disease model *with human escalation*.
6. Real notification service, localization and accessibility, server-side rate limiting, abuse monitoring and audit logs.
7. Monitoring, vulnerability scanning, load testing, incident response, farmer support channel and legal/compliance review.

## Visual assets

The hero and eight agricultural feature imagery assets were generated for this project. UI layout screenshots are from local browser previews. Icons are original SVG/inline outlines, and the site uses system fonts if Google Fonts are unavailable.
