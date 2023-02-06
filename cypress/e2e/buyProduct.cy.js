/// <reference types="cypress" />

describe("Buy something good", () => {
  beforeEach("visit", () => {
    cy.visit("https://magento.softwaretestingboard.com");
    cy.url().should("include", "softwaretestingboard.com");
  });
  it("Validate Buy Something", () => {
    cy.get("#ui-id-5").click().should("include.text", "Men");
    cy.get(".categories-menu > :nth-child(2) > :nth-child(2) > a")
      .click()
      .should("include.text", "Jackets");
    cy.get(".products > :nth-child(2)")
      .click()
      .should("include.text", "Montana Wind Jacket");
    cy.wait(10000);
    cy.get("#option-label-size-143-item-169").click();
    cy.get("#option-label-color-93-item-49").click();
    cy.get("#qty").clear().type(5);
    cy.get("#product-addtocart-button").click();
    cy.wait(4000);
    cy.get(".showcart").click().should("be.visible");
    cy.get("#top-cart-btn-checkout").click();
    cy.wait(10000);
    cy.FormAddress();
  });
});
