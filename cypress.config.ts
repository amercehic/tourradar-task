import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://www.tourradar.com/",
    viewportWidth: 1920,
    viewportHeight: 1080,
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
