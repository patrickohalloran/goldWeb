var app = angular.module('goldWeb', [
        'ui.router',
        'ngTouch',
        'angular-carousel'
    ]);

app.run(['$rootScope',
    '$state',
    '$location',
    '$window',
    function ($rootScope, $state, $location, $window) {
        $rootScope.$state = $state;
        var toHome = false;

        // Check if page requires login
        $rootScope.$on('$stateChangeStart',
            function (event, toState, toParams, fromState, fromParams) {
                //console.log(toState);
                // if (toState.name === "home") {
                //     //console.log("YAAAAY");
                //     toHome = true;
                // }
            }
        );

        // Get Page Title on successful page change
        $rootScope.$on('$stateChangeSuccess', function (event, toState) {
            // Sets HTML/Page Title
            $rootScope.currentPage = toState.name;

            if (toState.data && toState.data.pageTitle) {
                console.log("yoooo");
                $rootScope.pageTitle = toState.data.pageTitle;
                document.body.style.backgroundColor = toState.data.color;
            } else {
                $rootScope.pageTitle = 'Innovative Design';
            }

            // Add functionality for successful state/page change here
            // if (toState.name === 'home') {
            //     console.log("yoooo");
            //     document.body.style.backgroundColor = #EAEAEA;
            // } else {
            //     document.body.style.backgroundColor = #F6CA1B;
            // }
        });

        //Scroll to top of page on page change
        $rootScope.$on('$viewContentLoaded', function(toState) {
            // if (!toHome) {
            //     document.body.scrollTop = document.documentElement.scrollTop = 0;
            // }

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
                    pageTitle: 'Innovative Design',
                    color: '#EAEAEA'
                }
            })
            .state('angela', {
                url: '/angela',
                templateUrl: './views/portfolio-page.html',
                data: {
                    pageTitle: 'Angela Choi',
                    name: 'Angela Choi',
                    color: '#F6CA1B'
                }
            })
            .state('josephine', {
                url: '/josephine',
                templateUrl: './views/portfolio-page.html',
                data: {
                    pageTitle: 'Josephine Ung',
                    name: 'Josephine Ung',
                    color: '#F6CA1B'
                }
            })
            .state('tiffany', {
                url: '/tiffany',
                templateUrl: './views/portfolio-page.html',
                data: {
                    pageTitle: 'Tiffany Kim',
                    name: 'Tiffany Kim',
                    color: '#F6CA1B'
                }
            })
            .state('yi', {
                url: '/yi',
                templateUrl: './views/portfolio-page.html',
                data: {
                    pageTitle: 'Yi Jean Lim',
                    name: 'Yi Jean Lim',
                    color: '#F6CA1B'
                }
            })
            .state('felicia', {
                url: '/felicia',
                templateUrl: './views/portfolio-page.html',
                data: {
                    pageTitle: 'Felicia Fang',
                    name: 'Felicia Fang',
                    color: '#F6CA1B'
                }
            })
            .state('facundo', {
                url: '/facundo',
                templateUrl: './views/portfolio-page.html',
                data: {
                    pageTitle: 'Facundo Severi',
                    name: 'Facundo Severi',
                    color: '#F6CA1B'
                }
            })
            .state('nathan', {
                url: '/nathan',
                templateUrl: './views/portfolio-page.html',
                data: {
                    pageTitle: 'Nathan Jin',
                    name: 'Nathan Jin',
                    color: '#F6CA1B'
                }
            });
    }
]);