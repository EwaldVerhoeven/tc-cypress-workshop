describe("Session method example", () => {
  beforeEach(function () {
    const t0 = performance.now();
    cy.login("ewald@testcoders.nl", "securePassword123");
    cy.wrap(performance.now()).then((t1) => {
      cy.log(`Page load took ${t1 - t0} milliseconds.`);
    });
  });

  it("First manual login", function () {
    cy.log("this is the first login");
  });

  it("Second manual login", function () {
    cy.log("this is the second login");
  });

  it("Third manual login", function () {
    cy.log("this is the third login");
  });
});
