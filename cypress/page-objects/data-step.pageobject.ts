import { BasePageObject } from './base.pageobject';

export class DataStepPageObject extends BasePageObject {
    private getFirstNameTextbox = () => cy.get('input#firstName');
    private getLastNameTextbox = () => cy.get('input#lastName');
    private getEmailTextbox = () => cy.get('input#email');
    private getContinueToNextStepButton = () => cy.get('.user-account .form__action button[type=submit]');

    public fillFirstNameTextbox(firstName: string) {
        this.getFirstNameTextbox().type(firstName);
    }

    public fillLastNameTextbox(lastName: string) {
        this.getLastNameTextbox().type(lastName);
    }

    public fillEmailTextbox(email: string) {
        this.getEmailTextbox().type(email);
    }

    public clickContinueToNextStepButton() {
        this.getContinueToNextStepButton().click();
    
    }
}