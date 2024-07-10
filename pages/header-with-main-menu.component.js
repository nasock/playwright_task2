const HeaderComponent = require('./header.component.js');

const mainMenuSelector = 'div#main-menu';
const selectedTabSelector = 'div#main-menu a.selected';

class HeaderWithMainMenuComponent extends HeaderComponent{

    constructor(pwPage, baseSelector) {
        super(pwPage, baseSelector);
        this.pwPage = pwPage;
    }

    get mainMenu(){
        return super.getElement(mainMenuSelector);
    }

    get selectedTab(){
        return super.getElement(selectedTabSelector);
    }

}

module.exports = HeaderWithMainMenuComponent;