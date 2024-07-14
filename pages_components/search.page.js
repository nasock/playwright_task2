const BasicPageWithMainMenu = require('./basic-with-main-menu.page.js');

const searchInputSelector = 'input#search-input';
const selectedScopeSelector = 'select#scope option[selected="selected"]';
const allWordsCheckboxSelector = 'input#all_words';
const titleOnlyCheckboxSelector = 'input#titles_only';
const issuesTypeSelector = 'input#issues';
const newsTypeSelector = 'input#news';
const documentsTypeSelector = 'input#documents';
const changesetsTypeSelector = 'input#changesets';
const wikiPagesTypeSelector = 'input#wiki_pages';
const messagesTypeSelector = 'input#messages';
const projectsTypeSelector = 'input#projects';
const redminePluginsTypeSelector = 'input#redmine_plugins';
const searchResultSelector = 'dl#search-results';
const pageNameSelector = 'div#content>h2';

class SearchPage extends BasicPageWithMainMenu{

    constructor(pwPage) {
        super(pwPage);
        this.pwPage = pwPage;
    }

    async getPageName(){
        return await super.getElement(pageNameSelector);
    }

    async getSearchInput(){
        return await super.getElement(searchInputSelector);
    }

    async getSelectedScope(){
        return await super.getElement(selectedScopeSelector);
    }

    async getAllWordsCheckbox(){
        return await super.getElement(allWordsCheckboxSelector);
    }

    async getTitleOnlyCheckbox(){
        return await super.getElement(titleOnlyCheckboxSelector);
    }

    async getIssuesType(){
        return super.getElement(issuesTypeSelector);
    }

    async getNewsType(){
        return await super.getElement(newsTypeSelector);
    }

    async getDocumentsType(){
        return await super.getElement(documentsTypeSelector);
    }

    async getChangesetsType(){
        return await super.getElement(changesetsTypeSelector);
    }

    async getWikiPagesType(){
        return await super.getElement(wikiPagesTypeSelector);
    }

    async getMessagesType(){
        return await super.getElement(messagesTypeSelector);
    }

    async getProjectsType(){
        return await super.getElement(projectsTypeSelector);
    }

    async getRedminePluginsType(){
        return await super.getElement(redminePluginsTypeSelector);
    }

    async getSearchResult(){
        return await super.getElement(searchResultSelector);
    }

}

module.exports = SearchPage;