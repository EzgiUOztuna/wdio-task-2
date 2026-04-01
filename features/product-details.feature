Feature: Add Product to the Basket

Scenario: User adds a product to the basket from product detail page
  Given user is on product details page
  When user clicks add to cart button
  Then product is added to basket
  And basket counter increases
  And success message is displayed
