Feature: Login test

  Background: 
    Given Am on the home page
    And I click on my account link
    And I see a welcome message displayed

  Scenario Outline: As a user I want to be able to login using diferent username and password
  And I entered valid "<email>" email in the text field
  And I entered correct "<passwd>" password field
  And I click on the signin button
  Then I verify that I am logged in
  And I log out
  
   And I close the browser
  Examples:
  | email               | passwd      |
  | testof682@yahoo.com | Password27  |
  | testof742@yahoo.com | Password325 |
  | testof173@yahoo.com | Password325 |
  
  Scenario Outline: As a user I want to login with invalid credentials I should not be allowed to login.
    When I entered wrong "<email>" address in the email text field
    And I input invalid "<passwd>" password or blank password
    And I click the signIn button
    Then I should see error message displayed
    And I log out

    Examples: 
      | email               | passwd      |
      | tesf778@hotmail.com | Password27  |
      |                     | Password325 |
      | testof682@yahoo.com | paswork325  |
      | testof173@yahoo.com |             |
