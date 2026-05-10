# Typography Tokens

## Design philosophy

Each ArchUI theme ships with a distinct font family that reinforces its architectural personality. Typography is not just about sizing — the font itself changes per theme, creating a fundamentally different reading experience across Doric, Ionic, and Corinthian.

Font families are declared at the top of each theme's CSS file via `font-family` on the theme class selector. In the future, these will be exposed as customizable seed variables (similar to how accent colors work today), allowing users to swap fonts by overriding a single token.

The minimum allowed font size in ArchUI is **11px** to meet accessibility (a11y) compliance standards. No text in any component should render smaller than this.

## Font families per theme

| Theme | Font family | Character |
|---|---|---|
| **Doric** | `'Barlow', system-ui, -apple-system, sans-serif` | Structured, industrial, geometric |
| **Ionic** | `'Noto Sans', system-ui, -apple-system, sans-serif` | Clean, neutral, humanist |
| **Corinthian** | `'Lato', system-ui, -apple-system, sans-serif` | Refined, warm, elegant |

Font families are set on the theme class (`.doric`, `.ionic`, `.corinthian`) and inherited by all child elements. Components do not set `font-family` directly — they inherit from the theme wrapper.

> **Note — Future customization:** Font families are intended to become overridable seed variables in a future release, matching the pattern used by accent color seeds (`--{theme}-accent-primary`). For now, customization requires overriding the `font-family` declaration on the theme class.

## Type scale

ArchUI provides two sets of typography classes: **heading classes** for display/title text and **body classes** for content text. These are defined in `fonts.css` as composite classes that bundle font-family, weight, size, and letter-spacing.

### Heading classes

Used for page titles, section headings, and display text. Headings use the theme's primary font (Barlow in the default `fonts.css`) with heavy weights and uppercase transforms.

| Class | Size | Weight | Letter spacing | Transform |
|---|---|---|---|---|
| `arch-h0` | 64px | 800 (ExtraBold) | — | Uppercase |
| `arch-h1` | 40px | 800 (ExtraBold) | 10% | Uppercase |
| `arch-h2` | 32px | 800 (ExtraBold) | 10% | Uppercase |
| `arch-h3` | 24px | 700 (Bold) | 10% | Uppercase |
| `arch-h4` | 16px | 800 (ExtraBold) | 10% | Uppercase |
| `arch-h5` | 12px | 800 (ExtraBold) | 10% | Uppercase |
| `arch-h6` | 11px | 700 (Bold) | 10% | Uppercase |

`arch-h6` at 11px is the smallest heading size. Do not create headings smaller than this.

### Body classes

Used for paragraphs, labels, descriptions, and general content text. Body text uses a secondary font stack (Gotham/Inter in the default `fonts.css`) with regular weight.

| Class | Size | Weight | Usage |
|---|---|---|---|
| `arch-body-0` | 16px | 400 (Regular) | Large body text, prominent labels |
| `arch-body-1` | 14px | 400 (Regular) | Standard body text, default for most content |
| `arch-body-2` | 12px | 400 (Regular) | Small text, captions, secondary info |
| `arch-body-3` | 11px | 400 (Regular) | Minimum size text, fine print, footnotes |

`arch-body-3` at 11px is the absolute floor for body text. Do not use `arch-body-2` or smaller Tailwind sizes (`text-xs` = 12px is acceptable, but nothing below 11px).

### Utility classes

| Class | Size | Weight | Usage |
|---|---|---|---|
| `arch-mono` | 10px | 400 (Regular) | Monospaced code snippets (exception to 11px minimum — code context only) |
| `arch-input` | 10px | 700 (Bold) | Input labels, uppercase (exception to 11px minimum — being revised) |

> **Note:** `arch-mono` and `arch-input` currently use 10px, which is below the 11px a11y floor. These are legacy exceptions that will be updated in a future version. Avoid using them for general-purpose text.

## Tailwind font-size classes in components

In addition to the `arch-*` composite classes, components use standard Tailwind font-size classes for their size variants. These work with the inherited theme font-family.

| Tailwind class | Size | Used by |
|---|---|---|
| `text-xs` | 12px | Heading descriptions (h5, h6) |
| `text-sm` | 14px | Button (sm), Alert (sm), Callout (sm), Toast (sm), Heading descriptions (h3, h4) |
| `text-base` | 16px | Button (md), Alert (md), Callout (md), Toast (md), Heading (h6), descriptions (h2) |
| `text-lg` | 18px | Button (lg), Alert (lg), Callout (lg), Toast (lg), Heading (h5), descriptions (h1) |
| `text-xl` | 20px | Heading (h4) |
| `text-2xl` | 24px | Heading (h3) |
| `text-3xl` | 30px | Heading (h2) |
| `text-4xl` | 36px | Heading (h1) |

## Font weights in components

| Tailwind class | Weight | Used for |
|---|---|---|
| `font-normal` | 400 | Button base, body text |
| `font-medium` | 500 | Toast title, Callout title, LinkItem active |
| `font-semibold` | 600 | Heading base (h3–h6) |
| `font-bold` | 700 | Heading (h1, h2), Toast story emphasis |

## Usage in components

| Component | Typography | Notes |
|---|---|---|
| **Heading** | Tailwind sizes (`text-4xl`–`text-base`), `font-bold` / `font-semibold` | Uses Tailwind scale for sizing, not `arch-h*` classes |
| **Button** | `arch-body-0` (lg), `arch-body-1` (md), `arch-body-2` (sm) + Tailwind sizes | Pairs arch body class with Tailwind size |
| **Toast** | `arch-body-1` + Tailwind sizes | Body class for consistent line-height, Tailwind for size variants |
| **Alert** | Tailwind sizes only (`text-sm`, `text-base`, `text-lg`) | No arch typography class |
| **Callout** | Tailwind sizes only, `font-medium` on title | Title weight distinguishes it from body |
| **LinkItem** | `font-medium` on active variant | Weight signals active state |

## Decision tree

```
┌─ "What typography should I use?"
│
├─ Page or section title?
│  └─ Heading component with appropriate variant (h1–h6)
│
├─ Large body text or prominent label?
│  └─ arch-body-0 (16px)
│
├─ Standard body content?
│  └─ arch-body-1 (14px)
│
├─ Secondary info, captions?
│  └─ arch-body-2 (12px)
│
├─ Fine print, absolute minimum?
│  └─ arch-body-3 (11px) — do not go smaller
│
├─ Code snippet?
│  └─ arch-mono (monospaced)
│
└─ Component with size variants (Button, Alert, Toast)?
   └─ Use the component's size prop — it handles typography internally
```

## Rules

- Never set `font-family` directly on components — it is inherited from the theme class on the `ThemeProvider` wrapper.
- The minimum allowed font size is **11px**. Do not use `font-size: 10px` or Tailwind's `text-[10px]` for user-facing content.
- Prefer `arch-body-*` composite classes over bare Tailwind sizes when building new components, as they bundle the intended font-family and weight.
- Use `font-semibold` or `font-bold` for emphasis — do not use weights above 800 or below 400.
- Do not mix heading classes (`arch-h*`) with body classes (`arch-body-*`) on the same element.
- The `arch-h*` classes in `fonts.css` are independent from the Heading component's Tailwind-based sizing. They are available for custom layouts that need the heading typography without the Heading component.
