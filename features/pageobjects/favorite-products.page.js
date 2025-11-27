const Page = require("./page");

class FavoriteProducts extends Page {
    get addFavorites() { return $('[data-test="add-to-favorites"]'); }
    get errorToast() { return $('div[role="alert"][class*="toast-message"]'); }

    async open() {
        return super.open('product/01KB2FH1GEK977ZNZMDS0WXR9Z');
    }

    async clickFavoriteButton() {
        await this.addFavorites.click();
    }

    async errorMessage(expectedMessage) {
        await expect(this.errorToast).toBeDisplayed();
        await expect(this.errorToast).toHaveText(expectedMessage);
    }

    async debugToast() {
        const toast = await this.errorToast;

        // DOM'a girene kadar bekle
        await toast.waitForExist({ timeout: 5000 });

        // Class bilgisi
        const className = await toast.getAttribute("class");
        console.log("TOAST CLASS:", className);

        // Text bilgisi
        const text = await toast.getText();
        console.log("TOAST TEXT:", text);
    }


}

module.exports = new FavoriteProducts();

