const Page = require("./page");
const { expect, browser } = require("@wdio/globals");

class Checkout extends Page {
    get countryInput() { return $('[data-test="country"]'); }
    get postalCodeInput() { return $('[data-test="postal_code"]'); }
    get houseNumberInput() { return $('[data-test="house_number"]'); }
    get streetInput() { return $('[data-test="street"]'); }
    get cityInput() { return $('[data-test="city"]'); }
    get stateInput() { return $('[data-test="state"]'); }

    get paymentSelect() { return $('[data-test="payment-method"]'); }
    get cardNumber() { return $('[data-test="credit_card_number"]'); }
    get expirationDate() { return $('[data-test="expiration_date"]'); }
    get cvv() { return $('[data-test="cvv"]'); }
    get holderName() { return $('[data-test="card_holder_name"]'); }
    get finishPayment() { return $('button[data-test="finish"]'); }
    get paymentSuccess() { return $('[data-test="payment-success-message"]'); }

    async goToCheckout() {
        const cartButton = await $('.nav-item a[data-test="nav-cart"]');
        await cartButton.click();
        await browser.url("https://practicesoftwaretesting.com/checkout");
    }

    async clickProceed() {
        const proceedButton = await $('button.btn.btn-success');
        await proceedButton.waitForExist();
        await proceedButton.click();
    }

    async clickProceed2() {
        const proceedButton = await $('button[data-test="proceed-2"]');
        await proceedButton.waitForExist();
        await proceedButton.click();
    }

    async address({ country, postalCode, houseNumber, street, city, state }) {
        await this.countryInput.setValue(country);
        await this.postalCodeInput.setValue(postalCode);
        await this.houseNumberInput.setValue(houseNumber);
        await this.streetInput.setValue(street);
        await this.cityInput.setValue(city);
        await this.stateInput.setValue(state);
    }

    async submit3() {
        const proceedBtn3 = await $('[data-test="proceed-3"]');
        await proceedBtn3.waitForExist();
        await proceedBtn3.click();
    }

    async paymentSelection({ paymentOption }) {
        await this.paymentSelect.selectByAttribute('value', 'credit-card');
    }

    async creditCardInfo({ creditCardNumber, expiration, CVV, cardHolderName }) {
        await this.cardNumber.setValue(creditCardNumber);
        await this.expirationDate.setValue(expiration);
        await this.cvv.setValue(CVV);
        await this.holderName.setValue(cardHolderName);
    }

    async submitPayment() {
        await this.finishPayment.click();
    }

    async successMessage() {
        await expect(this.paymentSuccess).toBeDisplayed();
        await expect(this.paymentSuccess).toHaveText('Payment was successful');
    }
}

module.exports = new Checkout();