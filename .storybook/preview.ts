import type { Preview } from '@storybook/react-vite';
import { withThemeByClassName } from "@storybook/addon-themes";
import { lightTheme } from './themes';
import DocumentationTemplate from './template/DocumentationTemplate.mdx';
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
      // Default theme, will be updated by decorator
      theme: lightTheme,
      page: DocumentationTemplate,
      toc: {
        contentsSelector: '.sbdocs-content',
        headingSelector: 'h1, h2',
        ignoreSelector: '#primary, .sbdocs-subtitle, [data-toc-ignore], h2#stories',
        title: 'Table of Contents',
        disable: false,
        unsafeTocbotOptions: {
          orderedList: false,
          ignoreSelector: '.sbdocs-subtitle, [data-toc-ignore], h2#stories',
          scrollSmooth: true,
        },
      },
    },
    tags: ['autodocs'],
  },
};

export default preview;