import { home } from "./pages";

describe("Game play", () => {
  before(function () {
    // cy.fixture("testdata.json").then(function (data) {
    //   this.data = data;
    // });
    cy.fixture("testdata.json").as("user");
    cy.loginRpg("ewald@testcoders.nl", "securePassword123");
    cy.visit("/");
  });

  it("happy flow", function () {
    const { role_1 } = this.user;

    home.clickPlayButton();

    cy.get("[data-testid='character-card']") // yields 2 elements
      .first()
      .next()
      .find("input[name='name']")
      .should("be.visible")
      // .type(this.data.role_1.name); //enter name
      .type(role_1.name);

    cy.get("select").should("be.visible").select(role_1.build, { force: true }); //select mage

    cy.get("button").contains("Start!").click();

    for (let n = 0; n < 5; n++) {
      cy.get('[data-testid="adventure-clicker"] > .flex > .inline-flex')
        .should("be.visible")
        .click(); //click play button
    }

    cy.get("[data-testid='adventure-uploader']")
      .find("input")
      .should("be.visible")
      .selectFile("./tests/fixtures/testUpload.txt");
    // cy.get("").should("be.visible").type("Ipsum lorem");
  });
});
