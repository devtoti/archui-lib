# LinkItem

Deep dive for the **`LinkItem`** navigation control. Global themes, tokens, and setup live in [Guidelines.md](../Guidelines.md) and the linked foundation docs.

## When to use

Use **`LinkItem`** for **navigation**—internal routes, external URLs, downloads, and footer links—where underline, hover, and visited treatments should match ArchUI. Pair with **`Button`** when the action is a command (submit) rather than navigation.

Supports optional **`leftIcon`** / **`rightIcon`** from **`react-icons`** for wayfinding affordances.

## Semantic purpose

Renders an **`<a>`** (or Slot child) with token-driven hover and focus styles. When **`blank`** opens a new tab, set **`noopenreferrer`** (default recommendation) for `rel="noopener noreferrer"`. Use **`ariaLabel`** when visible text is insufficient.

## Correct vs incorrect usage

**Do**

- Wrap the app in **`ThemeProvider`** ([setup.md](../setup.md)).
- Use **`variant`** to reflect state (`active` for current nav item, `visited` after navigation history).
- Pass **`prefetch`** when integrating with frameworks that honor `data-prefetch`.

**Don’t**

- Use **`LinkItem`** for form submit—use **`Button`** with `type="submit"`.
- Nest interactive elements inside the anchor.
- Hardcode link colors outside semantic tokens except where **`visited`** intentionally uses violet utilities.

## API

Props extend **`LinkItemVariantProps`** and anchor attributes.

| Prop | Type | Default | Behavior |
|------|------|---------|----------|
| **`variant`** | `"default"` \| `"hover"` \| `"active"` \| `"minimal"` \| `"visited"` | `"default"` | Visual state styling. |
| **`label`** | `ReactNode` | — | Text when **`children`** omitted. |
| **`children`** | `ReactNode` | — | Preferred link text. |
| **`leftIcon`** | `ReactNode` | — | Leading icon. |
| **`rightIcon`** | `ReactNode` | — | Trailing icon. |
| **`blank`** | `boolean` | — | Sets `target="_blank"`. |
| **`noopenreferrer`** | `boolean` | — | Adds `noopener noreferrer` to `rel`. |
| **`download`** | `boolean` \| `string` | — | Download attribute. |
| **`prefetch`** | `boolean` | — | Sets `data-prefetch` for framework hints. |
| **`ariaLabel`** | `string` | — | Accessible name override. |
| **`asChild`** | `boolean` | `false` | Slot composition (e.g. framework `Link`). |
