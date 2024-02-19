import { BasePageObject } from "./base.pageobject";

export class LandingPageObject extends BasePageObject {
  constructor() {
    super();
  }

  public visit(): this {
    cy.visit('/');
    return this;
  }
}