const BasicPage = require('./basic.page.js');
const loginFormSelector = 'div#login-form';

class LoginPage extends BasicPage{

    constructor(pwPage) {
        super(pwPage);
        this.pwPage = pwPage;
    }

    get pageName(){
        return undefined;
    }

    get loginForm(){
        return super.getElement(loginFormSelector);
    }
}