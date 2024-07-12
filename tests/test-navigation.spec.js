const {test, expect} = require('@playwright/test');
const testData = require('./test-data.js');
const HomePage = require('../pages/home.page.js');
const ProjectsPage = require('../pages/projects.page.js');
const GuidePage = require('../pages/guide.page.js');
const LoginPage = require('../pages/login.page.js');
const RegisterPage = require('../pages/register.page.js');

// TODO 1 put in the file .env
const mainPageURL = 'https://www.redmine.org/';

test.beforeEach( async ({ page }) => {
   // TODO 3 goto(mainPageURL) put in some kind of config to start automaticaly
    await page.goto(mainPageURL);
});

test.describe('Website navigation', () => {
    test('tast case 1: Navigate the site via the navigation bar in the top menu', async ({ page }) => {
        let webPage = new HomePage(page);

        // step 1
        await (await webPage.getTopMenuComponent()).clickProjectsLink();
        webPage = new ProjectsPage(page);

        await checkCommonComponents(page, webPage, mainPageURL + testData.projectsPageURL);
        await expect(await webPage.getPageName()).toHaveText(testData.projectsPageName);
        await expect(await webPage.getProjectList()).toBeVisible();

        // step 2
        await (await webPage.getTopMenuComponent()).clickHelpLink();
        webPage = new GuidePage(page);

        await checkCommonComponents(page, webPage, mainPageURL + testData.guidePageURL);
        await expect(await webPage.getPageName()).toContainText(testData.guidePageName);
        await expect(await (await webPage.getHeaderComponent()).getMainMenu()).toBeVisible();

        // step 3
        await (await webPage.getTopMenuComponent()).clickSignInLink();
        webPage = new LoginPage(page);

        await checkCommonComponents(page, webPage, testData.loginPageURL);
        await expect(await webPage.getLoginForm()).toBeVisible();

        // step 4
        await (await webPage.getTopMenuComponent()).clickRegisterLink();
        webPage = new RegisterPage(page);

        await checkCommonComponents(page, webPage, mainPageURL + testData.registerPageURL);
        await expect(await webPage.getPageName()).toHaveText(testData.registerPageName);
        await expect(await webPage.getRegisterForm()).toBeVisible();

         // step 4
        await (await webPage.getTopMenuComponent()).clickHomeLink();
        webPage = new HomePage(page);

        await checkCommonComponents(page, webPage, mainPageURL);
        await expect(await webPage.getPageName()).toContainText(testData.mainPageName);
        await expect(await (await webPage.getHeaderComponent()).getMainMenu()).toBeVisible();
        await expect(await (await webPage.getHeaderComponent()).getSelectedTab()).toHaveText(testData.defaultMainMenuTab);

    });

    async function checkCommonComponents(pwPage, webPage, pageURL) {
        await expect(pwPage).toHaveURL(pageURL);
        await expect(await (await webPage.getTopMenuComponent()).getMenuElement()).toBeVisible();
        await expect(await (await webPage.getHeaderComponent()).getHeaderElement()).toBeVisible();
        await expect(await webPage.getSidebar()).toBeVisible();
    };
})