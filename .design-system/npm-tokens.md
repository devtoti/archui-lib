# NPM Package Tokens — ArchUI Design System v1.1.0

> Source: `@devtoti/archui-lib` CSS token files under `src/tokens/` and `src/fonts.css`
>
> The token system is layered:
> 1. **Primitive palette** (`archui-color-palette.css`) — `--arch-blue-*`, `--arch-gray-*`, etc.
> 2. **System tokens** (`archui-system-tokens.css`) — semantic defaults (blueprint theme)
> 3. **Theme files** (`ionic.css`, `doric.css`, `corinthian.css`) — per-theme overrides
> 4. **Tailwind mapping** (`tokens.css`) — exposes tokens as `@theme inline` utilities

---

## Colors

### Primitive Palette — Blue (Light Mode)

| Variable | Value |
|----------|-------|
| `--arch-blue-1` | `#E7EDFF` |
| `--arch-blue-2` | `#C7D1EB` |
| `--arch-blue-3` | `#ACC4E6` |
| `--arch-blue-4` | `#6B92D3` |
| `--arch-blue-5` | `#4774CC` |
| `--arch-blue-6` | `#3561B9` |
| `--arch-blue-7` | `#2855AD` |
| `--arch-blue-8` | `#173E88` |
| `--arch-blue-9` | `#102F6A` |
| `--arch-blue-10` | `#061E4D` |
| `--arch-blue-11` | `#01102C` |
| `--arch-blue-12` | `#01102C` |

### Primitive Palette — Gray (Light Mode)

| Variable | Value |
|----------|-------|
| `--arch-gray-0` | `#f5f8fd` |
| `--arch-gray-1` | `#F2F7FF` |
| `--arch-gray-2` | `#E9F1FF` |
| `--arch-gray-3` | `#E5EEFE` |
| `--arch-gray-4` | `#D4E0F5` |
| `--arch-gray-5` | `#C2D0EA` |
| `--arch-gray-6` | `#ADBAD1` |
| `--arch-gray-7` | `#A2ABC0` |
| `--arch-gray-8` | `#828EAC` |
| `--arch-gray-9` | `#57637F` |
| `--arch-gray-10` | `#424B5F` |
| `--arch-gray-11` | `#2D3341` |
| `--arch-gray-12` | `#202020` |

### Primitive Palette — Indigo (Light Mode)

| Variable | Value |
|----------|-------|
| `--arch-indigo-1` | `#EAF7FF` |
| `--arch-indigo-2` | `#8ABADD` |
| `--arch-indigo-3` | `#8ABADD` |
| `--arch-indigo-4` | `#8ABADD` |
| `--arch-indigo-5` | `#0090FF` |
| `--arch-indigo-6` | `#0090FF` |
| `--arch-indigo-7` | `#09558F` |
| `--arch-indigo-8` | `#09558F` |
| `--arch-indigo-9` | `#143147` |
| `--arch-indigo-10` | `#143147` |
| `--arch-indigo-11` | `#143147` |
| `--arch-indigo-12` | `#143147` |

### Primitive Palette — Green (Light Mode)

| Variable | Value |
|----------|-------|
| `--arch-green-1` | `#E9FFF0` |
| `--arch-green-2` | `#62A379` |
| `--arch-green-3` | `#62A379` |
| `--arch-green-4` | `#62A379` |
| `--arch-green-5` | `#30A46C` |
| `--arch-green-6` | `#30A46C` |
| `--arch-green-7` | `#0D854B` |
| `--arch-green-8` | `#0D854B` |
| `--arch-green-9` | `#103F28` |
| `--arch-green-10` | `#103F28` |
| `--arch-green-11` | `#103F28` |
| `--arch-green-12` | `#103F28` |

### Primitive Palette — Red (Light Mode)

| Variable | Value |
|----------|-------|
| `--arch-red-1` | `#FFEDED` |
| `--arch-red-2` | `#B26466` |
| `--arch-red-3` | `#B26466` |
| `--arch-red-4` | `#B26466` |
| `--arch-red-5` | `#E5484D` |
| `--arch-red-6` | `#E5484D` |
| `--arch-red-7` | `#BF3539` |
| `--arch-red-8` | `#BF3539` |
| `--arch-red-9` | `#441D1E` |
| `--arch-red-10` | `#441D1E` |
| `--arch-red-11` | `#441D1E` |
| `--arch-red-12` | `#441D1E` |

### System Semantic Colors (`:root` — Blueprint theme)

