const BasicPageWithMainMenu = require('./basic-with-main-menu.page.js');

const pageNameSelector = 'div#main h2';
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
const serchResultSelector = 'dl#search-results';

class SearchPage extends BasicPageWithMainMenu{

    constructor(pwPage) {
        super(pwPage);
        this.pwPage = pwPage;
    }

    get pageName(){
        return super.getElement(pageNameSelector);
    }

    get searchInput(){
        return super.getElement(searchInputSelector);
    }

    get selectedScope(){
        return super.getElement(selectedScopeSelector);
    }

    get allWordsCheckbox(){
        return super.getElement(allWordsCheckboxSelector);
    }

    get titleOnlyCheckbox(){
        return super.getElement(titleOnlyCheckboxSelector);
    }

    get issuesType(){
        return super.getElement(issuesTypeSelector);
    }

    get newsType(){
        return super.getElement(newsTypeSelector);
    }

    get documentsType(){
        return super.getElement(documentsTypeSelector);
    }

    get changesetsType(){
        return super.getElement(changesetsTypeSelector);
    }

    get wikiPagesType(){
        return super.getElement(wikiPagesTypeSelector);
    }

    get messagesType(){
        return super.getElement(messagesTypeSelector);
    }

    get projectsType(){
        return super.getElement(projectsTypeSelector);
    }

    get redminePluginsType(){
        return super.getElement(redminePluginsTypeSelector);
    }

    get serchResult(){
        return super.getElement(serchResultSelector);
    }

}

module.exports = SearchPage;