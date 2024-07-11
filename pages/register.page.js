const BasicPage = require('./basic.page.js');

const registerFormSelector = 'form#new_user';
const loginInputSelector = 'input#user_login';
const passwordInputSelector = 'input#user_password';
const passwordConfirmationInputSelector = 'input#user_password_confirmation';
const firsNameInputSelector = 'input#user_firstname';
const lastNameInputSelector = 'input#user_lastname';
const emailInputSelector = 'input#user_mail';
const submitButtonSelector = 'input[type="submit"]';
const errorMessagesSelector = 'div#errorExplanation li';

class RegisterPage extends BasicPage{

    constructor(pwPage) {
        super(pwPage);
        this.pwPage = pwPage;
    }

    get registerForm(){
        return super.getElement(registerFormSelector);
    }

    get loginInput(){
        return super.getElement(loginInputSelector);
    }

    get passwordInput(){
        return super.getElement(passwordInputSelector);
    }

    get passwordConfirmationInput(){
        return super.getElement(passwordConfirmationInputSelector);
    }

    get firsNameInput(){
        return super.getElement(firsNameInputSelector);
    }

    get lastNameInput(){
        return super.getElement(lastNameInputSelector);
    }

    get emailInput(){
        return super.getElement(emailInputSelector);
    }

    get errorMessages(){
        return super.getElement(errorMessagesSelector);
    }

    setLoginInput(value){
        super.setValueInElement(loginInputSelector, value);
    }

    setPasswordInput(value){
        super.setValueInElement(passwordInputSelector, value);
    }

    setPasswordConfirmationInput(value){
        super.setValueInElement(passwordConfirmationInputSelector, value);
    }

    setFirsNameInput(value){
        super.setValueInElement(firsNameInputSelector, value);
    }

    setLastNameInput(value){
        super.setValueInElement(lastNameInputSelector, value);
    }

    setEmailInput(value){
        super.setValueInElement(emailInputSelector, value);
    }

    clickSubmitButton(){
        super.clickElement(submitButtonSelector);
    }

}

module.exports = RegisterPage;