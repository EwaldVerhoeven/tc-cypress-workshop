import BasePageObject from "./base.po";

class LoginPage extends BasePageObject {
  readonly modal = {
    usernameInput: () => cy.get("input[type='email']"),
    passwordInput: () => cy.get("input[type='password']"),
  };

  readonly button = {
    submitButton: () => cy.get("button[type='submit']"),
  };

  enterCredentials(usr: string, pwd: string): void {
    this.modal
      .usernameInput()
      .should("be.visible")
      .type(usr)
      .should("have.value", usr);
    this.modal
      .passwordInput()
      .should("be.visible")
      .type(pwd)
      .should("have.value", pwd);
    this.button
      .submitButton()
      .should("be.visible")
      .click()
      .should(() => {
        expect(localStorage.getItem("login-store")).to.eq(
          '{"state":{"isLoggedIn":true},"version":0}',
        );
      });
  }
}

export default new LoginPage();
