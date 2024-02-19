import { BasePageObject } from "./base.pageobject";

export class CookieControlModalPageObject extends BasePageObject {
    private getSaveSettingsButton = () => cy.get('.cookieControl__ModalContent .cookieControl__ModalButtons').contains('Speichern');

    public clickSaveSettingsButton(): this {
        this.getSaveSettingsButton().click();
        return this;
    }
}