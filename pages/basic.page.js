const BasicElement = require('./basic-element.js');
const HeaderComponent = require('./header.component.js');
const TopMenuComponent = require('./top-menu.component.js');

const sidebarSelector = 'div#sidebar';
const pageNameSelector = 'div#main h1';
const pageSmallNameSelector = 'div#main h2';

class BasicPage extends BasicElement{

    constructor(pwPage) {
        super(pwPage);
        this.pwPage = pwPage;
    }

    get topMenuComponent(){
        return new TopMenuComponent(pwPage);
    }

    get headerComponent(){
        return new HeaderComponent(pwPage);
    }

    get sidebar(){
        return super.getElement(sidebarSelector);
    }

    get pageName(){
        return super.getElement(pageNameSelector);
    }

}

module.exports = BasicPage;