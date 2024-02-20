describe("My first test", () => {
  it("successful manual login", function () {
    cy.loginRpg("", "");
    cy.log("IT block");
  });
});
