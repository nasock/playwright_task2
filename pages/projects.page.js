const BasicPage = require('./basic.page.js');

const queryFormnSelector = 'form#query_form';
const projectListSelector = 'div#projects-index';

class ProjectsPage extends BasicPage{

    constructor(pwPage) {
        super(pwPage);
        this.pwPage = pwPage;
    }

    get queryFormn(){
        return super.getElement(queryFormnSelector);
    }

    get projectList(){
        return super.getElement(projectListSelector);
    }
}

module.exports = ProjectsPage;