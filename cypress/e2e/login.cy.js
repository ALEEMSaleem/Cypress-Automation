
describe("validate login functionality", () => {
  it("verify login with valid credential", () => {
    cy.login();

    cy.url().should(
      "eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
    );
    cy.url().should("include", "/web/index.php/dashboard/index");

    cy.contains("Dashboard").should("be.visible");
  });
  
});
