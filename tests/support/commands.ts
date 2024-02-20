// export{}
// declare global {
//     namespace Cypress {
//         interface Chainable {
//             dataCy(value: string, timeout?: number): Chainable<Element>;
//             loginRpg(username: string, password: string): Chainable<Element>;
//         }

//     }
// }

declare namespace Cypress {
  interface Chainable {
    dataCy(value: string, timeout?: number): Chainable<Element>;
    loginRpg(username: string, password: string): Chainable<Element>;
  }
}

Cypress.Commands.add("dataCy", (value, timeout) => {
  cy.get(`[data-cy="${value}"]`, { timeout });
});

Cypress.Commands.add("loginRpg", (username, password) => {
  cy.session([username, password], () => {
    cy.visit("/");
    cy.get("[data-testid='login-button']").should("be.visible").click();
    cy.get("input[type='email']")
      .should("be.visible")
      .type(username)
      .should("have.value", username);
    cy.get("input[type='password']")
      .should("be.visible")
      .type(password)
      .should("have.value", password);
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
