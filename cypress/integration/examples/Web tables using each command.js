
/// <reference types="Cypress" />

// Explanation for Test suit, test cases and test steps
describe('my 5test', function () {

    it('My 5Tc', function () {

        // test steps
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");

        cy.get('tr td:nth-child(2)').each(($el, index, $list) => {

            const text = $el.text()
            if (text.includes("Python")) {
                cy.get('tr td:nth-child(2)').eq(index).next().then(function (price) {
                    const priceText = price.text()
                    expect(priceText).to.equal('25')
                })
            }
        })









    })
})




