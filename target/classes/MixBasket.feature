Feature: Mix basket

  Background: 
    Given Am on the home page
    And I click on my account link
    And I see a welcome message displayed

  Scenario: I want to see mix basket
    When I search for products to add to basket
      | samsung |
      | DVD     |
      | CD      |
      | Mouse   |
    Then I proceed to checkout
