import { defineConfig } from "cypress";

export default defineConfig({
  viewportHeight: 900,
  viewportWidth: 1440,

  e2e: {
    baseUrl: 'https://bernhard-kohl-develop-app.qa-private.parkside.at/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
