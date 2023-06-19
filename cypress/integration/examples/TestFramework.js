/// <reference types="Cypress" />
import HomePage from "./pageObjects/HomePage"
import ProductsPage from "./pageObjects/ProductPage"
describe('TestFramework', function () {

    before(function () {
        // root-level hook
        // runs once before all tests

        cy.fixture('example').then(function (data) {
            this.data = data

        })
    })

    it('TestFramework', function () {
        const homePage = new HomePage()
        const productPage = new ProductsPage()

        cy.visit(Cypress.env('url') + "/angularpractice/")

        homePage.geteditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.getTwoWayDataBinding().should('have.value', this.data.name)
        homePage.geteditBox().should('have.attr', 'minlength', '2')
        homePage.getEnterprenuer().should('be.disabled')
        homePage.getShopTab().click()

        this.data.productName.forEach(function (element) {

            cy.selectProduct(element)
        });

        productPage.checkOutButton().click()

        var sum = 0

        cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {


            const amount = $el.text()
            var res = amount.split(" ")
            res = res[1].trim()
            sum = Number(sum) + Number(res)

        }).then(function () {
            cy.log(sum)
        })

        cy.get('h3 strong').then(function (element) {

            const amount = element.text()
            var res = amount.split(" ")
            var total = res[1].trim()

            expect(Number(total)).to.equal(sum)
        })

        cy.contains('Checkout').click()
        cy.get('#country').type('India')
        cy.get('.suggestions > ul > li > a').click()
        cy.get('#checkbox2').click({ force: true })
        cy.get('input[type="submit"]').click()
        // cy.get('.alert').should('have.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).')
        cy.get('.alert').then(function (element) {
            const actualText = element.text()
            expect(actualText.includes("Success")).to.be.true
        })


    })
})