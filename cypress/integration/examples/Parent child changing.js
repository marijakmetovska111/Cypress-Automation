/*describe('My First Test', () => {
    it('Does not do much!', () => {
        expect(true).to.equal(true)
    })
})*/


/// <reference types="Cypress" />

// Explanation for Test suit, test cases and test steps
describe('my Second test', function () {

    it('My secondTc', function () {

        // test steps

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)

        cy.get('.product:visible').should('have.length', 4)

        //Parent child changing
        cy.get('.products').as('productlocator')
        cy.get('@productlocator').find('.product').each(($el, index, $list) => {
            const textVeg = $el.find('h4.product-name').text()
            if (textVeg.includes('Cashews')) {
                cy.wrap($el).find('button').click()
            }
        })
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.get('button').contains('Place Order').click()






    })

})