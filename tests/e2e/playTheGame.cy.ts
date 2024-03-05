import { HomePage, PlayPage, GamePage } from "./pages";

describe("Game play", () => {
  beforeEach(function () {
    // Fixture API option 1
    cy.fixture("testdata.json").then(function (data) {
      this.data = data;
    });

    //Fixture API option 2
    // cy.fixture("testdata.json").as("data");

    cy.login("ewald@testcoders.nl", "securePassword123");
    cy.visit("/");
  });

  it("Select character", function () {
    const { role } = this.data; // Fixture API option 2

    HomePage.clickPlayButton();

    PlayPage.enterName(role.name);
    PlayPage.selectBuild(role.build);
    PlayPage.clickStart();

    GamePage.clickClickMeButton(5, true);
    GamePage.uploadFile("./tests/fixtures/testUpload.txt", true);
    GamePage.enterTextInput("Lorem Ipsum", true);
    GamePage.slideSlider(100, true);
  });

  it("Play game", function () {});
});
