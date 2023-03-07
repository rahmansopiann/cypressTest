import LoginPage from "../pageObjects/loginPage";


describe('Saucedemo Login Test', () => {
  it('Logs in successfully with valid credentials using Page Object', () => {
    LoginPage.visit()
    LoginPage.fillUsername('standard_user')
    LoginPage.fillPassword('secret_sauce')
    LoginPage.clickLoginButton()
    LoginPage.isLoggedIn()
  })

  it('Shows error message with invalid credentials using custom command', () => {
    LoginPage.visit()
    LoginPage.fillUsername('invalid_user')
    LoginPage.fillPassword('invalid_password')
    LoginPage.clickLoginButton()
    LoginPage.getErrorMessage().should('be.visible')
  })
})
