# Standard Test Automation Framework based on Cypress
## Getting Started
1. Get a copy of this project (e.g. clone the repository).

1. Install dependencies by executing the command `yarn` in a terminal located at the root directory of the project.
1. Start your engines.

## That Was All?
You can find that out yourself. Execute the following command:
```
yarn run cypress run
```
More ways to execute tests can be found in the [Run Tests](#run-tests) section.

## Adapting The Framework To Your Needs
This framework suggests the use of Custom Commands from Cypress, Complex Element Classes, and Page Objects to help you write tests.

The framework is also equipped with an example, to guide you through the usage of these elements. The example is based on Parkside's website.

### Custom Commands
These are commands that encapsulate the typical actions that are done within a test. They are located under `/cypress/support/commands.ts` 

Assertions are the ones mostly covered. Normally, you would need to be familiar with the [Chainers](https://docs.cypress.io/guides/references/assertions#Chai) to be able to assert on elements. This framework removes the need of learning the chainers and knowing how to deal with collections of elements when asserting. The result is faster test case creation. All assertions start with the word `should`. Therefore, typing `.should` after an element should show you the assertions which are available, depending on your editor.

No changes in this area are required to adapt the framework to your needs.

### Complex Element Classes
These are helper individual classes which represent constructions that consist of multiple elements that are meant to work together. They are located under `/cypress/support/`.

Examples of these are dropdowns and calendars.

No changes in this area are required to adapt the framework to your needs.

### Page Objects
These can represent pages within the website or sections that repeat across pages. They should be located under `/cypress/page-objects/`.

Page objects are part of a class hierarchy, where BasePageObject is the base. Each page object consists of properties and methods, that are particular to that page; whether is clicking an element or validating if an element is visible. The properties are namely elements, and the methods are intended to interact with those elements. 

The Page Objects is where the Custom Commands and Complex Element Classes are meant to be used.

You have to create page objects that correspond to your needs.

### Test Cases
Test cases should be located under `/cypress/e2e/`.

The structure given to each test depends on your needs. Reading further into [Test Structure](https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests#Test-Structure) and [Hooks](https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests#Hooks) may be helpful.

TL;DR -> Look at the spec `/cypress/e2e/sample.cy.ts`. There is a `describe`, which usually groups related tests (a suite). Inside it, there is `beforeEach` hook, which executes before every test. Then there is every test, which should have the ability to run independently. A `before` hook could be added, if an action needs to happen only once before all the tests are executed. 

The tests is where the Page Objects are meant to be used.

## Run Tests
Additional to the classic `yarn run cypress run` command, it is also possible to start the [Cypress Runner](https://docs.cypress.io/guides/core-concepts/cypress-app#Test-Runner) to see the tests running in the browser. Additionally, it allows to interact with the executed commands once all the tests finished. To open it, execute the following commmand:
```
yarn run cypress open --e2e
```

A window prommpting browser selection will appear. 
Choose a browser and click on Start E2E Testing button. After that, you will be able to click on a suite to run it.

On top of what Cypress offers, this framework allows for grouping tests beyond `describe`. 
The reasoning behind is test execution. You might want to keep the structure of your test cases, but only run a few tests from each spec in a particular situation. 

Take a look at `/cypress/e2e/sample.cy.ts`. The first test is tagged `[smoke]`, which means that only that test will run when adding `--env suite=smoke` to any of the previously explained commands. For example:
```
yarn run cypress run --e2e --env suite=smoke
```