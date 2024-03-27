
describe('Login', () => {
//   it('should login', () => {
//     cy.visit('/');
//    cy.login();
//     });
beforeEach(() => {
    cy.visit('/');
    cy.login();
});
it('should login', () => {
   cy.get('h6').should('have.text', 'Dashboard');
    });
});
