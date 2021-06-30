import { MainPageObject } from "../../page-objects/main.pageobject";

describe("example to-do app", () => {
  let mp: MainPageObject;
  before("Global Setup", () => {
    cy.log("Global Setup");
  });
  beforeEach(() => {
    mp = new MainPageObject();
  });
  it("should be opened", () => {
    mp.navigate();
  });
});
