describe("upload file", () => {
  beforeEach(() => {
    cy.visit("https://www.file.io/");
  });
  it("upload file example", () => {
    ////wait cypress team fix this issue https://github.com/cypress-io/cypress/issues/19763
    cy.get('input[type="file"]').selectFile(
      "cypress/fileUpload/Screen Shot 2565-01-21 at 15.26.39.png",
      {
        force: true,
      }
    );
    cy.get(".css-8zb1i9 .message").should(
      "contain",
      "Your file is ready to share!"
    );
  });
});
