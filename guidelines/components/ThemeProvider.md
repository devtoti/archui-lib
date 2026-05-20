# ThemeProvider

Deep dive for **`ThemeProvider`** and theme context. Global rules live in [Guidelines.md](../Guidelines.md); installation and CSS imports are in [setup.md](../setup.md).

## When to use

**Required** at the application root (or Storybook preview root) so ArchUI components resolve **Doric**, **Ionic**, or **Corinthian** tokens and light/dark **`themeType`**. Use nested providers with an explicit **`className`** when a subtree must render under a different theme in isolation (see **`AllThemes`** Storybook patterns).

Use **`ThemeSwitcher`** in Storybook only—not a published consumer API for production apps unless you intentionally ship a theme picker.

## Semantic purpose

Applies **`theme-context {theme} {themeType}`** classes on a wrapper element so CSS variables from [colors.md](../colors.md), [radii-spacing.md](../radii-spacing.md), and [typography.md](../typography.md) cascade to descendants. **`useTheme()`** exposes **`theme`**, **`setTheme`**, **`themeType`**, and **`setThemeType`** to descendants.

Optional **`hasToggler`** renders built-in theme/mode controls for demos.

## Correct vs incorrect usage

**Do**

- Import **`@devtoti/archui-lib/styles`** in app CSS before rendering ([setup.md](../setup.md)).
- Set **`theme`** to `"doric"`, `"ionic"`, or `"corinthian"` to match brand order.
- Pass controlled **`theme`** / **`setTheme`** when lifting state to app shell or URL params.

**Don’t**

- Mount ArchUI components outside **`ThemeProvider`**—tokens will not resolve.
- Rely on **`--sys-*`** variables—they are internal to Storybook/website, not the package contract.
- Nest conflicting theme classes on the same node without isolation (`className` + `isolation` on nested providers).

## API

| Prop | Type | Default | Behavior |
|------|------|---------|----------|
| **`children`** | `ReactNode` | *(required)* | Subtree receiving theme variables. |
| **`theme`** | `"doric"` \| `"ionic"` \| `"corinthian"` | `"doric"` | Active architectural order. |
| **`setTheme`** | `(theme: Theme) => void` | — | When provided, **`theme`** is controlled. |
| **`themeType`** | `"light"` \| `"dark"` | `"light"` | Color mode. |
| **`setThemeType`** | `(type: ThemeType) => void` | — | Controlled mode setter. |
| **`hasToggler`** | `boolean` | `false` | Show built-in theme/mode buttons. |
| **`className`** | `string` | — | Extra classes; omit for `contents` layout wrapper. |

### `useTheme()` hook

Import from `@devtoti/archui-lib`. Returns **`ThemeContextType`** or throws if used outside **`ThemeProvider`**.
