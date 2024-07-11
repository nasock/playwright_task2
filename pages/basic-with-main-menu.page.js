const BasicPage = require('./basic.page.js');
const HeaderWithMainMenuComponent = require('./header-with-main-menu.component.js');

class BasicPageWithMainMenu extends BasicPage{

    constructor(pwPage) {
        super(pwPage);
        this.pwPage = pwPage;
    }

    get headerComponent(){
        return new HeaderWithMainMenuComponent(pwPage);
    }

}

module.exports = BasicPageWithMainMenu;