// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
declare namespace Cypress {
  interface Chainable<Subject = any> {
    hover(): Cypress.Chainable<JQuery<HTMLElement>>;
    shouldExist(options?: { reverse: boolean }): Cypress.Chainable<JQuery<HTMLElement>>;
    shouldBeDisplayed(options?: { reverse: boolean }): Cypress.Chainable<JQuery<HTMLElement>>;
    shouldBeEnabled(options?: { reverse: boolean }): Cypress.Chainable<JQuery<HTMLElement>>;

    shouldHaveText(expected: string | string []): Cypress.Chainable<JQuery<HTMLElement>>;
    shouldHaveValue(expected: string | string []): Cypress.Chainable<JQuery<HTMLElement>>;
    shouldHaveAttribute(expected: string): Cypress.Chainable<JQuery<HTMLElement>>;
    shouldHaveAttributeValue(attribute: string, expected: string | string []): Cypress.Chainable<JQuery<HTMLElement>>;
  }
}

function isACollection(element: Cypress.Chainable<JQuery<HTMLElement>>): Cypress.Chainable<boolean> {
  return element.its('length').then(length => (length > 1))
}

function validateTextSingleElement(expected: string, element: Cypress.Chainable<JQuery<HTMLElement>>) {
  return element.should('have.text', expected);
}

function validateValueSingleElement(expected: string, element: Cypress.Chainable<JQuery<HTMLElement>>) {
  return element.should('have.value', expected);
}

function validateHasAttributeSingleElement(attribute: string, expected: string, element: Cypress.Chainable<JQuery<HTMLElement>>) {
  return element.should('have.attr', attribute);
}

function validateHasAttributeValueSingleElement(attribute: string, expected: string, element: Cypress.Chainable<JQuery<HTMLElement>>) {
  return element.should('have.attr', attribute, expected);
}

function validateTextsCollectionElements(expected: string [], elements: Cypress.Chainable<JQuery<HTMLElement>>) {
  return elements.each((element, index) => {
    validateTextSingleElement(expected[index], cy.wrap(element));
  });
}

function validateValuesCollectionElements(expected: string [], elements: Cypress.Chainable<JQuery<HTMLElement>>) {
  return elements.each((element, index) => {
    validateValueSingleElement(expected[index], cy.wrap(element));
  });
}

function validateHasAttributeCollectionElements(attribute: string, expected: string, elements: Cypress.Chainable<JQuery<HTMLElement>>) {
  return elements.each(element => {
    validateHasAttributeSingleElement(attribute, expected, cy.wrap(element));
  });
}

function validateHasAttributeValueCollectionElements(attribute: string, expected: string [], elements: Cypress.Chainable<JQuery<HTMLElement>>) {
  return elements.each((element, index) => {
    validateHasAttributeValueSingleElement(attribute, expected[index], cy.wrap(element));
  });
}

// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
Cypress.Commands.add('hover', { prevSubject: 'element' }, (subject) => {
  return cy.wrap(subject).trigger('mouseover', {force:true});
})
Cypress.Commands.add('shouldExist', { prevSubject: 'element' }, (subject, options: { reverse: boolean } = { reverse: false }) => {
  if (options.reverse) 
    return cy.wrap(subject).should('not.exist');
  return cy.wrap(subject).should('exist');
});

Cypress.Commands.add('shouldBeDisplayed', { prevSubject: 'element' }, (subject, options: { reverse: boolean } = { reverse: false }) => {
  if (options.reverse) 
    return cy.wrap(subject).should('not.be.visible');
  return cy.wrap(subject).should('be.visible');
});

Cypress.Commands.add('shouldBeEnabled', { prevSubject: 'element' }, (subject, options: { reverse: boolean } = { reverse: false }) => {
  if (options.reverse) 
    return cy.wrap(subject).should('not.be.enabled');
  return cy.wrap(subject).should('be.enabled');
});

Cypress.Commands.add('shouldHaveText', { prevSubject: 'element' }, (subject, expected: string | string []) => {
  return isACollection(cy.wrap(subject)).then(isACollection => {
    if(isACollection)
      return validateTextsCollectionElements(expected as string[], cy.wrap(subject));
    return validateTextSingleElement(expected as string, cy.wrap(subject));
  })
});

Cypress.Commands.add('shouldHaveValue', { prevSubject: 'element' }, (subject, expected: string | string []) => {
  return isACollection(cy.wrap(subject)).then(isACollection => {
    if(isACollection)
      return validateValuesCollectionElements(expected as string[], cy.wrap(subject));
    return validateValueSingleElement(expected as string, cy.wrap(subject));
  })
});

Cypress.Commands.add('shouldHaveAttribute', { prevSubject: 'element' }, (subject, attribute: string, expected: string) => {
  return isACollection(cy.wrap(subject)).then(isACollection => {
    if(isACollection)
      return validateHasAttributeCollectionElements(attribute, expected, cy.wrap(subject));
    return validateHasAttributeSingleElement(attribute, expected, cy.wrap(subject));
  })
});

Cypress.Commands.add('shouldHaveAttributeValue', { prevSubject: 'element' }, (subject, attribute: string, expected: string | string []) => {
  return isACollection(cy.wrap(subject)).then(isACollection => {
    if(isACollection)
      return validateHasAttributeValueCollectionElements(attribute, expected as string[], cy.wrap(subject));
    return validateHasAttributeValueSingleElement(attribute, expected as string, cy.wrap(subject));
  })
});
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
