# Color Tokens

## Design philosophy

ArchUI uses a **three-dimensional color system**: every color token resolves through **Theme** (doric, ionic, corinthian) × **Mode** (light, dark) × **Role** (background, text, border, icon, semantic). Components never reference raw hex values — they use abstract Tailwind classes that automatically adapt when the active theme or mode changes.

This granularity means a single class like `bg-arch-surface-primary` renders as a warm slate in Doric/light, a cool gray in Ionic/light, and an olive-tinted white in Corinthian/light — then shifts to dark surfaces in any theme's dark mode.

## Token layers

ArchUI colors flow through three layers. Understanding this chain is important for correct usage.

```
Primitive palette          →   Theme variables          →   Tailwind utilities
(archui-color-palette.css)     (doric.css, ionic.css…)      (tokens.css @theme inline)

--arch-blue-8              →   --txt-primary             →   --color-arch-txt-primary
                                                              ↳ text-arch-txt-primary
```

| Layer | File(s) | Purpose |
|---|---|---|
| **Primitives** | `archui-color-palette.css` | Raw Radix-style 1-12 scale per hue (blue, gray, indigo, green, red, yellow). Auto-switch on `.dark`. |
| **Theme variables** | `doric.css`, `ionic.css`, `corinthian.css` | Semantic role tokens (`--bg-*`, `--txt-*`, `--brd-*`, `--icon-*`, `--fg-*`, `--sem-*`) scoped to `.doric`, `.ionic`, `.corinthian`. Each file also contains `.dark` overrides. |
| **Tailwind bridge** | `tokens.css` (`@theme inline`) | Maps theme variables to `--color-arch-*` so Tailwind utilities like `bg-arch-surface-primary` and `text-arch-txt-accent` work. |

IMPORTANT: Always use Tailwind utility classes from the bridge layer. Never reference `--bg-primary` or `--arch-blue-8` directly in component code.

> **Note — System tokens (`--sys-*`):** ArchUI also ships `archui-system-tokens.css` which defines a separate `--sys-bg-*`, `--sys-txt-*`, `--sys-brd-*`, `--sys-icon-*` layer. These tokens are **internal** — they power the Storybook documentation UI and the ArchUI marketing website, not consumer-facing components. Do not use `--sys-*` tokens in your application code.

> **Note — Legacy oklch constants:** `tokens.css` declares three standalone oklch colors (`--color-brand`, `--color-priority`, `--color-danger`). These are **not part of the active token system** and are not consumed by any component. They may be removed in a future release. Ignore them.

## Accent customization

Each theme declares three accent seed variables at the top of its CSS file. These are the **single point of customization** for brand identity:

```css
/* ionic.css */
--ionic-accent-primary: var(--blue-10);
--ionic-accent-dark: var(--blue-12);
--ionic-accent-light: var(--blue-6);

/* doric.css */
--doric-accent-primary: var(--orange-9);
--doric-accent-dark: var(--orange-11);
--doric-accent-light: var(--orange-4);

/* corinthian.css */
--corinthian-accent-primary: var(--jade-9);
--corinthian-accent-dark: var(--jade-11);
--corinthian-accent-light: var(--jade-5);
```

Every `--bg-accent-*`, `--txt-accent-*`, `--brd-accent-*`, and `--icon-accent` token in the theme references these three seed variables. To rebrand a theme to your own colors, override only the three accent seeds — all accent surfaces, text, borders, and icons update automatically across every component.

## Dark mode

Dark mode is activated by adding the `.dark` class to the scoped `ThemeProvider` wrapper. The provider renders a container with combined class strings (e.g. `theme-context ionic dark`), and each theme CSS file provides matching selectors:

```css
/* Supports both nested and combined class patterns */
.dark .ionic,
.dark.ionic {
  --bg-primary: #202020;
  --bg-secondary: #242424;
  /* … all role tokens redefined for dark mode */
}
```

Every theme has its own complete set of dark mode overrides. In dark mode, all three themes converge to similar neutral dark backgrounds (`#202020`, `#242424`, `#303030`) while retaining their unique accent identity. No additional configuration is needed — switching mode is handled entirely by the `ThemeProvider` component toggling the `.dark` class.

## Token categories

### Surface (background) tokens

Used for element and layout backgrounds.

