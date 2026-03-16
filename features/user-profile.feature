Feature: User Update Information
Scenario: User updates profile information successfully.
  Given the user is logged into their account successfully
  When the user clicks on the 'Profile' button
  And navigates to the 'Profile' page
  And changes phone number and address
  And clicks on the 'Update Profile' button
  Then a confirmation message should appear
  And the updated information should be visible on the profile page