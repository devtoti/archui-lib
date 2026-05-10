# Token Discrepancies — Figma vs NPM Package

> This document identifies all naming, value, and structural differences between the
> Figma Design System file and the `@devtoti/archui-lib` npm package tokens.
> Use this as a reconciliation roadmap when aligning variables across both platforms.
>
> **Figma collections used:** ✦ Orders (93 vars, 3 theme modes) + 🔹 System (30 vars, Light/Dark modes)
> **NPM token sources:** `archui-system-tokens.css`, `archui-color-palette.css`, theme files, `fonts.css`, `tokens.css`

---

## 1. Structural Overview

```
FIGMA STRUCTURE                         NPM STRUCTURE
─────────────────                       ─────────────────
✦ Orders collection (93 vars)           Layer 1: Radix imports (@radix-ui/colors)
  → Modes: Ionic | Doric | Corinthian   Layer 2: Custom palette (--bleu-*, --gris-*, etc.)
🔹 System collection (30 vars)          Layer 3: System tokens (--sys-bg-*, --sys-txt-*)
  → Modes: Light | Dark                 Layer 4: Theme overrides (.ionic, .doric, .corinthian)
✦ Colors (Radix) (845 vars, omitted)   Layer 5: Tailwind @theme (--color-arch-*, --radius-arch-*)
                                        Layer 6: Utility classes (bg-arch-surface-primary)
```

**Key structural difference:**
- Figma separates **theme-specific** tokens (✦ Orders) from **system/blueprint** tokens (🔹 System) as two distinct variable collections
- NPM layers all tokens in CSS cascade: system defaults → theme overrides → Tailwind mapping
- ✦ Orders maps directly to NPM's theme override files (`ionic.css`, `doric.css`, `corinthian.css`)
- 🔹 System maps to NPM's `archui-system-tokens.css` with Light/Dark mode

---

## 2. Naming Discrepancies

### Colors — Orders (Theme-Specific) vs NPM Theme Overrides

| Figma (✦ Orders) | NPM Variable | Tailwind Utility |
|-------------------|--------------|------------------|
| `background/primary` | `--bg-primary` | `bg-arch-surface-primary` |
| `background/secondary` | `--bg-secondary` | `bg-arch-surface-secondary` |
| `background/tertiary` | `--bg-tertiary` | `bg-arch-surface-tertiary` |
| `background/accent` | `--bg-accent` | `bg-arch-surface-accent` |
| `background/accent-dark` | `--bg-accent-dark` | — (not mapped to Tailwind) |
| `background/accent-light` | `--bg-accent-light` | — (not mapped) |
| `background/light` | ❌ No equivalent | — |
| `background/sunken-1..4` | ❌ No equivalent | — |
| `foreground/primary` | `--fg-primary` | `bg-arch-float-primary` |
| `foreground/secondary` | `--fg-secondary` | `bg-arch-float-secondary` |
| `foreground/tertiary` | `--fg-tertiary` | `bg-arch-float-tertiary` |
| `foreground/accent` | ❌ No equivalent | — |
| `foreground/raised-1..3` | ❌ No equivalent | — |
| `text/primary` | `--txt-primary` | `text-arch-primary` |
| `text/secondary` | `--txt-secondary` | `text-arch-secondary` |
| `text/tertiary` | `--txt-tertiary` | `text-arch-tertiary` |
| `text/light` | `--txt-light` | `text-arch-light` |
| `text/accent` | ❌ No equivalent | — |
| `text/accent-dark` | ❌ No equivalent | `text-arch-accent-dark` (exists in Tailwind but not as CSS var) |
| `text/accent-light` | ❌ No equivalent | — |
| `borders/primary` | `--brd-primary` | `border-arch-contour-primary` |
| `borders/secondary` | `--brd-secondary` | `border-arch-contour-secondary` |
| `borders/tertiary` | `--brd-tertiary` | `border-arch-contour-tertiary` |
| `borders/accent` | `--brd-accent` | `border-arch-contour-accent` |
| `borders/accent-dark` | ❌ No equivalent | — |
| `borders/accent-light` | ❌ No equivalent | — |
| `borders/light` | `--brd-light` | — |
| `borders/dark` | `--brd-dark` | — |
| `icons/accent` | `--icon-accent` | — |
| `icons/primary` | `--icon-primary` | `text-arch-icon-primary` |
| `icons/secondary` | `--icon-secondary` | — |
| `icons/tertiary` | `--icon-tertiary` | — |
| `icons/#light` | `--icon-light` | — |
| `icons/#dark` | `--icon-dark` | — |

