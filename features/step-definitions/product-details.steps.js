const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect, browser } = require("@wdio/globals");
const Login = require("../pageobjects/login.page");
const ProductDetails = require("../pageobjects/product-details.page");

Given("user is on product details page", async () => {
    await Login.login("customer2@practicesoftwaretesting.com", "welcome01");
    await ProductDetails.goToHomePage();
    await ProductDetails.clickProduct();
});

When("user clicks add to cart button", async () => {
    await ProductDetails.clickCartButton();
});

Then("product is added to basket", async () => {
    await ProductDetails.successMessage();
});

Then("basket counter increases", async () => {
    await ProductDetails.counter();
});

Then("success message is displayed", async () => {
    await ProductDetails.successMessage();
});