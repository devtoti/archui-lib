import { addons } from 'storybook/manager-api';
import archUITheme from './themes/archUITheme.js';
import archUIThemeDark from './themes/archUIThemeDark.js';

addons.setConfig({
  theme: archUITheme,
  enableShortcuts: true,
});
