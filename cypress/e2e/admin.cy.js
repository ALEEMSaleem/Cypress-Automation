
import adminPo from "../support/POM/admin.po";

describe('Admin', () => {
  it('validate add job title', () => {
    cy.visit('/')
    cy.login()
    cy.get(adminPo.clickOnAdminMenu()).click()
    

  });

});