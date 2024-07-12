const {test, expect} = require('@playwright/test');
const checkTestData = require('./data/check-test-data.js');
const HomePage = require('../pages_components/home.page.js');
const ProjectsPage = require('../pages_components/projects.page.js');
const GuidePage = require('../pages_components/guide.page.js');
const LoginPage = require('../pages_components/login.page.js');
const RegisterPage = require('../pages_components/register.page.js');


test.beforeEach( async ({ page }) => {
    await page.goto('');
});

test.describe('Website navigation', () => {
    test('tast case 1: Navigate the site via the navigation bar in the top menu', async ({ page }) => {
        let webPage = new HomePage(page);

        // step 1
        await (await webPage.getTopMenuComponent()).clickProjectsLink();
        webPage = new ProjectsPage(page);

        await checkCommonComponents(page, webPage, checkTestData.projectsPageURL);
        await expect(await webPage.getPageName()).toHaveText(checkTestData.projectsPageName);
        await expect(await webPage.getProjectList()).toBeVisible();

        // step 2
        await (await webPage.getTopMenuComponent()).clickHelpLink();
        webPage = new GuidePage(page);

        await checkCommonComponents(page, webPage, checkTestData.guidePageURL);
        await expect(await webPage.getPageName()).toContainText(checkTestData.guidePageName);
        await expect(await (await webPage.getHeaderComponent()).getMainMenu()).toBeVisible();

        // step 3
        await (await webPage.getTopMenuComponent()).clickSignInLink();
        webPage = new LoginPage(page);

        await checkCommonComponents(page, webPage, checkTestData.loginPageURL);
        await expect(await webPage.getLoginForm()).toBeVisible();

        // step 4
        await (await webPage.getTopMenuComponent()).clickRegisterLink();
        webPage = new RegisterPage(page);

        await checkCommonComponents(page, webPage, checkTestData.registerPageURL);
        await expect(await webPage.getPageName()).toHaveText(checkTestData.registerPageName);
        await expect(await webPage.getRegisterForm()).toBeVisible();

         // step 4
        await (await webPage.getTopMenuComponent()).clickHomeLink();
        webPage = new HomePage(page);

        await checkCommonComponents(page, webPage, baseURL);
        await expect(await webPage.getPageName()).toContainText(checkTestData.mainPageName);
        await expect(await (await webPage.getHeaderComponent()).getMainMenu()).toBeVisible();
        await expect(await (await webPage.getHeaderComponent()).getSelectedTab()).toHaveText(checkTestData.defaultMainMenuTab);

    });

    async function checkCommonComponents(pwPage, webPage, pageURL) {
        await expect(pwPage).toHaveURL(pageURL);
        await expect(await (await webPage.getTopMenuComponent()).getMenuElement()).toBeVisible();
        await expect(await (await webPage.getHeaderComponent()).getHeaderElement()).toBeVisible();
        await expect(await webPage.getSidebar()).toBeVisible();
    };
})