# Radio

Deep dive for **`RadioGroup`** and **`RadioItem`**. Global themes, tokens, and setup live in [Guidelines.md](../Guidelines.md) and the linked foundation docs.

## When to use

Use radios when people must pick **exactly one option** from a short, mutually exclusive set—billing cadence, shipping method, account role, or featured layout—where every choice should stay visible for comparison (unlike a collapsed select).

Compose radios inside **`RadioGroup`** with **`RadioItem`** rows. They pair naturally with **`Heading`** / body copy for section titles, **`Button`** rows for submit actions, **`Switch`** when the decision is binary on/off rather than multi-option, and **`Alert`** when validation feedback applies to the whole fieldset.

## Semantic purpose

The pattern exposes a **radiogroup** in the accessibility tree: arrow keys move focus between items; one option carries **`checked`** state tied to the group **`value`**. Each **`RadioItem`** exposes a native radio **`button`** plus an associated **`<label>`** via shared `id`/`htmlFor`, so the visible title remains clickable and announced with the control.

Optional **`description`** renders as secondary text beneath the label (still associated visually but not duplicated as a second focus target—keep it concise).

## Correct vs incorrect usage

**Do**

- Wrap the tree in **`ThemeProvider`** so borders, fills, and typography tokens resolve ([setup.md](../setup.md)).
- Give every **`RadioItem`** a stable string **`value`** and manage selection with **`RadioGroup`** **`value` / `defaultValue`** plus **`onValueChange`**.
- Use **`size="sm"`** for dense stacks (default) and **`size="lg"`** when touch targets and rounded-square indicators match large layouts from the DS page.
- Provide helper copy with **`description`** only when it clarifies consequences (pricing differences, eligibility).

**Don’t**

- Nest **`RadioItem`** outside a **`RadioGroup`**—selection state and keyboard roving focus break.
- Mix radios with **`Switch`** for the same datum when only one metaphor applies—pick one control primitive per decision.
- Hardcode hex colors or raw pixel borders on the indicators instead of **`arch-*`** utilities.

## API

### `RadioGroup`

Extends the Radix **`Root`** props (`React.ComponentPropsWithoutRef<typeof Root>`). Common knobs:

| Prop | Type | Default | Behavior |
|------|------|---------|----------|
| **`defaultValue`** | `string` | — | Initial selection for uncontrolled groups. |
| **`value`** | `string \| null` | — | Controlled selection. |
| **`onValueChange`** | `(value: string) => void` | — | Fires when a new item is chosen. |
| **`orientation`** | `"horizontal" \| "vertical"` | `"vertical"` | Layout axis for keyboard roving. |
| **`disabled`** | `boolean` | `false` | Disables every nested item. |
| **`required`** | `boolean` | `false` | Marks the group required for forms. |
| **`name`** | `string` | — | Shared `name` forwarded to native radios for forms. |
| **`loop`** | `boolean` | `true` | Arrow-key wrap behavior for roving focus. |

`className` merges with the internal flex wrapper (`gap-arch-md`, orientation variants).

### `RadioItem`

Built on Radix **`Item`** plus ArchUI label/description layout.

| Prop | Type | Default | Behavior |
|------|------|---------|----------|
| **`value`** | `string` | *(required)* | Identifier within the parent group. |
| **`label`** | `ReactNode` | *(required)* | Primary copy beside the indicator (Figma `radioText`). |
| **`description`** | `ReactNode` | — | Helper text beneath the label (Figma `descriptionText`). |
| **`size`** | `"sm" \| "lg"` | `"sm"` | `sm` uses circular indicators; `lg` uses rounded-square indicators. |
| **`disabled`** | `boolean` | `false` | Locks the individual choice. |
| **`className`** | `string` | — | Appended to the indicator button classes. |

Remaining **`RadioItem`** props (`id`, `required`, etc.) follow Radix **`RadioGroupItem`** behavior.
