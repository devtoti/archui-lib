# Avatar

Deep dive for the **`Avatar`** component. Global themes, tokens, and setup live in [Guidelines.md](../Guidelines.md) and the linked foundation docs.

## When to use

Use **`Avatar`** wherever you need a compact representation of a **person or actor**: navigation bars, comment threads, collaboration lists, messaging rows, settings “account” rows, and timeline entries. It answers “who” at a glance.

Pair it with text labels (**`Heading`**, plain copy), actions (**`Button`**), or navigation (**`LinkItem`**) rather than relying on the image alone. Use the optional **presence bead** when real-time or social status (online, busy, etc.) matters to the task.

## Semantic purpose

The avatar surface communicates **identity**. When `src` is set and loads successfully, treat the image as meaningful content: provide accurate **`alt`** text so assistive technologies describe the person or entity.

With **`fallback`** and **`initials`**, the component shows up to two uppercase letters when no usable image is available—still identity-bearing, not purely decorative. **`children`** replaces the default inner content entirely (for example a custom icon); ensure that substitute content has an accessible name if it stands in for a user.

The presence indicator is **`aria-hidden`** by design: it is a visual cue only. Do not rely on bead color as the **sole** channel for critical state; reinforce status in nearby text when needed.

## Correct vs incorrect usage

**Do**

- Wrap the app (or Storybook preview) in **`ThemeProvider`** so silhouette, colors, and strokes resolve ([setup.md](../setup.md)).
- Prefer **`arch-*`** utilities on surrounding layout; keep token-driven surfaces on the avatar itself.
- Omit **`badgeSize`** when the bead should scale with **`size`** (sm/md/lg track together).
- Supply **`alt`** whenever **`src`** conveys a specific person or brand mark.

**Don’t**

- Force **`overflow-hidden`** on a parent expecting to clip the bead—the root is laid out so the presence bead can extend past the face; wrapping it in extra clipping containers breaks that behavior.
- Use **`Avatar`** as the only label for an actionable control without an accessible name on the control (wrap with `aria-label` or visible text).
- Hardcode hex fills or radii on the avatar shell instead of theme tokens.

## API

Props match **`AvatarProps`** / **`AvatarVariantProps`** in code. HTML attributes on the root wrapper are supported via **`React.HTMLAttributes<HTMLDivElement>`** (for example `className`, `data-*`, `id`).

| Prop | Type | Default | Behavior |
|------|------|---------|----------|
| **`size`** | `"sm"` \| `"md"` \| `"lg"` | `"sm"` | Diameter scale (32px / 48px / 64px). |
| **`fallback`** | `boolean` | `false` | When `true`, shows **`initials`** if there is no **`children`** and no usable image (`src` missing or load error). |
| **`position`** | `"bottom-right"` \| `"bottom-left"` \| `"top-right"` \| `"top-left"` | `"bottom-right"` | Corner anchor for the presence bead. |
| **`status`** | `"online"` \| `"idle"` \| `"busy"` \| `"offline"` | `"online"` | Presence color on the bead. |
| **`badgeSize`** | `"sm"` \| `"md"` \| `"lg"` | *(matches `size`)* | Bead scale; omit to mirror **`size`**. |
| **`src`** | `string` | — | Image URL for the face. |
| **`alt`** | `string` | `""` | Alternative text when **`src`** is used. |
| **`initials`** | `string` | `""` | Trimmed, up to two characters for fallback initials. |
| **`children`** | `ReactNode` | — | If set, replaces image and initials content inside the face. |
