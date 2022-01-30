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

    // cy.wait("@bookList").then((interception) => {
    //   //asset response from json
    //   cy.get(".mr-2").should(
    //     "contain",
    //     interception.response.body.books[0].title
    //   );
    // });
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

// before(() => {
//   // runs once before all tests
// });

// beforeEach(() => {
//   // root-level hook
//   // runs before every test block
// });

// afterEach(() => {
//   // runs after each test block
// });

// after(() => {
//   // runs once all tests are done
// });
