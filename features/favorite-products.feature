Feature: Unsuccessful Adding Product to the Favorites

Scenario: User fails to add a product to the Favorites list
  Given the user is on the product details page
  When the user clicks on the 'Add to favorites' button
  Then an error message should be displayed saying 'Unauthorized, can not add product to your favorite list.'
  And no changes should occur on the page