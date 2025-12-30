import { create } from 'storybook/theming';

// Light theme
export const lightTheme = create({
  base: 'light',
  brandTitle: 'ArchUI Library',
  brandUrl: 'https://github.com/devtoti/archui-lib',
  brandImage: '/storybook-assets/archUI.svg',
  brandTarget: '_self',
  
  // Color palette
  colorPrimary: '#3b82f6',
  colorSecondary: '#8b5cf6',
  
  // UI colors
  appBg: '#D4E0F5',
  appContentBg: '#FFFFFF',
  appPreviewBg: '#D4E0F5',
  appBorderColor: '#e2e8f0',
  appBorderRadius: 8,
  
  // Text colors
  // textColor: '#0f172a',
  // textInverseColor: '#ffffff',
  // textMutedColor: '#64748b',
  
  // Bar colors
  // barTextColor: '#475569',
  barSelectedColor: '#3b82f6',
  barBg: '#ffffff',
  
  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#e2e8f0',
  // inputTextColor: '#0f172a',
  inputBorderRadius: 6,
  
  // Typography
  fontBase: '"Inter", system-ui, sans-serif',
  fontCode: '"Fira Code", "Courier New", monospace',
});

// Dark theme - Using archui-system-tokens.css dark mode values
export const darkTheme = create({
  base: 'dark',
  brandTitle: 'ArchUI Library',
  brandUrl: 'https://github.com/devtoti/archui-lib',
  brandImage: '/storybook-assets/archUI.svg',
  brandTarget: '_self',
  
  // Color palette - using dark mode system tokens
  // --sys-icon-primary = --bleu-2 = #D5EFFF
  // colorPrimary: '#D5EFFF',
  // --sys-icon-secondary = --bleu-4 = #ACD8FC
  // colorSecondary: '#ACD8FC',
  
  // UI colors - using dark mode system tokens
  // --sys-bg-primary = --gris-12 = #202020
  appBg: '#202020',
  // --sys-bg-primary = --gris-12 = #202020
  appContentBg: '#202020',
  // --sys-bg-tertiary = --gris-11 = #242424
  appPreviewBg: '#242424',
  // --sys-brd-tertiary = --bleu-6 = #8EC8F6
  appBorderColor: '#8EC8F6',
  appBorderRadius: 8,
  
  // Text colors - using dark mode system tokens
  // --sys-txt-primary = --bleu-8 = #0090FF
  // textColor: '#0090FF',
  // --sys-txt-dark = --bleu-1 = #E6F4FE
  // textInverseColor: '#E6F4FE',
  // --sys-txt-gray-light = --gris-11 = #242424
  // textMutedColor: '#ADBAD1',
  
  // Bar colors - using dark mode system tokens
  // --sys-txt-gray-dark = --gris-4 = #ADBAD1
  // barTextColor: '#ADBAD1',
  // --sys-icon-primary = --bleu-2 = #D5EFFF
  barSelectedColor: '#D5EFFF',
  // --sys-bg-primary = --gris-12 = #202020
  barBg: '#202020',
  
  // Form colors - using dark mode system tokens
  // --sys-bg-primary = --gris-12 = #202020
  inputBg: '#202020',
  // --sys-brd-secondary = --bleu-4 = #ACD8FC
  inputBorder: '#ACD8FC',
  // --sys-txt-primary = --bleu-8 = #0090FF
  inputTextColor: '#0090FF',
  inputBorderRadius: 6,
  
  // Typography
  fontBase: '"Noto Sans", system-ui, sans-serif',
  fontCode: 'monospace',
});
