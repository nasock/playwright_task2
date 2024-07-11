const BasicElement = require('./basic-element.js');

const baseSelector = 'div#top-menu';
const homeLinkSelector = 'a.home';
const projectsLinkSelector = 'a.projects';
const helpLinkSelector = 'a.help';
const signInLinkSelector = 'a.login';
const registerLinkSelector = 'a.register';

class TopMenuComponent extends BasicElement{

    constructor(pwPage) {
        super(pwPage);
        this.pwPage = pwPage;
    }

    get menuElement(){
        return super.getElement(baseSelector);
    }

    clickHomeLink(){
        super.clickElement(homeLinkSelector);
    }

    clickProjectsLink(){
        super.clickElement(projectsLinkSelector);
    }

    clickHelpLink(){
        super.clickElement(helpLinkSelector);
    }

    clickSignInLink(){
        super.clickElement(signInLinkSelector);
    }

    clickRegisterLink(){
        super.clickElement(registerLinkSelector);
    }

}

module.exports = TopMenuComponent;