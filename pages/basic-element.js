class BasicElement {

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

    setValueInElement(selector, inputValue){
        return this.getElement(selector).fill(inputValue);
    }

    pressEnter(){
        this.pwPage.keyboard.press('Enter');
    }

}

module.exports = BasicElement;