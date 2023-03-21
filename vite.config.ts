import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import type { UserConfig as VitestUserConfigInterface } from 'vitest/config';

// https://vitejs.dev/config/

const vitestConfig: VitestUserConfigInterface = {
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      include: ['src/**/*.tsx'],
      exclude: ['src/**/*.spec.js'],
      provider: 'c8',
      all: true,
      skipFull: false,
      reporter: 'text',
    },
  },
};
export default defineConfig({
  plugins: [react()],
  test: vitestConfig.test,
});

