describe("My first test", () => {
  it("successful manual login", function () {
    cy.visit("/");
    cy.get("[data-testid='login-button']").should("be.visible").click();
    cy.get("input[type='email']")
      .should("be.visible")
      .type("coolusername@email.com")
      .should("have.value", "coolusername@email.com");
    cy.get("input[type='password']")
      .should("be.visible")
      .type("welcome123")
      .should("have.value", "welcome123");
    cy.get("button[type='submit']")
      .should("be.visible")
      .click()
      .should(() => {
        expect(localStorage.getItem("login-store")).to.eq(
          '{"state":{"isLoggedIn":true},"version":0}',
        );
      });
    cy.get("[data-testid='logout-button']").should("be.visible");
  });
});
