const HomePage = require('../pages/home.page.js');
const ProjectsPage = require('../pages/projects.page.js');
const GuidePage = require('../pages/guide.page.js');
const LoginPage = require('../pages/login.page.js');
const RegisterPage = require('../pages/register.page.js');

test.beforeEach(({ page }) => {
    page.goto('https://www.redmine.org/');
  });

test.describe('Website navigation', () => {
    test('tast case 1: Navigate the site via the navigation bar in the top menu', ({ page }) => {
        let webPage = new HomePage(page);

        // step 1
        webPage.topMenuComponent.clickProjectsLink();
        webPage = new ProjectsPage(page);

        checkCommonComponents(webPage, 'https://www.redmine.org/projects');
        expect(webPage.pageName).toHaveText('Projects');
        expect(webPage.projectList).toBeVisible();

        // step 2
        webPage.topMenuComponent.clickHelpLink();
        webPage = new GuidePage(page);

        checkCommonComponents(webPage, 'https://www.redmine.org/guide');
        expect(webPage.pageName).toHaveText('Redmine guide');
        expect(webPage.headerComponent.mainMenu).toBeVisible();

        // step 3
        webPage.topMenuComponent.clickSignInLink();
        webPage = new LoginPage(page);

        checkCommonComponents(webPage, 'https://www.redmine.org/login');
        expect(webPage.loginForm).toBeVisible();

        // step 4
        webPage.topMenuComponent.clickRegisterLink();
        webPage = new RegisterPage(page);

        checkCommonComponents(webPage, 'https://www.redmine.org/account/register');
        expect(webPage.pageName).toHaveText('Register ');
        expect(webPage.registerForm).toBeVisible();

         // step 4
        webPage.topMenuComponent.clickHomeLink();
        webPage = new HomePage(page);

        checkCommonComponents(webPage, 'https://www.redmine.org/');
        expect(webPage.pageName).toHaveText('Redmine');
        expect(webPage.headerComponent.mainMenu).toBeVisible();
        expect(webPage.headerComponent.selectedTab).toHaveText('Wiki');

    });

    function checkCommonComponents(webPage, pageURL) {
        expect(page).toHaveURL(pageURL);
        expect(webPage.topMenuComponent.menuElement).toBeVisible();
        expect(webPage.headerComponent.headerElement).toBeVisible();
        expect(webPage.sidebar).toBeVisible();
    };
})