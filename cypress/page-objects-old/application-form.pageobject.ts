import { Dropdown } from "../support/dropdown";
import { BasePageObject } from "./base.pageobject";

export class ApplicationFormPageObject extends BasePageObject {
  private getHowFoundAboutPositionDropdownField = () => cy.get('.ginput_container select + div');
  private getHowFoundAboutPositionDropdownOptions = () => cy.get('.ginput_container select + div li');
  private howFoundAboutPositionDropdown = new Dropdown(this.getHowFoundAboutPositionDropdownField, this.getHowFoundAboutPositionDropdownOptions);

  constructor() {
    super();
  }

  public selectHowFoundAboutPosition(option: string):  this {
    this.howFoundAboutPositionDropdown.selectByText(option);
    return this;
  }
}