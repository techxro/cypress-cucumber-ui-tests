import { Before} from "cypress-cucumber-preprocessor/steps";

Before(() => {
    cy.visit(Cypress.env('baseUrl'))
});
