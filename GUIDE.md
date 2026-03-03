# Theme Creation Guide

High-quality static web themes. Each theme should be production-ready and showcase a distinct visual style.

## Structure

```
themes/
├── index.html          # Gallery homepage
├── GUIDE.md            # This file
├── horizon/            # Theme folder (lowercase, hyphenated)
│   ├── index.html      # Main demo page
│   ├── css/
│   │   └── styles.css  # All theme styles
│   ├── js/
│   │   └── main.js     # Theme interactions (optional)
│   └── assets/         # Images, fonts, etc (optional)
```

## Philosophy

**Not every theme needs to be a component showcase.** Themes can serve different purposes:

- **Landing pages** — Hero, features, CTA, testimonials
- **Portfolio** — Projects grid, about, contact
- **Blog** — Article list, post template, sidebar
- **Documentation** — Nav, search, content, code blocks
- **Dashboard** — Sidebar, stats, tables, charts
- **Component library** — Full UI kit (like Bootswatch)

Choose the layout that best showcases the theme's personality.

## Requirements

### 1. Quality Standards

- **Polished design** — Cohesive colors, typography, spacing
- **Responsive** — Works on mobile, tablet, desktop
- **Accessible** — Proper contrast, focus states, semantic HTML
- **Performant** — Minimal JS, optimized assets
- **Well-organized code** — Clear structure, commented where needed

### 2. Technical Requirements

- **Self-contained CSS** — All styles in `css/styles.css`
- **No framework dependencies** — No Bootstrap, Tailwind, etc. (unless bundled)
- **CSS variables** — Use `:root` for theme colors
- **Vanilla JS preferred** — No framework dependencies for interactions
- **Graceful degradation** — Works without JS

### 3. Demo Page (`index.html`)

Your demo should showcase the theme effectively:

- **Show the vibe** — Give visitors a feel for the theme's personality
- **Include key components** — Buttons, forms, cards, typography (at minimum)
- **Real content** — Use realistic copy, not just "lorem ipsum"
- **Multiple sections** — Show how the theme handles different layouts

### 4. Color Palette

Define theme colors as CSS variables:

```css
:root {
  --primary: #xxx;
  --accent: #xxx;
  --background: #xxx;
  --surface: #xxx;
  --text-primary: #xxx;
  --text-secondary: #xxx;
}
```

## Checklist

Before submitting a theme:

- [ ] Design feels cohesive and polished
- [ ] Responsive on all screen sizes
- [ ] Color contrast passes WCAG AA
- [ ] No console errors
- [ ] Works without JavaScript
- [ ] Code is formatted and commented
- [ ] Theme folder name is lowercase with hyphens
- [ ] Demo page loads quickly

## Theme Ideas

- **Horizon** — Warm sunrise (light, coral accents) ✅
- **Midnight** — Dark, professional (dark, gold accents)
- **Forest** — Natural, earthy (greens, browns)
- **Ocean** — Cool, calming (blues, teals)
- **Ember** — Warm, fiery (oranges, reds)
- **Slate** — Minimal, monochrome (grays, black, white)
- **Nebula** — Vibrant, cosmic (purples, pinks)
- **Desert** — Warm, arid (sand, terracotta)
- **Arctic** — Cool, crisp (ice blue, white)
- **Vintage** — Retro, nostalgic (sepia, muted tones)

## Inspiration

- [Awwwards](https://awwwards.com/) — Design excellence
- [Dribbble](https://dribbble.com/) — Visual inspiration
- [ThemeForest](https://themeforest.net/) — Commercial themes
- [Bootswatch](https://bootswatch.com/) — Component reference

---

Build beautiful, distinctive themes! 🎨
