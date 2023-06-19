/// <reference types="Cypress" />
import HomePage from "../../../../support/pageObjects/HomePage"
import ProductsPage from "../../../../support/pageObjects/ProductPage"
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const homePage = new HomePage()
const productPage = new ProductsPage()
let name


/*  Scenario: Ecommerce product delivery
        Given I open Ecommerce Page
        When I add items to card
        And Validate the total prices
        Then Select the country submit and verify Thankyou*/

Given('I open Ecommerce Page', function () {

    cy.visit(Cypress.env('url') + "/angularpractice/")
})

When('I add items to card', function () {

    homePage.getShopTab().click()

    this.data.productName.forEach(function (element) {

        cy.selectProduct(element)
    });

    productPage.checkOutButton().click()

})

When('Validate the total prices', function () {

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

})



Then('Select the country submit and verify Thankyou', () => {

    cy.contains('Checkout').click()
    cy.get('#country').type('India')
    cy.get('.suggestions > ul > li > a').click()
    cy.get('#checkbox2').click({ force: true })
    cy.get('input[type="submit"]').click()
    cy.get('.alert').then(function (element) {
        const actualText = element.text()
        expect(actualText.includes("Success")).to.be.true
    })

})


/* Scenario: Filling the form to shop
Given I open Ecommerce Page
When I fill the form details
Then Validate the forms behavious
And Select the Shop page */

Given("Select the Shop page", function () {
    return "Passing";
});


When('I fill the form details', function (dataTable) {

    name = dataTable.rawTable[1][0]

    homePage.geteditBox().type(dataTable.rawTable[1][0])
    homePage.getGender().select(dataTable.rawTable[1][1])

})
Then('Validate the forms behavious', function () {

    homePage.getTwoWayDataBinding().should('have.value', name)
    homePage.geteditBox().should('have.attr', 'minlength', '2')
    homePage.getEnterprenuer().should('be.disabled')

})

Then('And Select the Shop page', () => {

    homePage.getShopTab().click()
})