| Tailwind class | CSS variable chain | Usage |
|---|---|---|
| `bg-arch-surface-primary` | `--bg-primary` | Main page/section background |
| `bg-arch-surface-secondary` | `--bg-secondary` | Secondary surfaces (cards, sidebars) |
| `bg-arch-surface-tertiary` | `--bg-tertiary` | Tertiary/recessed areas |
| `bg-arch-surface-accent-dark` | `--bg-accent-dark` | Dark accent background (strong emphasis) |
| `bg-arch-surface-accent` | `--bg-accent` | Accent background (primary actions, buttons) |
| `bg-arch-surface-accent-light` | `--bg-accent-light` | Light accent tint (secondary button fills) |
| `bg-arch-surface-light` | `--bg-light` | Light surface override |
| `bg-arch-sunken-1` through `bg-arch-sunken-4` | `--bg-sunken-1…4` | Translucent overlays with increasing opacity |

### Foreground (float/raised) tokens

Used for elevated or floating elements.

| Tailwind class | CSS variable chain | Usage |
|---|---|---|
| `bg-arch-float-primary` | `--fg-primary` | Primary floating surface |
| `bg-arch-float-secondary` | `--fg-secondary` | Secondary floating surface |
| `bg-arch-float-tertiary` | `--fg-tertiary` | Tertiary floating surface |
| `bg-arch-float-accent` | `--fg-accent` | Accent-tinted floating surface |
| `bg-arch-raised-1` through `bg-arch-raised-3` | `--fg-raised-1…3` | Translucent raised layers |

### Text tokens

Used for all text content. Text tokens include a `txt-` infix to avoid collision with surface tokens that share similar variant names (e.g. `primary`).

| Tailwind class | CSS variable chain | Usage |
|---|---|---|
| `text-arch-txt-primary` | `--txt-primary` | Primary body text, headings |
| `text-arch-txt-secondary` | `--txt-secondary` | Supporting text, descriptions |
| `text-arch-txt-tertiary` | `--txt-tertiary` | Muted text, placeholders |
| `text-arch-txt-light` | `--txt-light` | Light text (on dark/accent backgrounds) |
| `text-arch-txt-accent-dark` | `--txt-accent-dark` | Dark accent text (strong interactive) |
| `text-arch-txt-accent` | `--txt-accent` | Accent-colored text (links, active states) |
| `text-arch-txt-accent-light` | `--txt-accent-light` | Light accent text |

### Border tokens

Used for element borders and dividers.

| Tailwind class | CSS variable chain | Usage |
|---|---|---|
| `border-arch-contour-primary` | `--brd-primary` | Default interactive borders |
| `border-arch-contour-secondary` | `--brd-secondary` | Subtle borders, dividers |
| `border-arch-contour-tertiary` | `--brd-tertiary` | Very subtle borders |
| `border-arch-contour-accent-dark` | `--brd-accent-dark` | Strong accent border |
| `border-arch-contour-accent` | `--brd-accent` | Accent border (active/focused) |
| `border-arch-contour-accent-light` | `--brd-accent-light` | Light accent border |
| `border-arch-contour-light` | `--brd-light` | Light border |
| `border-arch-contour-dark` | `--brd-dark` | Dark border |

### Icon tokens

Used for icon fills and strokes.

| Tailwind class | CSS variable chain | Usage |
|---|---|---|
| `text-arch-icon-accent` | `--icon-accent` | Accent-colored icons |
| `text-arch-icon-primary` | `--icon-primary` | Primary icons |
| `text-arch-icon-secondary` | `--icon-secondary` | Secondary icons |
| `text-arch-icon-tertiary` | `--icon-tertiary` | Muted icons |
| `text-arch-icon-light` | `--icon-light` | Light icons (on dark bg) |
| `text-arch-icon-dark` | `--icon-dark` | Dark icons (on light bg) |

### Semantic tokens

Used for status communication. Each status has four roles: surface (`-bg`), text (`-txt`), border (`-brd`), icon (`-icon`). The naming follows a flat `arch-{status}-{type}` pattern.

| Status | Surface | Text | Border | Icon |
|---|---|---|---|---|
| **Success** | `bg-arch-success-bg` | `text-arch-success-txt` | `border-arch-success-brd` | `text-arch-success-icon` |
| **Info** | `bg-arch-info-bg` | `text-arch-info-txt` | `border-arch-info-brd` | `text-arch-info-icon` |
| **Warning** | `bg-arch-warning-bg` | `text-arch-warning-txt` | `border-arch-warning-brd` | `text-arch-warning-icon` |
| **Danger** | `bg-arch-danger-bg` | `text-arch-danger-txt` | `border-arch-danger-brd` | `text-arch-danger-icon` |

