const BasicPageWithMainMenu = require('./basic-with-main-menu.page.js');

const pageNameSelector = 'div#main h1';

class HomePage extends BasicPageWithMainMenu{

    constructor(pwPage) {
        super(pwPage);
        this.pwPage = pwPage;
    }

    async getPageName(){
        return await super.getElement(pageNameSelector);
    }

}

module.exports = HomePage;