import { build } from "../../utils/types";
import BasePageObject from "./base.po";

class PlayPage extends BasePageObject {
  readonly settings = {
    // Demo .first() .next() .find()
    nameInput: (name: string) =>
      cy
        .get("[data-testid='character-card']") // yields 2 elements
        .first()
        .next()
        .find("input[name='name']")
        .should("be.visible")
        .type(name),

    buildInput: () => cy.get("select").should("be.visible"),
  };

  readonly buttons = {
    startButton: () => cy.get("button").contains("Start!").should("be.visible"),
  };

  enterName(name: string): void {
    this.settings.nameInput(name);
  }

  selectBuild(build: build): void {
    this.settings.buildInput().select(build, { force: true });
  }

  clickStart(): void {
    this.buttons.startButton().click();
  }
}

export default new PlayPage();
