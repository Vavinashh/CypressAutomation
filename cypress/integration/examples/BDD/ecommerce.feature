Feature: End to end Ecommerce validation

    application Regression
    @Regression
    Scenario: Ecommerce products delivery
    Given I open ECommerce Page
    When I add items to Cart
    And Validate the total prices
    Then select the country submit and verify Thankyou