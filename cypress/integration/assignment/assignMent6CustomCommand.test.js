describe("Custom command", () => {
  const data = {
    name: "note",
    email: "note@hotmail.com",
    phone: "01232342424",
    subject: "note@hotmail.com",
    description: "testsubmitfom:::::note@hotmail.com",
  };
  it("User able to submit form", () => {
    cy.intercept("POST", " https://automationintesting.online/message/").as(
      "submitForm"
    );
    cy.visit("https://automationintesting.online/#/");
    cy.userSubmitForm(data);
    cy.wait("@submitForm");
    cy.get("@submitForm").its("response.statusCode").should("eq", 201);
    cy.get("@submitForm").then((res) => {
      cy.contains("note@hotmail.com").should(
        "contain.text",
        res.response.body.email
      );
    });
  });
});
