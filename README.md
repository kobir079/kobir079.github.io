# kobir079 — Course Library

A static site (plain HTML/CSS/JS, no build step) hosting self-authored CS courses. Meant to be pushed straight to GitHub Pages.

## Structure

```
/
├── index.html                     → home page (portfolio + course catalog preview)
├── assets/
│   ├── css/style.css               → all styling (one shared stylesheet)
│   ├── js/main.js                  → scroll-spy + reveal animation
│   └── img/                        → put real image/logo files here
├── courses/
│   ├── index.html                  → full course catalog
│   ├── oop-design-patterns/
│   │   └── index.html              → "Object Oriented Pattern and Design" — 10 modules
│   └── _template/
│       └── index.html              → copy this to start a new course
└── ict/
    └── index.html                  → MBSTU ICT department page (currently "Coming soon")
```

## How to update the OOP course

Open `courses/oop-design-patterns/index.html`. Each module is one `<section class="module" id="mN">` block — edit the text inside `<p>` tags or the code inside `<pre><code class="language-java">`. Modules render top to bottom and the sidebar links to them automatically via their `id`.

## How to add a brand-new course

1. Duplicate `courses/_template/` → rename the folder, e.g. `courses/data-structures/`.
2. Edit its `index.html`: title, module list in the sidebar `<ol>`, and one `<section class="module">` block per module.
3. Add a card for it in `courses/index.html` and (optionally) on the homepage `index.html`, replacing one of the "Coming soon" placeholder cards.

Every course is fully independent — editing or breaking one never touches another.

## How to fill in the MBSTU ICT page

Open `ict/index.html` and replace the `.coming-soon` block with real content (faculty, programs, contact info, etc.). To use the university's real logo instead of the placeholder mark, drop the image file into `assets/img/` and swap the inline `<svg>` badge (it appears in the header of every page and again on the ICT page itself) for an `<img>` tag pointing at it.

## Deploying to GitHub Pages

1. Push this folder's contents to the root of the `kobir079.github.io` repo (or any repo, then enable Pages on the `main` branch, root folder).
2. The site will be live at `https://kobir079.github.io/` (or the repo's Pages URL).
