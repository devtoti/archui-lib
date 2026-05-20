# Heading

Deep dive for the **`Heading`** typography block. Global themes, tokens, and setup live in [Guidelines.md](../Guidelines.md) and the linked foundation docs.

## When to use

Use **`Heading`** for page, section, and card titles where semantic level (**`h1`–`h6`**) and ArchUI type scale should stay aligned. Optional **`description`** supports subtitles under the title—ideal above **`Input`** groups, **`RadioGroup`** fieldsets, or **`Callout`** blocks.

Do not use for body copy; use standard text utilities from [typography.md](../typography.md).

## Semantic purpose

Renders the element matching **`variant`** (`h1` … `h6`) unless **`asChild`** merges styles onto another heading or custom element. Preserve logical heading order—one **`h1`** per view, stepping down levels without skips when possible.

## Correct vs incorrect usage

**Do**

- Wrap the app in **`ThemeProvider`** for theme-scoped fonts ([setup.md](../setup.md)).
- Set **`align`** when titles sit in centered layouts (`center` for hero sections).
- Prefer **`children`** over **`text`** for rich title content.

**Don’t**

- Pick **`variant="h1"`** purely for visual size on a subsection—match document outline.
- Set **`font-family`** inline; fonts inherit from the active theme.
- Use **`Heading`** inside another heading.

## API

Props extend **`HeadingVariantProps`** and heading HTML attributes (minus conflicting **`align`**).

| Prop | Type | Default | Behavior |
|------|------|---------|----------|
| **`variant`** | `"h1"` … `"h6"` | `"h1"` | Semantic element + type scale. |
| **`align`** | `"left"` \| `"center"` \| `"right"` | `"left"` | Text alignment for title and description. |
| **`text`** | `ReactNode` | — | Title when **`children`** omitted. |
| **`children`** | `ReactNode` | — | Preferred title content. |
| **`description`** | `ReactNode` | — | Secondary line beneath the title. |
| **`asChild`** | `boolean` | `false` | Slot onto a single child. |
