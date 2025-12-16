import type { Preview } from '@storybook/react-vite';
import { withThemeByClassName } from "@storybook/addon-themes";
import { lightTheme } from './themes';
import '../src/index.css';
import './preview.css';
import DocumentationTemplate from './DocumentationTemplate.mdx';

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
    theme: lightTheme,
    page: DocumentationTemplate,
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#D4E0F5', // Match your theme's appPreviewBg
        },
        {
          name: 'dark',
          value: '#1e293b', // Match your dark theme
        },
        {
          name: 'white',
          value: '#ffffff',
        },
        {
          name: 'gray',
          value: '#f3f4f6',
        },
      ],
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
    },
tags: ['autodocs'],
  },
};

export default preview;