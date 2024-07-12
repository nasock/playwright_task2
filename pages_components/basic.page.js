const BasicElement = require('./basic-element.js');
const HeaderComponent = require('./header.component.js');
const TopMenuComponent = require('./top-menu.component.js');

const sidebarSelector = 'div#sidebar';
const pageNameSelector = 'div#main h2';

class BasicPage extends BasicElement{

    constructor(pwPage) {
        super(pwPage);
        this.pwPage = pwPage;
    }

    async getTopMenuComponent(){
        return await new TopMenuComponent(this.pwPage);
    }

    async getHeaderComponent(){
        return await new HeaderComponent(this.pwPage);
    }

    async getSidebar(){
        return await super.getElement(sidebarSelector);
    }

    async getPageName(){
        return await super.getElement(pageNameSelector);
    }

}

module.exports = BasicPage;