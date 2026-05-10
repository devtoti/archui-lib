# Project Setup

## Package overview

ArchUI (`@devtoti/archui-lib`) is a React + Tailwind CSS 4 component library with a multi-theme design system. It ships pre-compiled CSS and requires no Tailwind configuration on the consumer side beyond importing the stylesheet.

Always use components and tokens from `@devtoti/archui-lib` instead of the default components included with Figma Make files.

## Required dependencies

ArchUI requires **React 19+** and **Tailwind CSS 4+**. Verify these in your `package.json` before installing:

```json
"dependencies": {
  "react": "^19.1.1",
  "react-dom": "^19.1.1",
  "tailwindcss": "^4.1.14"
}
```

## Installation

```bash
npm i @devtoti/archui-lib
```

## CSS imports

Import ArchUI styles in your main CSS file, after the Tailwind import. This single stylesheet includes all tokens, theme variables, and component styles.

```css
@import "tailwindcss";
@import "@devtoti/archui-lib/styles";
```

Do NOT add `@source` rules for `@devtoti/archui-lib` in your Tailwind config. The package ships pre-compiled CSS with all required utility classes.

## Theme provider

Wrap your app root with `ThemeProvider`. This is required for theming, dark mode, and token inheritance.

```tsx
import { ThemeProvider } from "@devtoti/archui-lib";

function App() {
  return (
    <ThemeProvider theme="ionic" themeType="light">
      {/* app content */}
    </ThemeProvider>
  );
}
```

### Available themes

| Theme | Class | Character |
|---|---|---|
| `doric` | `.doric` | Sharp edges, heavy strokes, compact padding, zero-radius corners |
| `ionic` | `.ionic` | Rounded corners, generous padding, soft shadows, airy feel |
| `corinthian` | `.corinthian` | Subtle roundness, refined strokes, elegant proportions |

### Theme type (light/dark)

Pass `themeType="dark"` for dark mode. The provider adds a `.dark` class to its wrapper, and all theme tokens automatically switch to their dark variants.

```tsx
<ThemeProvider theme="ionic" themeType="dark">
  {/* dark mode content */}
</ThemeProvider>
```

### Theme hook

Use `useTheme` in any child component to read or toggle the active theme:

```tsx
import { useTheme } from "@devtoti/archui-lib";

function ThemeToggle() {
  const { theme, setTheme, themeType, setThemeType } = useTheme();
  return (
    <button onClick={() => setThemeType(themeType === "light" ? "dark" : "light")}>
      {themeType}
    </button>
  );
}
```

`ThemeProvider` must be an ancestor of any component calling `useTheme()`.

## Using components

Import components and their TypeScript types directly from the package:

```tsx
import { Button, Alert, Heading } from "@devtoti/archui-lib";
import type { ButtonProps } from "@devtoti/archui-lib";

function Page() {
  return (
    <div className="p-arch-xl">
      <Heading variant="h1">Welcome</Heading>
      <Button variant="primary" size="md">Get Started</Button>
      <Alert variant="info" icon={<InfoIcon />}>This is an info alert.</Alert>
    </div>
  );
}
```

### Available components

| Component | Purpose |
|---|---|
| `Button` | Primary, secondary, tertiary, ghost actions |
| `Alert` | Status notifications (success, info, warning, danger) |
| `Callout` | Inline callouts with left accent border |
| `Toast` | Brief notifications with optional actions |
| `Heading` | Semantic headings (h1–h6) with descriptions |
| `LinkItem` | Styled anchor links with icon support |
| `Switch` | Toggle controls |
| `ThemeProvider` | Theme wrapper (required at app root) |

### Exported utilities

Each component also exports its CVA variant function (e.g. `buttonVariants`, `alertVariants`) for consumers who need to compose custom components using the same variant logic.

## Reading order for guidelines

**Read before writing any code:**
1. This file (`setup.md`) — installation, providers, imports
2. `colors.md` — color token system, semantic colors, decision trees
3. `radii-spacing.md` — radii, padding, spacing, stroke tokens per theme
4. `typography.md` — font families, type scale, font weights

**Read on-demand:**
- Component-specific guidelines (when available) — read before using that component

## Build configuration

ArchUI works with any Vite-based React project. A typical `vite.config.ts`:

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

Consumers do NOT need Tailwind configured beyond the Vite plugin — CSS ships pre-compiled.

## Common pitfalls

### Missing ThemeProvider

Components will render without themed styles if `ThemeProvider` is not an ancestor. Always wrap at the app root.

```tsx
// WRONG — no ThemeProvider
function App() {
  return <Button variant="primary">Click</Button>;
}

// CORRECT
function App() {
  return (
    <ThemeProvider theme="ionic" themeType="light">
      <Button variant="primary">Click</Button>
    </ThemeProvider>
  );
}
```

### Conflicting default styles

Delete or clear default styles that ship with project scaffolds (Create React App, Vite templates, etc.). Files like `App.css`, `index.css`, or `styles.css` often contain resets or base styles that conflict with ArchUI tokens.

### Hardcoding colors or spacing

Never use raw hex values, Tailwind defaults (`bg-blue-500`, `p-4`, `rounded-lg`), or inline styles for properties covered by ArchUI tokens. These bypass the theme system and will not adapt when the theme changes.

```tsx
// WRONG — hardcoded values
<div className="bg-blue-500 p-4 rounded-lg text-white">Card</div>

// CORRECT — theme-aware tokens
<div className="bg-arch-surface-accent p-arch-lg rounded-arch-rd-sm text-arch-txt-light">Card</div>
```

### Using `--sys-*` tokens

System tokens (`--sys-bg-*`, `--sys-txt-*`, etc.) are internal to ArchUI's Storybook and website. Do not reference them in application code.

### Setting font-family on components

Font families are inherited from the theme class on `ThemeProvider`. Do not set `font-family` directly on elements — it will override the theme's typography.

## Rules

- Always import `@devtoti/archui-lib/styles` in your CSS — this is the single stylesheet for all tokens and components.
- `ThemeProvider` is required at the app root for theming to work.
- Use ArchUI components over raw HTML elements (`Button` not `<button>`, `Heading` not `<h1>`).
- Use `arch-*` Tailwind utility classes for colors, spacing, radii, and borders — never hardcode values.
- CSS import order does not matter — there is only one stylesheet.
- Do not add `@source` rules for `@devtoti/archui-lib` in consumer Tailwind configs.
