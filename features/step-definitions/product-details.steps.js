const { Given, When, Then } = require("@wdio/cucumber-framework");
const Login = require("../pageobjects/login.page");
const ProductDetails = require("../pageobjects/product-details.page");
console.log("STEP FILE LOADED");

Given("the user is on the product details page", async () => {
    console.log("STEP WORKED");
    await Login.login("customer3@practicesoftwaretesting.com", "pass123");
    await ProductDetails.goToHomePage();
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