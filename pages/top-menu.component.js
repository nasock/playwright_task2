const WebElement = require('./web-element.js');

const homeLinkSelector = 'a.home';
const projectsLinkSelector = 'a.projects';
const helpLinkSelector = 'a.help';
const signInLinkSelector = 'a.login';
const registerLinkSelector = 'a.register';

class TopMenuComponent extends WebElement{

    constructor(pwPage, baseSelector) {
        super(pwPage);
        this.pwPage = pwPage;
        this.baseSelector = baseSelector;
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