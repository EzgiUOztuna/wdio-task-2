Feature: User Successful Registration

  Scenario: User successfully registers with valid details
    Given the user is on the registration page
    When the user enters valid registration information
    And clicks on the Register button
    Then the user should be redirected to the login page