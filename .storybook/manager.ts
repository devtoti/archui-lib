import { addons } from 'storybook/manager-api';
import archUITheme from './themes/archUITheme.js';

addons.setConfig({
  theme: archUITheme,
  enableShortcuts: true,
});
