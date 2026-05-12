# Radii & Spacing Tokens

## Design philosophy

Radii and spacing are the primary tools ArchUI uses to express each theme's architectural personality. While all three themes share the same token *names*, they resolve to different values — making a Button or Alert look fundamentally different under Doric, Ionic, and Corinthian without changing any component code.

- **Doric** — sharp, structural, zero-radius edges. Inspired by the simplicity of the Doric order. All `--rd-*` tokens resolve to `0` (except `--rd-full`). Padding is compact. Strokes are heavier.
- **Corinthian** — subtly rounded, refined. Small radii (`0.125rem`–`0.625rem`) create gentle softness without feeling bubbly. Padding sits between Doric and Ionic.
- **Ionic** — the most rounded theme. Generous radii (`0.375rem`–`1.5rem`) produce distinctly curved components. Padding is the most spacious of the three.

Components consume these tokens through Tailwind utilities. A class like `rounded-arch-rd-sm` produces sharp corners in Doric, gentle curves in Corinthian, and bold roundness in Ionic — all automatically.

## Token layers

Like color tokens, radii and spacing flow through three layers:

```
Theme variables          →   Tailwind bridge          →   Tailwind utilities
(doric.css, ionic.css…)      (tokens.css @theme)          (classes)

--rd-sm: 0               →   --radius-arch-rd-sm      →   rounded-arch-rd-sm
--pd-sm: 0.5rem          →   --spacing-arch-sm        →   p-arch-sm, px-arch-sm…
--sp-md: 0.75rem         →   --spacing-arch-sp-md     →   gap-arch-sp-md, m-arch-sp-md…
```

| Layer | File(s) | Bridged to Tailwind? |
|---|---|---|
| **Radii** (`--rd-*`) | Theme CSS files | Yes — `rounded-arch-rd-{xs\|sm\|md\|lg\|xl\|full}` |
| **Padding** (`--pd-*`) | Theme CSS files | Yes — `p-arch-{2xs\|xs\|sm\|md\|lg\|xl\|2xl\|3xl}` (and `px-`, `py-`, `pl-`, `pr-`, `pt-`, `pb-` variants) |
| **Spacing** (`--sp-*`) | Theme CSS files | Yes — `gap-arch-sp-{3xs\|2xs\|xs\|sm\|md\|lg\|xl\|2xl\|…\|8xl}` (and `m-`, `mx-`, `my-`, `space-x-`, `space-y-` variants) |

## Radii tokens

### Values per theme

| Token | Tailwind class | Doric | Corinthian | Ionic |
|---|---|---|---|---|
| `--rd-xs` | `rounded-arch-rd-xs` | `0` | `0.125rem` (2px) | `0.375rem` (6px) |
| `--rd-sm` | `rounded-arch-rd-sm` | `0` | `0.25rem` (4px) | `0.75rem` (12px) |
| `--rd-md` | `rounded-arch-rd-md` | `0` | `0.375rem` (6px) | `1rem` (16px) |
| `--rd-lg` | `rounded-arch-rd-lg` | `0` | `0.5rem` (8px) | `1.25rem` (20px) |
| `--rd-xl` | `rounded-arch-rd-xl` | `0` | `0.625rem` (10px) | `1.5rem` (24px) |
| `--rd-full` | `rounded-arch-rd-full` | `9999px` | `9999px` | `9999px` |

`--rd-full` is constant across all themes — use it for pills and circular elements regardless of theme.

### Usage in components

| Component | Radii usage | Notes |
|---|---|---|
| **Button** | `rounded-arch-rd-sm` | Primary rounding class for all button variants |
| **Alert** | `rounded-arch-rd-sm` on all corners, `rounded-tr-arch-rd-sm` on top-right | Subtle directional rounding |
| **Callout** | `rounded-tr-arch-rd-sm`, `rounded-br-arch-rd-sm` | Right-side rounding only (left edge has thick accent border) |
| **Toast** | `rounded-arch-rd-sm` | Matches button rounding |
| **LinkItem** | `rounded-arch-rd-md` default, `rounded-arch-rd-sm` on hover/active | Rounding shifts on interaction |
| **Switch** | `rounded-arch-rd-sm` on track and thumb | Consistent with button-level rounding |

