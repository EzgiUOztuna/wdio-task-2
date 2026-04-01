Feature: Switch from English to Turkish

Scenario: User changes the site language to Turkish
  Given user is on home page
  When user clicks language selector
  And user selects Turkish language
  Then user verifies Turkish language
