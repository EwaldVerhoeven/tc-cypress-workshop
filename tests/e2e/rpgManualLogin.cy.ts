describe("My first test", () => {
  it("successful manual login", function () {
    cy.loginRpg("ewald@testcoders.nl", "securePassword123");
  });
});
