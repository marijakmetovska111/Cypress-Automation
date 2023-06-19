
/// <reference types="Cypress" />

// Explanation for Test suit, test cases and test steps
describe('my 4test', function () {

    it('My 4Tc', function () {

        // test steps
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");


        cy.get('#alertbtn').click()
        cy.get('[value = "Confirm"]').click()
        // window alert

        cy.on('window:alert', (str) => {

            //Mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        cy.on('window:confirm', (str) => {

            //Mocha
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

        cy.get('#opentab').invoke('removeAttr', 'target').click()

        cy.url().should('include', 'rahulshettyacademy')
        cy.go('back')



    })

})
