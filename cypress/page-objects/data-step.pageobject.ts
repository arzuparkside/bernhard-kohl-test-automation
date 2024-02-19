import { BasePageObject } from "./base.pageobject";

export class DataStepPageObject extends BasePageObject {
    private getFirstNameTextBox = () => cy.get(' input#firstName');
    private getLastNameTextBox = () => cy.get(' input#lastName');
    private getEmailTextBox = () => cy.get(' input#email');
    private getContinueToDeliveryButton = () => cy.get('.user-account .form__action button[type=submit]');

    public fillFirstNameTextBoxWith(text: string) {
        this.getFirstNameTextBox().type(text);
    }

    public fillLastNameTextBoxWith(text: string) {
        this.getLastNameTextBox().type(text);
    }

    public fillEmailTextBoxWith(text: string) {
        this.getEmailTextBox().type(text);
    }

    public clickContinueToDeliveryButton() {
        this.getContinueToDeliveryButton().click();
    }
}