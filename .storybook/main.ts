import type { StorybookConfig } from '@storybook/react-vite';
import tailwindcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';

const config: StorybookConfig = {
  "stories": [
    "../src/mdx/00-Introduction.mdx",
    "../src/mdx/01-why-archui.mdx",
    "../src/mdx/02-library-setup.mdx",
    "../src/mdx/03-design-principles.mdx",
    "../src/mdx/04-themes.mdx",
    "../src/mdx/08-figma-library.mdx",
    "../src/mdx/09-incoming-updates.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
    "@storybook/addon-themes",
    "@vueless/storybook-dark-mode"
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },
  "staticDirs": ["../public"],
  "docs": {
    docsMode: false,
  },
  // Set base path for GitHub Pages deployment
  "base": "/archui-lib/",
  viteFinal: async (config) => {
    // Set base path for GitHub Pages deployment
    config.base = '/archui-lib/';
    
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