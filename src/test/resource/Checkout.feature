Feature: Login test

  Background: 
    Given Am on the home page
    And I click on my account link
    And I see a welcome message displayed

  Scenario: 
    When I entered valid email in the text field
    And I entered correct password field
    And I click on the signin button

  Scenario: 
    When I click on hardware and I selected the product
    And I added this to cart
    And I click checkout button
    And I click continue button
    And I select cash on delivery
    And continue button is clicked
    When I click confirm order
    Then I should see confirm order
    And I click continue buttton to proceed to the next page
