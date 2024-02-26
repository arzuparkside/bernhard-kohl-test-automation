import { BasePageObject } from "./base.pageobject";

export class DeliveryStepPageObject extends BasePageObject {
    private getFirstNameTextBox = () => cy.get(' input#firstname');
    private getLastNameTextBox = () => cy.get(' input#lastname');
    private getCompanyTextBox = () => cy.get(' input#company');
    private getStreetAndHouseNumberTextBox = () => cy.get(' input#street');
    private getPostalCodeTextBox = () => cy.get(' input#postcode');
    private getCityTextBox = () => cy.get(' input#city');
    private getCountryDropdown = () => cy.get(' select#Land');
    private getTelephoneNumberTextBox = () => cy.get(' input#telephone');
    private getContinueToDeliveryMethodButton = () => cy.get('#shipping-details-form button[type=submit]');
    private getPickUpInStoreLabel = () => cy.get('.shipping-provider .form__radio-group').contains('Abholung bei uns im Store');
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

    public fillStreetAndHouseNumberTextBoxWith(text: string) {
        this.getStreetAndHouseNumberTextBox().type(text);
    }

    public fillPostalCodeTextBoxWith(text: string) {
        this.getPostalCodeTextBox().type(text);
    }

    public fillCityTextBoxWith(text: string) {
        this.getCityTextBox().type(text);
    }

    public selectCountry(country: string) {
        this.getCountryDropdown().select(country);
    }

    public fillTelephoneNumberTextBoxWith(text: string) {
        this.getTelephoneNumberTextBox().type(text);
    }

    public clickContinueToDeliveryMethodButton() {
        this.getContinueToDeliveryMethodButton().click();
    }

    public clickPickUpInStoreLabel() {
        this.getPickUpInStoreLabel().click();
    }

    public clickContinueToBillingButton() {
        this.getContinueToBillingButton().click();
    }
}