describe("Intercept", () => {
  it("user intercept with server response ", () => {
    cy.intercept("GET", "https://automationintesting.online/room/").as(
      "roomList"
    );
    cy.visit("https://automationintesting.online/#/");
    cy.wait("@roomList");
    cy.get("@roomList").its("response.statusCode").should("eq", 200);
    cy.get("@roomList").then((interception) => {
      cy.log(JSON.stringify(interception.response.body.rooms[0]));

      //asset response from json
      cy.contains("TV").should(
        "contain.text",
        interception.response.body.rooms[0].features[0]
      );
    });
  });

  it("user intercept with mock response ", () => {
    cy.intercept("GET", "https://automationintesting.online/room/", {
      fixture: "roomList.json",
    }).as("roomListMock");

    cy.visit("https://automationintesting.online/#/");
    cy.wait("@roomListMock");
    cy.get("@roomListMock").its("response.statusCode").should("eq", 200);
    cy.get("@roomListMock").then((interception) => {
      cy.log(JSON.stringify(interception.response.body.rooms[0]));

      //asset response from json
      cy.contains("test1").should(
        "contain.text",
        interception.response.body.rooms[0].features[3]
      );
    });
  });
});
