const BasicPage = require('./basic.page.js');

const loginFormSelector = 'div#login-form';
const registrationConfirmationSelector = 'div#flash_notice';

class LoginPage extends BasicPage{

    constructor(pwPage) {
        super(pwPage);
        this.pwPage = pwPage;
    }

    async getPageName(){
        return undefined;
    }

    async getLoginForm(){
        return await super.getElement(loginFormSelector);
    }

    async getRegistrationConfirmation(){
        return await super.getElement(registrationConfirmationSelector);
    }
}

module.exports = LoginPage;