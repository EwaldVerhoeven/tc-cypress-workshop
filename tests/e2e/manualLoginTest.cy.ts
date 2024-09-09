describe("My first test", () => {
  beforeEach(() => {
    cy.login("ewald@testcoders.nl", "securePassword123");
  });
  it("successful manual login", () => {
    cy.log("this a test");
  });
});
