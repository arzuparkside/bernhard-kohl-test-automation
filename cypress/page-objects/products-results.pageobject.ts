import { BasePageObject } from "./base.pageobject";

export class ProductResultsPageObject extends BasePageObject {
    private getProductCards = () => cy.get('[data-testid="product-card"]');

    public clickProductCard(index: number): this {
        index--;
        this.getProductCards().eq(index).click();
        return this;
    }
}