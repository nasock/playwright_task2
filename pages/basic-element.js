class BasicElement {

     /**   
   * @param {import('playwright').Page} pwPage
   */
    constructor(pwPage) {
        this.pwPage = pwPage;
    }

    async getElement(selector){
        return await this.pwPage.locator(selector);
    }

    async getElements(selector){
        return await this.pwPage.locator(selector).all();
    }

    async clickElement(selector){
        await (await this.getElement(selector)).click();
    }

    async setValueInElement(selector, inputValue){
        await (await this.getElement(selector)).fill(inputValue);
    }

    async pressEnter(){
        await this.pwPage.keyboard.press('Enter');
    }

}

module.exports = BasicElement;