const checkTestData = 
{
    mainPageURL: 'https://www.redmine.org/',
    projectsPageURL: 'https://www.redmine.org/projects',
    guidePageURL: 'https://www.redmine.org/guide',
    loginPageURL: 'https://www.redmine.org/login', 
    registerPageURL: 'https://www.redmine.org/account/register',
    
    // Website navigation: 
        // tast case 1: Navigate the site via the navigation bar in the top menu
        mainPageName: 'Redmine',
        projectsPageName: 'Projects',
        guidePageName: 'Redmine guide',
        registerPageName: 'Register ',
        defaultMainMenuTab: 'Wiki',


    // Website search: 
        // tast case 2: Search bar in the header (valid input)
        searchPageName: 'Search',
        searchDefaultScope: 'Redmine and its subprojects',


    // 'Registration'
        // tast case 3: Registration (valid input)
        confirmationText: 'Account was successfully created. An email containing the instructions to activate your account was sent to ',

        // tast case 4: Registration (empty input)
        emptyFieldErrors: ['Email cannot be blank',
                            'Login cannot be blank',
                            'First name cannot be blank',
                            'Last name cannot be blank',
                            'Password is too short (minimum is 8 characters)'
                            ],

        // tast case 5: Registration (invalid input)
        invalidInputErrors: ['Email is invalid',
                            'Login is invalid',
                            'First name is too long (maximum is 30 characters)',
                            'Last name is too long (maximum is 30 characters)',
                            'Password is too short (minimum is 8 characters)',
                            'Password doesn\'t match confirmation'
                            ],
};

module.exports = checkTestData;