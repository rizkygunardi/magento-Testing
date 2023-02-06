/// <reference types="cypress" />

describe("Validate Website", () => {
  it("Visit", () => {
    cy.visit("https://magento.softwaretestingboard.com");
    cy.url().should("include", "softwaretestingboard.com");
  });
});
