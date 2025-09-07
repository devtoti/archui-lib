# ArchUI Library

A modern React component library built with Tailwind CSS and TypeScript.

## Installation

```bash
npm install @devtoti/archui-lib
```

## Usage

```tsx
import { Button } from '@devtoti/archui-lib';
import '@devoti/archui-lib/styles';

function App() {
  return (
    <Button intent="primary" size="md" label="Click me" />
  );
}
```

## Components

### Button

A customizable button component with multiple variants.

#### Props

- `intent`: 'primary' | 'secondary'
- `size`: 'sm' | 'md' | 'lg'
- `label`: React.ReactNode
- All standard button HTML attributes

## Development

```bash
npm run dev          # Start development server
npm run storybook    # Start Storybook
npm run build:lib    # Build library
npm run test         # Run tests
```
```

## Step 5: Publish to npm

1. **Login to npm**:
   ```bash
   npm login
   ```

2. **Build the library**:
   ```bash
   npm run build:lib
   ```

3. **Publish**:
   ```bash
   npm publish --access public
   ```

## Key Changes Made:

1. **Package name**: Changed to scoped package `@devtoti/archui-lib`
2. **Removed `private: true`**: Now publishable
3. **Added library build script**: `build:lib` for library-specific build
4. **Moved React to peerDependencies**: Consumers provide their own React
5. **Added proper exports**: Main entry point and styles
6. **Added files field**: Only publish `dist` and `README.md`
7. **Added prepublishOnly**: Automatically builds before publishing