### Decision tree

```
┌─ "What border radius should I use?"
│
├─ Standard component (button, input, card, toast)?
│  └─ rounded-arch-rd-sm
│
├─ Larger container or modal?
│  └─ rounded-arch-rd-md or rounded-arch-rd-lg
│
├─ Subtle accent rounding (one side only)?
│  └─ rounded-tr-arch-rd-sm, rounded-br-arch-rd-sm, etc.
│
├─ Pill shape or avatar circle?
│  └─ rounded-arch-rd-full
│
└─ Component with directional emphasis (e.g. callout left border)?
   └─ Apply rounding only to opposite corners
```

## Padding tokens

### Values per theme

Padding values vary per theme to reinforce each theme's density and feel.

| Token | Tailwind class | Doric | Corinthian | Ionic |
|---|---|---|---|---|
| `--pd-2xs` | `p-arch-2xs` | `0.125rem` (2px) | `0.125rem` (2px) | `0.25rem` (4px) |
| `--pd-xs` | `p-arch-xs` | `0.25rem` (4px) | `0.375rem` (6px) | `0.5rem` (8px) |
| `--pd-sm` | `p-arch-sm` | `0.5rem` (8px) | `0.625rem` (10px) | `0.75rem` (12px) |
| `--pd-md` | `p-arch-md` | `0.625rem` (10px) | `0.75rem` (12px) | `1rem` (16px) |
| `--pd-lg` | `p-arch-lg` | `1rem` (16px) | `1.125rem` (18px) | `1.25rem` (20px) |
| `--pd-xl` | `p-arch-xl` | `1.25rem` (20px) | `1.375rem` (22px) | `1.5rem` (24px) |
| `--pd-2xl` | `p-arch-2xl` | `1.5rem` (24px) | `1.625rem` (26px) | `1.75rem` (28px) |
| `--pd-3xl` | `p-arch-3xl` | `1.75rem` (28px) | `2rem` (32px) | `2.25rem` (36px) |

The progression is: Doric is the most compact, Corinthian sits in the middle, and Ionic is the most spacious. This reinforces Doric's structural density and Ionic's airy, rounded feel.

### Usage in components

| Component | Padding usage | Pattern |
|---|---|---|
| **Button** | `px-arch-sm py-arch-2xs` (sm), `px-arch-md py-arch-xs` (md/lg) | Horizontal padding is always larger than vertical |
| **Alert** | `p-arch-sm` | Uniform padding on all sides |
| **Callout** | `pl-arch-sm pr-arch-sm py-2` | Consistent horizontal padding, fixed vertical |
| **Toast** | `py-arch-sm pl-arch-lg pr-arch-md` | Asymmetric — more left padding for icon alignment |
| **LinkItem** | `px-arch-sm py-arch-xs` | Compact horizontal + vertical |

### Decision tree

```
┌─ "What padding token should I use?"
│
├─ Tight internal spacing (badge, tag, small button)?
│  └─ p-arch-2xs or p-arch-xs
│
├─ Standard component padding (button, input, toast)?
│  └─ p-arch-sm or p-arch-md
│
├─ Card or panel padding?
│  └─ p-arch-lg or p-arch-xl
│
├─ Section or page-level padding?
│  └─ p-arch-2xl or p-arch-3xl
│
└─ Asymmetric spacing (icon alignment, action area)?
   └─ Mix px-arch-* / py-arch-* at different scales
```

## Spacing tokens (gap, margin)

Spacing tokens share the same scale across all three themes. They are used for gaps between elements, margins, and layout flow. They are bridged to Tailwind as `--spacing-arch-sp-*`, producing utilities like `gap-arch-sp-md`, `m-arch-sp-lg`, etc.