| Variable | References | Resolved Value |
|----------|-----------|----------------|
| `--sys-bg-white` | — | `#FFFFFF` |
| `--sys-bg-primary` | `var(--arch-gray-0)` | `#f5f8fd` |
| `--sys-bg-secondary` | `var(--arch-gray-2)` | `#E9F1FF` |
| `--sys-bg-tertiary` | `var(--arch-blue-2)` | `#C7D1EB` |
| `--sys-bg-blueprint` | `var(--arch-blue-10)` | `#061E4D` |
| `--sys-fg-primary` | `var(--arch-gray-1)` | `#F2F7FF` |
| `--sys-fg-secondary` | `var(--arch-gray-2)` | `#E9F1FF` |
| `--sys-fg-tertiary` | `var(--arch-gray-3)` | `#E5EEFE` |
| `--sys-fg-blueprint` | `var(--arch-blue-10)` | `#061E4D` |
| `--sys-txt-primary` | `var(--arch-blue-9)` | `#102F6A` |
| `--sys-txt-secondary` | `var(--arch-blue-8)` | `#173E88` |
| `--sys-txt-tertiary` | `var(--arch-blue-7)` | `#2855AD` |
| `--sys-txt-blueprint` | `var(--arch-blue-10)` | `#061E4D` |
| `--sys-txt-light` | `var(--arch-blue-2)` | `#C7D1EB` |
| `--sys-txt-dark` | `var(--arch-blue-11)` | `#01102C` |
| `--sys-txt-gray-light` | `var(--arch-gray-5)` | `#C2D0EA` |
| `--sys-txt-gray-dark` | `var(--arch-gray-11)` | `#2D3341` |
| `--sys-brd-primary` | `var(--arch-blue-7)` | `#2855AD` |
| `--sys-brd-secondary` | `var(--arch-blue-6)` | `#3561B9` |
| `--sys-brd-tertiary` | `var(--arch-blue-4)` | `#6B92D3` |
| `--sys-brd-dark` | `var(--arch-blue-10)` | `#061E4D` |
| `--sys-brd-light` | `var(--arch-blue-1)` | `#E7EDFF` |
| `--sys-brd-gray-light` | `var(--arch-gray-5)` | `#C2D0EA` |
| `--sys-brd-gray-dark` | `var(--arch-gray-11)` | `#2D3341` |
| `--sys-icon-primary` | `var(--arch-blue-9)` | `#102F6A` |
| `--sys-icon-secondary` | `var(--arch-blue-8)` | `#173E88` |
| `--sys-icon-tertiary` | `var(--arch-blue-7)` | `#2855AD` |
| `--sys-icon-dark` | `var(--arch-blue-10)` | `#061E4D` |
| `--sys-icon-light` | `var(--arch-blue-1)` | `#E7EDFF` |

### Theme Semantic Colors — Ionic (Light Mode)

| Variable | References | Resolved Value |
|----------|-----------|----------------|
| `--ionic-accent-primary` | `var(--blue-10)` | Radix blue-10 |
| `--ionic-accent-dark` | `var(--blue-11)` | Radix blue-11 |
| `--ionic-accent-light` | `var(--blue-6)` | Radix blue-6 |
| `--bg-primary` | `var(--gray-1)` | Radix gray-1 |
| `--txt-primary` | `var(--gray-12)` | Radix gray-12 |
| `--brd-primary` | `var(--slate-9)` | Radix slate-9 |
| `--sem-bg-success` | — | `#E9FFF0` |
| `--sem-icons-success` | — | `#30A46C` |
| `--sem-txt-success` | — | `#0D854B` |
| `--sem-brd-success` | — | `#62A379` |
| `--sem-bg-danger` | — | `#FFEDED` |
| `--sem-icons-danger` | — | `#E5484D` |
| `--sem-txt-danger` | — | `#BF3539` |
| `--sem-brd-danger` | — | `#B26466` |

### Theme Semantic Colors — Doric (Light Mode)

| Variable | References | Resolved Value |
|----------|-----------|----------------|
| `--doric-accent-primary` | `var(--orange-9)` | Radix orange-9 |
| `--doric-accent-dark` | `var(--orange-11)` | Radix orange-11 |
| `--doric-accent-light` | `var(--orange-4)` | Radix orange-4 |
| `--bg-primary` | `var(--slate-1)` | Radix slate-1 |
| `--txt-primary` | `var(--slate-12)` | Radix slate-12 |
| `--brd-primary` | `var(--sand-11)` | Radix sand-11 |

### Theme Semantic Colors — Corinthian (Light Mode)

| Variable | References | Resolved Value |
|----------|-----------|----------------|
| `--corinthian-accent-primary` | `var(--jade-9)` | Radix jade-9 |
| `--corinthian-accent-dark` | `var(--jade-11)` | Radix jade-11 |
| `--corinthian-accent-light` | `var(--jade-5)` | Radix jade-5 |
| `--bg-primary` | `var(--olive-1)` | Radix olive-1 |
| `--txt-primary` | `var(--olive-12)` | Radix olive-12 |
| `--brd-primary` | `var(--olive-9)` | Radix olive-9 |

