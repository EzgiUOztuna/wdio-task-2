const { Given, When, Then } = require("@wdio/cucumber-framework");
const UserProfile = require('../pageobjects/user-profile.page');
const { expect, browser } = require("@wdio/globals");
const Login = require("../pageobjects/login.page");

Given("the user is logged into their account successfully", async () => {
    await Login.login("customer3@practicesoftwaretesting.com", "pass123");
});

When("the user clicks on the 'Profile' button", async () => {
    await UserProfile.profilePage();
});

When("navigates to the 'Profile' page", async () => {
    await UserProfile.navigateProfilePage();
});

When("changes phone number and address", async () => {
    await UserProfile.change({
        phoneNumber: "5557414554",
        street: "Frankfurt Cd",
        postalCode: "12345",
        city: "Frankfurt",
        state: "Germany"
    });
});

When("clicks on the 'Update Profile' button", async () => {
    await UserProfile.updateProfileSubmit();
});

Then("a confirmation message should appear", async () => {
    await UserProfile.alertMessage();
});