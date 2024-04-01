import Pim from "../support/POM/pim.po.js";
import pimData from "../fixtures/pimData.json";

describe("validate pim features", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.login();
  });
  afterEach(() => {
    cy.logout();
  });
  it("validation of addEmployee", () => {
    cy.get(Pim.clickOnPimLink()).click();
    cy.get(Pim.clickOnAddEmployeeLink()).click();
    cy.get(Pim.enterFirstName()).type(pimData.firstName);
    cy.get(Pim.enterLastName()).type(pimData.lastName);
    cy.get(Pim.enterRandomEmployeeId()).type(pimData.employeeId);
    cy.get(Pim.clickOnSaveButton()).click();

    cy.contains("Successfully Saved").should("be.visible");
  });
});
