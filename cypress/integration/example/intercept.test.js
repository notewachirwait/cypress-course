describe("intercept example", () => {
  before(() => {
    cy.visit("https://demoqa.com");
  });
  it("user get book list success", () => {
    cy.intercept("GET", "https://demoqa.com/BookStore/v1/Books", {
      fixture: "bookList.json",
    }).as("bookList");

    cy.contains("Book Store Application").click();

    cy.wait("@bookList").its("response.statusCode").should("eq", 200);
    //asset response from web site
    cy.get(".mr-2").should("contain", "Git Pocket Guide");

    cy.get("@bookList").then((interception) => {
      //asset response from json
      cy.get(".mr-2").should(
        "contain",
        interception.response.body.books[0].title
      );
    });
  });

  it("user get book detail  success", () => {
    // **/BookStore/v1/Book?**
    cy.intercept(
      "GET",
      "https://demoqa.com/BookStore/v1/Book?ISBN=9781449325862",
      {
        fixture: "bookDetail.json",
      }
    ).as("bookDetail");

    cy.contains("Git Pocket Guide").click();
    cy.wait("@bookDetail");
    // assert request url
    cy.get("@bookDetail")
      .its("request.url")
      .should("eq", "https://demoqa.com/BookStore/v1/Book?ISBN=9781449325862");
    // assert response status
    cy.get("@bookDetail").its("response.statusCode").should("eq", 200);

    // assert response headers
    cy.get("@bookDetail")
      .its("response.headers.content-type")
      .should("eq", "application/json");

    // assert response body

    cy.get("@bookDetail")
      .its("response.body.author")
      .should("eq", "Richard E. Silverman");
    // assert request body
    cy.get("@bookDetail").its("request.body").should("eq", "");

    // assert request header
    cy.get("@bookDetail")
      .its("request.headers.host")
      .should("eq", "demoqa.com");

    // asset response from web site
    cy.get('label[id="userName-value"]').should(
      "contain",
      "Git Pocket Guide TEST"
    );

    cy.get("@bookDetail").then((interception) => {
      //asset response from json
      cy.get('label[id="userName-value"]').should(
        "contain",
        interception.response.body.title
      );
    });
  });
});
