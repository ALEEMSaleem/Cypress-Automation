
describe('validate login functionality', () => {

it('login', () => {
   cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
   cy.login();

    });
});
