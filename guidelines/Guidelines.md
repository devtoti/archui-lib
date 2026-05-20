# ArchUI Design System Guidelines

## Product character

ArchUI is a **React 19+ and Tailwind CSS 4** component library inspired by classical architecture. It is built around a tokenized, multi-theme design system that draws from three Greek architectural orders — **Doric**, **Ionic**, and **Corinthian** — each offering a complete visual identity that can be applied to any project by changing a single class name.

- **Density**: Theme-dependent — compact in Doric, spacious in Ionic, balanced in Corinthian
- **Surface strategy**: Token-driven — background, foreground, and accent surfaces adapt automatically per theme and mode (light/dark)
- **Color palette**: Neutral base tinted per theme (slate, gray, olive) with a single customizable accent color per theme (orange, blue, jade)
- **Corner style**: Theme-dependent — sharp (Doric), subtly rounded (Corinthian), generously rounded (Ionic)
- **Elevation**: Theme-dependent shadows — minimal in Doric, soft and layered in Corinthian, prominent in Ionic
- **Typography**: Each theme ships its own font family (Barlow, Noto Sans, Lato) with a shared type scale

## Core principles

1. **Granularity** — An extensive tokenized system gives full control over every visual property. Colors, radii, padding, spacing, strokes, and shadows all resolve through theme-scoped CSS variables, bridged to Tailwind utilities.
2. **Flexibility** — Three modular themes share the same variable names and component API. Switch themes via `ThemeProvider` and watch the entire UI adapt harmoniously. Customize accent colors by overriding three seed variables.
3. **Elegance** — Components are crafted with architectural rigor: proportionate spacing, deliberate whitespace, and visual hierarchy inspired by classical design treatises.

## Available themes

| Theme | Accent | Character | Best for |
|---|---|---|---|
| **Doric** | Orange | Sharp edges, heavy strokes, compact padding, sturdy | Professional, bold, modern, retro, sport brands |
| **Ionic** | Blue | Rounded corners, generous padding, soft shadows, airy | Calm, innovative, warm, playful, beauty brands |
| **Corinthian** | Jade/green | Subtle roundness, refined strokes, elegant proportions | Luxury, sophisticated, premium, artistic brands |

## Available components

All components are imported from `@devtoti/archui-lib`. Always use these over raw HTML elements.

| Component | Purpose | Guidelines |
|---|---|---|
| `Button` | Primary, secondary, tertiary, ghost actions | [Button.md](components/Button.md) |
| `Alert` | Status notifications (success, info, warning, danger) | [Alert.md](components/Alert.md) |
| `Avatar` | Profile image or initials with optional presence bead | [Avatar.md](components/Avatar.md) |
| `Callout` | Inline callouts with left accent border | [Callout.md](components/Callout.md) |
| `Toast` | Brief notifications with optional actions | [Toast.md](components/Toast.md) |
| `Heading` | Semantic headings (h1–h6) with descriptions | [Heading.md](components/Heading.md) |
| `Input` | Labeled fields; `Input.Text` / `Input.Password` | [Input.md](components/Input.md) |
| `LinkItem` | Styled anchor links with icon support | [LinkItem.md](components/LinkItem.md) |
| `Switch` | Toggle controls | [Switch.md](components/Switch.md) |
| `RadioGroup` / `RadioItem` | Mutually exclusive choice lists | [Radio.md](components/Radio.md) |
| `ThemeProvider` | Theme wrapper (required at app root) | [ThemeProvider.md](components/ThemeProvider.md) |

## Reading order

**MUST READ before writing any code:**
1. `Guidelines.md` (this file) — product character, principles, available themes and components
2. `setup.md` — installation, providers, CSS imports, build configuration
3. `colors.md` — color token system, semantic colors, accent customization, dark mode
4. `radii-spacing.md` — radii, padding, spacing, stroke tokens per theme
5. `typography.md` — font families, type scale, font weights, a11y minimum sizes
6. Component-focused notes — see `guidelines/components/` when you need usage, semantics, and API detail beyond Storybook:
   - [Button.md](components/Button.md), [Alert.md](components/Alert.md), [Avatar.md](components/Avatar.md), [Callout.md](components/Callout.md), [Toast.md](components/Toast.md), [Heading.md](components/Heading.md), [Input.md](components/Input.md), [LinkItem.md](components/LinkItem.md), [Switch.md](components/Switch.md), [Radio.md](components/Radio.md), [ThemeProvider.md](components/ThemeProvider.md)

## Workflows

### Before using a component
1. Read `setup.md` to ensure `ThemeProvider` and CSS imports are configured
2. Import the component from `@devtoti/archui-lib`
3. Use the component's props — do not recreate its behavior with raw HTML

### When styling custom elements
1. Read `colors.md` for the correct color token (surface, text, border, icon, semantic)
2. Read `radii-spacing.md` for the correct radius, padding, and spacing tokens
3. Read `typography.md` for font sizing and weight guidelines
4. Use `arch-*` Tailwind utility classes — never hardcode hex values, pixel sizes, or Tailwind defaults

### When switching themes
1. Change the `theme` prop on `ThemeProvider` (`"doric"`, `"ionic"`, `"corinthian"`)
2. All tokens, colors, radii, padding, strokes, shadows, and fonts update automatically
3. No additional code changes are needed

### When customizing brand colors
1. Override the three accent seed variables in the theme's CSS file:
   - `--{theme}-accent-primary`
   - `--{theme}-accent-dark`
   - `--{theme}-accent-light`
2. All accent surfaces, text, borders, and icons propagate automatically

## Rules

IMPORTANT: Every app MUST wrap its root in `ThemeProvider`. No exceptions.

IMPORTANT: Always use `arch-*` Tailwind classes for colors, spacing, radii, and borders. Never hardcode values — they bypass the theme system.

IMPORTANT: The minimum allowed font size is **11px** for accessibility compliance.

- Always use ArchUI components over raw HTML elements (`Button` not `<button>`, `Heading` not `<h1>`)
- All spacing must use design system tokens (`p-arch-md`, `gap-arch-sp-lg`) — never hardcode pixel values
- Semantic color tokens (`arch-{status}-bg`, `arch-{status}-txt`, etc.) are reserved for status communication only (success, info, warning, danger)
- Text on accent backgrounds must use `text-arch-txt-light` for contrast across all themes
- Font families are inherited from the theme — never set `font-family` directly on components
- Do not use `--sys-*` tokens — they are internal to ArchUI's Storybook and website
- Do not use raw CSS variables (`--bg-primary`, `--arch-blue-*`) in component code — only use the Tailwind bridge utilities
