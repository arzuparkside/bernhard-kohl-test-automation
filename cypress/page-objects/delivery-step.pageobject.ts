import { BasePageObject } from "./base.pageobject";

export class DeliveryStepPageObject extends BasePageObject {
    private getFirstNameTextBox = () => cy.get('input#firstname');
    private getLastNameTextBox = () => cy.get('input#lastname');
    private getCompanyTextBox = () => cy.get('input#company');
    private getStreetAndHouseTextBox = () => cy.get('input#street');
    private getPostalCodeTextBox = () => cy.get('input#postcode');
    private getCityTextBox = () => cy.get('input#city');
    private getCountryDropdownTextBox = () => cy.get('select#Land');
    private getTelephoneNumberTextBox = () => cy.get('input#telephone');
    private getContinueToDeliveryButton = () => cy.get('#shipping-details-form button[type=submit]');
    private getShippingOptionRadioButton = () => cy.get('.shipping-provider .form__radio-group').contains('Abholung bei uns im Store');
    private getContinueToBillingButton = () => cy.get('.shipping-provider .form__action button');


    public fillFirstNameTextBoxWith(text: string) {
        this.getFirstNameTextBox().type(text);
    }

    public fillLastNameTextBoxWith(text: string) {
        this.getLastNameTextBox().type(text);
    }

    public fillCompanyTextBoxWith(text: string) {
        this.getCompanyTextBox().type(text);
    }

    public fillStreetAndHouseTextBoxWith(text: string) {
        this.getStreetAndHouseTextBox().type(text);
    }

    public fillPostalCodeTextBoxWith(text: string) {
        this.getPostalCodeTextBox().type(text);
    }

    public fillCityTextBoxWith(text: string) {
        this.getCityTextBox().type(text);
    }

    public selectCountry(country: string) {
        this.getCountryDropdownTextBox().select(country);
    }

    public fillTelephoneNumberTextBoxWith(text: string) {
        this.getTelephoneNumberTextBox().type(text);
    }

    public clickContinueToDeliveryButton() {
        this.getContinueToDeliveryButton().click();
    }

    public chooseShippingOptionRadioButton() {
        this.getShippingOptionRadioButton().click();
    }

    public clickContinueToBillingButton() {
        this.getContinueToBillingButton().click();
    }
}