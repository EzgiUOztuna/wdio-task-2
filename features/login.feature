Feature: User Unsuccessful Login

  Scenario: User fails to login
    Given the user has existing account 
    When the user enters the email and password incorrectly
    And clicks on the 'Login' button
    Then an error message should be displayed
    And the user should remain on the login page