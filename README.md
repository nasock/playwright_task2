## summary of repo: 
5 tests for https://www.redmine.org/: written on Javascript with Playwright framework

## requirements:
1) create **5** test cases (save as Excel or Word file)
2) implement the tests in **Playwright** with **page object model**
3) add **Raid** or **Allure** report
4) deploy to **GitHub**

## steps to install:
1) Playwright:
```
npm init playwright@latest
```
2) Faker:
```
npm install @faker-js/faker --save-dev
```
3) Allure:
```
npm install --save-dev allure-commandline
npm install --save-dev allure-playwright
```
	
## steps to launch:
```
npx playwright test
```

## steps to create the report:
```
npx allure serve allure-results
```

