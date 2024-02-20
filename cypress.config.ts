import { defineConfig } from "cypress";

export default defineConfig({
  chromeWebSecurity: false,

  e2e: {
    supportFile: "tests/support/e2e.ts",
    specPattern: "tests/e2e/*.cy.{js,jsx,ts,tsx}",
    baseUrl: "https://test-rpg.vercel.app",
    watchForFileChanges: false,
    screenshotsFolder: "tests/screenshots",
    videosFolder: "tests/videos",
    fixturesFolder: "tests/fixture",

    viewportHeight: 960, //like macbook-16
    viewportWidth: 1650, // bigger then macbook-16. To avoid horizontal scrolling
  },
});