### Colors — System (Blueprint) vs NPM System Tokens

| Figma (🔹 System) | NPM Variable | Notes |
|--------------------|--------------|-------|
| `background/#primary` | `--sys-bg-primary` | ✅ Match concept |
| `background/#secondary` | `--sys-bg-secondary` | ✅ |
| `background/#tertiary` | `--sys-bg-tertiary` | ✅ |
| `background/#blueprint` | `--sys-bg-blueprint` | ✅ |
| `foreground/#primary` | `--sys-fg-primary` | ✅ |
| `foreground/#secondary` | `--sys-fg-secondary` | ✅ |
| `foreground/#tertiary` | `--sys-fg-tertiary` | ✅ |
| `foreground/#blueprint` | `--sys-fg-blueprint` | ✅ |
| `text/#primary` | `--sys-txt-primary` | ⚠️ Value mismatch (see §3) |
| `text/#secondary` | `--sys-txt-secondary` | ⚠️ Value mismatch |
| `text/#tertiary` | `--sys-txt-tertiary` | ⚠️ Value mismatch |
| `text/#blueprint` | `--sys-txt-blueprint` | ✅ |
| `text/#light` | `--sys-txt-light` | ⚠️ Value mismatch |
| `text/#dark` | `--sys-txt-dark` | ⚠️ Value mismatch |
| `text/#gray-light` | `--sys-txt-gray-light` | ⚠️ Value mismatch |
| `text/#gray-dark` | `--sys-txt-gray-dark` | ⚠️ Value mismatch |
| `borders/#primary` | `--sys-brd-primary` | ⚠️ Value mismatch |
| `borders/#secondary` | `--sys-brd-secondary` | ⚠️ Value mismatch |
| `borders/#tertiary` | `--sys-brd-tertiary` | ⚠️ Value mismatch |
| `borders/#dark` | `--sys-brd-dark` | ⚠️ Value mismatch |
| `borders/#light` | `--sys-brd-light` | ✅ |
| `borders/#gray-light` | `--sys-brd-gray-light` | ⚠️ Value mismatch |
| `borders/#gray-dark` | `--sys-brd-gray-dark` | ⚠️ Value mismatch |
| `icons/#primary` | `--sys-icon-primary` | ⚠️ Value mismatch |
| `icons/#secondary` | `--sys-icon-secondary` | ⚠️ Value mismatch |
| `icons/#tertiary` | `--sys-icon-tertiary` | ⚠️ Value mismatch |
| `icons/#dark` | `--sys-icon-dark` | ⚠️ Value mismatch |
| `icons/#light` | `--sys-icon-light` | ✅ |
| `icons/#gray-light` | ❌ No NPM equivalent | — |
| `icons/#gray-dark` | ❌ No NPM equivalent | — |

### Semantic Colors (✦ Orders)

| Figma (✦ Orders) | NPM Variable | Tailwind Utility |
|-------------------|--------------|------------------|
| `semantic/background/success` | `--sem-bg-success` | `bg-arch-sem-srfc-success` |
| `semantic/background/info` | `--sem-bg-info` | `bg-arch-sem-srfc-info` |
| `semantic/background/warning` | `--sem-bg-warning` | `bg-arch-sem-srfc-warning` |
| `semantic/background/danger` | `--sem-bg-danger` | `bg-arch-sem-srfc-danger` |
| `semantic/icons/success` | `--sem-icons-success` | `text-arch-sem-i-success` |
| `semantic/icons/info` | `--sem-icons-info` | `text-arch-sem-i-info` |
| `semantic/icons/warning` | `--sem-icons-warning` | `text-arch-sem-i-warning` |
| `semantic/icons/danger` | `--sem-icons-danger` | `text-arch-sem-i-danger` |
| `semantic/text/success` | `--sem-txt-success` | `text-arch-sem-chars-success` |
| `semantic/text/info` | `--sem-txt-info` | `text-arch-sem-chars-info` |
| `semantic/text/warning` | `--sem-txt-warning` | `text-arch-sem-chars-warning` |
| `semantic/text/danger` | `--sem-txt-danger` | `text-arch-sem-chars-danger` |
| `semantic/border/success` | `--sem-brd-success` | `border-arch-sem-brd-success` |
| `semantic/border/info` | `--sem-brd-info` | `border-arch-sem-brd-info` |
| `semantic/border/warning` | `--sem-brd-warning` | `border-arch-sem-brd-warning` |
| `semantic/border/danger` | `--sem-brd-danger` | `border-arch-sem-brd-danger` |

**Naming pattern: `danger`** — now aligned between Figma and NPM.

### Non-Color Tokens — Naming

