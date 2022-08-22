// cypress/e2e/duckduckgo.ts
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


When("I visit duckduckgo.com", () => {
  cy.visit("https://www.google.com");
});


 