app.controller('HomeCtrl', ['$scope', function($scope) {
    // Add functionality for home page here

    $scope.people = [
        {
            name: 'Angela Choi',
            picture: 'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/',
            link: 'angela_choi'
        },
        {
            name: 'Josephine Ung',
            picture: 'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/',
            link: 'josephine_ung'
        },
        {
            name: 'Tiffany Kim',
            picture: 'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/',
            link: 'tiffany_kim'
        },
        {
            name: 'Yi Jean Lim',
            picture: 'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/',
            link: 'yi_jean_lim'
        },
        {
            name: 'Felicia Fang',
            picture: 'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/',
            link: 'felicia_fang'
        },
        {
            name: 'Nathan Jin',
            picture: 'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/',
            link: 'nathan_jin'
        },
        {
            name: 'Facundo Severi',
            picture: 'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/',
            link: 'facundo_severi'
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
