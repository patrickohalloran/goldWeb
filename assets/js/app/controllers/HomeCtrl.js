app.controller('HomeCtrl', ['$scope', function($scope) {
    // Add functionality for home page here

    $scope.people = [
        {
            name: 'Angela Choi',
            picture: './img/angela/headshot.jpg',
            link: 'angela'
        },
        {
            name: 'Josephine Ung',
            picture: './img/josephine/headshot.png',
            link: 'josephine'
        },
        {
            name: 'Tiffany Kim',
            picture: './img/tiffany/headshot.jpg',
            link: 'tiffany'
        },
        {
            name: 'Yi Jean Lim',
            picture: './img/yi/headshot.jpg',
            link: 'yi'
        },
        {
            name: 'Felicia Fang',
            picture: './img/felicia/headshot.jpg',
            link: 'felicia'
        },
        {
            name: 'Nathan Jin',
            picture: './img/nathan/headshot.jpg',
            link: 'nathan'
        },
        {
            name: 'Facundo Severi',
            picture: './img/facundo/headshot.jpg',
            link: 'facundo'
        },
        {
            name: 'Serena Chang',
            picture: './img/serena/headshot.jpg',
            link: 'serena'
        },
        {
            name: 'Jason Mai and Charisse Celestial',
            picture: './img/jasonCharisse/headshot.png',
            link: 'jasonCharisse'
        }
    ];

}]);
