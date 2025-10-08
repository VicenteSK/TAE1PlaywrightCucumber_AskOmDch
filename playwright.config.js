// playwright.config.js
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',   // carpeta donde están tus tests
  timeout: 30000,
  reporter: [
    ['list'],            // reporte en consola
    ['html', { outputFolder: 'playwright-report', open: 'never' }] // reporte HTML
  ],
  use: {
    headless: false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
});
