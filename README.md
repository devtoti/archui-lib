![ArchUI](./public/storybook-assets/archui-github-header.png)

# ArchUI Component Library

A React 19+ and Tailwind component library designed with architectural blueprint precision.

[Storybook Documentation](https://devtoti.github.io/archui-lib/)

## About

ArchUI is a unique and modern React component library inspired by classical architecture. It provides flexible, themeable UI tokens based on three main architectural orders: **Doric**, **Ionic**, and **Corinthian**. Each order can be customizable and offers your app a whole new appearance once changed.

- **Doric**: Distinguished by sharp edges, contrasting border colors, a lack of aesthetic details, subtle shadows, and a shorter, sturdier appearance.

- **Ionic**: Characterized by rounded corners that soften visual edges, generous paddings for comfortable spacing, a borderless design for seamless integration, subtle decorative touches, soft blurred shadows that add depth, and an overall pleasant, graceful appearance.

- **Corinthian**: Features subtle rounded corners for refined edges, delicate padding that maintains spaciousness, light-gray borders for elegant definition, and rich ornamental details throughout. Expect soft, layered shadows for dimensional depth, gradient backgrounds that add visual sophistication, and a slender, svelte appearance that conveys grace.

![Orders](./public/storybook-assets/archui-github-orders.png)

> [!NOTE]
> ArchUI brings an artistic, outside-the-box perspective inspired by architecture, urbanism, and industrial design to web development. This project is a tribute to early architectural treatises that dictated why and how we should build and engineer structures (apps).

## Install

```bash
npm install @devtoti/archui-lib
```

## Usage

```tsx
import { Button } from "@devtoti/archui-lib";

function App() {
  return (
    <Button
      variant="primary"
      size="md"
      onClick={handleClick}
      label="Welcome to ArchUI!"
    />
  );
}
```

## Library Principles

The _causa finis_ of this library is to offer a new robust and rigorous Design System that offers:

- Granularity
- Functionality
- Elegance

![Orders](./public/storybook-assets/archui-github-principles.png)

### Modular Designs

All ArchUI components are organized within three modular themes. Each theme uses the same set of variables, property names, and a tokenized design system. Easily switch your application's appearance by changing a single class name—the design system ensures the entire UI adapts harmoniously across Doric, Ionic, or Corinthian styles.

---

### Blueprint Approach

Our design methodology draws inspiration from architectural blueprints, emphasizing structural proportion and uniqueness. Every component has been crafted with special care and attention to detail, so your interfaces feel deliberate and cohesive.

## ![Blueprints](./public/storybook-assets/archui-github-blueprint-approach.png)

### A11y-Lens

We are committed to inclusive design and ensure ArchUI components conform to WCAG 2.0 standards. Key accessibility features include:

- **Text Legibility**: Ensured through scalable font sizing and weights
- **Color Contrasts**: Carefully selected to provide sufficient contrast ratios
- **ARIA Attributes**: Added to communicate UI semantics to assistive technologies
- **Keyboard Navigation**: Fully navigable via keyboard inputs
- **Responsiveness**: Designed for usability across all devices

## Resources

- [Figma UI Kit](https://www.figma.com/community/file/1585101937198168427)
- [Documentation](https://devtoti.github.io/archui-lib/)
- [Storybook](https://69407e8add389895667a46fe-dltggumnte.chromatic.com)
- Sandbox (coming soon)
- Examples (coming soon)

---

## Project Information

**Architect:** @devtoti Antonio 'Toti' Ruiz
**Collaborators** @hugoarchundia
**Date:** December 2025
**Technologies:** React, TypeScript, Tailwind, Storybook, Chromatic, ESLint, Prettier  
**Location:** Mexico City, Mexico
**Version** v1.0.9

---

## Find me at

- [Dribbble](https://dribbble.com/totisketches)
- [LinkedIn](https://linkedin.com/in/devtoti)
- [FigmaCommunity](https://www.figma.com/@totiruiz)
- [Portfolio](https://devtoti.com)

![Info](./public/storybook-assets/archui-github-footer.png)
