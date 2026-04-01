const { Given, When, Then } = require("@wdio/cucumber-framework");
const Language = require("../pageobjects/language.page");
const Login = require("../pageobjects/login.page");
const productDetailsPage = require("../pageobjects/product-details.page");

console.log("===== LANGUAGE STEPS LOADED =====");

Given("user is on home page", async () => {
    console.log("STEP: user is on home page");
    await Login.login("customer2@practicesoftwaretesting.com", "welcome01");
    await productDetailsPage.goToHomePage();
});

When("user clicks language selector", async () => {
    console.log("STEP: user clicks language selector");
    await Language.openDropdown();
});

When("user selects Turkish language", async () => {
    console.log("STEP: user selects Turkish language");
    await Language.selectTr();
});

Then("user verifies Turkish language", async () => {
    console.log("STEP: user verifies Turkish language");
    await Language.verifyTurkish();
});