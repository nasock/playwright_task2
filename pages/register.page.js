const BasicPage = require('./basic.page.js');
const registerFormSelector = 'form#new_user'
const submitButtonSelector = 'input[type="submit"]';

class RegisterPage extends BasicPage{

    constructor(pwPage) {
        super(pwPage);
        this.pwPage = pwPage;
    }

    get registerForm(){
        return super.getElement(registerFormSelector);
    }

}