---

## Spacing

### System Spacing Scale (`--sys-sp-*`)

| Variable | Value |
|----------|-------|
| `--sys-sp-3xs` | `0.0625rem` (1px) |
| `--sys-sp-2xs` | `0.125rem` (2px) |
| `--sys-sp-xs` | `0.25rem` (4px) |
| `--sys-sp-sm` | `0.5rem` (8px) |
| `--sys-sp-md` | `0.75rem` (12px) |
| `--sys-sp-lg` | `1rem` (16px) |
| `--sys-sp-xl` | `1.25rem` (20px) |
| `--sys-sp-2xl` | `1.5rem` (24px) |
| `--sys-sp-3xl` | `2rem` (32px) |
| `--sys-sp-4xl` | `2.5rem` (40px) |
| `--sys-sp-5xl` | `3rem` (48px) |
| `--sys-sp-6xl` | `3.75rem` (60px) |

> Spacing is consistent across all three themes (Ionic, Doric, Corinthian).

---

## Radii

### System Radii (`--sys-rd-*`)

| Variable | Value |
|----------|-------|
| `--sys-rd-xs` | `0` |
| `--sys-rd-sm` | `0` |
| `--sys-rd-md` | `0` |
| `--sys-rd-lg` | `0` |
| `--sys-rd-xl` | `0` |
| `--sys-rd-full` | `9999px` |

> System/blueprint defaults are all `0` (sharp corners), except `full`.

### Per-Theme Radii Overrides

| Variable | Ionic | Doric | Corinthian |
|----------|-------|-------|------------|
| `--rd-xs` | `0.375rem` (6px) | `0` | `0.125rem` (2px) |
| `--rd-sm` | `0.75rem` (12px) | `0` | `0.25rem` (4px) |
| `--rd-md` | `1rem` (16px) | `0` | `0.375rem` (6px) |
| `--rd-lg` | `1.25rem` (20px) | `0` | `0.5rem` (8px) |
| `--rd-xl` | `1.5rem` (24px) | `0` | `0.625rem` (10px) |
| `--rd-full` | `9999px` | `9999px` | `9999px` |

---

## Stroke

### System Stroke Widths (`--sys-stroke-*`)

| Variable | Value |
|----------|-------|
| `--sys-stroke-extra-light` | `0.5px` |
| `--sys-stroke-light` | `1px` |
| `--sys-stroke-regular` | `1.5px` |
| `--sys-stroke-bold` | `2px` |
| `--sys-stroke-extra-bold` | `2px` |

### Per-Theme Stroke Overrides

| Variable | Ionic | Doric | Corinthian |
|----------|-------|-------|------------|
| `--stroke-extra-light` | `0.3px` | `0.5px` | `0.2px` |
| `--stroke-light` | `0.5px` | `1px` | `0.3px` |
| `--stroke-regular` | `1px` | `1.5px` | `0.8px` |
| `--stroke-bold` | `1.5px` | `2px` | `1px` |
| `--stroke-extra-bold` | `4px` | `6px` | `2px` |

---

## Typography

### Heading Classes (from `fonts.css`)

| Class | Font Family | Weight | Size | Letter Spacing | Transform |
|-------|-------------|--------|------|----------------|-----------|
| `.arch-h0` | Barlow | 800 (ExtraBold) | 64px | — | uppercase |
| `.arch-h1` | Barlow | 800 (ExtraBold) | 40px | 10% | uppercase |
| `.arch-h2` | Barlow | 800 (ExtraBold) | 32px | 10% | uppercase |
| `.arch-h3` | Barlow | 700 (Bold) | 24px | 10% | uppercase |
| `.arch-h4` | Barlow | 800 (ExtraBold) | 16px | 10% | uppercase |
| `.arch-h5` | Barlow | 800 (ExtraBold) | 12px | 10% | uppercase |
| `.arch-h6` | Barlow | 700 (Bold) | 10px | 10% | uppercase |

### Body Classes (from `fonts.css`)

| Class | Font Family | Weight | Size |
|-------|-------------|--------|------|
| `.arch-body-0` | Gotham, Inter | 400 (Regular) | 16px |
| `.arch-body-1` | Gotham, Inter | 400 (Regular) | 14px |
| `.arch-body-2` | Gotham, Inter | 400 (Regular) | 12px |
| `.arch-body-3` | Gotham, Inter | 400 (Regular) | 11px |

### Utility Classes (from `fonts.css`)

| Class | Font Family | Weight | Size | Extra |
|-------|-------------|--------|------|-------|
| `.arch-mono` | Roboto Mono | 400 (Regular) | 10px | — |
| `.arch-input` | Barlow | 700 (Bold) | 10px | 10% letter-spacing, uppercase |

### Per-Theme Font Stacks

