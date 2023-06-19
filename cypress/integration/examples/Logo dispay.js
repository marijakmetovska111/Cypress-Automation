/*describe('My First Test', () => {
    it('Does not do much!', () => {
        expect(true).to.equal(true)
    })
})*/


/// <reference types="Cypress" />

// Explanation for Test suit, test cases and test steps
describe('my first test', function () {

    it('My firstTc', function () {

        // test steps

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product').should('have.length', 5)
        cy.get('.product:visible').should('have.length', 4)

        //Parent child changing
        cy.get('.products').as('productlocator')
        cy.get('@productlocator').find('.product').should('have.length', 4)
        cy.get('@productlocator').find('.product').eq(2).contains('ADD TO CART').click()

        cy.get('@productlocator').find('.product').each(($el, index, $list) => {
            const textVeg = $el.find('h4.product-name').text()
            if (textVeg.includes('Cashews')) {
                cy.wrap($el).find('button').click()
                // assert if logo text is corectly dispay

                cy.get('.brand').should('have.text', 'GREENKART')

                //this is print in logs in test runer
                cy.get('.brand').then(function (logoelement) {
                    cy.log(logoelement.text())
                })
            }
        })






    })

})