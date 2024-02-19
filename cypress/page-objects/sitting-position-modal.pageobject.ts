import { ModalPageObject } from "./modal.pageobject";

export class SittingPositionModalPageObject extends ModalPageObject {
    private getContinueWithoutSittingPositionButton = () => this.getContainer().contains('Ohne Sitzpositionseinstellung fortfahren');

    public clickContinueWithoutSittingPositionButton(): this {
        this.getContinueWithoutSittingPositionButton().click();
        return this;
    }
}