import { LandingPageObject } from "../page-objects/landing.pageobject";
import { HeaderMenuPageObject } from "../page-objects/header-menu.pageobject";
import { ContactUsPageObject } from "../page-objects/contact-us.pageobject";
import { CareersPageObject } from "../page-objects/careers.pageobject";
import { ApplicationFormPageObject } from "../page-objects/application-form.pageobject";

describe('Sample Suite', () => {
  const landingPage = new LandingPageObject();
  const headerMenu = new HeaderMenuPageObject();
  const careersPage = new CareersPageObject();
  const contactUsPage = new ContactUsPageObject();
  const applicationForm = new ApplicationFormPageObject();

  beforeEach(() => {
    landingPage.visit();
  });

  it('validates some text [smoke]', () => {
    landingPage.validateTextDescription('This is where custom development and design begins. Next level digital delivery  and success is where it ends.');
  });

  it('validates a collection of texts', () => {
    headerMenu.validateTextsOptions(['Services', 'Case Studies', 'Expertise', 'Careers', 'About', 'Contact']);
  });

  it('validates value of a text box', () => {
    const inputText = 'Jean Muffin'
    contactUsPage.visit().fillFirstAndLastNameTextBoxWith(inputText).validateValueFirstAndLastNameTextBox(inputText);
  });

  it('chooses an option from a dropdown', () => {
    careersPage.visit().clickPosition('Speculative Application');
    applicationForm.selectHowFoundAboutPosition('Der Brutkasten');
  });

  it('validates the href attribute of a link', () => {
    headerMenu.validateHrefValueOfOption('Services', 'https://www.parkside-interactive.com/services/');
  })
});