describe("My first test", () => {
  before(function () {
    cy.login("ewald@testcoders.nl", "securePassword123");
  });
  it("successful manual login", function () {
    cy.log("this a test");
  });
});
