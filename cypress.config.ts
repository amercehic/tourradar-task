import { defineConfig } from "cypress";

export default defineConfig({
  env: {
    mailosaurUrl: "https://mailosaur.com",
    mailosaurApiKey: "OGtzY3BzZG85MW05cGVGMlJUREZ0a3ZqYjIwbUI3NFQ6",
    mailosaurServer: "q9lcodag",
  },
  e2e: {
    baseUrl: "https://www.tourradar.com/",
    viewportWidth: 1920,
    viewportHeight: 1080,
    pageLoadTimeout: 30000,
    defaultCommandTimeout: 15000,
    setupNodeEvents(on, config) {
      on("task", {
        log(message) {
          console.log(message);
          return null;
        },
      });
    },
  },
});
