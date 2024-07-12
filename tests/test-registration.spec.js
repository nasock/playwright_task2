const {test, expect} = require('@playwright/test');
const testData = require('./test-data.js');
const HomePage = require('../pages/home.page.js');
const RegisterPage = require('../pages/register.page.js');
const LoginPage = require('../pages/login.page.js');

// TODO 1 put in the file .env
const mainPageURL = 'https://www.redmine.org/';
// TODO 3 generate email
const email = 'viwep51952@calunia.com';

test.beforeEach(async ({ page }) => {
    // TODO 4 goto(mainPageURL) put in some kind of config to start automaticaly
    await page.goto(mainPageURL);
    let webPage = new HomePage(page);
    await (await webPage.getTopMenuComponent()).clickRegisterLink();
});

test.describe('Registration', () => {
    test('tast case 3: Registration (valid input)', async ({ page }) => {
        let webPage = new RegisterPage(page);

        // step 1
        const randomLogin = await (testData.login + await Math.floor(await Math.random() * await Math.pow(10, 10)));
        await webPage.setLoginInput(randomLogin);
        await expect(await webPage.getLoginInput()).toHaveValue(randomLogin);

        // step 2
        await webPage.setPasswordInput(testData.password);
        await expect(await webPage.getPasswordInput()).toHaveValue(testData.password);

        // step 3
        await webPage.setPasswordConfirmationInput(testData.password);
        await expect(await webPage.getPasswordConfirmationInput()).toHaveValue(testData.password);

        // step 4
        await webPage.setFirsNameInput(testData.firstName);
        await expect(await webPage.getFirsNameInput()).toHaveValue(testData.firstName);

        // step 5
        await webPage.setLastNameInput(testData.lastName);
        await expect(await webPage.getLastNameInput()).toHaveValue(testData.lastName);

        // step 6
        await webPage.setEmailInput(email);
        await expect(await webPage.getEmailInput()).toHaveValue(email);

        // step 7
        await webPage.clickSubmitButton();
        await expect(page).toHaveURL(mainPageURL + testData.loginPageURL);
        webPage = new LoginPage(page);
        await expect(await webPage.getRegistrationConfirmation()).toHaveText(testData.confirmationText + email +".");

    });

    // test('tast case 4: Registration (empty input)', async ({ page }) => {
    //     const registerPage = new RegisterPage(page);

    //     // step 1
    //     await expect(await registerPage.getLoginInput()).toHaveValue('');
    //     await expect(await registerPage.getPasswordInput()).toHaveValue('');
    //     await expect(await registerPage.getPasswordConfirmationInput()).toHaveValue('');
    //     await expect(await registerPage.getFirsNameInput()).toHaveValue('');
    //     await expect(await registerPage.getLastNameInput()).toHaveValue('');
    //     await expect(await registerPage.getEmailInput()).toHaveValue('');

    //     // step 2
    //     await registerPage.clickSubmitButton();
    //     const errorMessages = await registerPage.getErrorMessages();
    //     await expect(await errorMessages.length).toBe(await testData.emptyFieldErrors.length);
    //     for(let i = 0; i < errorMessages.length; i++){
    //         await expect(await errorMessages[i]).toHaveText(await testData.emptyFieldErrors[i]);
    //     }
    // });

    // test('tast case 5: Registration (invalid input)', async ({ page }) => {
    //     const registerPage = new RegisterPage(page);

    //     // step 1
    //     const invalidLogin = await (testData.login + '@#$');
    //     await registerPage.setLoginInput(invalidLogin);
    //     await expect(await registerPage.getLoginInput()).toHaveValue(invalidLogin);

    //     // step 2
    //     let invalidPassword = testData.password.substring(0, 3)
    //     await registerPage.setPasswordInput(invalidPassword);
    //     await expect(await registerPage.getPasswordInput()).toHaveValue(invalidPassword);

    //     // step 3
    //     invalidPassword = await (invalidPassword.split('').reverse().join(''));
    //     await registerPage.setPasswordConfirmationInput(invalidPassword);
    //     await expect(await registerPage.getPasswordConfirmationInput()).toHaveValue(invalidPassword);

    //     // step 4
    //     const invalidName = testData.firstName.repeat(30);
    //     await registerPage.setFirsNameInput(invalidName);
    //     await expect(await registerPage.getFirsNameInput()).toHaveValue(invalidName);

    //     // step 5
    //     await registerPage.setLastNameInput(invalidName);
    //     await expect(await registerPage.getLastNameInput()).toHaveValue(invalidName);

    //     // step 6
    //     const invalidEmail = email.replace('@', '');
    //     await registerPage.setEmailInput(invalidEmail);
    //     await expect(await registerPage.getEmailInput()).toHaveValue(invalidEmail);

    //     // step 7
    //     await registerPage.clickSubmitButton();
    //     const errorMessages = await registerPage.getErrorMessages();
    //     await expect(await errorMessages.length).toBe(await testData.invalidInputErrors.length);
    //     for(let i = 0; i < errorMessages.length; i++){
    //         expect(await errorMessages[i]).toHaveText(await testData.invalidInputErrors[i]);
    //     }
    // });
    
})