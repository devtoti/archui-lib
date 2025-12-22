import type { Preview } from '@storybook/react-vite';
import { lightTheme, darkTheme } from './themes';
import { themes } from 'storybook/theming';
import DocumentationTemplate from './template/DocumentationTemplate.mdx';
import { withThemeByClassName } from '@storybook/addon-themes';
import './preview.css';
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
    options: {
      storySort: {
        order: ['00 GETTING STARTED', '01 COMPONENTS', '02 OTHER'],
      },
    },
    darkMode: {
      // Override the default dark theme
      dark: { ...themes.dark, lightTheme, textColor: '#0588F0' },
      // Override the default light theme
      light: { ...themes.normal, darkTheme, textColor: '#102F6A' }
    },
    docs: {
      theme:{...lightTheme, textColor: '#0D74CE' },
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