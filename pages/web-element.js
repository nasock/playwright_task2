class WebElement {

     /**   
   * @param {import('playwright').Page} pwPage
   */
    constructor(pwPage) {
        this.pwPage = pwPage;
    }

    getElement(selector){
        return this.pwPage.locator(selector);
    }

    clickElement(selector){
        this.getElement(selector).click();
    }

}

module.exports = WebElement;