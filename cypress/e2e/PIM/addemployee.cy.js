

describe('validate login functionality',()=>{


    it('verify login with valid credential',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').type('admin')
        cy.get('input[name="password"]').type('admin123')
        cy.get('button[type="submit"]').click()
        cy.get(':nth-child(2) > .oxd-main-menu-item > .oxd-text').click()
        cy.get('.oxd-topbar-body-nav > ul :nth-child(3)').click()
        cy.get("input[name='firstName']").type('Steve')
        cy.get("input[name='lastName']").type('Smith')
        cy.get("div:nth-child(2) > div:nth-child(1) > div > div:nth-child(2) > input").type('112233')
        cy.get("button[type='submit']").click()
        cy.contains('Successfully Saved').should('be.visible')


    });

});       