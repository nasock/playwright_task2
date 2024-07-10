const WebElement = require('./web-element.js');

const quickSearchSelector = 'div#quick-search';

class HeaderComponent extends WebElement{

    constructor(pwPage, baseSelector) {
        super(pwPage);
        this.pwPage = pwPage;
        this.baseSelector = baseSelector;
    }

    get quickSearch(){
       return super.getElement(quickSearchSelector);
    }

}

module.exports = HeaderComponent;