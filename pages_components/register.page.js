const BasicPage = require('./basic.page.js');

const registerFormSelector = 'form#new_user';
const loginInputSelector = 'input#user_login';
const passwordInputSelector = 'input#user_password';
const passwordConfirmationInputSelector = 'input#user_password_confirmation';
const firsNameInputSelector = 'input#user_firstname';
const lastNameInputSelector = 'input#user_lastname';
const emailInputSelector = 'input#user_mail';
const submitButtonSelector = 'input[type="submit"]';
const errorBoxSelector = 'div#errorExplanation';
const errorMessagesSelector = 'div#errorExplanation li';

class RegisterPage extends BasicPage{

    constructor(pwPage) {
        super(pwPage);
        this.pwPage = pwPage;
    }

    async getRegisterForm(){
        return await super.getElement(registerFormSelector);
    }

    async getLoginInput(){
        return await super.getElement(loginInputSelector);
    }

    async getPasswordInput(){
        return await super.getElement(passwordInputSelector);
    }

    async getPasswordConfirmationInput(){
        return await super.getElement(passwordConfirmationInputSelector);
    }

    async getFirsNameInput(){
        return await super.getElement(firsNameInputSelector);
    }

    async getLastNameInput(){
        return await super.getElement(lastNameInputSelector);
    }

    async getEmailInput(){
        return await super.getElement(emailInputSelector);
    }

    async getErrorBox(){
        return await super.getElement(errorBoxSelector);
    }

    async getErrorMessages(){
        return await super.getElements(errorMessagesSelector);
    }

    async setLoginInput(value){
        await super.setValueInElement(loginInputSelector, value);
    }

    async setPasswordInput(value){
        await super.setValueInElement(passwordInputSelector, value);
    }

    async setPasswordConfirmationInput(value){
        await super.setValueInElement(passwordConfirmationInputSelector, value);
    }

    async setFirsNameInput(value){
        await super.setValueInElement(firsNameInputSelector, value);
    }

    async setLastNameInput(value){
        await super.setValueInElement(lastNameInputSelector, value);
    }

    async setEmailInput(value){
        await super.setValueInElement(emailInputSelector, value);
    }

    async clickSubmitButton(){
        await super.clickElement(submitButtonSelector);
    }

}

module.exports = RegisterPage;