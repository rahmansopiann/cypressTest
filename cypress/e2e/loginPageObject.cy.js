import LoginPage from "../pageObjects/loginPage";

let username = Cypress.env("validUsername");
let password = Cypress.env("validPassword");

describe("Login Scenario saucedemo", () => {
  beforeEach(() => {
    LoginPage.visit();
  });
  it("Login successfully with valid credentials", () => {
    LoginPage.fillUsername(username);
    LoginPage.fillPassword(password);
    LoginPage.clickLoginButton();
    LoginPage.isLoggedIn();
  });
  it("Shows error message with invalid credentials", () => {
    LoginPage.fillUsername("ivalid_user");
    LoginPage.fillPassword("invalid_pass");
    LoginPage.clickLoginButton();
    LoginPage.getErrorMessage();
  });
});
