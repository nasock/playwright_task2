const BasicPage = require('./basic.page.js');

const queryFormnSelector = 'form#query_form';
const projectListSelector = 'div#projects-index';

class ProjectsPage extends BasicPage{

    constructor(pwPage) {
        super(pwPage);
        this.pwPage = pwPage;
    }

    async getQueryFormn(){
        return await super.getElement(queryFormnSelector);
    }

    async getProjectList(){
        return await super.getElement(projectListSelector);
    }
}

module.exports = ProjectsPage;