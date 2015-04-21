var app = angular.module('cle', [
        'ui.router',
        'ngTouch'
    ]);

app.run(['$rootScope',
    '$state',
    '$location',
    '$window',
    function ($rootScope, $state, $location, $window) {
        $rootScope.$state = $state;

        // Check if page requires login
        $rootScope.$on('$stateChangeStart',
            function (event, toState, toParams, fromState, fromParams) {
                // Add functionality before state/page changes here
            }
        );

        // Get Page Title on successful page change
        $rootScope.$on('$stateChangeSuccess', function (event, toState) {
            // Sets HTML/Page Title
            $rootScope.currentPage = toState.name;

            if (toState.data && toState.data.pageTitle) {
                $rootScope.pageTitle = toState.data.pageTitle;
            } else {
                $rootScope.pageTitle = 'Innovative Design';
            }

            // Add functionality for successful state/page change here
        });

        // Scroll to top of page on page change
        $rootScope.$on('$viewContentLoaded', function() {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        });
    }
]);

app.config(['$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: './views/home.html',
                data: {
                    pageTitle: 'Innovative Design'
                }
            })
            .state('about', {
                url: '/about',
                templateUrl: './views/about.html',
                data: {
                    pageTitle: 'InnoD - About'
                }
            })
            .state('projects', {
                url: '/projects',
                templateUrl: './views/projects.html',
                data: {
                    pageTitle: 'InnoD - Projects'
                }
            })
            .state('contact', {
                url: '/contact',
                templateUrl: './views/contact.html',
                data: {
                    pageTitle: 'InnoD - Contact'
                }
            });
    }
]);