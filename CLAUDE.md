# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static personal portfolio website for Minh Quan (mechanical/robotics engineer). No build tools, frameworks, or package manager - pure HTML, CSS, and vanilla JavaScript. Uses Google Fonts (Inter) via CDN.

## Architecture

- **Multi-page static site**: `index.html` is the landing page with Introduction and About Me sections rendered as togglable in-page sections. Other pages (`projects.html`, `skills.html`, `experience.html`, `education.html`) are separate HTML files.
- **Project detail pages**: `autonomous_car.html`, `helium_recovery.html`, `line_follower.html` are standalone pages linked from `projects.html`. Navigation flows: Autonomous Car -> Helium Recovery -> Line Follower -> Projects.
- **Shared assets**: All pages link to the same `style.css` and `script.js`. Every page duplicates the header and sidebar markup (no templating).
- **script.js** handles three concerns: hamburger sidebar toggle (mobile), dark mode toggle with `localStorage` persistence, and in-page section switching on `index.html` via `data-section` attributes.
- **CSS theming**: All colors use CSS custom properties defined in `:root` and `body.dark-mode`. Dark mode is toggled via `.dark-mode` class on `<body>`, persisted in `localStorage('theme')`.
- **Responsive layout**: Three breakpoints (1024px, 768px, 480px). Mobile collapses sidebar into a GPU-accelerated off-canvas slide-in with backdrop blur overlay. Uses `100dvh` for mobile viewport.

## Development

No build step. Open any `.html` file directly in a browser or serve with any static server:

```
python -m http.server 8000
```

## Key Conventions

- Header and sidebar markup is copy-pasted across every page. Changes to navigation structure must be applied to all HTML files.
- Navigation between pages uses relative links (`href="projects.html"`); within `index.html`, navigation uses `data-section` attributes handled by JS.
- Skills on `skills.html` use `.skill-tag` pill elements, not plain text.
- `images/` contains project images; `report/` and `past projects/` contain PDFs (git-ignored).
