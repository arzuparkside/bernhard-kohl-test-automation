export class ProductDetailsPageObject {
    private getFrameSizesButtons = () => cy.get('.max-lg\\:hidden .product-frames__frame-size');
    private getAddToCartButton = () => cy.get('.product__add-to-cart-actions button');

    public clickFrameSizeButton(size: string): this {
        this.getFrameSizesButtons().contains(size).click();
        return this;
    }

    public clickAddToCartButton(): this {
        this.getAddToCartButton().click();
        return this;
    }
}