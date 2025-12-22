# Publishing Checklist for @devtoti/archui-lib

## Pre-Publishing Steps

### ✅ 1. Run Tests

```bash
npm test
```

**Status**: ✅ All tests passing (22/22)

### ✅ 2. Run Linter

```bash
npm run lint
```

**Status**: ✅ No linting errors

### ✅ 3. Build Library

```bash
npm run build:lib
```

**Status**: ✅ Build successful

### 4. Check Version

Current version: **1.0.7**

To bump version, choose one:

- **Patch** (bug fixes): `npm version patch` → 1.0.8
- **Minor** (new features): `npm version minor` → 1.1.0
- **Major** (breaking changes): `npm version major` → 2.0.0

### 5. Verify Build Output

Check that `dist/` folder contains:

- ✅ `index.js` (main bundle)
- ✅ `index.css` (styles)
- ✅ `lib.d.ts` (TypeScript definitions)
- ✅ All component type definitions

## Publishing Steps

### 1. Login to npm (if not already)

```bash
npm login
```

### 2. Verify npm Account

```bash
npm whoami
```

### 3. Check Package Name Availability

```bash
npm view @devtoti/archui-lib
```

### 4. Publish to npm

```bash
npm publish --access public
```

**Note**: The `prepublishOnly` script will automatically run `build:lib` before publishing.

## Post-Publishing

### 1. Verify Publication

```bash
npm view @devtoti/archui-lib version
```

### 2. Test Installation (in a new project)

```bash
npm install @devtoti/archui-lib
```

### 3. Create Git Tag (if using version command)

```bash
git push --follow-tags
```

## Troubleshooting

- **403 Forbidden**: Check npm login and package name permissions
- **Version already exists**: Bump version number
- **Build fails**: Check TypeScript errors and dependencies
