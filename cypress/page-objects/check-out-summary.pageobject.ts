import { BasePageObject } from "./base.pageobject";

export class CheckOutSummaryPageObject extends BasePageObject {
    private getContainer = () => cy.get('.checkout__aside.desktop-only');
    private getItemNames = () => this.getContainer().find('.sf-property__name');
    private getItemValues = () => this.getContainer().find('.sf-property__value');

    public valitdateItemNamesTexts(expected: string[]) {
        this.getItemNames().shouldHaveText(expected);
    }

    public valitdateItemValuesTexts(expected: string[]) {
        this.getItemValues().shouldHaveText(expected);
    }
}