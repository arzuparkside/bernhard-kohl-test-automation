import { BasePageObject } from "./base.pageobject";

export class LandingPageObject extends BasePageObject {
  private getDescription = () => cy.get('.home-header .parkside-container-padding h1');

  constructor() {
    super();
  }

  public visit(): this {
    cy.visit('/');
    return this;
  }

  public validateTextDescription(expected: string): this {
    this.getDescription().shouldHaveText(expected);
    return this;
  }
}