| Figma (✦ Orders) | NPM Variable | Notes |
|-------------------|--------------|-------|
| `radii/xs` | `--rd-xs` | ✅ Aligned concept |
| `radii/sm` | `--rd-sm` | ✅ |
| `radii/md` | `--rd-md` | ✅ |
| `radii/lg` | `--rd-lg` | ✅ |
| `radii/xl` | `--rd-xl` | ✅ |
| `radii/full` | `--rd-full` | ✅ |
| `padding/#pad-2xs` | `--pd-2xs` | ⚠️ NPM only in Doric |
| `padding/pad-xs` | `--pd-xs` | ✅ |
| `padding/pad-sm` | `--pd-sm` | ✅ |
| `padding/pad-md` | `--pd-md` | ✅ |
| `padding/pad-lg` | `--pd-lg` | ✅ |
| `padding/pad-xl` | `--pd-xl` | ✅ |
| `padding/pad-2xl` | `--pd-2xl` | ✅ |
| `padding/pad-3xl` | `--pd-3xl` | ✅ |
| `stroke/extra-light` | `--stroke-extra-light` | ✅ |
| `stroke/light` | `--stroke-light` | ✅ |
| `stroke/regular` | `--stroke-regular` | ✅ |
| `stroke/bold` | `--stroke-bold` | ✅ |
| `stroke/extra-bold` | `--stroke-extra-bold` | ✅ |
| `spacing (abs)/3xs` | `--sys-sp-3xs` (via `--sp-3xs`) | ✅ |
| `spacing (abs)/2xs` | `--sys-sp-2xs` (via `--sp-2xs`) | ✅ |
| `spacing (abs)/xs` | `--sys-sp-xs` (via `--sp-xs`) | ✅ |
| `spacing (abs)/sm` | `--sys-sp-sm` (via `--sp-sm`) | ✅ |
| `spacing (abs)/md` | `--sys-sp-md` (via `--sp-md`) | ✅ |
| `spacing (abs)/lg` | `--sys-sp-lg` (via `--sp-lg`) | ✅ |
| `spacing (abs)/xl` | `--sys-sp-xl` (via `--sp-xl`) | ✅ |
| `spacing (abs)/2xl` | `--sys-sp-2xl` (via `--sp-2xl`) | ✅ |
| `spacing (abs)/3xl` | `--sys-sp-3xl` (via `--sp-3xl`) | ✅ |
| `spacing (abs)/4xl` | `--sys-sp-4xl` (via `--sp-4xl`) | ✅ |
| `spacing (abs)/5xl` | `--sys-sp-5xl` (via `--sp-5xl`) | ✅ |
| `spacing (abs)/6xl` | `--sys-sp-6xl` (via `--sp-6xl`) | ✅ |
| `spacing (abs)/7xl` | ❌ No NPM equivalent | — |
| `spacing (abs)/8xl` | ❌ No NPM equivalent | — |

---

## 3. Value Mismatches

### System Colors (🔹 System Light vs `--sys-*`)

The Figma 🔹 System collection uses `Colors/Bleu/*` references that resolve to the custom ArchUI Bleu palette, but with different scale mapping:

