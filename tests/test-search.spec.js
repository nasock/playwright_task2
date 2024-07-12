const {test, expect} = require('@playwright/test');
const { faker } = require('@faker-js/faker');
const checkTestData = require('./data/check-test-data.js');
const HomePage = require('../pages_components/home.page.js');
const SearchPage = require('../pages_components/search.page.js');

const searchValue = faker.word.noun();

test.beforeEach(async ({ page }) => {
    await page.goto('');
});

test.describe('Website search', () => {
    test('tast case 2: Search bar in the header (valid input)', async ({ page }) => {
        let webPage = new HomePage(page);

        // step 1
        await (await webPage.getHeaderComponent()).setSearchInput(searchValue);
        await expect(await (await webPage.getHeaderComponent()).getSearchInput()).toHaveValue(searchValue);

        // step 2
        await webPage.pressEnter();
        webPage = new SearchPage(page);

        await expect(await webPage.getPageName()).toHaveText(checkTestData.searchPageName);
        await expect(await webPage.getSearchInput()).toHaveValue(searchValue);
        await expect(await webPage.getSelectedScope()).toHaveText(checkTestData.searchDefaultScope);

        await expect(await webPage.getAllWordsCheckbox()).toBeChecked();
        await expect(await webPage.getWikiPagesType()).toBeChecked();

        await expect(await webPage.getTitleOnlyCheckbox()).not.toBeChecked();
        await expect(await webPage.getIssuesType()).not.toBeChecked();
        await expect(await webPage.getNewsType()).not.toBeChecked();
        await expect(await webPage.getDocumentsType()).not.toBeChecked();
        await expect(await webPage.getChangesetsType()).not.toBeChecked();
        await expect(await webPage.getMessagesType()).not.toBeChecked();
        await expect(await webPage.getProjectsType()).not.toBeChecked();
        await expect(await webPage.getRedminePluginsType()).not.toBeChecked();

        await expect(await webPage.getSearchResult()).toHaveCount(1);
    });
})