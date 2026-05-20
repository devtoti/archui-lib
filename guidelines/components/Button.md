# Button

Deep dive for the **`Button`** action control. Global themes, tokens, and setup live in [Guidelines.md](../Guidelines.md) and the linked foundation docs.

## When to use

Use **`Button`** for primary actions—submit, confirm, save, navigate to the next step—and secondary or tertiary actions that should read as clickable affordances. Pair with **`Heading`** for page titles, **`Input`** / **`RadioGroup`** in forms, and **`LinkItem`** when the action is navigation rather than a command.

Use **`variant="ghost"`** for low-emphasis inline actions; **`primary`** for the main call to action on a surface.

## Semantic purpose

Renders a native **`<button>`** (or **`Slot.Root`** when **`asChild`** composes styles onto a child link). Keyboard activation and focus rings follow platform expectations. Prefer visible **`label`** or **`children`** text so the control has an accessible name—do not rely on icon-only buttons without **`aria-label`**.

## Correct vs incorrect usage

**Do**

- Wrap the app in **`ThemeProvider`** ([setup.md](../setup.md)) before relying on ArchUI tokens.
- Use **`asChild`** to style a router link or anchor that should look like a button while keeping correct semantics.
- Match **`size`** to surrounding density (`sm` in compact toolbars, `md` default, `lg` for hero CTAs).

**Don’t**

- Stack multiple **`primary`** buttons in one view without hierarchy—reserve one dominant action.
- Use **`Button`** for passive navigation when **`LinkItem`** or plain anchors are clearer.
- Hardcode hex fills on the control instead of **`arch-*`** token utilities.

## API

Props extend **`ButtonHTMLAttributes`** plus **`ButtonVariantProps`**.

| Prop | Type | Default | Behavior |
|------|------|---------|----------|
| **`variant`** | `"primary"` \| `"secondary"` \| `"tertiary"` \| `"ghost"` | `"primary"` | Visual emphasis and surface treatment. |
| **`size`** | `"sm"` \| `"md"` \| `"lg"` | `"md"` | Typography and padding scale. |
| **`label`** | `ReactNode` | `"Button"` | Text when **`children`** is omitted. |
| **`children`** | `ReactNode` | — | Preferred content slot. |
| **`asChild`** | `boolean` | `false` | Merge classes onto the single child via Radix Slot. |
| **`className`** | `string` | `""` | Merged after variant classes. |

Remaining native button props (`type`, `disabled`, `onClick`, etc.) pass through.
