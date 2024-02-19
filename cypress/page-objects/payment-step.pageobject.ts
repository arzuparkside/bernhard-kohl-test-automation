import { BasePageObject } from "./base.pageobject";

export class PaymentStepPageObject extends BasePageObject {
    private getCheckMoneyOrderOption = () => cy.get('.summary').contains('Check / Money order');

    public clickCheckMoneyOrderOption() {
        this.getCheckMoneyOrderOption().click();
    }
}