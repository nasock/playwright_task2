const BasicPageWithMainMenu = require('./basic-with-main-menu.page.js');

class HomePage extends BasicPageWithMainMenu{

    constructor(pwPage) {
        super(pwPage);
        this.pwPage = pwPage;
    }

}

module.exports = HomePage;