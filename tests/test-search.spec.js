const HomePage = require('../pages/home.page.js');
const SearchPage = require('../pages/search.page.js');

const searchValue = 'javascript';

test.beforeEach(({ page }) => {
    page.goto('https://www.redmine.org/');
  });

test.describe('Website search', () => {
    test('tast case 2: Search bar in the header (valid input)', ({ page }) => {
        let webPage = new HomePage(page);

        // step 1
        webPage.headerComponent.setSearchInput(searchValue);
        expect(webPage.headerComponent.searchInput).toHaveText(searchValue);

        // step 2
        webPage.pressEnter();
        webPage = new SearchPage(page);

        // TODO ???????????? override
        expect(webPage.pageName).toHaveText('Search');
        expect(webPage.searchInput).toHaveText(searchValue);
        expect(webPage.selectedScope).toHaveText('Redmine and its subprojects');

        expect(webPage.allWordsCheckbox).toBeChecked();
        expect(webPage.wikiPagesType).toBeChecked();

        expect(webPage.titleOnlyCheckbox).not.toBeChecked();
        expect(webPage.issuesType).not.toBeChecked();
        expect(webPage.newsType).not.toBeChecked();
        expect(webPage.documentsType).not.toBeChecked();
        expect(webPage.changesetsType).not.toBeChecked();
        expect(webPage.messagesType).not.toBeChecked();
        expect(webPage.projectsType).not.toBeChecked();
        expect(webPage.redminePluginsType).not.toBeChecked();

        expect(webPage.serchResult).toBeVisible();
    });
})