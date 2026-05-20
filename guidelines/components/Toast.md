# Toast

Deep dive for **`Toast`**, **`ToastProvider`**, and **`ToastViewport`**. Global themes, tokens, and setup live in [Guidelines.md](../Guidelines.md) and the linked foundation docs.

## When to use

Use toasts for **brief, transient feedback**—save confirmations, background task completion, or lightweight errors that should not occupy permanent layout space. Mount **`ToastProvider`** once near the app root and **`ToastViewport`** where notifications should appear (typically bottom-right).

Prefer **`Alert`** for persistent in-page status and **`Callout`** for inline guidance.

## Semantic purpose

Built on Radix Toast primitives: **`ToastProvider`** manages the queue; **`ToastViewport`** is the live region container; each **`Toast`** exposes **`title`**, **`description`**, optional **`actionButton`**, and close affordances. Set meaningful **`ariaLabel`** on actions passed via **`actionButton`**.

## Correct vs incorrect usage

**Do**

- Wrap the app in **`ThemeProvider`** so shadow and surface tokens resolve ([setup.md](../setup.md)).
- Control visibility with **`open`** / **`onOpenChange`** for predictable demos and tests.
- Use **`variant="minimal"`** when a compact dismissible chip is enough.

**Don’t**

- Fire dozens of simultaneous toasts—batch or replace prior messages.
- Put critical-only information solely in a toast with no page-level fallback.
- Forget **`ToastViewport`**—toasts will not render without it.

## API

### `Toast`

Extends Radix toast root props plus **`ToastVariantProps`**.

| Prop | Type | Default | Behavior |
|------|------|---------|----------|
| **`variant`** | `"default"` \| `"minimal"` | `"default"` | Layout density; minimal adds close control. |
| **`size`** | `"sm"` \| `"md"` \| `"lg"` | `"md"` | Typography scale. |
| **`title`** | `string` | — | Primary line when not using **`children`**. |
| **`description`** | `string` | — | Secondary line. |
| **`children`** | `ReactNode` | — | Replaces title/description slot content. |
| **`icon`** | `ReactNode` | — | Leading icon. |
| **`actionButton`** | `ReactNode` | — | Radix **`Action`** child (e.g. ArchUI **`Button`**). |
| **`ariaLabel`** | `string` | `"Action Label"` | Accessible name for the action. |
| **`hasDivider`** | `boolean` | `true` when minimal | Vertical rule between icon and body. |
| **`open`** | `boolean` | `false` | Controlled open state. |
| **`onOpenChange`** | `(open: boolean) => void` | — | Open state callback. |
| **`className`** | `string` | — | Merged classes on the root. |

### `ToastProvider` / `ToastViewport`

Re-export Radix **`Provider`** and **`Viewport`** with ArchUI viewport positioning classes. Place **`ToastViewport`** as a sibling under **`ToastProvider`** wrapping your app tree.
