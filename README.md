# SINA — Freelance Web Designer & Developer

A premium, static portfolio website built for a freelance web developer. Designed to be sent to
potential clients via LinkedIn, Upwork, email, or direct outreach.

No backend, no build step, no dependencies — just HTML, CSS, and vanilla JavaScript.

## Project Structure

```
portfolio/
│
├── index.html
├── style.css
├── script.js
├── README.md
│
└── assets/
    ├── images/
    │   ├── profile-placeholder.svg   → replace with your real photo
    │   └── og-cover.svg              → social-share preview image
    └── projects/
        ├── zd-shoes.svg
        ├── profix.svg
        ├── beautyshop.svg
        ├── airflow.svg
        ├── maison.svg
        └── estate.svg                → placeholder mockups, replace with real project screenshots
```

## Getting Started Locally

No build tools required. Just open `index.html` in a browser, or serve the folder locally:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploying to GitHub Pages

1. Create a new GitHub repository (public).
2. Upload all files in this folder, keeping the same structure (all paths are relative, so this
   works from the repository root or from a project page URL).
3. In the repository settings, go to **Pages** → set the source branch to `main` (or `master`)
   and the folder to `/ (root)`.
4. Your site will be live at `https://your-username.github.io/your-repository-name/`.

No environment variables, npm install, or build process are required.

## What You Should Customize Before Launching

### 1. Contact links
Open `script.js` and edit the `contactLinks` object near the top of the file:

```javascript
const contactLinks = {
    linkedin: "#",
    email: "mailto:your@email.com",
    telegram: "#",
    instagram: "#"
};
```

These links automatically populate both the Contact section and the footer.

### 2. Profile photo
Replace `assets/images/profile-placeholder.svg` with a real photo (JPG or PNG), then update the
`src` on the `<img>` inside the About section in `index.html`.

### 3. Project mockups
Replace the SVG files in `assets/projects/` with real screenshots or mockups of your work
(JPG, PNG, or WebP recommended, ideally at least 1200px wide). Update the corresponding `img`
value for each project inside the `projects` array in `script.js`.

### 4. Project details
Each project in the `projects` array in `script.js` includes an overview, challenge, solution,
key features, and tech stack shown in the project modal. Edit these directly — they're written
in plain JavaScript objects, no templating engine involved.

### 5. Social preview image
`assets/images/og-cover.svg` is used for link previews on LinkedIn, Twitter/X, etc. Consider
replacing it with a JPG/PNG version (1200×630px is the standard size) for the widest compatibility,
since some platforms don't render SVG previews.

### 6. Meta tags
In `index.html`, update the `<link rel="canonical">` and `og:url` values once you know your
final domain or GitHub Pages URL.

### 7. Contact form
This is a fully static site, so the contact form does not send emails on its own. On submit, it
validates the fields client-side and shows a confirmation message pointing visitors to your direct
contact links. If you want the form to actually deliver messages, connect it to a form backend
service (e.g. Formspree, Getform, Web3Forms) by adding an `action` and `method` to the `<form>`
in `index.html`, or by posting the form data to that service's endpoint inside the `submit`
handler in `script.js`.

## Notes on the Design

- **Colors, type, and spacing** are all defined as CSS custom properties at the top of `style.css`
  under `:root` — adjust the accent color or spacing scale there and it cascades through the
  whole site.
- **Sections are numbered** (01–08) to reflect real information architecture, not decoration.
- **Reduced motion** is respected throughout via `@media (prefers-reduced-motion: reduce)`.
- **The custom cursor** only activates on devices with a mouse (`hover: hover` and
  `pointer: fine`) and is fully disabled on touch devices.
- Code comments inside `index.html`, `style.css`, and `script.js` are written in Persian for the
  developer's own reference; all visible site content and copy is in English.

## Browser Support

Tested against modern evergreen browsers (Chrome, Firefox, Safari, Edge). Uses standard CSS Grid,
Flexbox, `IntersectionObserver`, and CSS custom properties — no polyfills included, as these are
well supported across all current browser versions.
