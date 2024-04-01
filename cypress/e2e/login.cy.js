
describe('validate login functionality', () => {

it('login', () => {
   cy.visit('/');
   cy.login();
   cy.wait(5000);
//    Cypress.on('uncaught:exception', (err, runnable) => {
//     // returning false here prevents Cypress from
//     // failing the test
//     return false
//  })
// cy.logout();
   

    });
});
