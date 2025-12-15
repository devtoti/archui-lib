import type { Preview } from '@storybook/react-vite';
import { withThemeByClassName } from "@storybook/addon-themes";
import { lightTheme } from './themes';
import '../src/index.css';

const preview: Preview = {
  decorators: [
    withThemeByClassName({
      themes: {
        light: '',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      // Docs theme - can be toggled by changing this value
      // Component themes are controlled by the addon-themes toolbar
      theme: lightTheme,
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
    },
  },
};

export default preview;