| Figma Variable | Figma Reference | NPM Variable | NPM Reference | Status |
|---------------|-----------------|--------------|---------------|--------|
| `text/#primary` | → Colors/Bleu/8 | `--sys-txt-primary` | `var(--arch-blue-9)` | ⚠️ **Off by 1 step** |
| `text/#secondary` | → Colors/Bleu/7 | `--sys-txt-secondary` | `var(--arch-blue-8)` | ⚠️ **Off by 1 step** |
| `text/#tertiary` | → Colors/Bleu/6 | `--sys-txt-tertiary` | `var(--arch-blue-7)` | ⚠️ **Off by 1 step** |
| `text/#light` | → Colors/Bleu/1 | `--sys-txt-light` | `var(--arch-blue-2)` | ⚠️ **Off by 1 step** |
| `text/#dark` | → Colors/Bleu/10 | `--sys-txt-dark` | `var(--arch-blue-11)` | ⚠️ **Off by 1 step** |
| `text/#gray-light` | → Colors/Gris/4 | `--sys-txt-gray-light` | `var(--arch-gray-5)` | ⚠️ **Off by 1 step** |
| `text/#gray-dark` | → Colors/Gris/10 | `--sys-txt-gray-dark` | `var(--arch-gray-11)` | ⚠️ **Off by 1 step** |
| `borders/#primary` | → Colors/Bleu/8 | `--sys-brd-primary` | `var(--arch-blue-7)` | ⚠️ **Off by 1 step** |
| `borders/#secondary` | → Colors/Bleu/7 | `--sys-brd-secondary` | `var(--arch-blue-6)` | ⚠️ **Off by 1 step** |
| `borders/#tertiary` | → Colors/Bleu/6 | `--sys-brd-tertiary` | `var(--arch-blue-4)` | ⚠️ **Off by 2 steps** |
| `borders/#dark` | → Colors/Bleu/9 | `--sys-brd-dark` | `var(--arch-blue-10)` | ⚠️ **Off by 1 step** |
| `borders/#gray-light` | → Colors/Gris/4 | `--sys-brd-gray-light` | `var(--arch-gray-5)` | ⚠️ **Off by 1 step** |
| `borders/#gray-dark` | → Colors/Gris/10 | `--sys-brd-gray-dark` | `var(--arch-gray-11)` | ⚠️ **Off by 1 step** |
| `icons/#primary` | → Colors/Bleu/8 | `--sys-icon-primary` | `var(--arch-blue-9)` | ⚠️ **Off by 1 step** |
| `icons/#secondary` | → Colors/Bleu/7 | `--sys-icon-secondary` | `var(--arch-blue-8)` | ⚠️ **Off by 1 step** |
| `icons/#tertiary` | → Colors/Bleu/6 | `--sys-icon-tertiary` | `var(--arch-blue-7)` | ⚠️ **Off by 1 step** |
| `icons/#dark` | → Colors/Bleu/9 | `--sys-icon-dark` | `var(--arch-blue-10)` | ⚠️ **Off by 1 step** |
| `background/#primary` | → Colors/Gris/1 | `--sys-bg-primary` | `var(--arch-gray-0)` | ⚠️ **Off by 1 step** |
| `background/#secondary` | → Colors/Gris/2 | `--sys-bg-secondary` | `var(--arch-gray-2)` | ✅ Match |
| `background/#tertiary` | → Colors/Gris/3 | `--sys-bg-tertiary` | `var(--arch-blue-2)` | ⚠️ **Different palette!** |
| `background/#blueprint` | → Colors/Bleu/9 | `--sys-bg-blueprint` | `var(--arch-blue-10)` | ⚠️ **Off by 1 step** |
| `foreground/#primary` | → Colors/Gris/1 | `--sys-fg-primary` | `var(--arch-gray-1)` | ✅ Match |
| `foreground/#secondary` | → Colors/Gris/2 | `--sys-fg-secondary` | `var(--arch-gray-2)` | ✅ Match |
| `foreground/#tertiary` | → Colors/Gris/3 | `--sys-fg-tertiary` | `var(--arch-gray-3)` | ✅ Match |
| `foreground/#blueprint` | → Colors/Bleu/9 | `--sys-fg-blueprint` | `var(--arch-blue-10)` | ⚠️ **Off by 1 step** |

**Pattern identified:** Figma's 🔹 System collection consistently references palette steps that are 1 lighter than the NPM system tokens (Figma Bleu/8 ≈ NPM bleu-9). This is a **systematic offset**, likely caused by a palette scale indexing difference (Figma starts at 1, NPM palette has a `gris-0`).

### Theme Color Values (✦ Orders vs NPM Theme Files)

The ✦ Orders collection references Radix color scales. NPM theme files also reference Radix. The references align well:

| Figma (✦ Orders, Ionic) | NPM (ionic.css) | Status |
|--------------------------|------------------|--------|
| `background/primary` → Colors/Gray/1 | `--bg-primary: var(--gray-1)` | ✅ Match |
| `text/primary` → Colors/Gray/12 | `--txt-primary: var(--gray-12)` | ✅ Match |
| `borders/primary` → Colors/Slate/9 | `--brd-primary: var(--slate-9)` | ✅ Match |
| `background/accent` → Colors/Indigo/9 | `--ionic-accent-primary: var(--blue-10)` | ⚠️ **Indigo vs Blue** |
| `background/accent-dark` → Colors/Indigo/11 | `--ionic-accent-dark: var(--blue-11)` | ⚠️ **Indigo vs Blue** |

| Figma (✦ Orders, Doric) | NPM (doric.css) | Status |
|--------------------------|------------------|--------|
| `background/primary` → Colors/Slate/1 | `--bg-primary: var(--slate-1)` | ✅ Match |
| `text/primary` → Colors/Slate/12 | `--txt-primary: var(--slate-12)` | ✅ Match |
| `borders/primary` → Colors/Sand/11 | `--brd-primary: var(--sand-11)` | ✅ Match |
| `background/accent` → Colors/Orange/9 | `--doric-accent-primary: var(--orange-9)` | ✅ Match |

