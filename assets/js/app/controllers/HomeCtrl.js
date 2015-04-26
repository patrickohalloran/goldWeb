app.controller('HomeCtrl', ['$scope', function($scope) {
    // Add functionality for home page here

    $scope.people = [
        {
            name: 'Angela Choi',
            picture: 'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/',
            link: 'angela'
        },
        {
            name: 'Josephine Ung',
            picture: 'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/',
            link: 'josephine'
        },
        {
            name: 'Tiffany Kim',
            picture: 'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/',
            link: 'tiffany'
        },
        {
            name: 'Yi Jean Lim',
            picture: 'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/',
            link: 'yi'
        },
        {
            name: 'Felicia Fang',
            picture: 'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/',
            link: 'felicia'
        },
        {
            name: 'Nathan Jin',
            picture: 'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/',
            link: 'nathan'
        },
        {
            name: 'Facundo Severi',
            picture: 'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/',
            link: 'facundo'
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
