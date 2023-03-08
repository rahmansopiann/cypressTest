// Login Scenario saucedemo
describe("Saucedemo Login Test", () => {
  //Positif case
  it("Logs in successfully with valid credentials", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();
    cy.url().should("include", "/inventory.html");
    cy.get(".title").should("contain", "Products");
  });
  //Negatif case
  it("Shows error message with invalid credentials", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.get("#user-name").type("invalid_user");
    cy.get("#password").type("invalid_password");
    cy.get("#login-button").click();
    cy.get('[data-test="error"]').should("be.visible");
  });
});
