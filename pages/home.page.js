const BasicPageWithMainManu = require('./basic-with-main-menu.page.js');

class HomePage extends BasicPageWithMainManu{

    constructor(pwPage) {
        super(pwPage);
        this.pwPage = pwPage;
    }

}