// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
import loginData from '../fixtures/loginCred.json';
Cypress.Commands.add('login', () => { 
    
    cy.get('input[name="username"]').type(loginData.username);
    cy.get('input[name="password"]').type(loginData.password);
    cy.get('button[type="submit"]').click();
    cy.get('h6').should('have.text', 'Dashboard');
 })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })