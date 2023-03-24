describe("Login Scenario saucedemo", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  // Define positif case
  it("Login successfully with valid credentials", () => {
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();
    cy.url().should("include", "/inventory.html");
    cy.get(".title").should("contain", "Products");
  });
  // Define negatif case
  it("Shows error message with invalid credentials", () => {
    cy.get("#user-name").type("invalid_user");
    cy.get("#password").type("invalid_password");
    cy.get("#login-button").click();
    cy.get('[data-test="error"]').should("be.visible");
  });
});