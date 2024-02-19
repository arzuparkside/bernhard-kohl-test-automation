import { CheckOutSummaryPageObject } from "../page-objects/check-out-summary.pageobject";
import { CookieControlModalPageObject } from "../page-objects/cookie-control-modal.pageobject";
import { DataStepPageObject } from "../page-objects/data-step.pageobject";
import { DeliveryStepPageObject } from "../page-objects/delivery-step.pageobject";
import { HeaderMenuPageObject } from "../page-objects/header-menu.pageobject";
import { LandingPageObject } from "../page-objects/landing.pageobject";
import { MyCartPageObject } from "../page-objects/my-cart.pageobject";
import { PaymentStepPageObject } from "../page-objects/payment-step.pageobject";
import { ProductDetailsPageObject } from "../page-objects/product-details.pageobject";
import { ProductResultsPageObject } from "../page-objects/products-results.pageobject";
import { SittingPositionModalPageObject } from "../page-objects/sitting-position-modal.pageobject";

describe('Purchase', () => {
  const cookieControlModal = new CookieControlModalPageObject();
  const headerMenu = new HeaderMenuPageObject();
  const landingPage = new LandingPageObject();
  const productsResultsPage = new ProductResultsPageObject();
  const productDetailsPage = new ProductDetailsPageObject();
  const sittingPositionModal = new SittingPositionModalPageObject();
  const myCart = new MyCartPageObject();
  const dataStep = new DataStepPageObject();
  const deliveryStep = new DeliveryStepPageObject();
  const paymentStep = new PaymentStepPageObject();
  const checkOutSummary = new CheckOutSummaryPageObject();

  beforeEach(() => {
    landingPage.visit();
    cookieControlModal.clickSaveSettingsButton();
  });

  it('should complete a purchase', () => {
    headerMenu.clickMenuItem('Fahrräder').clickFlyoutMenuLink('Rennräder');
    productsResultsPage.clickProductCard(2);
    cy.wait(1000);
    productDetailsPage.clickFrameSizeButton('62').clickAddToCartButton();
    sittingPositionModal.clickContinueWithoutSittingPositionButton();
    headerMenu.clickCartIcon();
    myCart.clickGoToCheckoutButton();
    dataStep.fillFirstNameTextBoxWith('John');
    dataStep.fillLastNameTextBoxWith('Doe');
    dataStep.fillEmailTextBoxWith('john.doea@parkside-interactive.com');
    dataStep.clickContinueToDeliveryButton();
    deliveryStep.fillFirstNameTextBoxWith('John');
    deliveryStep.fillLastNameTextBoxWith('Doe');
    deliveryStep.fillCompanyTextBoxWith('Parkside Interactive');
    deliveryStep.fillStreetAndHouseNumberTextBoxWith('Marienplatz 1');
    deliveryStep.fillPostalCodeTextBoxWith('8020');
    deliveryStep.fillCityTextBoxWith('Graz');
    deliveryStep.selectCountry('Österreich');
    deliveryStep.fillTelephoneNumberTextBoxWith('067052139152');
    deliveryStep.clickContinueToDeliveryMethodButton();
    deliveryStep.clickPickUpInStoreLabel();
    deliveryStep.clickContinueToBillingButton();
    /*paymentStep.clickCheckMoneyOrderOption();
    checkOutSummary.valitdateItemNamesTexts(['\n      Anzahl Artikel:\n    ', '\n      Zwischensumme (inkl. MwSt.):\n    ', '\n      Versandkosten:\n    ', '\n      Gesamtsumme (inkl. MwSt.):\n    ']);
    checkOutSummary.valitdateItemValuesTexts(['\n      1\n    ', '\n      1.199,00 €\n    ', '\n      0,00 €\n    ', '\n      1.199,00 €\n    '])
    cy.wait(10000);*/
  });
});