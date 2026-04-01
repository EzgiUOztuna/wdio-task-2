const { Given, When, Then, Before } = require("@wdio/cucumber-framework");
const Login = require("../pageobjects/login.page");
const { browser, expect } = require("@wdio/globals");
const productDetailsPage = require("../pageobjects/product-details.page");

Given("the user is on the product details page", async () => {
    await Login.login("customer2@practicesoftwaretesting.com", "welcome01");
    await productDetailsPage.goToHomePage();
});

/*
When("the user clicks on the \'Add to cart\' button", async () => {
    await ProductDetails.clickCartButton();
});

Then('the product should be added to the basket', async () => {
    await ProductDetails.successMessage();
});

Then('the basket counter should increase by one', async () => {
    await ProductDetails.verifyBasketIncrement();
});

Then("confirmation message should be displayed saying \'Product added to shopping cart\'", async () => {
    await ProductDetails.successMessage();
});
*/

module.exports = {};