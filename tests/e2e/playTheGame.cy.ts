import { HomePage, PlayPage, GamePage } from "./pages";

describe("Game play", () => {
  before(function () {
    cy.request("/api/builds?build=mage") // (random)request to simulate 'preparing' stuff like testing for a certain state
      .then((resp) => {
        expect(resp.status).to.eq(200);
        console.log(resp);
      });
  });

  beforeEach(function () {
    // Fixture access option 1
    cy.fixture("testdata.json").then(function (data) {
      this.testData = data;
    });

    //Fixture access option 2
    cy.fixture("testdata.json").as("data");

    // cy.login("ewald@testcoders.nl", "securePassword123");
    cy.visit("/");
  });

  it("Select character", function () {
    // cy.intercept("GET", "/api/builds").as("builds"); // Intercept 1 - Spying
    cy.intercept("GET", "api/builds", { fixture: "pumpitup.json" }); // Intercept 2 - Mocking response

    const { role } = this.testData; // Required for Fixture option 2

    HomePage.clickPlayButton();
    // cy.wait("@builds").its("response.statusCode").should("eq", 200); // Intercept 1 - waiting
    PlayPage.enterName(role.name);
    PlayPage.selectBuild(role.build);
    

    PlayPage.clickStart();
    GamePage.clickClickMeButton(5, true);
    GamePage.uploadFile("./tests/fixtures/testUpload.txt", true);
    GamePage.enterTextInput("Lorem Ipsum", true);
    GamePage.slideSlider(100, true);
  });
});
