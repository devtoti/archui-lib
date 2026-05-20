---
name: blueprint-copy
description: Updates a Figma Blueprint-Left-Info documentation instance from a page link — resolves the target component, aligns doc copy with the design-system props-table template (variables + typography), and wires Preview-Slot via a saved code-snippet wrapper. Use when the user provides a Figma page URL for a component blueprint doc, mentions Blueprint-Left-Info / Blueprint-Text / Preview-Slot / Props-Slot, table-style-ref, or blueprint doc sync for archui-lib in Figma.
disable-model-invocation: true
---

# Blueprint copy (Figma)

Sync a component blueprint panel in Figma against the **page** referenced by the user’s link. Work in **small**, verifiable steps. Before any **`use_figma`** call, load the **figma-use** skill (Figma plugin MCP prerequisite) and pass `skillNames: "figma-use"` on those calls.

## Reference: props table template (inspect before building tables)

Stable reference node in **ArchUI-Design-System-v1.1.0**:

- **URL:** [table-style-ref](https://www.figma.com/design/kw2Up6JfZ76d69slxJJmFJ/ArchUI-Design-System-v1.1.0?node-id=816-9310&t=fHfCADsYZf6AzFu8-4)  
- **fileKey:** `kw2Up6JfZ76d69slxJJmFJ`  
- **nodeId:** `816:9310`

Before authoring or extending a props table, use the **official Figma MCP** to inspect this layout: **`get_design_context`** (and **`get_metadata`** / **`get_variable_defs`** as needed) on that **`fileKey` + `nodeId`**. Infer **spacing, grids, typography (text styles), and variable bindings** so new tables match the reference. Treat this node as the **canonical template** for future table creation.

Do **not** use a third-party **Table widget** for props; build tables with the same structure and tokens as **table-style-ref**.

## Terms (use consistently in reasoning and logs)

| Name | Meaning |
|------|--------|
| **INSPECTED_COMPONENT** | The main **component** whose doc you are refreshing — inferred from the page title (strip status prefix/suffix such as ✅). Example: page `✅ Switch` → `Switch`. |
| **INSPECTED_INSTANCE** | The **Blueprint-Left-Info** instance on that page whose nested **Blueprint-Text** sub-instances you read and overwrite. |

## 1. Resolve the link and fetch page-level context

From the Figma `/design/` URL, extract **`fileKey`** and **`nodeId`** (hyphens in URLs → colons for IDs; branch URLs use **`branchKey` as fileKey**). Prefer **`get_design_context`** for the target **page/node** (`fileKey`, `nodeId`) for structure, screenshot, and hints. Use **`get_metadata`** only when you need a lighter XML overview or listing pages (**`nodeId` omitted** returns top-level pages). For variables/tokens scoped to the component subtree, **`get_variable_defs`** on **`INSPECTED_COMPONENT`**’s node id is appropriate after you know it.

## 2. Find **INSPECTED_COMPONENT** and capture design facts

Switch to the correct page (`await figma.setCurrentPageAsync` at the start of every `use_figma` script that touches that page).

Locate the component whose **name matches** the page’s component name rule above. Collect everything needed for doc copy:

- **Component properties** and **variants** (variant properties, options, descriptions if present).
- **States** (variant axes or explicit interactive/state naming used in the file — whichever the file actually uses).

Remember this node as **`INSPECTED_COMPONENT`** for the rest of the workflow.

## 3. Find **INSPECTED_INSTANCE** and read current Blueprint-Text strings

Locate the **`Blueprint-Left-Info`** instance on the page. That instance is **`INSPECTED_INSTANCE`**.

Inside it, find **Blueprint-Text** sub-instances whose names identify the row (match your file’s naming: **`heading`**, **`preview`**, **`usage`**, **`variants`**, **`states`**, **`props`**, …). Record each **slot’s current plain text / widget payload** before replacing anything.

## 4. Replace content (rules)

### *heading*

Write the **purpose** of the component — what problem it solves for users and when it matters — **not** its internal structure or variant mechanics. Take inspiration from [shadcn/ui](https://ui.shadcn.com/) and [Rewind-UI](https://rewind-ui.dev/) component blurbs: **direct, scannable, product-oriented**. **Maximum 30 words.**

### *preview*

Produce a realistic **React import + JSX** snippet that matches **`INSPECTED_COMPONENT`**’s typical props (use inspection results and any example the user gave in-chat).

Formatting in Figma uses the **Code Syntax Highlighter** (DOC Code Snippet) with:

- **Line numbers** on  
- **`slack-dark`** theme  
- **Andale Mono**, **13 pt**

If the snippet preview looks **flat (e.g. one color such as pink)** in the editor, **do not** chase manual token or theme tweaks to “fix” syntax colors — the plugin **produces color variation automatically**; leave that to the widget.

Structural rule (Figma composition):

The **Code snippet wrapper** auto-layout you build/configure for this block must be **saved as a new `Component`** **outside** **`INSPECTED_INSTANCE`**, then that component is assigned as the **Preview-Slot** instance’s **`Slot`** modified override value (exact slot naming follows the design system).

**Content rule:** Wrap the JSX in **`ThemeSwitcher`** at all times, e.g.:

```tsx
<!-- import { LinkItem } from '@devtoti/archui-lib/LinkItem';
<ThemeSwitcher theme="ionic">
  <LinkItem
    href="https://www.devtoti.com/"
    label="Portfolio"
    noopenreferrer
    variant="default"
  />
</ThemeSwitcher> -->
```

Adapt imports and props to **`INSPECTED_COMPONENT`** — the above is structural reference only.

### *usage*

Explain **when** and **how** to use the component. **Maximum 40 words.**  
If the user (or codebase context) specifies **composition** (e.g. radio → radio group), state that plainly.

### *variants*

A **bullet list** of variant names only — sizes, styles, semantic types, etc., as represented on `INSPECTED_COMPONENT`.

### *states*

For each line, put the **state or style-type label** in **bold** immediately **before** the em dash (**`—`**), then the explanation after the dash. Examples: **`disabled`** — cannot be interacted with; **`input-type`** — behavior when used as … This makes scans easy without extra headings.

### *props*

Build or edit the props table **in canvas** using the **table-style-ref** template (variables, text styles, layout — from MCP inspection above). Columns: **Name** | **Description** | **Default**.

- Keep cells **minimal and short**.
- **Name** emphasized; description ends with terse **type** hints (`union`, `boolean`, `ReactNode`, …); **Default** as code-like text or **`—`** if none.
- Use **optional grouped rows or sections** (e.g. **ICON**) when many props mirror the reference file’s pattern.

The finished table lives in the props area of the page frame (exact hierarchy follows the design system). If the blueprint uses **Props-Slot**, assign slot content consistent with whatever component wrapper the file expects — still **styled per table-style-ref**, not a widget table.

## 5. Execution order (recommended)

1. **MCP pass on table-style-ref** (`kw2Up6JfZ76d69slxJJmFJ`, `816:9310`): lock in layout, variables, and typography for props tables.  
2. Read-only MCP + small `use_figma` passes on the **doc page**: confirm **`INSPECTED_COMPONENT`**, **`INSPECTED_INSTANCE`**, and Blueprint-Text targets.  
3. Create **external** **Code snippet wrapper** component → wire **Preview-Slot**.  
4. Build or update the **props table** to match **table-style-ref**.  
5. Update **Blueprint-Text** strings for **heading**, **usage**, **variants**, **states**, and any other text rows your template uses.  
6. **Return** all created/mutated node ids from every `use_figma` script as required by figma-use.

---

Refine naming (slots, frames) and table sectioning conventions in later edits.
