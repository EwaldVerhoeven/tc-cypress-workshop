describe("My first test", () => {
  before(function () {
    cy.loginRpg("ewald@testcoders.nl", "securePassword123");
  });
  it("successful manual login", function () {
    cy.log("this a test");
  });
});
