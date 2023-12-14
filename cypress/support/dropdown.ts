export class Dropdown {
  private field: () => Cypress.Chainable<JQuery<HTMLElement>>;
  private options: () => Cypress.Chainable<JQuery<HTMLElement>>;

  constructor(field: () => Cypress.Chainable<JQuery<HTMLElement>>, options: () => Cypress.Chainable<JQuery<HTMLElement>>){
    this.field = field;
    this.options = options;
  }   

  public selectByText(option: string): this {
    this.field().click();
    this.options().shouldExist().contains(option).click();
    return this;
  }

  public selectByIndex(option: number): this {
    this.field().click();
    this.options().shouldExist().eq(option).click();
    return this;
  }
}