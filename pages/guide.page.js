const BasicPageWithMainManu = require('./basic-with-main-menu.page.js');

class GuidePage extends BasicPageWithMainManu{

    constructor(pwPage) {
        super(pwPage);
        this.pwPage = pwPage;
    }

}