const BasicPage = require('./basic.page.js');
const HeaderWithMainMenuComponent = require('./header-with-main-menu.component.js');

const pageNameSelector = 'div#content h1';

class BasicPageWithMainMenu extends BasicPage{

    constructor(pwPage) {
        super(pwPage);
        this.pwPage = pwPage;
    }

    async getPageName(){
        return await super.getElement(pageNameSelector);
    }

    async getHeaderComponent(){
        return await new HeaderWithMainMenuComponent(this.pwPage);
    }

}

module.exports = BasicPageWithMainMenu;