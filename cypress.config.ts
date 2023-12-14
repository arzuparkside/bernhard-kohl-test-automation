import { defineConfig } from "cypress";

export default defineConfig({
  viewportHeight: 900,
  viewportWidth: 1440,

  e2e: {
    baseUrl: 'https://www.parkside-interactive.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
