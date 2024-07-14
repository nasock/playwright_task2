const BasicPageWithMainMenu = require('./basic-with-main-menu.page.js');

const queryFormnSelector = 'form#query_form';
const projectListSelector = 'div#projects-index';
const pageNameSelector = 'div#content h2';

class ProjectsPage extends BasicPageWithMainMenu{

    constructor(pwPage) {
        super(pwPage);
        this.pwPage = pwPage;
    }

    async getPageName(){
        return await super.getElement(pageNameSelector);
    }

    async getQueryFormn(){
        return await super.getElement(queryFormnSelector);
    }

    async getProjectList(){
        return await super.getElement(projectListSelector);
    }
}

module.exports = ProjectsPage;