import { BasePageObject } from "./base.pageobject";

export class PaymentStepsPageObject extends BasePageObject{
    private getCheckMoneyOrder = () => cy.get('.summary').contains('Check / Money order');

    public clickCheckMoneyOrder(){
        this.getCheckMoneyOrder().click();
    }
}