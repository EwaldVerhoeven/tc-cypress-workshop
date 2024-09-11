describe("Game play", () => {
  beforeEach(() => {
    // cy.fixture("testdata.json").then(function (data) {
    //   this.testData = data;
    // });
    // cy.fixture("testdata.json").as("data") //OPTION 2: acces data with 'this.data.name'
    cy.login("ewald@testcoders.nl", "securePassword123");
    cy.visit("/");
  });

  it("play the game as expected", function () {
    const { role } = this.testData // Required for OPTION 1 --> access data with 'this.role.name' (for example)

    cy.get("a[href='/play']").should("be.visible").click({ force: true });
    cy.get("[data-testid='character-card']") // yields 2 elements
      .first()
      .next()
      .find("input[name='name']")
      .should("be.visible")
      .type(role.name);
    cy.get("select").should("be.visible").select(role.build, { force: true });
    cy.get("button").contains("Start!").should("be.visible").click();

    for (let n = 0; n < 5; n++) {
      cy.get('[data-testid="adventure-clicker"] > .flex > .inline-flex')
        .should("be.visible")
        .click()
        .should("have.text", `Click me ${4 - n} times`);
    }
    cy.get('[data-testid="adventure-clicker"]')
      .find("span[data-task='clicker']")
      .should("be.visible")
      .and("have.text", "Great job! You levelled up");

    cy.get("[data-testid='adventure-uploader']")
      .find("input")
      .should("be.visible")
      .selectFile("./tests/fixtures/testUpload.txt");
    cy.get('[data-testid="adventure-uploader"] > .items-center > .text-sm')
      .should("be.visible")
      .and("have.text", "File selected, level up!");

    cy.get("[data-testid='adventure-typer']")
      .find("input")
      .should("be.visible")
      .type("Lorem Ipsum");
    cy.get('[data-testid="adventure-typer"] > .items-center > .text-sm')
      .should("be.visible")
      .and("have.text", "Dolar sit amet!");

    cy.get("[data-testid='adventure-slider']")
      .find(".block")
      .should("be.visible")
      .focus()
      .type(Cypress._.repeat("{rightarrow}", 100));
    cy.get('[data-testid="adventure-slider"] > .items-center > .text-sm')
      .should("be.visible")
      .and("have.text", "Slid to the next level!");
  });
});
