import LoginPage from "../pageObjects/loginPage";

let username = Cypress.env('validUsername');
let password = Cypress.env('validPassword');

describe("Login Scenario saucedemo", () => {
  
  // Define positif case
  it("Login successfully with valid credentials", () => {
    LoginPage.visit();
    LoginPage.fillUsername(username);
    LoginPage.fillPassword(password);
    LoginPage.clickLoginButton();
    LoginPage.isLoggedIn();
  });
  // Define negatif case
  it("Shows error message with invalid credentials", () => {
    LoginPage.visit();
    LoginPage.fillUsername("invalid_user");
    LoginPage.fillPassword("invalid_password");
    LoginPage.clickLoginButton();
    LoginPage.getErrorMessage().should("be.visible");
  });
});
