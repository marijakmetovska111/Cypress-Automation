
/// <reference types="Cypress" />


// Explanation for Test suit, test cases and test steps
/// <reference types="Cypress" />

describe('my 7test', function () {
    it('My 7Tc', function () {
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");

        cy.get('#opentab').then(function (el) {
            const url = el.prop('href');
            cy.log(url);
            cy.visit(url);
        });
    });
});
















