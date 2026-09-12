# Astro Migration Status

## Branch: `astro-migration`
**Last commit:** `ab17e82` — "feat: add dropdown filters to Projects page"

## What's Done

1. Full Astro + Starlight scaffold (package.json, astro.config.mjs, tsconfig.json)
2. All content migrated: About (index.mdx), Skills, Publications, 5 Experiences, 5 Leadership sub-pages
3. GitHub Actions deploy workflow (`.github/workflows/deploy.yml`)
4. Custom CSS with card grids, dropdown styles, color-coded tags
5. 404 page with auto-redirect
6. Experience page: `.mdx` with working dropdown filters (DOMContentLoaded + `.onchange`/`.onclick`)
7. Filter logic: OR within category, AND across categories; all unchecked = show all
8. Sort dropdown: Latest/Earliest/Most Time/Least Time
9. Projects page converted to `.mdx` with same filter pattern

## Migration Additions

### New Project Pages (10 files)
- `projects/visual-llm.md` — Multi-modal VQA with BLIP+YOLO+LLM pipelines
- `projects/endangered-species-satellite.md` — CNN+LSTM on satellite imagery for habitat prediction
- `projects/ai-foundations-pacman.md` — 4 AI projects (search, tracking, RL, adversarial)
- `projects/realtime-filtering.md` — Real-time image effects at 30 FPS
- `projects/content-based-image-retrieval.md` — 8+ feature techniques, 1000+ image DB
- `projects/realtime-object-recognition.md` — 17 classes, 83% accuracy, Hu moments + K-NN
- `projects/camera-calibration-ar.md` — Zhang's method, <0.5px error, AR projection
- `projects/character-recognition.md` — LeNet-5, 98%+ MNIST, transfer learning for Greek letters

### Sidebar Restructuring (`astro.config.mjs`)
- Independent projects: Visual LLM, Table Tennis, NLI, Store Sales, Endangered Species
- Nested under `CS-5330: Computer Vision`: 5 sub-pages
- Nested under `CS-5100: AI Foundations`: 1 sub-page (Pacman)

### Project Index (`projects/index.mdx`)
- 7 cards total: 5 independent + 1 CS-5330 card + 1 CS-5100 card
- Filter options: Domain (CV, NLP, ML, Multi-Modal, RL, Remote Sensing, Competition), Tech (PyTorch, TensorFlow, Python, C++, Transformers, YOLO, OpenCV, XGBoost)

### CSS (`src/styles/custom.css`)
- Removed `flex-wrap` from `.dropdown-filters`
- Reduced margin to `0.75rem`
- Added `flex: none` to `.dropdown` (prevents stretching)

## Known Issues

1. **Filter dropdown vertical alignment** — CSS adjustments are in place; desktop and mobile browser verification is still pending.
2. **Custom 404 warning** — `public/404.html` intentionally overrides Starlight's generated 404 route, so `astro build` reports a non-blocking duplicate-route warning.
3. **Deployment settings** — GitHub Pages must be confirmed to use GitHub Actions for the `astro-migration` branch.

## Technical Notes

### MDX Constraints
- No blank lines between HTML elements (causes `<p>` wrapping)
- `onChange`/`onClick` (camelCase) renders as-is in HTML but browsers ignore them — must use JS `.onchange`/`.onclick` properties via `DOMContentLoaded`
- Self-closing tags required: `<input />`, `<br />`
- Use `&amp;` for `&` in text

### Filter Architecture (Working Pattern)
```
<script>{`
document.addEventListener('DOMContentLoaded', function(){
  // Attach .onclick to dropdown toggles
  // Attach .onchange to checkboxes → calls window.applyFilters()
  // Click-outside listener to close dropdowns
});
window.applyFilters = function() {
  // For each dropdown-menu group: collect checked values
  // If group has 0 checked → skip (no filter for that category)
  // If group has checked → card must match at least one (OR within group)
  // Card must pass ALL groups with checked items (AND across groups)
};
`}</script>
```

### Build Commands
```bash
export PATH="/opt/homebrew/opt/node@22/bin:$PATH" && npx astro build
# Preview: /opt/homebrew/opt/node@22/bin/node node_modules/.bin/astro preview --port 4321
```

## Next Steps

1. **Push & deploy** — push the migration commit, set GitHub Pages source to Actions, and verify the live site
2. **Browser verification** — test the filter controls and layout on mobile and desktop
3. **Visual polish** — animated gradients, glow effects, and a refined color theme
