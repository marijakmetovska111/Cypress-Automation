Feature: End to end Ecommerce validation

    application Regression
    @Regression
    Scenario: Ecommerce product delivery
        Given I open Ecommerce Page
        When I add items to card
        And Validate the total prices
        Then Select the country submit and verify Thankyou

    @Smoke
    Scenario: Filling the form to shop
        Given I open Ecommerce Page
        When I fill the form details
            | name | gender |
            | bobz | Male   |
        Then Validate the forms behavious
        And Select the Shop page