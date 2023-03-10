import LoginPage from "../pageObjects/loginPage";

let username = Cypress.env("validUsername");
let password = Cypress.env("validPassword");

describe("Login Scenario saucedemo", () => {
  beforeEach(() => {});
  it("Login successfully with valid credentials", () => {});
  it("Shows error message with invalid credentials", () => {});
});
