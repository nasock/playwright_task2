const {test, expect} = require('@playwright/test');
const testData = require('./test-data.js');
const HomePage = require('../pages/home.page.js');
const SearchPage = require('../pages/search.page.js');

// TODO 1 put in the file .env
const mainPageURL = 'https://www.redmine.org/';

// test.beforeEach(async ({ page }) => {
//     // TODO 2 goto(mainPageURL) put in some kind of config to start automaticaly
//     await page.goto(mainPageURL);
// });

// test.describe('Website search', () => {
//     test('tast case 2: Search bar in the header (valid input)', async ({ page }) => {
//         let webPage = new HomePage(page);

//         // step 1
//         await (await webPage.getHeaderComponent()).setSearchInput(testData.searchValue);
//         await expect(await (await webPage.getHeaderComponent()).getSearchInput()).toHaveValue(testData.searchValue);

//         // step 2
//         await webPage.pressEnter();
//         webPage = new SearchPage(page);

//         await expect(await webPage.getPageName()).toHaveText(testData.searchPageName);
//         await expect(await webPage.getSearchInput()).toHaveValue(testData.searchValue);
//         await expect(await webPage.getSelectedScope()).toHaveText(testData.searchDefaultScope);

//         await expect(await webPage.getAllWordsCheckbox()).toBeChecked();
//         await expect(await webPage.getWikiPagesType()).toBeChecked();

//         await expect(await webPage.getTitleOnlyCheckbox()).not.toBeChecked();
//         await expect(await webPage.getIssuesType()).not.toBeChecked();
//         await expect(await webPage.getNewsType()).not.toBeChecked();
//         await expect(await webPage.getDocumentsType()).not.toBeChecked();
//         await expect(await webPage.getChangesetsType()).not.toBeChecked();
//         await expect(await webPage.getMessagesType()).not.toBeChecked();
//         await expect(await webPage.getProjectsType()).not.toBeChecked();
//         await expect(await webPage.getRedminePluginsType()).not.toBeChecked();

//         await expect(await webPage.getSerchResult()).toBeVisible();
//     });
// })