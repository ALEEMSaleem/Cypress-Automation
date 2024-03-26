

describe('validate add employee functionality',()=>{


    it('verify add employee',()=>{
        // cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // cy.get('input[name="username"]').type('admin')
        // cy.get('input[name="password"]').type('admin123')
        // cy.get('button[type="submit"]').click()
        cy.login()
        cy.get(':nth-child(2) > .oxd-main-menu-item > .oxd-text').click()
        cy.get('.oxd-topbar-body-nav > ul :nth-child(3)').click()
        cy.get("input[name='firstName']").type('Steve')
        cy.get("input[name='lastName']").type('Smith')
        cy.get("div:nth-child(2) > div:nth-child(1) > div > div:nth-child(2) > input").type('112233')
        cy.get("button[type='submit']").click()
        cy.contains('Successfully Saved').should('be.visible')

    });
    it.only('verify update employee data',()=>{
        cy.login()
        cy.get(':nth-child(2) > .oxd-main-menu-item > .oxd-text').click()
        cy.get('.oxd-topbar-body-nav > ul :nth-child(2)').click()
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input').type('steve smith')
        cy.get('button[type="submit"]').click()
        //cy.wait(30000)
        cy.get(':nth-child(1) > .oxd-table-row > :nth-child(9) > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click()
        cy.get(':nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type(1122334455)
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').click()
        //cy.wait(10000)
        cy.get('div[class="oxd-date-input-calendar"]',{timeout:20000}).click()

    });


});       