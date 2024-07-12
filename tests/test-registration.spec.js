const {test, expect} = require('@playwright/test');
const { faker } = require('@faker-js/faker');
const checkTestData = require('./data/check-test-data.js');
const HomePage = require('../pages_components/home.page.js');
const RegisterPage = require('../pages_components/register.page.js');
const LoginPage = require('../pages_components/login.page.js');

const login = faker.string.alpha({ length: { min: 1, max: 8 } });;
const password = faker.internet.password({ length: 8 });
const email = faker.internet.email();
const firstName = faker.person.firstName();
const lastName = faker.person.lastName();

test.beforeEach(async ({ page }) => {
    await page.goto('');
    let webPage = new HomePage(page);
    await (await webPage.getTopMenuComponent()).clickRegisterLink();
});

test.describe('Registration', () => {
    test('tast case 3: Registration (valid input)', async ({ page }) => {
        let webPage = new RegisterPage(page);

        // step 1
        await webPage.setLoginInput(login);
        await expect(await webPage.getLoginInput()).toHaveValue(login);

        // step 2
        await webPage.setPasswordInput(password);
        await expect(await webPage.getPasswordInput()).toHaveValue(password);

        // step 3
        await webPage.setPasswordConfirmationInput(password);
        await expect(await webPage.getPasswordConfirmationInput()).toHaveValue(password);

        // step 4
        await webPage.setFirsNameInput(firstName);
        await expect(await webPage.getFirsNameInput()).toHaveValue(firstName);

        // step 5
        await webPage.setLastNameInput(lastName);
        await expect(await webPage.getLastNameInput()).toHaveValue(lastName);

        // step 6
        await webPage.setEmailInput(email);
        await expect(await webPage.getEmailInput()).toHaveValue(email);

        // step 7
        await webPage.clickSubmitButton();
        await expect(page).toHaveURL(checkTestData.loginPageURL);
        webPage = new LoginPage(page);
        await expect(await webPage.getRegistrationConfirmation()).toHaveText(checkTestData.confirmationText + email +".");
    });

    test('tast case 4: Registration (empty input)', async ({ page }) => {
        const registerPage = new RegisterPage(page);

        // step 1
        await expect(await registerPage.getLoginInput()).toHaveValue('');
        await expect(await registerPage.getPasswordInput()).toHaveValue('');
        await expect(await registerPage.getPasswordConfirmationInput()).toHaveValue('');
        await expect(await registerPage.getFirsNameInput()).toHaveValue('');
        await expect(await registerPage.getLastNameInput()).toHaveValue('');
        await expect(await registerPage.getEmailInput()).toHaveValue('');

        // step 2
        await registerPage.clickSubmitButton();
        const errorMessages = await registerPage.getErrorMessages();
        await expect(await errorMessages.length).toBe(await checkTestData.emptyFieldErrors.length);
        for(let i = 0; i < errorMessages.length; i++){
            await expect(await errorMessages[i]).toHaveText(await checkTestData.emptyFieldErrors[i]);
        }
    });

    test('tast case 5: Registration (invalid input)', async ({ page }) => {
        const registerPage = new RegisterPage(page);

        // step 1
        const invalidLogin = login + '@#$';
        await registerPage.setLoginInput(invalidLogin);
        await expect(await registerPage.getLoginInput()).toHaveValue(invalidLogin);

        // step 2
        let invalidPassword = password.substring(0, 3)
        await registerPage.setPasswordInput(invalidPassword);
        await expect(await registerPage.getPasswordInput()).toHaveValue(invalidPassword);

        // step 3
        invalidPassword = await (invalidPassword.split('').reverse().join(''));
        await registerPage.setPasswordConfirmationInput(invalidPassword);
        await expect(await registerPage.getPasswordConfirmationInput()).toHaveValue(invalidPassword);

        // step 4
        const invalidName = firstName.repeat(30);
        await registerPage.setFirsNameInput(invalidName);
        await expect(await registerPage.getFirsNameInput()).toHaveValue(invalidName);

        // step 5
        await registerPage.setLastNameInput(invalidName);
        await expect(await registerPage.getLastNameInput()).toHaveValue(invalidName);

        // step 6
        const invalidEmail = email.replace('@','');
        await registerPage.setEmailInput(invalidEmail);
        await expect(await registerPage.getEmailInput()).toHaveValue(invalidEmail);

        // step 7
        await registerPage.clickSubmitButton();
        const errorMessages = await registerPage.getErrorMessages();
        await expect(await errorMessages.length).toBe(await checkTestData.invalidInputErrors.length);
        for(let i = 0; i < errorMessages.length; i++){
            expect(await errorMessages[i]).toHaveText(await checkTestData.invalidInputErrors[i]);
        }
    });
    
})