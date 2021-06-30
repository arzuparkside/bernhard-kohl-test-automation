import { BasePageObject } from "./base.pageobject";

export class MainPageObject extends BasePageObject {
  constructor() {
    super();
  }

  navigate = async (): Promise<MainPageObject> => {
    cy.visit("/");
    return this;
  };
}
