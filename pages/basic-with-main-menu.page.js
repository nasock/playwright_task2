const BasicPage = require('./basic.page.js');
const HeaderWithMainMenuComponent = require('./header-with-main-menu.component.js');

class BasicPageWithMainManu extends BasicPage{

    constructor(pwPage) {
        super(pwPage);
        this.pwPage = pwPage;
    }

    get headerComponent(){
        return new HeaderWithMainMenuComponent(pwPage, super.headerSelector);
    }

}

module.exports = BasicPageWithMainManu;