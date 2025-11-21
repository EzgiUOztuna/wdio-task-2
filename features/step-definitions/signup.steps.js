const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect, browser } = require("@wdio/globals");
const RegistrationPage = require('../pageobjects/registration.page');

Given('the user is on the registration page', async () => {
    await RegistrationPage.open();
});

When('the user enters valid registration information', async () => {
    await RegistrationPage.fillForm({
        firstName: "Ezgi",
        lastName: "Oztuna",
        birthDate: "1996-03-28",
        street: "Atatürk Caddesi",
        postalCode: "34000",
        city: "Istanbul",
        state: "Marmara",
        country: "Turkey",
        phoneNumber: "5555555555",
        email: `ezgi_${Date.now()}@mail.com`,
        password: "P@ssword123*"
    });
});

When('clicks on the Register button', async () => {
    await RegistrationPage.submit();
});

Then('the user should be redirected to the login page', async () => {
    console.log('Current URL after submit:', await browser.getUrl());

    await expect(browser).toHaveUrl('https://practicesoftwaretesting.com/auth/login');
})