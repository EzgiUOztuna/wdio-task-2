Feature: Find Product for Exact Name
Scenario: User searches for a product by its exact name
  Given the user is on the home page
  When the user clicks on the Search bar
  And enters the exact product name into the search bar
  And clicks on the 'Search' button
  Then the product matching the exact name should be displayed in the search results