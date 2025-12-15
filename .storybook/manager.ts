import { addons } from 'storybook/manager-api';
import { lightTheme } from './themes';

// Set the Storybook manager UI theme
// The theme will be toggled via the addon-themes toolbar control
// This sets the default/initial theme
addons.setConfig({
  theme: lightTheme,
  enableShortcuts: true,
});

