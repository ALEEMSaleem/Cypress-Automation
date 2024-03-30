import AddEmployee from "../support/POM/pim.po.js";


describe('validate pim features', () => {
    // beforeAll(() => {
    //     cy.visit('/');
       
    //     });
    // beforeEach(() => {
        
    //     cy.login();
    // });
    // afterEach(() => {
        
    //     cy.logout();
    // });
    it('validation of addEmployee', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.login()
        cy.AddEmployee();
        cy.contains('Successfully Saved').should('be.visible');
        
    });

});
    