
/// <reference types="Cypress" />

// Explanation for Test suit, test cases and test steps
describe('my 6test', function () {

    it('My 6Tc', function () {

        // test steps
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");

        cy.get('div.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        cy.url().should('include', '#top')











    })
})