| Token | Tailwind class | Value | Usage |
|---|---|---|---|
| `--sp-3xs` | `gap-arch-sp-3xs` | `0.0625rem` (1px) | Hairline gaps (heading h6 gap) |
| `--sp-2xs` | `gap-arch-sp-2xs` | `0.125rem` (2px) | Minimal gaps (heading h5 gap) |
| `--sp-xs` | `gap-arch-sp-xs` | `0.25rem` (4px) | Tight element gaps |
| `--sp-sm` | `gap-arch-sp-sm` | `0.5rem` (8px) | Small component gaps |
| `--sp-md` | `gap-arch-sp-md` | `0.75rem` (12px) | Standard gaps between related elements |
| `--sp-lg` | `gap-arch-sp-lg` | `1rem` (16px) | Section-level gaps |
| `--sp-xl` | `gap-arch-sp-xl` | `1.25rem` (20px) | Generous section gaps |
| `--sp-2xl` | `gap-arch-sp-2xl` | `1.5rem` (24px) | Large layout gaps |
| `--sp-3xl`–`--sp-8xl` | `gap-arch-sp-3xl`–`gap-arch-sp-8xl` | `2rem`–`7rem` | Page-level and hero spacing |

The `arch-sp-*` utilities work with all spacing-based Tailwind prefixes: `gap-`, `m-`, `mx-`, `my-`, `mt-`, `mb-`, `ml-`, `mr-`, `space-x-`, `space-y-`.

```tsx
<div className="flex flex-col gap-arch-sp-md">
  <Heading variant="h1">Title</Heading>
  <p>Description</p>
</div>
```

The Heading component uses spacing tokens internally to set the gap between heading text and description, scaling from `gap-arch-sp-3xs` for h6 up to `gap-arch-sp-md` for h1.

## Stroke (border width) tokens

Stroke tokens control border thickness and vary per theme to match each theme's visual weight.

| Token | Tailwind class | Doric | Corinthian | Ionic |
|---|---|---|---|---|
| `--stroke-extra-light` | `border-arch-lw-extra-light` | `0.5px` | `0.2px` | `0.3px` |
| `--stroke-light` | `border-arch-lw-light` | `1px` | `0.3px` | `0.5px` |
| `--stroke-regular` | `border-arch-lw-regular` | `1.5px` | `0.8px` | `1px` |
| `--stroke-bold` | `border-arch-lw-bold` | `2px` | `1px` | `1.5px` |
| `--stroke-extra-bold` | `border-arch-lw-extra-bold` | `6px` | `2px` | `4px` |

Doric has the heaviest strokes, reinforcing its structural feel. Corinthian is the lightest. Most components use `--stroke-regular` for standard borders:

```tsx
// Common pattern in Button, Alert, LinkItem
className="border-[length:var(--stroke-regular)] border-arch-contour-accent"
```

The Callout component uses `--stroke-extra-bold` for its distinctive left accent border.

## Common patterns

### Card-like component

```tsx
<div className="bg-arch-surface-secondary rounded-arch-rd-sm p-arch-lg">
  <Heading variant="h3">Card Title</Heading>
  <p className="text-arch-txt-secondary">Card content goes here</p>
</div>
```

### Button row with spacing

```tsx
<div className="flex gap-arch-sp-sm">
  <Button variant="primary">Save</Button>
  <Button variant="secondary">Cancel</Button>
</div>
```

### Stacked form layout

```tsx
<form className="flex flex-col gap-arch-sp-md p-arch-xl">
  <Heading variant="h2">Settings</Heading>
  <InputField label="Name" />
  <InputField label="Email" />
  <Button variant="primary">Submit</Button>
</form>
```

## Rules

- Always use `arch-rd-*` Tailwind classes for border radius — never hardcode `rounded-lg`, `rounded-md`, or pixel values. These bypass the theme system.
- Always use `arch-*` Tailwind spacing classes for padding — never hardcode `p-4`, `px-3`, etc.
- For gap and margin, use `gap-arch-sp-*` or `m-arch-sp-*` Tailwind utilities — never use arbitrary `gap-[var(--sp-*)]` syntax.
- Do not override radii or padding per-theme in component code. The token system handles theme differentiation automatically.
- `rounded-arch-rd-sm` is the default rounding level for most components (buttons, alerts, toasts, switches). Use it unless you have a specific reason to go larger.
- Pair border color tokens with stroke width tokens — color and width are separate concerns. Example: `border-arch-contour-accent border-[length:var(--stroke-regular)]`.
- `--rd-full` / `rounded-arch-rd-full` is the only radius token that is constant across themes. Use it for intentionally circular or pill-shaped elements only.
