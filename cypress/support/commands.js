// type definitions for Cypress object "cy"
/// <reference types="cypress" />
// -- This is a parent command --
Cypress.Commands.add("login", (username, password) => {
  cy.get("[id=login]").click();
  cy.get("[id=userName]").type(username);
  cy.get("[id=password]").type(password);
  cy.get("[id=login]").click();
});

Cypress.Commands.add("addBookToCollection", (bookName) => {
  cy.contains(bookName).click();
  cy.contains("Add To Your Collection").click();
  cy.contains("Profile").click();
});

Cypress.Commands.add("deleteAllbook", () => {
  cy.contains("Delete All Books").click();
  cy.contains("OK").click();
});

Cypress.Commands.add("userSubmitForm", (userData) => {
  cy.get('[id="name"]').type(userData.name);
  cy.get('[id="email"]').type(userData.email);
  cy.get('[id="phone"]').type("01232342424");
  cy.get('[id="subject"]').type("note@hotmail.com");
  cy.get('[id="description"]').type("testsubmitfom:::::note@hotmail.com");
  cy.get('[id="submitContact"]').click();
});
