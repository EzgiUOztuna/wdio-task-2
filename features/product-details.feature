Feature: Add Product to the Basket

Scenario: User adds a product to the basket from product detail page
  Given the user is on the product details page
  When the user clicks on the 'Add to cart' button
  Then the product should be added to the basket
  And the basket counter should increase by one
  And confirmation message should be displayed saying 'Product added to shopping cart'
