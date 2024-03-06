import BasePageObject from "./base.po";

class GamePage extends BasePageObject {
  readonly game = {
    clickMeButton: () =>
      cy.get('[data-testid="adventure-clicker"] > .flex > .inline-flex'),
    uploadInput: () =>
      cy.get("[data-testid='adventure-uploader']").find("input"),
    textInput: () => cy.get("[data-testid='adventure-typer']").find("input"),
    slider: () => cy.get("[data-testid='adventure-slider']").find(".block"),
  };

  readonly taskLabels = {
    clickMeTaskLabel: () =>
      cy
        .get('[data-testid="adventure-clicker"]')
        .find("span[data-task='clicker']"),
    uploadTaskLabel: () =>
      cy.get('[data-testid="adventure-uploader"] > .items-center > .text-sm'),
    textInputTaskLabel: () =>
      cy.get('[data-testid="adventure-typer"] > .items-center > .text-sm'),
    sliderTaskLabel: () =>
      cy.get('[data-testid="adventure-slider"] > .justify-between > .text-sm'),
  };

  private checkLevelUp(message: string, taskLabel: any): void {
    //TODO: set proper type for taskLabel
    taskLabel().should("be.visible").and("have.text", message);
  }

  clickClickMeButton(clicks: number, levelUp?: boolean): void {
    for (let n = 0; n < clicks; n++) {
      this.game
        .clickMeButton()
        .should("be.visible")
        .click()
        .should("have.text", `Click me ${4 - n} times`);
    }

    {
      levelUp
        ? this.checkLevelUp(
            "Great job! You levelled up",
            this.taskLabels.clickMeTaskLabel,
          )
        : "";
    }
  }

  uploadFile(path: string, levelUp?: boolean): void {
    this.game.uploadInput().should("be.visible").selectFile(path);

    {
      levelUp
        ? this.checkLevelUp(
            "File selected, level up!",
            this.taskLabels.uploadTaskLabel,
          )
        : "";
    }
  }

  enterTextInput(text: string, levelUp?: boolean): void {
    this.game.textInput().should("be.visible").type(text);

    {
      levelUp
        ? this.checkLevelUp(
            "Dolar sit amet!",
            this.taskLabels.textInputTaskLabel,
          )
        : "";
    }
  }

  slideSlider(percentage: number, levelUp?: boolean): void {
    //OPTION 1 - invoke jQuery methods like .val() or .attr() to manipulate your DOM and trigger
    // this.game.slider().should("be.visible").invoke('attr', 'aria-valuenow', '100').trigger('mousemove')

    //OPTION 2 - simulating combination of click and arrowkeys
    // https://www.radix-ui.com/primitives/docs/components/slider#keyboard-interactions
    this.game
      .slider()
      .should("be.visible")
      .focus()
      .type(Cypress._.repeat("{rightarrow}", percentage));

    {
      levelUp
        ? this.checkLevelUp(
            "Slid to the next level!",
            this.taskLabels.sliderTaskLabel,
          )
        : "";
    }
  }
}

export default new GamePage();
