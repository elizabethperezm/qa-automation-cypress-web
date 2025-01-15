// Import necessary plugins and configs
import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: globals.browser,
    },
    ...pluginJs.configs.recommended,
  },
  {
    files: ["cypress/**/*.cy.js", "cypress/**/*.spec.js"], // Adjust based on your test file patterns
    languageOptions: {
      globals: {
        ...globals.browser, // Include browser globals
        ...globals.cypress, // Add Cypress-specific globals like describe, it, cy
      },
    },
    rules: {
      // Optionally customize rules
      "no-undef": "off", // Disable no-undef rule globally for this configuration
      indent: ["error", 2], // Enforce 2-space indentation
      semi: ["error", "always"], // Enforce semicolons at the end of statements
    },
  },
];
