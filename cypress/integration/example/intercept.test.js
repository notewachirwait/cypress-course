describe("intercept example", () => {
  before(() => {
    cy.visit("https://demoqa.com");
  });
  it("Get book list ", () => {
    cy.intercept("GET", "https://demoqa.com/BookStore/v1/Books", {
      fixture: "bookList.json",
    }).as("bookList");

    cy.contains("Book Store Application").click();
    cy.wait("@bookList").its("response.statusCode").should("eq", 200);
    //asset response from web site
    cy.get(".mr-2").should("contain", "Git Pocket Guide");

    // cy.wait("@bookList").then((interception) => {
    //   //asset response from json
    //   cy.get(".mr-2").should(
    //     "contain",
    //     interception.response.body.books[0].title
    //   );
    // });
  });

  it("Get book detail ", () => {
    // **/BookStore/v1/Book?**
    cy.intercept(
      "GET",
      "https://demoqa.com/BookStore/v1/Book?ISBN=9781449325862",
      {
        fixture: "bookDetail.json",
      }
    ).as("bookDetail");

    cy.contains("Git Pocket Guide").click();
    cy.wait("@bookDetail").its("response.statusCode").should("eq", 200);
    // asset response from web site
    cy.get('label[id="userName-value"]').should(
      "contain",
      "Git Pocket Guide TEST"
    );

    // cy.wait("@bookDetail").then((interception) => {
    //   //asset response from json
    //   cy.get('label[id="userName-value"]').should(
    //     "contain",
    //     interception.response.body.title
    //   );
    // });
  });
});

// {
// 	log: false,
//   }
