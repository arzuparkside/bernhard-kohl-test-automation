import { BasePageObject } from "./base.pageobject";

export class MyCartPageObject extends BasePageObject{
    private getContainer = () => cy.get('.sf-sidebar__bottom');
    private getGoToCheckoutButton = () => this.getContainer().contains('Zur Kassa');

    public clickGoToCheckoutButton(): this {
        this.getGoToCheckoutButton().click();
        return this;
    }
}