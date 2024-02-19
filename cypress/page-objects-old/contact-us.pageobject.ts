import { BasePageObject } from "./base.pageobject";

export class ContactUsPageObject extends BasePageObject {
  private getFirstAndLastNameTextBox = () => cy.get('input[placeholder="First and last name *"]');

  constructor() {
    super();
  }

  public visit(): this {
    cy.visit('/contact');
    return this;
  }

  public fillFirstAndLastNameTextBoxWith(text: string): this {
    this.getFirstAndLastNameTextBox().type(text);
    return this;
  }

  public validateValueFirstAndLastNameTextBox(expected: string): this {
    this.getFirstAndLastNameTextBox().shouldHaveValue(expected);
    return this;
  }
}