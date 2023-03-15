const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "Automation-report",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    baseUrl : 'https://www.saucedemo.com/',
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      allureWriter(on, config);
      return config;
    },
    legacy: false
  },
  env: {
    "validUsername" : "standard_user",
    "validPassword" : "secret_sauce"
  },
  pageLoadTimeout : 60000,
  chromeWebSecurity: false
});