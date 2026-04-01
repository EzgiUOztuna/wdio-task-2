const { Given, When, Then } = require("@wdio/cucumber-framework");
const Language = require("../pageobjects/language.page");
const Login = require("../pageobjects/login.page");
const productDetailsPage = require("../pageobjects/product-details.page");

Given("the user is on the home page", async () => {
    await Login.login("customer2@practicesoftwaretesting.com", "welcome01");
    await productDetailsPage.goToHomePage();
});

When("the user clicks on the world icon or 'EN' word", async () => {
    await Language.openDropdown();
});

When("selects 'TR' from the language dropdown", async () => {
    await Language.selectTr();
});

Then("entire page should be displayed in Turkish", async () => {
    await Language.verifyTurkish();
});