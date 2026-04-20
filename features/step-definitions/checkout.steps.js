const { Given, When, Then } = require("@wdio/cucumber-framework");
const Checkout = require("../pageobjects/checkout.page");
const Login = require("../pageobjects/login.page");
const productDetailsPage = require("../pageobjects/product-details.page");

Given("the user is in the cart", async () => {
    await Login.login("customer3@practicesoftwaretesting.com", "pass123");
    await productDetailsPage.goToHomePage();
    await productDetailsPage.clickProduct();
    await productDetailsPage.clickCartButton();
    await Checkout.goToCheckout();
});

When("the user clicks on the 'Proceed to checkout'", async () => {
    await Checkout.clickProceed();
});

When("click again to proceed", async () => {
    await Checkout.clickProceed2();
});

When("enters the billing address details", async () => {
    const userData = {
        country: "Turkey",
        postalCode: "35000",
        houseNumber: "35",
        street: "Atatürk Caddesi",
        city: "Izmir",
        state: "Ege",      
    };
    await Checkout.address(userData);
});


When("clicks again 'Proceed to checkout' button", async () => {
    await Checkout.submit3();
});

When("selects a payment option under 'Choose your payment method' section", async () => {
    await Checkout.paymentSelection({ paymentOption: 'credit-card' });
});

When("enters valid information for payment", async () => {
    const cardData = {
        creditCardNumber: '4111-1111-1111-1111',
        expiration: '12/2030',
        CVV: '123',
        cardHolderName: 'John Doe'
    };
    await Checkout.creditCardInfo(cardData);
});

When("clicks on the 'Confirm' button", async () => {
    await Checkout.submitPayment();
});

Then("a confirmation message should be displayed on the screen as a 'Payment was successful'", async () => {
    await Checkout.successMessage();
});