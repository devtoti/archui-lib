# Switch

Deep dive for the **`Switch`** toggle. Global themes, tokens, and setup live in [Guidelines.md](../Guidelines.md) and the linked foundation docs.

## When to use

Use **`Switch`** for **binary settings** that take effect immediately—enable notifications, dark mode toggles, feature flags—where the metaphor is on/off rather than choosing among labeled alternatives. Prefer **`RadioGroup`** when users must compare multiple exclusive options side by side.

Pair with **`Heading`** or short labels; optional **`label`** prop wires text beside the control.

## Semantic purpose

Built on Radix **`Switch`**: exposes **`role="switch"`**, keyboard toggling, and **`checked`** state. Associate external copy with **`htmlFor`** / `id` when not using the built-in **`label`** string.

## Correct vs incorrect usage

**Do**

- Wrap the app in **`ThemeProvider`** ([setup.md](../setup.md)).
- Use **`variant="accent"`** when the track should use theme accent tokens.
- Control state with **`checked`** / **`onCheckedChange`** in forms that submit immediately.

**Don’t**

- Use a switch for mutually exclusive multi-option choices—use radios.
- Disable interaction only via **`variant="disabled"`** when Radix **`disabled`** on the root is clearer.
- Expect **`Switch`** to submit forms by itself—pair with explicit save UX when needed.

## API

Props extend Radix switch root props plus **`SwitchVariantProps`**.

| Prop | Type | Default | Behavior |
|------|------|---------|----------|
| **`variant`** | `"default"` \| `"accent"` \| `"disabled"` | `"default"` | Track styling; `disabled` locks appearance. |
| **`size`** | `"sm"` \| `"md"` \| `"lg"` | `"md"` | Track and thumb dimensions. |
| **`label`** | `string` | — | Optional visible label (layout beside control). |
| **`checked`** | `boolean` | — | Controlled on state. |
| **`onCheckedChange`** | `(checked: boolean) => void` | — | Change handler. |
| **`disabled`** | `boolean` | — | Native disabled behavior. |

Remaining Radix root props (`name`, `value`, `required`, etc.) pass through.
