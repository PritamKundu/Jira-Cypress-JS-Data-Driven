const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const xlsx = require("node-xlsx").default;
const fs = require("fs");
const path = require("path");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("task", {
        parseXlsx({ filePath }) {
          return new Promise((resolve, reject) => {
            try {
              const jsonData = xlsx.parse(fs.readFileSync(filePath));
              resolve(jsonData);
            } catch (e) {
              reject(e);
            }
          });
        }
      });

      allureWriter(on, config);
      return config;

    },
    "chromeWebSecurity": false,
    experimentalSessionAndOrigin: true,
    experimentalRunAllSpec: true,
    baseUrl: 'https://e2e-automation.atlassian.net/',
    specPattern: "cypress/integration/**/*.{js,jsx,ts,tsx}"
    
  },
});

