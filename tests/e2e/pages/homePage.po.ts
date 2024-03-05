import BasePageObject from "./base.po";

class HomePage extends BasePageObject {
  readonly button = {
    playButton: () => cy.get("a[href='/play']"),
  };

  clickPlayButton(): void {
    this.button.playButton().should("be.visible").click({ force: true });
  }
}

export default new HomePage();
