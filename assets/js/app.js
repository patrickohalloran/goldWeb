var app = angular.module('goldWeb', [
        'ui.router',
        'ngTouch',
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
            .state('angela', {
                url: '/angela',
                templateUrl: './views/portfoliopage.html',
                data: {
                    pageTitle: 'Angela Choi',
                    name: 'Angela Choi'
                }
            })
            .state('josephine', {
                url: '/josephine',
                templateUrl: './views/portfoliopage.html',
                data: {
                    pageTitle: 'Josephine Ung',
                    name: 'Josephine Ung'
                }
            })
            .state('tiffany', {
                url: '/tiffany',
                templateUrl: './views/portfoliopage.html',
                data: {
                    pageTitle: 'Tiffany Kim',
                    name: 'Tiffany Kim'
                }
            })
            .state('yi', {
                url: '/yi',
                templateUrl: './views/portfoliopage.html',
                data: {
                    pageTitle: 'Yi Jean Lim',
                    name: 'Yi Jean Lim'
                }
            })
            .state('felicia', {
                url: '/felicia',
                templateUrl: './views/portfoliopage.html',
                data: {
                    pageTitle: 'Felicia Fang',
                    name: 'Felicia Fang'
                }
            })
            .state('facundo', {
                url: '/facundo',
                templateUrl: './views/portfoliopage.html',
                data: {
                    pageTitle: 'Facundo Severi',
                    name: 'Facundo Severi'
                }
            })
            .state('nathan', {
                url: '/nathan',
                templateUrl: './views/portfoliopage.html',
                data: {
                    pageTitle: 'Nathan Jin',
                    name: 'Nathan Jin'
                }
            });
    }
]);