import { create } from 'storybook/theming';

// Color values from archui-system-tokens.css (light mode)
// These are the actual resolved values from the system tokens
const colors = {
  // From --sys-icon-primary = --bleu-9
  iconPrimary: '#102F6A',
  // From --sys-icon-secondary = --bleu-8
  iconSecondary: '#173E88',
  // From --sys-bg-primary = --gris-1
  bgPrimary: '#F2F7FF',
  // From --sys-bg-tertiary = --bleu-2
  bgTertiary: '#C7D1EB',
  // From --sys-brd-tertiary = --bleu-2
  brdTertiary: '#C7D1EB',
  // From --sys-brd-primary = --bleu-6
  brdPrimary: '#3384FF',
  // From --sys-txt-primary = --bleu-9
  txtPrimary: '#102F6A',
  // From --sys-txt-light = --bleu-2
  txtLight: '#C7D1EB',
  // From --sys-txt-gray-light = --gris-5
  txtGrayLight: '#C2D0EA',
};

export default create({
  base: 'light',
  // Typography
  fontBase: '"Noto Sans", system-ui, sans-serif',
  fontCode: 'monospace',
  brandTitle: 'ArchUI',
  brandUrl: 'https://github.com/devtoti/archui-lib',
  brandImage: 'https://i.ibb.co/mFRMFfWB/arch-UI.png',
  brandTarget: '_self',

  // Color palette - using actual color values from system tokens
  colorPrimary: colors.iconPrimary,
  colorSecondary: colors.iconSecondary,

  // UI - using actual color values from system tokens
  appBg: colors.bgPrimary,
  appContentBg: '#FFFFFF',
  appPreviewBg: colors.bgTertiary,
  appBorderColor: colors.brdTertiary,
  appBorderRadius: 4,

  // Text colors - using actual color values from system tokens
  textColor: colors.txtPrimary,
  textInverseColor: colors.txtLight,
  textMutedColor: colors.txtGrayLight,

  // Toolbar default and active colors - using actual color values
  barTextColor: colors.txtGrayLight,
  barSelectedColor: colors.iconPrimary,
  barHoverColor: colors.iconPrimary,
  barBg: colors.bgPrimary,

  // Form colors - using actual color values
  inputBg: colors.bgPrimary,
  inputBorder: colors.brdTertiary,
  inputTextColor: colors.txtPrimary,
  inputBorderRadius: 2,
});