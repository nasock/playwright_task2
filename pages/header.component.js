const BasicElement = require('./basic-element.js');

const baseSelector = 'div#header';
const searchInputSelector = 'input#q';

class HeaderComponent extends BasicElement{

    constructor(pwPage) {
        super(pwPage);
        this.pwPage = pwPage;
    }

    get headerElement(){
        return super.getElement(baseSelector);
    }

    get searchInput(){
       return super.getElement(searchInputSelector);
    }

    setSearchInput(value){
        super.setValueInElement(searchInputSelector, value);
    }

}

module.exports = HeaderComponent;