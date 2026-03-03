# Theme Creation Guide

High-quality static web themes with comprehensive component showcases.

## Structure

```
themes/
├── index.html          # Gallery homepage
├── GUIDE.md            # This file
├── midnight/           # Theme folder (lowercase, hyphenated)
│   ├── index.html      # Component showcase (required)
│   ├── css/
│   │   └── styles.css  # All theme styles
│   ├── js/
│   │   └── main.js     # Theme interactions (optional)
│   └── assets/         # Images, fonts, etc (optional)
```

## Requirements

### 1. Component Showcase (`index.html`)

Every theme **must** include a comprehensive component showcase, similar to [Bootswatch](https://bootswatch.com/flatly/). Show all styled elements:

**Typography**
- Headings (h1–h6)
- Body text, lead text
- Text utilities (muted, bold, italic)
- Blockquotes

**Buttons**
- Primary, secondary, accent variants
- Sizes (sm, md, lg)
- States (hover, active, disabled)
- Button groups

**Forms**
- Text inputs, textareas
- Select dropdowns
- Checkboxes, radio buttons
- Input groups
- Form validation states

**Navigation**
- Navbar (if applicable)
- Breadcrumbs
- Pagination
- Tabs

**Cards & Containers**
- Basic cards
- Card with header/footer
- Grid layouts

**Components**
- Alerts (success, warning, error, info)
- Badges
- Progress bars
- Tooltips (if JS-enabled)
- Modals (if JS-enabled)
- Accordion/Collapse (if JS-enabled)

**Tables**
- Basic table
- Striped/hover variants

**Utilities**
- Spacing examples
- Color swatches
- Shadow/elevation examples

### 2. Styles (`css/styles.css`)

- **Self-contained**: All theme styles in one file
- **No external dependencies**: No Bootstrap, Tailwind, etc. (unless bundled)
- **CSS variables**: Use `:root` for theme colors
- **Responsive**: Mobile-first, works on all screen sizes
- **Accessible**: Proper contrast ratios, focus states
- **Organized**: Group related styles with comments

### 3. JavaScript (`js/main.js`)

- **Optional**: Only if theme needs interactivity
- **Vanilla JS preferred**: No framework dependencies
- **Progressive enhancement**: Theme works without JS
- **Documented**: Comment complex interactions

### 4. Quality Standards

- **Performance**: Optimized assets, minimal JS
- **Browser support**: Modern browsers (Chrome, Firefox, Safari, Edge)
- **Clean code**: Consistent formatting, meaningful names
- **Documentation**: README in theme folder explaining usage

## Color Palette

Define your theme colors as CSS variables:

```css
:root {
  --primary: #xxx;
  --secondary: #xxx;
  --accent: #xxx;
  --background: #xxx;
  --surface: #xxx;
  --text-primary: #xxx;
  --text-secondary: #xxx;
}
```

## Checklist

Before submitting a theme:

- [ ] All components from showcase list are styled
- [ ] Responsive on mobile, tablet, desktop
- [ ] Color contrast passes WCAG AA
- [ ] No console errors
- [ ] Works without JavaScript (graceful degradation)
- [ ] Code is formatted and commented
- [ ] Theme folder name is lowercase with hyphens

## Inspiration

- [Bootswatch](https://bootswatch.com/) - Component showcases
- [ThemeForest](https://themeforest.net/) - Design quality
- [Dribbble](https://dribbble.com/) - Visual inspiration

---

Build beautiful, production-ready themes! 🎨
