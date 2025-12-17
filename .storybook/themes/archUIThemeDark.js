import { create } from 'storybook/theming';

// Color values from archui-system-tokens.css (dark mode)
// These are the actual resolved values from the system tokens
const darkColors = {
  // From --sys-icon-primary = --bleu-2
  iconPrimary: '#D5EFFF',
  // From --sys-icon-secondary = --bleu-4
  iconSecondary: '#ACD8FC',
  // From --sys-bg-primary = --gris-12
  bgPrimary: '#202020',
  // From --sys-bg-tertiary = --gris-11
  bgTertiary: '#242424',
  // From --sys-brd-tertiary = --bleu-6
  brdTertiary: '#8EC8F6',
  // From --sys-brd-primary = --bleu-5
  brdPrimary: '#ACD8FC',
  // From --sys-txt-primary = --bleu-8
  txtPrimary: '#0090FF',
  // From --sys-txt-light = --bleu-10
  txtLight: '#0D74CE',
  // From --sys-txt-gray-light = --gris-11
  txtGrayLight: '#242424',
  // From --sys-txt-gray-dark = --gris-4
  txtGrayDark: '#ADBAD1',
};

export default create({
  base: 'dark',
  // Typography
  fontBase: '"Noto Sans", system-ui, sans-serif',
  fontCode: 'monospace',
  brandTitle: 'ArchUI',
  brandUrl: 'https://github.com/devtoti/archui-lib',
  brandImage: 'https://i.ibb.co/mFRMFfWB/arch-UI.png',
  brandTarget: '_self',

  // Color palette - using actual color values from system tokens
  colorPrimary: darkColors.iconPrimary,
  colorSecondary: darkColors.iconSecondary,

  // UI - using actual color values from system tokens
  appBg: darkColors.bgPrimary,
  appContentBg: darkColors.bgPrimary,
  appPreviewBg: darkColors.bgTertiary,
  appBorderColor: darkColors.brdTertiary,
  appBorderRadius: 4,

  // Text colors - using actual color values from system tokens
  textColor: darkColors.txtPrimary,
  textInverseColor: darkColors.txtLight,
  textMutedColor: darkColors.txtGrayDark,

  // Toolbar default and active colors - using actual color values
  barTextColor: darkColors.txtGrayDark,
  barSelectedColor: darkColors.iconPrimary,
  barHoverColor: darkColors.iconPrimary,
  barBg: darkColors.bgPrimary,

  // Form colors - using actual color values
  inputBg: darkColors.bgPrimary,
  inputBorder: darkColors.brdTertiary,
  inputTextColor: darkColors.txtPrimary,
  inputBorderRadius: 2,
});

