# Input

Deep dive for the labeled **`Input`** field (helper row + optional password toggle). Global themes, tokens, and setup live in [Guidelines.md](../Guidelines.md) and the linked foundation docs.

## When to use

Use **`Input`** for short free-form values inside forms and filters—names, emails, search keywords, codes—where a visible **label** (and usually a short **helper**) should stay paired with the control. Prefer **`RadioGroup`** / **`RadioItem`** or **`Switch`** when the answer is a fixed small set or an on/off decision.

Compose with **`Button`** submit rows, **`Heading`** + body copy for section intros, **`Alert`** or inline validation text for errors, and **`ThemeProvider`** at the application shell.

## Semantic purpose

The root **`label`** references the native **`input`** via `htmlFor`/`id`, so clicking the title focuses the field. **`required`** surfaces a visual marker (and sets `required` / `aria-required` on the control). Helper copy sits in a separate paragraph with secondary typography—it does not replace an accessible name.

For **`Input.Password`**, a **`button`** toggles visibility without submitting the form (`type="button"`), with **`aria-pressed`** and an **`aria-label`** for assistive tech.

## Correct vs incorrect usage

**Do**

- Wrap surfaces in **`ThemeProvider`** ([setup.md](../setup.md)) before relying on ArchUI tokens.
- Keep placeholders supplementary—put the primary prompt in **`label`** (and **`description`** when constraints matter).
- Provide meaningful **`autoComplete`** for login/register flows when you override defaults.

**Don’t**

- Hide the label visually while leaving **`placeholder`** as the only cue—breaks WCAG labeling guidance.
- Nest interactive controls inside the **`label`** element beyond the required asterisk—we reserve the label row for text + marker only.
- Swap ArchUI **`Input`** for raw `<input>` styled with hardcoded hex spacing outside the token bridge.

## API

Props combine **`InputVariantProps`** (`size`, `weight`) with native **`input`** attributes (minus conflicting `size`). Common fields:

| Prop | Type | Default | Behavior |
|------|------|---------|----------|
| **`label`** | `ReactNode` | *(required)* | Visible title tied to the control. |
| **`description`** | `ReactNode` | — | Helper row when provided and non-empty. |
| **`required`** | `boolean` | — | Asterisk + native required validation. |
| **`disabled`** | `boolean` | — | Locks the field + fades the stack. |
| **`size`** | `"sm"` \| `"md"` \| `"lg"` | `"sm"` | Typography + min-height scale. |
| **`weight`** | `"normal"` \| `"medium"` \| `"semibold"` \| `"bold"` | `"normal"` | Label weight (Inter-equivalent utilities). |
| **`placeholder`** | `string` | `"Enter text..."` | Hint text inside the control. |

Use **`Input`** / **`Input.Text`** for text-like native types (`type` defaults to `"text"`; pass `"email"`, `"search"`, etc. when needed). Use **`Input.Password`** for masked values with the visibility toggle.

Password fields default **`autoComplete="current-password"`** unless you pass another value. Icons come from **`react-icons/md`** (`MdOutlineVisibility*`).
