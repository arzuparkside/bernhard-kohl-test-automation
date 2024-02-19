import { CookieControlModalPageObject } from "../page-objects/cookie-control-modal.pageobject";
import { HeaderMenuPageObject } from "../page-objects/header-menu.pageobject";
import { LandingPageObject } from "../page-objects/landing.pageobject";
import { MyCartPageObject } from "../page-objects/my-cart.pageobject";
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
    cy.wait(10000);
  });
});