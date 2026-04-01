class Language {
    get selectLanguage() { return $('[data-test="language-select"]'); }
    get trLang() { return $('[data-test="lang-tr"]'); }
    get getHome() { return $('[data-test="nav-home"]'); }
    get getCategories() { return $('[data-test="nav-categories"]'); }

    async openDropdown() {
        await this.selectLanguage.waitForDisplayed();
        await this.selectLanguage.click();
    }

    async selectTr() {
        await this.trLang.waitForClickable();
        await this.trLang.click();
    }

    async verifyTurkish() {
        await expect(this.getHome).toHaveText(expect.stringContaining('Anasayfa'));
        await expect(this.getCategories).toHaveText(expect.stringContaining('Kategoriler'));
    }
}

module.exports = new Language();