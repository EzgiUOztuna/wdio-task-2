Feature: Switch from English to Turkish

Scenario: User changes the site language to Turkish
  Given the user is on the home page
  When the user clicks on the world icon or 'EN' word
  And selects 'TR' from the language dropdown
  Then entire page should be displayed in Turkish