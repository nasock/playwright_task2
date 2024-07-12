const BasicElement = require('./basic-element.js');

const baseSelector = 'div#header';
const searchInputSelector = 'input#q';

class HeaderComponent extends BasicElement{

    constructor(pwPage) {
        super(pwPage);
        this.pwPage = pwPage;
    }

    async getHeaderElement(){
        return await super.getElement(baseSelector);
    }

    async getSearchInput(){
       return await super.getElement(searchInputSelector);
    }

    async setSearchInput(value){
        await super.setValueInElement(searchInputSelector, value);
    }

}

module.exports = HeaderComponent;