| Figma (✦ Orders, Corinthian) | NPM (corinthian.css) | Status |
|------------------------------|----------------------|--------|
| `background/primary` → Colors/Olive/1 | `--bg-primary: var(--olive-1)` | ✅ Match |
| `text/primary` → Colors/Olive/12 | `--txt-primary: var(--olive-12)` | ✅ Match |
| `borders/primary` → Colors/Olive/9 | `--brd-primary: var(--olive-9)` | ✅ Match |
| `background/accent` → Colors/Jade/9 | `--corinthian-accent-primary: var(--jade-9)` | ✅ Match |

### Radii Values (✦ Orders vs NPM Theme Files)

| Token | Figma Ionic | NPM Ionic | Figma Doric | NPM Doric | Figma Corinthian | NPM Corinthian |
|-------|-------------|-----------|-------------|-----------|------------------|----------------|
| `radii/xs` / `--rd-xs` | 6px | 6px (0.375rem) | 0 | 0 | 2px | 2px (0.125rem) |
| `radii/sm` / `--rd-sm` | 12px | 12px (0.75rem) | 0 | 0 | 4px | 4px (0.25rem) |
| `radii/md` / `--rd-md` | 16px | 16px (1rem) | 0 | 0 | 6px | 6px (0.375rem) |
| `radii/lg` / `--rd-lg` | 20px | 20px (1.25rem) | 0 | 0 | 8px | 8px (0.5rem) |
| `radii/xl` / `--rd-xl` | 24px | 24px (1.5rem) | 0 | 0 | 10px | 10px (0.625rem) |
| `radii/full` / `--rd-full` | 9999 | 9999px | 9999 | 9999px | 9999 | 9999px |

✅ **All radii values match perfectly across all themes.**

### Padding Values (✦ Orders vs NPM Theme Files)

| Token | Figma Ionic | NPM Ionic | Figma Doric | NPM Doric | Figma Corinthian | NPM Corinthian |
|-------|-------------|-----------|-------------|-----------|------------------|----------------|
| `pad-2xs` | 4px | — (not defined) | 2px | 2px (0.125rem) | 2px | — |
| `pad-xs` | 8px | 8px (0.5rem) | 4px | 4px (0.25rem) | 6px | 6px (0.375rem) |
| `pad-sm` | 12px | 12px (0.75rem) | 8px | 8px (0.5rem) | 10px | 10px (0.625rem) |
| `pad-md` | 16px | 16px (1rem) | 10px | 10px (0.625rem) | 12px | 12px (0.75rem) |
| `pad-lg` | 20px | 20px (1.25rem) | 16px | 16px (1rem) | 18px | 18px (1.125rem) |
| `pad-xl` | 24px | 24px (1.5rem) | 20px | 20px (1.25rem) | 22px | 22px (1.375rem) |
| `pad-2xl` | 28px | 28px (1.75rem) | 24px | 24px (1.5rem) | 26px | 26px (1.625rem) |
| `pad-3xl` | 36px | 36px (2.25rem) | 28px | 28px (1.75rem) | 32px | 32px (2rem) |

✅ **All padding values match** (except `pad-2xs` which is Figma-only for Ionic/Corinthian).

### Stroke Values (✦ Orders vs NPM Theme Files)

| Token | Figma Ionic | NPM Ionic | Figma Doric | NPM Doric | Figma Corinthian | NPM Corinthian |
|-------|-------------|-----------|-------------|-----------|------------------|----------------|
| `extra-light` | 0.3px | 0.3px | 0.5px | 0.5px | 0.2px | 0.2px |
| `light` | 0.5px | 0.5px | 1px | 1px | 0.3px | 0.3px |
| `regular` | 1px | 1px | 1.5px | 1.5px | 0.8px | 0.8px |
| `bold` | 1.5px | 1.5px | 2px | 2px | 1px | 1px |
| `extra-bold` | 4px | 4px | 6px | 6px | 2px | 2px |

✅ **All stroke values match perfectly across all themes.**

### Spacing Values (✦ Orders vs NPM)

