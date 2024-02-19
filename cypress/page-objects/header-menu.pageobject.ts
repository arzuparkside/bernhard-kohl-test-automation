import { BasePageObject } from "./base.pageobject";

export class HeaderMenuPageObject extends BasePageObject {
    private getMenuItems = () => cy.get('.bk-header__wrapper .bk-header-item');
    private getFlyoutMenuLinks = () => cy.get('.bk-flyout-menu--open .bk-flyout-menu__links');
    private getCartIcon = () => cy.get('[label=Warenkorb]');

    public clickMenuItem(menuItem: string): this {
        this.getMenuItems().contains(menuItem).click();
        return this;
    }

    public clickFlyoutMenuLink(flyoutMenuLink: string): this {
        this.getFlyoutMenuLinks().contains(flyoutMenuLink).click();
        return this;
    }

    public clickCartIcon(): this {
        this.getCartIcon().click();
        return this;
    }
}