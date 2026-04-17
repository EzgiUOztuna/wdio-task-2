const { Given, When, Then } = require("@wdio/cucumber-framework");
const FavoriteProducts = require("../pageobjects/favorite-products.page");
const Login = require("../pageobjects/login.page");
const productDetailsPage = require("../pageobjects/product-details.page");
//console.log("STEP FILE LOADED");

Given("the user is on the product details page", async () => {
    await Login.login("customer2@practicesoftwaretesting.com", "welcome01");
    //console.log("STEP WORKED_2");
    await productDetailsPage.goToHomePage();
    await productDetailsPage.clickProduct();
});

When("the user clicks on the 'Add to favorites' button", async () => {
    await FavoriteProducts.clickFavoriteButton();
});

Then("a success message should be displayed", async () => {
    await FavoriteProducts.successMessage();
    await FavoriteProducts.removeFavorites();
});