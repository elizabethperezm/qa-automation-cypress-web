describe("Sauce Demo Login test", () => {
  it("Login sucessfull with valid credentials", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();
    cy.url().should("include", "/inventory.html");
  });
  it("Login with invalid credentials", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.get("#user-name").type("invalid_user");
    cy.get("#password").type("invalid_password");
    cy.get("#login-button").click();
    cy.get(".error-message-container").should("be.visible");
  });
});
