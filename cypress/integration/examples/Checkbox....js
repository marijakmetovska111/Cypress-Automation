
/// <reference types="Cypress" />

// Explanation for Test suit, test cases and test steps
describe('my Third test', function () {

    it('My thirdTc', function () {

        // test steps
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");

        //Checkbox

        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option2'])


        // static dropdown

        cy.get('select').select('option2').should('have.value', 'option2')

        // dynamic dropdown

        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item').each(($el, index, $list) => {

            if ($el.text() === "India") {
                cy.wrap($el).click()
            }
        })


        cy.get('#autocomplete').should('have.value', 'India')


        //handling visibility and invisibility of the elements

        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        //Radio button

        cy.get('[value = "radio2"]').check().should('be.checked')

    })

})