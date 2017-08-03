Feature: Register Test

  Scenario: 
    Given Am on the home page
    And I click on my account link
    And I see a welcome message displayed
    When I click the continue button
    And I filled the mandatory fields to register
    And I click continue after filling the mandatory fieds
    Then I should be logged in
    And I log out
