

// import inValidData from '../fixtures/logInCred.json'


//     const invalid ('login', () => { 
//         cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
//         cy.get('input[name="username"]').type(inValidData.invalidUsername)
//         cy.get('input[name="password"]').type(inValidData.password)
//         cy.get('button[type="submit"]').click()

//         cy.contains('Invalid credentials').should('be.visible') 
//     });
class invalidCred{
    // url() {
    //     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    // }
    username() {
        return 'input[name="username"]'
    }
    password() {
        return 'input[name="password"]'
    }
    submit() {
        return 'button[type="submit"]'
    }
}
const invalidUserName = new invalidCred();
export default invalidCred;
    