## How themes change color values

Each theme applies a different aesthetic through the same token names. The accent seed values are the most visible difference, but each theme also tints its neutral palette differently:

| Token | Doric | Ionic | Corinthian |
|---|---|---|---|
| Accent seed | Orange (`--orange-9`) | Blue (`--blue-10`) | Jade (`--jade-9`) |
| `--bg-primary` | Slate-1 (cool warm) | Gray-1 (neutral) | Olive-1 (green tint) |
| `--txt-primary` | Slate-12 | Gray-12 | Olive-12 |
| `--brd-primary` | Sand-11 | Slate-9 | Olive-9 |
| Radii | All `0` (sharp) | Rounded (`0.375`–`1.5rem`) | Subtle (`0.125`–`0.625rem`) |

Remember: to customize a theme's accent, override only the three seed variables (`--{theme}-accent-primary`, `--{theme}-accent-dark`, `--{theme}-accent-light`). All downstream tokens update automatically.

## Decision trees

### Background color

```
┌─ "What background should I use?"
│
├─ Main page canvas?
│  └─ bg-arch-surface-primary
│
├─ Card, sidebar, or secondary container?
│  └─ bg-arch-surface-secondary
│
├─ Recessed or inset region?
│  └─ bg-arch-surface-tertiary
│
├─ Primary action button?
│  └─ bg-arch-surface-accent + text-arch-txt-light
│
├─ Secondary action button?
│  └─ bg-arch-surface-accent-light/50
│
├─ Overlay / translucent backdrop?
│  └─ bg-arch-sunken-1 through bg-arch-sunken-4
│
└─ Status-colored surface (Alert)?
   └─ bg-arch-{success|info|warning|danger}-bg
```

### Text color

```
┌─ "What text color should I use?"
│
├─ Primary content (body, headings)?
│  └─ text-arch-txt-primary
│
├─ Supporting info (descriptions, metadata)?
│  └─ text-arch-txt-secondary
│
├─ Muted / placeholder text?
│  └─ text-arch-txt-tertiary
│
├─ Text on accent-colored backgrounds?
│  └─ text-arch-txt-light
│
├─ Interactive / emphasized text?
│  └─ text-arch-txt-accent or text-arch-txt-accent-dark
│
└─ Status text?
   └─ text-arch-{success|info|warning|danger}-txt
```

## Component usage examples

### Button (primary variant)

```tsx
// Uses accent surface + light text — adapts to each theme's accent color
<Button variant="primary">Save</Button>
// Resolves to: bg-arch-surface-accent border-arch-contour-accent text-arch-txt-light
```

### Alert (semantic variants)

```tsx
// Uses all four semantic token roles per status
<Alert variant="danger" icon={<ErrorIcon />}>Something went wrong</Alert>
// Resolves to: bg-arch-danger-bg border-arch-danger-brd text-arch-danger-txt
// Icon uses: text-arch-danger-icon
```

### Toast

```tsx
// Uses primary surface + primary text — neutral across all themes
<Toast title="Saved" description="Your changes have been saved" />
// Resolves to: bg-arch-surface-primary text-arch-txt-primary
```

## Rules

- Always use `arch-*` Tailwind classes — never hardcode hex values or reference primitive palette variables directly.
- Do not mix token layers: components should only use the Tailwind bridge utilities, not raw `--bg-primary` or `--arch-blue-*` variables.
- Do not use `--sys-*` tokens — they are internal to Storybook and the ArchUI website.
- Semantic tokens (`arch-{status}-*`) are reserved for status communication (success, info, warning, danger). Do not use them for decorative purposes.
- Text on accent-colored backgrounds must use `text-arch-txt-light` to guarantee contrast across all themes.
- Border widths are separate tokens (`--stroke-*`). Color tokens only control hue — always pair with `border-[length:var(--stroke-regular)]` or equivalent.
- To customize brand colors, override the three accent seed variables at the top of the theme file (`--{theme}-accent-primary`, `--{theme}-accent-dark`, `--{theme}-accent-light`). Do not modify individual `--bg-accent`, `--txt-accent`, etc. tokens directly.
- Dark mode requires no manual color overrides — it is handled by `ThemeProvider` adding `.dark` to the scoped wrapper element.
