app.controller('HomeCtrl', ['$scope', function($scope) {
    // Add functionality for home page here

    $scope.images = [
        {
            url: 'https://api.fnkr.net/testimg/350x200/00CED1/FFF/',
            author: 'First Last'
        },
        {
            url: 'https://api.fnkr.net/testimg/350x200/eeeeee/FFF/',
            author: 'First Last'
        },
        {
            url: 'https://api.fnkr.net/testimg/350x200/00ff00/FFF/',
            author: 'First Last'
        },
        {
            url: 'https://api.fnkr.net/testimg/350x200/00fff0/FFF/',
            author: 'First Last'
        },
        {
            url: 'https://api.fnkr.net/testimg/350x200/34fea1/FFF/',
            author: 'First Last'
        },
        {
            url: 'https://api.fnkr.net/testimg/350x200/00CED1/FFF/',
            author: 'First Last'
        },
        {
            url: 'https://api.fnkr.net/testimg/350x200/00CED1/FFF/',
            author: 'First Last'
        },
        {
            url: 'https://api.fnkr.net/testimg/350x200/00CED1/FFF/',
            author: 'First Last'
        },
        {
            url: 'https://api.fnkr.net/testimg/350x200/00CED1/FFF/',
            author: 'First Last'
        },
        {
            url: 'https://api.fnkr.net/testimg/350x200/00CED1/FFF/',
            author: 'First Last'
        }
    ];

    $scope.enlarge = function(index) {
        if (index === $scope.currentImg) {
            $scope.currentImg = null;
        } else {
            $scope.currentImg = index;
        }
    };
}]);
