/// <reference types="Cypress" />
/// <reference types="Cypress-iframe"  />

import 'cypress-iframe'

describe('Frame Test', function () {

    it('Demo example', function () {

        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");
        cy.frameLoaded('#courses-iframe')

        cy.iframe().find("a[href*='mentorship']").eq(0).click()



    })
})