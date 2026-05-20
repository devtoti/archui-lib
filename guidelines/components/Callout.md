# Callout

Deep dive for the **`Callout`** inline notice. Global themes, tokens, and setup live in [Guidelines.md](../Guidelines.md) and the linked foundation docs.

## When to use

Use **`Callout`** for **contextual, non-blocking** information—tips, policy reminders, feature highlights, or neutral asides—embedded in article-like layouts or form sections. Prefer **`Alert`** when the message is urgent or blocks forward progress.

Pair with **`Heading`** for page structure, **`Button`** for optional actions inside the body, and **`LinkItem`** for references.

## Semantic purpose

The left accent border and optional **`title`** establish a supplementary region. **`variant`** communicates tone (`success`, `info`, `warning`, `danger`, `neutral`). Body copy in **`label`** or **`children`** should be self-contained; the **`title`** is not a substitute for an accessible name on interactive children nested inside.

## Correct vs incorrect usage

**Do**

- Wrap the tree in **`ThemeProvider`** ([setup.md](../setup.md)).
- Use **`neutral`** for general tips without semantic status.
- Keep copy concise; long policy text may belong in a dedicated page.

**Don’t**

- Stack multiple callouts with the same **`variant`** without hierarchy—merge copy when possible.
- Use **`Callout`** as a toast or modal substitute.
- Omit readable text and rely on **`icon`** alone.

## API

Props extend **`CalloutVariantProps`** and div attributes (minus conflicting **`title`**).

| Prop | Type | Default | Behavior |
|------|------|---------|----------|
| **`variant`** | `"success"` \| `"info"` \| `"warning"` \| `"danger"` \| `"neutral"` | `"info"` | Accent border and intent styling. |
| **`size`** | `"sm"` \| `"md"` \| `"lg"` | `"md"` | Typography scale for title and body. |
| **`title`** | `ReactNode` | — | Short heading above body copy. |
| **`label`** | `ReactNode` | — | Body when **`children`** is omitted. |
| **`children`** | `ReactNode` | — | Preferred body content. |
| **`icon`** | `ReactNode` | — | Optional leading icon. |
| **`asChild`** | `boolean` | `false` | Slot composition onto one child. |
