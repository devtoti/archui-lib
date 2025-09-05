/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

// https://vite.dev/config/
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';

const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig(({ mode }) => {
  const isLibrary = mode === 'library';
  
  if (isLibrary) {
    return {
      plugins: [react(), tailwindcss()],
      build: {
        lib: {
          entry: resolve(__dirname, 'src/index.ts'),
          name: 'ArchUILib',
          fileName: 'index',
          formats: ['es']
        },
        rollupOptions: {
          external: ['react', 'react-dom'],
          output: {
            globals: {
              react: 'React',
              'react-dom': 'ReactDOM'
            }
          }
        }
      }
    };
  }

  return {
    plugins: [
      react(),
      tailwindcss(),
    ],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['./src/setupTests.ts'],
      projects: [
        {
          name: 'storybook',
          plugins: [
            storybookTest({
              configDir: path.join(dirname, '.storybook')
            })
          ],
          test: {
            browser: {
              enabled: true,
              headless: true,
              provider: 'playwright',
              instances: [{
                browser: 'chromium'
              }]
            },
            setupFiles: ['.storybook/vitest.setup.ts'],
            include: ['**/*.stories.@(js|jsx|mjs|ts|tsx)'],
            exclude: ['**/*.test.@(js|jsx|mjs|ts|tsx)', '**/*.spec.@(js|jsx|mjs|ts|tsx)']
          }
        }
      ]
    }
  };
});