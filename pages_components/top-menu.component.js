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

    async getMenuElement(){
        return await super.getElement(baseSelector);
    }

    async clickHomeLink(){
        await super.clickElement(homeLinkSelector);
    }

    async clickProjectsLink(){
        await super.clickElement(projectsLinkSelector);
    }

    async clickHelpLink(){
        await super.clickElement(helpLinkSelector);
    }

    async clickSignInLink(){
        await super.clickElement(signInLinkSelector);
    }

    async clickRegisterLink(){
        await super.clickElement(registerLinkSelector);
    }

}

module.exports = TopMenuComponent;