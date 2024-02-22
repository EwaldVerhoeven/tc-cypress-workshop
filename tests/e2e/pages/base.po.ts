export default class BasePageObject {
  readonly page = {
    title: () => cy.title(),
  };
}
