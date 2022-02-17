import a from "../../fixtures/name.json";

describe("Poc foreach", () => {
  a.forEach((user) => {
    it("Can use foreach to log data correctly", () => {
      cy.log(user.name);
    });
  });
});
