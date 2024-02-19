import { BasePageObject } from "./base.pageobject";

export class ModalPageObject extends BasePageObject {
    protected getContainer = () => cy.get('.sf-modal__container');
}