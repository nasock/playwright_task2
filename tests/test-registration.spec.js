const HomePage = require('../pages/home.page.js');
const RegisterPage = require('../pages/register.page.js');
const LoginPage = require('../pages/login.page.js');

const login = 'anna_098';
const password = '1234567890';
const firstName = 'Ann';
const lastName = 'Koval';
const email = '';
const confirmationText = `Account was successfully created. 
                        An email containing the instructions to activate
                        your account was sent to ${email}.`;
const emptyFieldErrors = ['Email cannot be blank',
                            'Login cannot be blank',
                            'First name cannot be blank',
                            'Last name cannot be blank',
                            'Password is too short (minimum is 8 characters)'
                            ];
const invalidInputErrors = ['Email is invalid',
                            'Login is invalid',
                            'First name is too long (maximum is 30 characters)',
                            'Last name is too long (maximum is 30 characters)',
                            'Password is too short (minimum is 8 characters)',
                            'Password doesn\'t match confirmation'
                            ];


test.beforeEach(({ page }) => {
    page.goto('https://www.redmine.org/');
    let webPage = new HomePage(page);
    webPage.topMenuComponent.clickRegisterLink();
  });

test.describe('Registration', () => {
    test('tast case 3: Registration (valid input)', ({ page }) => {
        let webPage = new RegisterPage(page);

        // step 1
        webPage.setLoginInput(login);
        expect(webPage.loginInput).toHaveValue(login);

        // step 2
        webPage.setPasswordInput(password);
        expect(webPage.passwordInput).toHaveValue(password);

        // step 3
        webPage.setPasswordConfirmationInput(password);
        expect(webPage.passwordConfirmationInput).toHaveValue(password);

        // step 4
        webPage.setFirsNameInput(firstName);
        expect(webPage.firsNameInput).toHaveValue(firstName);

        // step 5
        webPage.setLastNameInput(lastName);
        expect(webPage.lastNameInput).toHaveValue(lastName);

        // step 6
        webPage.setEmailInput(email);
        expect(webPage.emailInput).toHaveValue(email);

        // step 7
        webPage.clickSubmitButton();
        expect(page).toHaveURL('https://www.redmine.org/login');
        webPage = new LoginPage(page);
        expect(webPage.registrationConfirmation).toHaveText(confirmationText);

    });

    test('tast case 4: Registration (empty input)', ({ page }) => {
        const registerPage = new RegisterPage(page);
        registerPage.clickSubmitButton();

        const errorMessages = registerPage.errorMessages;
        expect(errorMessages.length).toBe(emptyFieldErrors.length);
        for(let i = 0; i < errorMessages.length; i++){
            expect(errorMessages[i]).toHaveText(emptyFieldErrors[i]);
        }
    });

    test('tast case 5: Registration (invalid input)', ({ page }) => {
        const registerPage = new RegisterPage(page);

        // step 1
        const invalidLogin = login + '@#$';
        registerPage.setLoginInput(invalidLogin);
        expect(registerPage.loginInput).toHaveValue(invalidLogin);

        // step 2
        let invalidPassword = password.substring(0, 3)
        registerPage.setPasswordInput(invalidPassword);
        expect(registerPage.passwordInput).toHaveValue(invalidPassword);

        // step 3
        invalidPassword = invalidPassword.split('').reverse().join('');
        registerPage.setPasswordConfirmationInput(invalidPassword);
        expect(registerPage.passwordConfirmationInput).toHaveValue(invalidPassword);

        // step 4
        const invalidName = firstName.repeat(30);
        registerPage.setFirsNameInput(invalidName);
        expect(registerPage.firsNameInput).toHaveValue(invalidName);

        // step 5
        registerPage.setLastNameInput(invalidName);
        expect(registerPage.lastNameInput).toHaveValue(invalidName);

        // step 6
        const invalidEmail = email.replace('@', '');
        registerPage.setEmailInput(invalidEmail);
        expect(registerPage.emailInput).toHaveValue(invalidEmail);

        // step 7
        registerPage.clickSubmitButton();
        const errorMessages = registerPage.errorMessages;
        expect(errorMessages.length).toBe(invalidInputErrors.length);
        for(let i = 0; i < errorMessages.length; i++){
            expect(errorMessages[i]).toHaveText(invalidInputErrors[i]);
        }
    });

    
})