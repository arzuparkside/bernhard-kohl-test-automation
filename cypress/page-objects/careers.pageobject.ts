import { BasePageObject } from "./base.pageobject";

export class CareersPageObject extends BasePageObject {
  private getOpenPositionsSections = () => cy.get('.open-positions');

  constructor() {
    super();
  }

  public visit(): this {
    cy.visit('/careers');
    return this;
  }

  public clickPosition(position: string): this {
    this.getOpenPositionsSections().contains(position).click();
    return this;
  }
}