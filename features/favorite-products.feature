Feature: Successfully Adding Product to the Favorites

Scenario: User adds a product to the Favorites list
  Given the user is on the product details page
  When the user clicks on the 'Add to favorites' button
  Then a success message should be displayed