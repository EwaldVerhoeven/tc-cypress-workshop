describe("My first test", () => {
  it("successful manual login", function () {
    cy.visit("/");
    cy.get("[data-testid='login-button']").should("be.visible").click();
    cy.get("input[type='email']")
      .should("be.visible")
      .type("ewald@testcoders.nl")
      .should("have.value", "ewald@testcoders.nl");
    cy.get("input[type='password']")
      .should("be.visible")
      .type("securePassword123")
      .should("have.value", "securePassword123");
    cy.get("button[type='submit']").should("be.visible").click();
    cy.get("[data-testid='logout-button']");
  });
});
