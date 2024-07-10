const WebElement = require('./web-element.js');
const HeaderComponent = require('./header.component.js');
const TopMenuComponent = require('./top-menu.component.js');

const topMenuSelector = 'div#top-menu';
const headerSelector = 'div#header';
const sidebarSelector = 'div#sidebar';
const pageNamenSelector = 'div#main h1';

class BasicPage extends WebElement{

    constructor(pwPage) {
        super(pwPage);
        this.pwPage = pwPage;
    }

    get topMenuComponent(){
        return new TopMenuComponent(pwPage, topMenuSelector);
    }

    get headerComponent(){
        return new HeaderComponent(pwPage, headerSelector);
    }

    get sidebar(){
        return super.getElement(sidebarSelector);
    }

    get pageName(){
        return super.getElement(pageNamenSelector);
    }

}

module.exports = BasicPage;