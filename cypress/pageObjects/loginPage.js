// LoginPage.js

class LoginPage {
    visit() {
      cy.visit('https://www.saucedemo.com/')
    }
  
    fillUsername(username) {
      cy.get('#user-name').type(username)
    }
  
    fillPassword(password) {
      cy.get('#password').type(password)
    }
  
    clickLoginButton() {
      cy.get('#login-button').click()
    }
  
    getErrorMessage() {
      return cy.get('[data-test="error"]')
    }
  
    isLoggedIn() {
      cy.url().should('include', '/inventory.html')
      cy.get('.title').should('contain', 'Products')
    }
  }
  
  export default new LoginPage()
  