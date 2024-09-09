import { HomePage } from "./pages";
import { JsonSchemas } from "../schemas";

describe("JSON schema validation", () => {
  it("Should validate the API response of /builds against JSON schema", () => {
    cy.login("ewald@testcoders.nl", "securePassword123");
    cy.visit("/");
    cy.intercept("GET", "/api/builds").as("/builds");

    //Steps
    HomePage.clickPlayButton();

    // Validation
    cy.wait("@/builds")
      .its("response.body")
      .then(JsonSchemas.assertSchema("response", "3.0.0"))
      .log("Schema validation success");
  });
});
