import LoginPage from "../pageObjects/loginPage";

describe("Login Scenario saucedemo", () => {
  // Define positif case
  it("Login successfully with valid credentials", () => {
    LoginPage.visit();
    LoginPage.fillUsername("standard_user");
    LoginPage.fillPassword("secret_sauce");
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