| Token | Figma (all themes) | NPM (`--sys-sp-*`) | Status |
|-------|--------------------|--------------------|--------|
| `3xs` = 1px | 1px | 0.0625rem (1px) | ✅ |
| `2xs` = 2px | 2px | 0.125rem (2px) | ✅ |
| `xs` = 4px | 4px | 0.25rem (4px) | ✅ |
| `sm` = 8px | 8px | 0.5rem (8px) | ✅ |
| `md` = 12px | 12px | 0.75rem (12px) | ✅ |
| `lg` = 16px | 16px | 1rem (16px) | ✅ |
| `xl` = 20px | 20px | 1.25rem (20px) | ✅ |
| `2xl` = 24px | 24px | 1.5rem (24px) | ✅ |
| `3xl` = 32px | 32px | 2rem (32px) | ✅ |
| `4xl` = 40px | 40px | 2.5rem (40px) | ✅ |
| `5xl` = 48px | 48px | 3rem (48px) | ✅ |
| `6xl` = 60px | 60px | 3.75rem (60px) | ✅ |
| `7xl` = 80px | 80px | ❌ Not defined | Missing in NPM |
| `8xl` = 112px | 112px | ❌ Not defined | Missing in NPM |

---

## 4. Missing in Figma (exists in NPM only)

| Category | Token(s) | Notes |
|----------|----------|-------|
| **Custom color palette** | `--arch-blue-*`, `--arch-gray-*`, `--arch-indigo-*`, `--arch-green-*`, `--arch-red-*` (60 vars) | NPM defines custom `arch-` prefixed palette; Figma references Radix palette directly |
| **System spacing** (as CSS vars) | `--sys-sp-*`, `--sp-*` | Figma has `spacing (abs)/*` — same values, just different naming level |
| **System padding defaults** | `--sys-pd-*` (7 vars) | Figma has padding only per-theme, no system-level default scale |
| **System radii defaults** | `--sys-rd-*` (all zeros) | Figma has radii only per-theme |
| **System stroke defaults** | `--sys-stroke-*` | Figma has stroke only per-theme |
| **Shadows** | `--shadow-light`, `--shadow-regular`, `--shadow-dark` | Not variabilized in Figma at all |
| **Accent color aliases** | `--ionic-accent-primary`, `--doric-accent-primary`, `--corinthian-accent-primary` | Figma uses `background/accent` → Radix alias instead |
| **`--sys-bg-white`** | `#FFFFFF` literal | No Figma equivalent |
| **Tailwind mapping layer** | `--color-arch-*`, `--spacing-arch-*`, `--radius-arch-*` | Unique to NPM's Tailwind integration |
| **Typography variables** | `.arch-h0..h6`, `.arch-body-1..3`, `.arch-mono`, `.arch-input` | Figma uses text styles, not variables |
| **Per-theme font stacks** | `font-family` in ionic/doric/corinthian | Not variabilized in Figma |
| **Dark mode per-theme colors** | `.dark .ionic { --bg-primary: ... }` | Figma ✦ Orders has no dark mode — only 🔹 System does |

---

## 5. Missing in NPM (exists in Figma only)

| Category | Token(s) | Notes |
|----------|----------|-------|
| **`background/light`** | → Colors/Gris/1 (all themes) | Figma has this, NPM does not have a distinct `--bg-light` |
| **`background/sunken-1..4`** | rgba overlays (10%-70% opacity) | Not in NPM; useful for glass/overlay effects |
| **`foreground/accent`** | → Indigo/Orange/Jade Alpha/2 | Not in NPM as a distinct token |
| **`foreground/raised-1..3`** | rgba(255,255,255, 0.1/0.3/0.5) | Not in NPM; useful for glassmorphism |
| **`text/accent`** | → Radix accent/9 per theme | NPM has no `--txt-accent` (only `--txt-accent-dark` via Tailwind) |
| **`text/accent-light`** | → Radix accent/7 per theme | Not in NPM |
| **`borders/accent-dark`** | → Radix accent/11 per theme | Not in NPM |
| **`borders/accent-light`** | → Radix accent/7 per theme | Not in NPM |
| **`icons/accent`** | → Radix accent/11 per theme | Not in NPM |
| **`icons/secondary`** (per-theme) | → Radix scale/11 per theme | NPM defines in system only |
| **`icons/tertiary`** (per-theme) | → Radix scale/10 per theme | NPM defines in system only |
| **`icons/#gray-light`** (system) | → Colors/Gris/4 | Not in NPM |
| **`icons/#gray-dark`** (system) | → Colors/Gris/10 | Not in NPM |
| **`spacing (abs)/7xl`** | 80px | Not in NPM spacing scale |
| **`spacing (abs)/8xl`** | 112px | Not in NPM spacing scale |
| **`padding/#pad-2xs`** (Ionic) | 4px | NPM Ionic has no `--pd-2xs` |
| **`currTheme`** | STRING variable | Not in NPM (theme is applied via class) |

---

## 6. Key Semantic Differences

