# Muslim Social Platform — Design System

Tokens, typography, icons and components for a photo network where personal accounts never cross the gender line. Two themes, monochrome, Manrope.

**Gallery:** open `index.html` or the [GitHub Pages site](https://ra125ys.github.io/msp-design-system/) — every token in both themes, the type scale, the icons and live components.

## Getting started

**Styles and tokens only** — enough for Flutter, native apps and plain markup:

```html
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="tokens.css">
```

Variables: `--surface`, `--card`, `--ink`, `--muted`, `--action`, `--on-action`, `--wall`, `--radius-lg`, `--space-4` and the rest of `tokens.json`. Switch themes with `data-theme="dark" | "light"` on `<html>`; dark is the default.

**Components (web, React 18):**

```html
<link rel="stylesheet" href="components/bundle.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/18.3.1/umd/react.production.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.3.1/umd/react-dom.production.min.js"></script>
<script src="components/bundle.js"></script>
<script>
  const { GenderQuestion, PostCard, TabBar } = window.MSP;
</script>
```

Types and props — `components/index.d.ts`; guidelines per component — `components/<Name>/README.md`. All labels default to English and take a `labels` override for localisation.

**Flutter:** map `tokens.json` onto `ThemeData` — colours per theme, text styles, spacing and radii. The React bundle is not needed for the mobile app.

## Layout

```
tokens.json          tokens: colours × 2 themes, fonts, spacing, radii, sizes
tokens.css           the same, compiled to CSS variables and style classes
components/          bundle.js (window.MSP), bundle.css, index.d.ts, README and preview per component
assets/Icons/        19 outline icons, 24×24, 1.6 stroke
assets/Logos/        the mark — a circle split in half
index.html           gallery
```

---

## The one rule

One rule holds the whole product: **personal accounts never cross the gender line**. The only door is a business account, which answers on every post whether to show it to the other gender. The interface has to make that rule visible — and must never look like Instagram.

## Voice

- Short sentences. No exclamation marks, no emoji, no words like "halal", "pious", "sister" or "brother" in the UI.
- Every wall rule is explained in one line next to where it applies: "Shown to you — you turned on business posts", "Only posts marked for sharing are shown here". On the screen, not in a help centre.
- The gender question is asked as a question — "Show this post to women?" — with Yes and No and no default.
- Numbers are honest and sit next to the action: "2,300 of 7,100 followers will see this".
- Never tell a person that something is hidden from them. No "hidden" counters, no empty slots where the invisible would be.

## Colour

The system is monochrome. There is no accent colour — that is a decision, not a gap. The primary action is `action` (white in dark, black in light) with `on-action` text. Everything that belongs to the gender wall is painted `wall` (an alias of `action`) on `action-soft` inside a `line-strong` frame: the lock, the Business badge, the question card. The wall reads as the most important thing on the screen without a single coloured pixel.

Three levels of depth: `surface` → `card` → `elevated`. Do not add a fourth. Divide rows with `line-soft`, outline controls with `line`.

Text: `ink` for primary, `ink-2` for photo captions, `muted` for metadata and counts. All three hold ≥ 4.5:1 on `surface` and `card` in both themes. Dark is the first theme; the app follows the system theme.

Focus: a solid `focus-ring` 2px with a 2px gap in `surface`.

## Typography

One family — Manrope from Google Fonts, full Latin and Cyrillic. Hierarchy comes from weight, not size: `display` 800 only for the gender question, `title` 600 in the header, `stat` 700 with tabular figures. The caption under a photo is `caption` with no handle in front: the handle is already in the post header. The `eyebrow` style with 0.08em tracking is for the Business badge and section labels.

## Spacing, radii, sizes

`space-4` (16) is the screen's side margin. Cards sit `space-3` (12) from the edge and keep `space-3` inside. A photo inside a card uses `radius-md`, the card itself `radius-lg`, buttons `radius-sm`, chips and pills `radius-pill`. Icon buttons are never smaller than `touch` (44).

## Icons

Our own outline set, 24×24, 1.6 stroke — the `Icon` component by name. One combination is forbidden: a heart, a speech bubble and a paper plane in a row under a post. Post actions are text pills (`PostActions`), not icons.

## Components

React 18, `window.MSP`. Screens are composed from them; the screen itself is the consumer's markup. `PostCard` takes the photo as a node or a background style; `GenderQuestion` is controlled — `value` and `onChange` come from the consumer; `TabBar` holds no state. Every button is a real `<button>`; icon buttons carry an `aria-label`.

## Navigation and publishing principles

These decisions are part of the system, not taste. Do not reverse them without the product owner.

- No stories: no ring, no highlights, no viewer.
- Four tabs and a round create button, not five tabs.
- Short video is a feed mode ("Clips") via `SegmentedControl`, not a tab.
- Under a photo: the caption first, then text actions with counts.
- Profile grid in two columns with tall tiles, not three squares.
- The mark is a circle split in half. No camera, no gradient.
