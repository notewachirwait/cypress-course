// -- This is a parent command --
Cypress.Commands.add("login", (username, password) => {
  cy.get("[id=login]").click();
  cy.get("[id=userName]").type(username);
  cy.get("[id=password]").type(password);
  cy.get("[id=login]").click();
  //   cy.get("[id=userName-value]")
  //     .invoke("text")
  //     .then((label) => {
  //       expect(label).eq(username);
  //     });
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
