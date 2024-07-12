const BasicPage = require('./basic.page.js');
const HeaderWithMainMenuComponent = require('./header-with-main-menu.component.js');

class BasicPageWithMainMenu extends BasicPage{

    constructor(pwPage) {
        super(pwPage);
        this.pwPage = pwPage;
    }

    async getHeaderComponent(){
        return await new HeaderWithMainMenuComponent(this.pwPage);
    }

}

module.exports = BasicPageWithMainMenu;