import type { StorybookConfig } from '@storybook/react-vite';
import tailwindcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
    {
      name: "@storybook/addon-themes",
      options: {
        // Enable theme switching in the toolbar
        defaultTheme: 'light',
        themes: {
          light: '',
          dark: 'dark',
        },
      },
    }
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },
  viteFinal: async (config) => {
    config.css = {
      postcss: {
        plugins: [
          tailwindcss,
          autoprefixer,
        ],
      },
    };
    return config;
  },
};
export default config;