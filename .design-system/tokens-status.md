# Token Status — ArchUI Design System

> Final audit performed May 9, 2026.
> Figma source: [ArchUI Design System v1.1.0](https://www.figma.com/design/kw2Up6JfZ76d69slxJJmFJ/ArchUI-Design-System-v1.1.0)
> NPM package: `@devtoti/archui-lib`

---

## Overview

| Source | Collections | Variables |
|--------|-------------|-----------|
| Figma | 3 | 983 total |
| — ✦ Orders | 3 modes (Ionic, Doric, Corinthian) | 89 |
| — 🔹 System | 2 modes (Light, Dark) | 49 |
| — ✦ Colors (Radix) | 2 modes (Light, Dark) | 845 |
| NPM | 6 CSS layers | ~160 unique variables per theme |

**Alignment score: 100% of Figma ✦ Orders + 🔹 System variables have a 1:1 NPM counterpart.**

---

## Naming Convention Map

| Figma prefix | NPM variable | Tailwind utility |
|--------------|--------------|------------------|
| `bg/*` | `--bg-*` | `bg-arch-surface-*` |
| `fg/*` | `--fg-*` | `bg-arch-float-*`, `bg-arch-raised-*` |
| `txt/*` | `--txt-*` | `text-arch-*` |
| `sem/bg/*` | `--sem-bg-*` | `bg-arch-sem-srfc-*` |
| `sem/txt/*` | `--sem-txt-*` | `text-arch-sem-chars-*` |
| `sem/brd/*` | `--sem-brd-*` | `border-arch-sem-brd-*` |
| `sem/icons/*` | `--sem-icons-*` | `text-arch-sem-i-*` |
| `brd/*` | `--brd-*` | `border-arch-contour-*` |
| `icons/*` | `--icon-*` | `text-arch-icon-*` |
| `radii/*` | `--rd-*` | `rounded-arch-rd-*` |
| `pd/*` | `--pd-*` | `p-arch-*` (spacing scale) |
| `stroke/*` | `--stroke-*` | `border-arch-lw-*` |
| `sp/*` | `--sp-*` | `gap-*` / direct `var()` |
| `bg/#*` (System) | `--sys-bg-*` | — |
| `txt/#*` (System) | `--sys-txt-*` | — |
| `brd/#*` (System) | `--sys-brd-*` | — |
| `i/#*` (System) | `--sys-icon-*` | — |

---

## ✦ Orders — Variable-by-Variable Status (89 vars)

### Colors (63 variables) — All Aligned

| Category | Figma vars | NPM vars | Status |
|----------|-----------|----------|--------|
| Background (bg) | 11 | 11 | Aligned |
| Foreground (fg) | 7 | 7 | Aligned |
| Text (txt) | 7 | 7 | Aligned |
| Semantic bg (sem/bg) | 4 | 4 | Aligned |
| Semantic icons (sem/icons) | 4 | 4 | Aligned |
| Semantic text (sem/txt) | 4 | 4 | Aligned |
| Semantic border (sem/brd) | 4 | 4 | Aligned |
| Borders (brd) | 8 | 8 | Aligned |
| Icons (icons) | 6 | 6 | Aligned |

### Non-Color (25 variables) — All Aligned

| Category | Figma vars | NPM vars | Status |
|----------|-----------|----------|--------|
| Radii (radii) | 6 | 6 | Aligned |
| Padding (pd) | 8 | 8 | Aligned |
| Stroke (stroke) | 5 | 5 | Aligned |
| Spacing (sp) | 14 | 14 | Aligned |

### Metadata (1 variable)

| Figma var | Purpose | NPM equivalent |
|-----------|---------|----------------|
| `currTheme` | Mode label string | N/A (not needed as CSS token) |

---

## 🔹 System — Variable-by-Variable Status (49 vars)

| Category | Figma vars | NPM vars | Status |
|----------|-----------|----------|--------|
| Background (bg/#) | 5 | 5 | Aligned |
| Foreground (fg/#) | 4 | 4 | Aligned |
| Text (txt/#) | 7 | 7 + 4 extras | Aligned (NPM has `-2`/`-3` duplicates) |
| Borders (brd/#) | 7 | 7 | Aligned |
| Icons (i/#) | 7 | 7 | Aligned |
| Padding (pd/#) | 7 | 7 | Aligned |
| Radii (rd/#) | 6 | 6 | Aligned |
| Stroke (stroke/#) | 6 | 6 | Aligned |

---

## Resolved Issues (Changelog)

| # | Issue | Resolution |
|---|-------|------------|
| 1 | System text 1-step offset | Fixed. `archui-system-tokens.css` now references correct Arch-Blue/Gray steps matching Figma 🔹 System. |
| 2 | Figma variable names not matching NPM | False positive. Figma shortened prefixes (`background/` → `bg/`, `foreground/` → `fg/`, etc.) — all map 1:1. |
| 3 | Missing `sp/7xl` and `sp/8xl` | Added `--sp-7xl: 5rem` and `--sp-8xl: 7rem` to all themes. |
| 4 | Missing `pd-2xs` in Ionic/Corinthian | Added `--pd-2xs` to Ionic (0.25rem) and Corinthian (0.125rem). |
| 5 | French-named palettes | Renamed: `--bleu-*` → `--arch-blue-*`, `--gris-*` → `--arch-gray-*`, `--indigo-*` → `--arch-indigo-*`, `--vert-*` → `--arch-green-*`, `--rouge-*` → `--arch-red-*`. |
| 6 | "error" vs "danger" terminology | Standardized on `danger`. All `--sem-*-error` → `--sem-*-danger`; component variants renamed from `"error"` to `"danger"`. |
| 7 | Ionic accent palette (Indigo vs Blue) | Addressed per user decision. Figma and NPM both use Radix Blue for Ionic accents. |

---

## NPM-Only Tokens (not variabilized in Figma)

| Token(s) | Reason |
|----------|--------|
| `--sys-txt-gray-{light\|dark}-{2\|3}` | Convenience duplicates for component flexibility |
| `--sys-sp-*` (system spacing) | System-level mirror of theme spacing |
| `--shadow-light`, `--shadow-regular`, `--shadow-dark` | Shadows not variabilized in Figma |
| `--brand-primary`, `--brand-light`, `--brand-dark`, `--brand-accent` | Legacy; removed from Figma ✦ Orders |
| `--arch-blue-*`, `--arch-gray-*`, etc. (custom palette) | Exist in Figma's ✦ Colors (Radix) collection (845 vars) but excluded from this audit |

---

## Figma-Only Items (no NPM action needed)

| Item | Notes |
|------|-------|
| Dark mode in ✦ Orders | Figma only has 3 light-mode themes; NPM uses `.dark .ionic {}` overrides separately |
| Shadow variables | Exist in NPM but not yet added to Figma as variables |
| Typography variables | NPM uses `.arch-h0..h6`, `.arch-body-0..3` classes; Figma uses text styles only |

---

## Architecture Summary

```
┌─────────────────────────────────────────────────────────┐
│  Layer 1: Radix Color Imports (@radix-ui/colors/*.css)  │
├─────────────────────────────────────────────────────────┤
│  Layer 2: Custom Palette (archui-color-palette.css)     │
│  --arch-blue-*, --arch-gray-*, --arch-indigo-*,         │
│  --arch-green-*, --arch-red-*, --arch-yellow-*          │
├─────────────────────────────────────────────────────────┤
│  Layer 3: System Tokens (archui-system-tokens.css)      │
│  --sys-bg-*, --sys-txt-*, --sys-brd-*, --sys-icon-*     │
│  --sys-pd-*, --sys-rd-*, --sys-stroke-*, --sys-sp-*     │
├─────────────────────────────────────────────────────────┤
│  Layer 4: Theme Overrides (ionic/doric/corinthian.css)  │
│  --bg-*, --fg-*, --txt-*, --brd-*, --icon-*, --rd-*,    │
│  --pd-*, --sp-*, --stroke-*, --sem-*, --shadow-*        │
├─────────────────────────────────────────────────────────┤
│  Layer 5: Tailwind @theme (tokens.css)                  │
│  --color-arch-*, --spacing-arch-*, --radius-arch-*,     │
│  --border-arch-*, --shadow-arch-*                       │
├─────────────────────────────────────────────────────────┤
│  Layer 6: Utility Classes (components)                  │
│  bg-arch-*, text-arch-*, border-arch-*, rounded-arch-*, │
│  p-arch-*, shadow-arch-*                                │
└─────────────────────────────────────────────────────────┘
```

---

## Semantic Variant Tokens

All semantic variants now use consistent naming:

| Intent | Figma | CSS Variable | Tailwind Utility |
|--------|-------|-------------|------------------|
| Success | `sem/*/success` | `--sem-{bg\|icons\|txt\|brd}-success` | `*-arch-sem-{srfc\|i\|chars\|brd}-success` |
| Info | `sem/*/info` | `--sem-{bg\|icons\|txt\|brd}-info` | `*-arch-sem-{srfc\|i\|chars\|brd}-info` |
| Warning | `sem/*/warning` | `--sem-{bg\|icons\|txt\|brd}-warning` | `*-arch-sem-{srfc\|i\|chars\|brd}-warning` |
| Danger | `sem/*/danger` | `--sem-{bg\|icons\|txt\|brd}-danger` | `*-arch-sem-{srfc\|i\|chars\|brd}-danger` |

Component variant values: `"success" | "info" | "warning" | "danger"`

---

## Final Status

| Metric | Value |
|--------|-------|
| Figma custom variables (excl. Radix) | 138 |
| NPM counterpart coverage | **100%** |
| Naming mismatches | **0** |
| Value mismatches | **0** |
| Unresolved discrepancies | **0** |
| Pending Figma-side tasks | 3 (shadows, dark mode in Orders, typography vars) |
