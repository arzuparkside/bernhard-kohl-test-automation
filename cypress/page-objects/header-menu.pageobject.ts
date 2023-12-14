import { BasePageObject } from "./base.pageobject";

export class HeaderMenuPageObject extends BasePageObject {
  private getOptions = () => cy.get('.overlay-page-header .parkside-header-menu .top-level-nav-header-item > a');

  constructor() {
    super();
  }

  public validateHrefValueOfOption(option: string, expectedValue: string): this {
    this.getOptions().contains(option).shouldHaveAttributeValue('href', expectedValue);
    return this;
  }

  public validateTextsOptions(expected: string []): this {
    this.getOptions().shouldHaveText(expected);
    return this;
  }
}