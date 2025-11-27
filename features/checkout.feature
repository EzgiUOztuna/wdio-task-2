Feature: Complete Purchase Successfully

Scenario: User completes checkout with valid payment details
  Given the user is in the cart 
  When the user clicks on the 'Proceed to checkout'
  And signs in again to proceed
  And enters the billing address details
  And clicks again 'Proceed to checkout' button
  And selects a payment option under 'Choose your payment method' section
  And enters valid information for payment
  And clicks on the 'Confirm' button
  Then a confirmation message should be displayed on the screen as a 'Payment was successful'