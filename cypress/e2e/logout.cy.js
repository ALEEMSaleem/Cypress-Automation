

describe('validate logout functionality', () => {

    it('logout', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })
        cy.get("span[class='oxd-userdropdown-tab']").click();
        cy.get(":nth-child(4) > .oxd-userdropdown-link").click();
    
        });
    });
    