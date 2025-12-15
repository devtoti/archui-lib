import { create } from 'storybook/theming';

// Light theme
export const lightTheme = create({
  base: 'light',
  brandTitle: 'ArchUI Library',
  brandUrl: 'https://github.com/devtoti/archui-lib',
  brandTarget: '_self',
  
  // Color palette
  colorPrimary: '#3b82f6',
  colorSecondary: '#8b5cf6',
  
  // UI colors
  appBg: '#D4E0F5',
  appContentBg: '#D4E0F5',
  appPreviewBg: '#D4E0F5',
  appBorderColor: '#e2e8f0',
  appBorderRadius: 8,
  
  // Text colors
  textColor: '#0f172a',
  textInverseColor: '#ffffff',
  textMutedColor: '#64748b',
  
  // Bar colors
  barTextColor: '#475569',
  barSelectedColor: '#3b82f6',
  barBg: '#ffffff',
  
  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#e2e8f0',
  inputTextColor: '#0f172a',
  inputBorderRadius: 6,
  
  // Typography
  fontBase: '"Inter", system-ui, sans-serif',
  fontCode: '"Fira Code", "Courier New", monospace',
});

// Dark theme - Slate/Blue variant
export const darkTheme = create({
  base: 'dark',
  brandTitle: 'ArchUI Library',
  brandUrl: 'https://github.com/devtoti/archui-lib',
  brandTarget: '_self',
  
  // Color palette
  colorPrimary: '#3b82f6',
  colorSecondary: '#8b5cf6',
  
  // UI colors
  appBg: '#1e293b',
  appContentBg: '#0f172a',
  appPreviewBg: '#1e293b',
  appBorderColor: '#334155',
  appBorderRadius: 8,
  
  // Text colors
  textColor: '#f1f5f9',
  textInverseColor: '#0f172a',
  textMutedColor: '#94a3b8',
  
  // Bar colors
  barTextColor: '#cbd5e1',
  barSelectedColor: '#3b82f6',
  barBg: '#1e293b',
  
  // Form colors
  inputBg: '#1e293b',
  inputBorder: '#334155',
  inputTextColor: '#f1f5f9',
  inputBorderRadius: 6,
  
  // Typography
  fontBase: '"Inter", system-ui, sans-serif',
  fontCode: '"Fira Code", "Courier New", monospace',
});

// Dark theme - Midnight/Purple variant
export const darkMidnightTheme = create({
  base: 'dark',
  brandTitle: 'ArchUI Library',
  brandUrl: 'https://github.com/devtoti/archui-lib',
  brandTarget: '_self',
  
  // Color palette - Purple/Indigo accent
  colorPrimary: '#8b5cf6',
  colorSecondary: '#ec4899',
  
  // UI colors - Deeper, richer dark
  appBg: '#0f0f23',
  appContentBg: '#1a1a2e',
  appPreviewBg: '#16213e',
  appBorderColor: '#2d2d44',
  appBorderRadius: 8,
  
  // Text colors
  textColor: '#e2e8f0',
  textInverseColor: '#0f0f23',
  textMutedColor: '#a78bfa',
  
  // Bar colors
  barTextColor: '#c4b5fd',
  barSelectedColor: '#8b5cf6',
  barBg: '#0f0f23',
  
  // Form colors
  inputBg: '#1a1a2e',
  inputBorder: '#2d2d44',
  inputTextColor: '#e2e8f0',
  inputBorderRadius: 6,
  
  // Typography
  fontBase: '"Inter", system-ui, sans-serif',
  fontCode: '"Fira Code", "Courier New", monospace',
});

