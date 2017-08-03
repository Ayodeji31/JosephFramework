Feature: Search test

  Background: 
    Given Am on the home page
    And I click on my account link
    And I see a welcome message displayed

  Scenario Outline: As a user I want to searc for an item in the quick find field,
    And I type "<product>" in the search widget
    And I click search Icon
    Then I see search product displayed

    Examples: 
      | product |
      | samsung |
      | DVD     |
      | CD      |
      | Mouse   |
