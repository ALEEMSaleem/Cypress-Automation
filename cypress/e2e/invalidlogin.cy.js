
import inValidData from '../fixtures/logInCred.json'
import invalidUserName from '../support/POM/invalidlogin.js'

describe('validate login with invalid credentials', () => { 
    it('verify login with invalid username and valid password', () => { 
        // cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // cy.get('input[name="username"]').type(inValidData.invalidUsername)
        // cy.get('input[name="password"]').type(inValidData.password)
        // cy.get('button[type="submit"]').click()

        // cy.contains('Invalid credentials').should('be.visible') 
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // invalidCred.username(inValidData.invalidUsername)
        
        cy.get(invalidUserName.invalidUserName).type(inValidData.invalidUsername)           
        // invalidCred.password(inValidData.password)
        cy.get(invalidUserName.password).type(inValidData.password)
        cy.get(invalidUserName).submit()
        cy.contains('Invalid credentials').should('be.visible') 

    });
    // it('verify login with invalid username and valid password', () => { 
    //     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //     cy.get('input[name="username"]').type(inValidData.username)
    //     cy.get('input[name="password"]').type(inValidData.invalidPassword)
    //     cy.get('button[type="submit"]').click()

    //     cy.contains('Invalid credentials').should('be.visible') 
    // });
    // it('verify login with invalid username and valid password', () => { 
    //     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //     cy.get('input[name="username"]').type(inValidData.invalidUsername)
    //     cy.get('input[name="password"]').type(inValidData.invalidPassword)
    //     cy.get('button[type="submit"]').click()

    //     cy.contains('Invalid credentials').should('be.visible') 
    // });
    
   
});        