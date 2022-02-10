describe("Basic command", () => {
  beforeEach(() => {
    cy.intercept('GET', `https://demoqa.com/BookStore/v1/Books`).as('getBooks');
    cy.visit("https://demoqa.com/books");
    cy.wait('@getBooks');
    cy.login("note.26@hotmail.com", "P@ssw0rd#1");
  });

  after(() => {
    cy.contains("Log out").click();
    cy.contains("Welcome,").should("contain", "Welcome,");
  });

  it("Verify user after login should see user name correctly - invoke", () => {
    cy.get("[id=userName-value]")
      .invoke("text")
      .then((label) => {
        expect(label).eq("note.26@hotmail.com");
      });
  });

  it("Verify user after login should see user name correctly - text", () => {
    cy.get("[id=userName-value]").should('contain.text', 'note.26@hotmail.com');
  });

  it("user add book to collection success", () => {
    cy.addBookToCollection("Speaking JavaScript");
    cy.get('a[href="/profile?book=9781449365035"]').should(
      "contain",
      "Speaking JavaScript"
    );
    cy.get('[id="see-book-Speaking JavaScript"]')
      .invoke("text")
      .then((label) => {
        expect(label).eq("Speaking JavaScript");
      });
    cy.deleteAllbook();
  });
});
