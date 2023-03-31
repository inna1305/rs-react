import react from '@vitejs/plugin-react';
import type { UserConfig as VitestUserConfigInterface } from 'vitest/config';
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/

const vitestConfig: VitestUserConfigInterface = {
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/helpers/setupTests.ts',
    css: true,
    coverage: {
      enabled: true,
      provider: 'c8',
      reporter: ['text'],
      all: true,
      exclude: ['*.cjs', 'src/main.tsx', 'src/types.ts', 'src/components/cardsData.ts', '*.d.ts'],
    },
  },
};
export default defineConfig({
  plugins: [react()],
  test: vitestConfig.test,
});
