import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implement node event listeners here
    },
    // If you have a different folder structure, ensure the specPattern matches your TypeScript files
    specPattern: "cypress/integration/**/*.ts",
  },
});