### ~~"danger" vs "error"~~ — ✅ Resolved
- **Figma**: Uses `semantic/*/danger`
- **NPM**: Now uses `--sem-*-danger` (bg-danger, icons-danger, txt-danger, brd-danger)
- Tailwind utilities: `*-arch-sem-{srfc|chars|brd|i}-danger`
- Component variants renamed from `"error"` to `"danger"`

<!-- ### Accent Color Palette Choice
- **Figma Ionic**: Uses `Colors/Indigo/*` for accent colors
- **NPM Ionic**: Uses `var(--blue-*)` (Radix Blue) for accent colors
- **Impact**: Indigo and Blue are distinct Radix palettes with different hue values. This causes a subtle but visible color mismatch on accent elements. -->

<!-- ### Scale Indexing (System Colors)
- **Figma 🔹 System**: References `Colors/Bleu/8` for primary text (0-indexed from 1)
- **NPM System**: References `var(--arch-blue-9)` for primary text
- **Root cause**: Figma's Colors/Bleu palette and NPM's `--bleu-*` palette use different base indexes or the Radix Colors library version in Figma has a different scale numbering than the custom ArchUI palette. -->

---

## 7. Reconciliation Status

### Resolved

1. ~~**Systematic 1-step offset**~~ — ✅ Fixed. `archui-system-tokens.css` text colors now match Figma 🔹 System references.

2. ~~**Missing Figma tokens in NPM**~~ — ✅ False positive. After Figma renamed variables (e.g. `background/` → `bg/`, `foreground/` → `fg/`, `borders/` → `brd/`), all map 1:1 to existing NPM `--bg-*`, `--fg-*`, `--brd-*`, `--txt-*`, `--icon-*` variables.

3. ~~**`spacing/7xl` and `spacing/8xl`**~~ — ✅ Added `--sp-7xl: 5rem` (80px) and `--sp-8xl: 7rem` (112px) to system tokens and all theme files.

4. ~~**`pad-2xs` missing in Ionic/Corinthian**~~ — ✅ Added `--pd-2xs` to Ionic light (0.25rem) and Corinthian light (0.125rem).

5. ~~**French-named palette**~~ — ✅ Renamed to `--arch-blue-*`, `--arch-gray-*`, `--arch-indigo-*`, `--arch-green-*`, `--arch-red-*`.

6. ~~**"danger" vs "error" terminology**~~ — ✅ Standardized on `danger`. All `--sem-*-error` variables renamed to `--sem-*-danger`; Tailwind mappings and component variants updated accordingly.

7. ~~**Accent color for Ionic**~~ — ✅ Addressed (no further action needed).

### Figma-only (no NPM action needed)

8. **Add shadows to Figma** — `--shadow-light/regular/dark` exist in NPM but are not variabilized in Figma. Figma-side task.

9. **Add dark mode to ✦ Orders** — NPM has `.dark .ionic {}` etc. but Figma ✦ Orders only has 3 theme modes without Light/Dark split. Figma-side task.

10. **Consider variabilizing typography in Figma** — NPM has `.arch-h0..h6`, `.arch-body-0..3`; Figma uses text styles only. Figma-side task.

### No longer applicable

11. ~~**`brand/*` colors missing in NPM**~~ — Brand variables were removed from Figma ✦ Orders (89 vars now, down from 93). `--brand-primary/light/dark/accent` still exist in NPM theme files but are no longer expected from Figma.

---

## 8. Component Usage Pattern Analysis

> Patterns extracted from `src/components/` (library source) and `website/src/react/components/` (website).

### Architecture & Tooling

All library components follow this pattern:
- **`cva` (class-variance-authority)** for variant-driven class generation
- **`twMerge` (tailwind-merge)** for className composition without conflicts
- **`@radix-ui/react-slot`** for polymorphic `asChild` pattern
- **Exported variants** for consumer reuse (e.g., `export { alertVariants }`)

### Color Token Usage (Library Components)

| Pattern | Usage | Example |
|---------|-------|---------|
| `bg-arch-surface-*` | Background fills | `bg-arch-surface-primary`, `bg-arch-surface-accent`, `bg-arch-surface-secondary` |
| `text-arch-*` | Text colors | `text-arch-primary`, `text-arch-secondary`, `text-arch-accent-dark` |
| `text-arch-light` | Light text on accent bg | Button primary variant |
| `border-arch-contour-*` | Border colors | `border-arch-contour-accent`, `border-arch-contour-primary` |
| `border-arch-sem-brd-*` | Semantic borders | `border-arch-sem-brd-success`, `-info`, `-warning`, `-danger` |
| `bg-arch-sem-srfc-*` | Semantic backgrounds | `bg-arch-sem-srfc-success`, `-info`, `-warning`, `-danger` |
| `text-arch-sem-chars-*` | Semantic text | `text-arch-sem-chars-success`, `-info`, `-warning`, `-danger` |
| `text-arch-sem-i-*` | Semantic icon colors | `text-arch-sem-i-success`, `-info`, `-warning`, `-danger` |