| Theme | `font-family` |
|-------|---------------|
| Ionic | `'Noto Sans', system-ui, -apple-system, sans-serif` |
| Doric | `'Barlow', system-ui, -apple-system, sans-serif` |
| Corinthian | `'Lato', system-ui, -apple-system, sans-serif` |

---

## Padding

### System Padding Scale (`--sys-pd-*`)

| Variable | Value |
|----------|-------|
| `--sys-pd-xs` | `0.25rem` (4px) |
| `--sys-pd-sm` | `0.5rem` (8px) |
| `--sys-pd-md` | `0.625rem` (10px) |
| `--sys-pd-lg` | `1rem` (16px) |
| `--sys-pd-xl` | `1.25rem` (20px) |
| `--sys-pd-2xl` | `1.5rem` (24px) |
| `--sys-pd-3xl` | `1.75rem` (28px) |

### Per-Theme Padding Overrides

| Variable | Ionic | Doric | Corinthian |
|----------|-------|-------|------------|
| `--pd-2xs` | — | `0.125rem` (2px) | — |
| `--pd-xs` | `0.5rem` (8px) | `0.25rem` (4px) | `0.375rem` (6px) |
| `--pd-sm` | `0.75rem` (12px) | `0.5rem` (8px) | `0.625rem` (10px) |
| `--pd-md` | `1rem` (16px) | `0.625rem` (10px) | `0.75rem` (12px) |
| `--pd-lg` | `1.25rem` (20px) | `1rem` (16px) | `1.125rem` (18px) |
| `--pd-xl` | `1.5rem` (24px) | `1.25rem` (20px) | `1.375rem` (22px) |
| `--pd-2xl` | `1.75rem` (28px) | `1.5rem` (24px) | `1.625rem` (26px) |
| `--pd-3xl` | `2.25rem` (36px) | `1.75rem` (28px) | `2rem` (32px) |

---

## Shadows

### Per-Theme Shadow Definitions

| Variable | Ionic (Light) | Doric (Light) | Corinthian (Light) |
|----------|---------------|---------------|-------------------|
| `--shadow-light` | `0 2px 4px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)` | `0 1px 2px rgba(0,0,0,0.02)` | `0 1px 3px rgba(0,0,0,0.05)` |
| `--shadow-regular` | `0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)` | `0 1px 3px rgba(0,0,0,0.04)` | `0 2px 4px rgba(0,0,0,0.08)` |
| `--shadow-dark` | (debug value — to be fixed) | `0 2px 4px rgba(0,0,0,0.06)` | `0 4px 8px rgba(0,0,0,0.12)` |

### Dark Mode Shadows (all themes)

| Variable | Value |
|----------|-------|
| `--shadow-light` | `0 2px 4px rgba(0,0,0,0.3)` |
| `--shadow-regular` | `0 4px 8px rgba(0,0,0,0.4)` |
| `--shadow-dark` | `0 8px 16px rgba(0,0,0,0.5)` |

---

## Tailwind Theme Mapping (`@theme inline` in `tokens.css`)

### Color Tokens → Tailwind Utilities

| Tailwind Variable | Maps To |
|-------------------|---------|
| `--color-arch-surface-primary` | `var(--bg-primary)` |
| `--color-arch-surface-secondary` | `var(--bg-secondary)` |
| `--color-arch-surface-tertiary` | `var(--bg-tertiary)` |
| `--color-arch-surface-accent` | `var(--bg-accent)` |
| `--color-arch-primary` | `var(--txt-primary)` |
| `--color-arch-secondary` | `var(--txt-secondary)` |
| `--color-arch-tertiary` | `var(--txt-tertiary)` |
| `--color-arch-contour-primary` | `var(--brd-primary)` |
| `--color-arch-contour-secondary` | `var(--brd-secondary)` |
| `--color-arch-sem-srfc-success` | `var(--sem-bg-success)` |
| `--color-arch-sem-brd-success` | `var(--sem-brd-success)` |

### Spacing / Radii / Border Tokens → Tailwind

| Tailwind Variable | Maps To |
|-------------------|---------|
| `--spacing-arch-sm` | `var(--pd-sm)` |
| `--spacing-arch-md` | `var(--pd-md)` |
| `--spacing-arch-lg` | `var(--pd-lg)` |
| `--radius-arch-rd-sm` | `var(--rd-sm)` |
| `--radius-arch-rd-md` | `var(--rd-md)` |
| `--radius-arch-rd-lg` | `var(--rd-lg)` |
| `--border-arch-lw-regular` | `var(--stroke-regular)` |
| `--shadow-arch-light` | `var(--shadow-light)` |
| `--shadow-arch-regular` | `var(--shadow-regular)` |
| `--shadow-arch-dark` | `var(--shadow-dark)` |
