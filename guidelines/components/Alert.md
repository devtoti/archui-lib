# Alert

Deep dive for the **`Alert`** status banner. Global themes, tokens, and setup live in [Guidelines.md](../Guidelines.md) and the linked foundation docs.

## When to use

Use **`Alert`** when a message needs **immediate attention** on the page—validation summaries, outage notices, destructive confirmations, or success confirmations that should stay visible until dismissed or resolved. Prefer **`Callout`** for supplementary inline tips that do not interrupt the task flow.

Compose with **`Heading`** for section context, **`Button`** rows for remediation actions, and **`LinkItem`** for “learn more” paths.

## Semantic purpose

The alert is a **status region** with semantic coloring per **`variant`** (`success`, `info`, `warning`, `danger`). Optional **`icon`** reinforces intent visually; ensure the **`label`** / **`children`** text states the situation plainly so screen readers do not depend on color alone.

## Correct vs incorrect usage

**Do**

- Wrap surfaces in **`ThemeProvider`** ([setup.md](../setup.md)).
- Pick **`variant`** from semantic intent, not brand accent alone.
- Supply **`icon`** from **`react-icons`** when it clarifies meaning (see Storybook patterns).

**Don’t**

- Use **`Alert`** for toast-style ephemeral feedback—use **`Toast`** + **`ToastProvider`** instead.
- Rely on border color as the only signal—include explicit copy.
- Hardcode status hex values; use semantic **`arch-{status}-*`** tokens via the component variants.

## API

Props extend **`AlertVariantProps`** and **`HTMLAttributes<HTMLDivElement>`**.

| Prop | Type | Default | Behavior |
|------|------|---------|----------|
| **`variant`** | `"success"` \| `"info"` \| `"warning"` \| `"danger"` | `"success"` | Semantic surface, border, and text tokens. |
| **`size`** | `"sm"` \| `"md"` \| `"lg"` | `"md"` | Body text scale. |
| **`label`** | `ReactNode` | — | Message when **`children`** is omitted. |
| **`children`** | `ReactNode` | — | Preferred message content. |
| **`icon`** | `ReactNode` | — | Leading decorative or semantic icon. |
| **`asChild`** | `boolean` | `false` | Merge onto a single child with Slot. |