### Spacing & Padding Token Usage (Library Components)

| Pattern | Usage | Example |
|---------|-------|---------|
| `p-arch-sm` | Component internal padding | Alert base |
| `px-arch-sm`, `py-arch-2xs` | Size-variant padding | Button `sm` |
| `px-arch-md`, `py-arch-xs` | Size-variant padding | Button `md`, `lg` |
| `pl-arch-sm`, `pr-arch-sm` | Directional padding | Callout |
| `gap-arch-md` | Flex gap | Alert base |
| `gap-[var(--sp-*)]` | Raw variable gap | Heading container (`gap-[var(--sp-3xs)]`, `gap-[var(--sp-md)]`) |
| `mt-arch-sm` | Margin top | Heading description |

### Radii Token Usage (Library Components)

| Pattern | Usage | Example |
|---------|-------|---------|
| `rounded-arch-rd-sm` | Standard corner radius | Button, Alert, Switch, Callout (selective corners) |
| `rounded-tr-arch-rd-sm` | Individual corner | Alert top-right, Callout top-right + bottom-right |

### Stroke/Border Width Usage (Library Components)

| Pattern | Usage | Example |
|---------|-------|---------|
| `border-[length:var(--stroke-regular)]` | Standard border width | Button secondary/tertiary/ghost, Alert base |
| `border-[length:var(--stroke-extra-bold)]` | Thick accent border | Callout left border |
| `border-2` | Hardcoded (Tailwind default) | Switch |

### Typography Usage (Library Components)

| Pattern | Usage | Example |
|---------|-------|---------|
| `arch-body-1` | Primary body text class | Button `md` |
| `arch-body-2` | Small body text class | Button `sm` |
| Tailwind `text-sm/base/lg` | Size variants | Alert, Callout, Heading |
| `font-semibold`, `font-bold` | Weight via Tailwind | Heading |
| `font-medium` | Medium weight | Callout title |

### Shadow Usage (Library Components)

| Pattern | Usage |
|---------|-------|
| `shadow-arch-dark` | Alert base |
| `shadow-sm` | Alert, Callout |
| `shadow-lg` | Switch thumb |

### Website-Specific Patterns (vs Library)

The website (`website/src/react/components/`) uses a **different token namespace**:

| Library Pattern | Website Pattern |
|-----------------|-----------------|
| `bg-arch-surface-primary` | `bg-sys-surface-primary` |
| `text-arch-primary` | `text-sys-primary` |
| `border-arch-contour-*` | `border-sys-brd-*` |
| `px-arch-sm` | `px-sys-pd-sm` |
| `gap-arch-md` | `gap-sys-sp-sm` |

This happens because the website defines a separate `@theme inline` block with `--color-sys-*` mappings in `website/index.css` that is not part of the published library.

### Established Conventions (Source of Truth for Future Components)

Based on the patterns above, new components should follow these rules:

1. **Always use `arch-` prefixed Tailwind tokens** (not `sys-`, not raw `var(--*)`)
2. **Use `cva` for all variant logic** with exported variant objects
3. **Use `twMerge` for className merging** — never manual concatenation
4. **Support `asChild` via `@radix-ui/react-slot`** for polymorphism
5. **Color assignments:**
   - Default surface: `bg-arch-surface-primary`
   - Default text: `text-arch-primary`
   - Default border: `border-arch-contour-accent` or `border-arch-contour-primary`
   - Semantic variants: `*-arch-sem-{brd|srfc|chars|i}-{success|info|warning|danger}`
6. **Spacing:**
   - Padding: `p-arch-sm` (base), scale with `px-arch-md py-arch-xs` for larger sizes
   - Gap: `gap-arch-md` (preferred) or `gap-[var(--sp-*)]` for fine control
7. **Radii:** `rounded-arch-rd-sm` as default; use selective corners with `rounded-tr-arch-rd-sm` etc.
8. **Borders:** Always use `border-[length:var(--stroke-regular)]` or `border-[length:var(--stroke-extra-bold)]` — never hardcoded px
9. **Typography:** Combine `.arch-body-*` classes with Tailwind `text-sm/base/lg` for size variants
10. **Shadows:** Prefer `shadow-arch-dark` / `shadow-arch-regular` / `shadow-arch-light`
