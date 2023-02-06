/// <reference types="cypress" />

describe("Validate Customer Service", () => {
  beforeEach("visit", () => {
    cy.visit("https://magento.softwaretestingboard.com");
    cy.url().should("include", "softwaretestingboard.com");
  });
  it("Testing Customer Service", () => {
    cy.scrollTo("bottom");
    cy.wait(2000);
    cy.get(".widget > .footer > :nth-child(3) > a").click();
    cy.get(".base").should("contain.text", "Customer Service");
  });
});
