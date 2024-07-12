const HeaderComponent = require('./header.component.js');

const mainMenuSelector = 'div#main-menu';
const selectedTabSelector = 'div#main-menu a.selected';

class HeaderWithMainMenuComponent extends HeaderComponent{

    constructor(pwPage) {
        super(pwPage);
        this.pwPage = pwPage;
    }

    async getMainMenu(){
        return await super.getElement(mainMenuSelector);
    }

    async getSelectedTab(){
        return await super.getElement(selectedTabSelector);
    }

}

module.exports = HeaderWithMainMenuComponent;