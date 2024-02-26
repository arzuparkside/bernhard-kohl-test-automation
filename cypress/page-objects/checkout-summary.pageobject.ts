import { BasePageObject } from "./base.pageobject";

export class CheckoutSummaryPageObject extends BasePageObject{
    private  getcheckoutContainer = () => cy.get('.checkout__aside.desktop-only')
    private getcheckoutItemNames = () => this.getcheckoutContainer().get('.sf-property__name');
    private getcheckoutItemValues = () => this.getcheckoutContainer().get('.sf-property__value');


    public checkOutNames(names : string[]){
        this.getcheckoutItemNames().shouldHaveText(names);
    }

    public checkOutValues(values : string[]){
        this.getcheckoutItemValues().shouldHaveText(values);
    }


    
}