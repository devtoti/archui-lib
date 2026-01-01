import type { StorybookConfig } from '@storybook/react-vite';
import tailwindcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';

const isChromatic = process.env.CHROMATIC === 'true' || process.env.CHROMATIC_PROJECT_TOKEN;
const isGitHubPages = !isChromatic && process.env.GITHUB_PAGES === 'true';
const basePath = isGitHubPages ? '/archui-lib/' : '/';

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
  "staticDirs": ["../public", "../public/storybook-assets"],
  "docs": {
    docsMode: false,
  },
  viteFinal: async (config) => {
    // Set base path: root (/) for Chromatic, /archui-lib/ for GitHub Pages
    config.base = basePath;
    
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