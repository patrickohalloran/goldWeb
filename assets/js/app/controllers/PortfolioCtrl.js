
// PortfolioCtrl

app.controller('PortfolioCtrl', ['$scope', '$state', function($scope, $state) {

    $scope.person = {};

    $scope.angela = {
		name: 'Angela Choi',
		blurb: 'I am Jason Mai. I do stuff',
		headshot: 'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/',
		imgs: [
			'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/',
			'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/',
			'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/',
			'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/'
		]
	};

	$scope.josephine = {
		name: 'Josephine Ung',
		blurb: 'I am Jason Mai. I do stuff',
		headshot: 'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/',
		imgs: [
			'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/',
			'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/',
			'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/',
			'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/'
		]
	};

	$scope.tiffany = {
		name: 'Tiffany Kim',
		blurb: 'I am Jason Mai. I do stuff',
		headshot: 'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/',
		imgs: [
			'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/',
			'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/',
			'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/',
			'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/'
		]
	};

	$scope.yi = {
		name: 'Yi Jean Lim',
		blurb: 'I am Jason Mai. I do stuff',
		headshot: 'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/',
		imgs: [
			'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/',
			'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/',
			'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/',
			'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/'
		]
	};

	$scope.felicia = {
		name: 'Felicia Fang',
		blurb: 'I am Jason Mai. I do stuff',
		headshot: 'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/',
		imgs: [
			'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/',
			'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/',
			'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/',
			'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/'
		]
	};

	$scope.nathan = {
		name: 'Nathan Jin',
		blurb: 'I am Jason Mai. I do stuff',
		headshot: 'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/',
		imgs: [
			'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/',
			'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/',
			'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/',
			'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/'
		]
	};

	$scope.facundo = {
		name: 'Facundo Severi',
		blurb: 'I am Jason Mai. I do stuff',
		headshot: 'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/',
		imgs: [
			'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/',
			'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/',
			'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/',
			'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/'
		]
	};

	switch ($state.current.name) {
		case 'angela':
			$scope.person = $scope.angela;
			break;
		case 'josephine':
			$scope.person = $scope.josephine;
			break;
		case 'tiffany':
			$scope.person = $scope.tiffany;
			break;
		case 'yi':
			$scope.person = $scope.yi;
			break;
		case 'felicia':
			$scope.person = $scope.felicia;
			break;
		case 'nathan':
			$scope.person = $scope.nathan;
			break;
		case 'facundo':
			$scope.person = $scope.facundo;
			break;
		default:
			console.log("That dude doesn't exist!");
			break;
	}
}]);