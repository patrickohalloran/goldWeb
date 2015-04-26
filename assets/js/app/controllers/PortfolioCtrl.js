// PortfolioCtrl

app.controller('PortfolioCtrl', ['$scope', '$state', function($scope, $state) {

	switch ($state.params.name) {
		case 'Angela Choi':
			$scope.person = $scope.angela;
			break;
		case 'Josephine Ung':
			$scope.person = $scope.josephine;
			break;
		case 'Tiffany Kim':
			$scope.person = $scope.tiffany;
			break;
		case 'Yi Jean Lim':
			$scope.person = $scope.yi;
			break;
		case 'Felicia Fang':
			$scope.person = $scope.felicia;
			break;
		case 'Nathan Jin':
			$scope.person = $scope.nathan;
			break;
		case 'Facundo Severi':
			$scope.person = $scope.facundo;
			break;


	}
	// if ($state.params.name === 'jason') {
	// 	$scope.person = $scope.jason;
	// }

	$scope.jason = {
		blurb: 'I am Jason Mai. I do stuff',
		imgs: [
			'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/',
			'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/',
			'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/',
			'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/'
		]
	};

	$scope.josephine = {
		blurb: 'I am Jason Mai. I do stuff',
		imgs: [
			'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/',
			'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/',
			'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/',
			'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/'
		]
	};

	$scope.tiffany = {
		blurb: 'I am Jason Mai. I do stuff',
		imgs: [
			'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/',
			'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/',
			'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/',
			'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/'
		]
	};

	$scope.yi = {
		blurb: 'I am Jason Mai. I do stuff',
		imgs: [
			'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/',
			'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/',
			'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/',
			'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/'
		]
	};

	$scope.felicia = {
		blurb: 'I am Jason Mai. I do stuff',
		imgs: [
			'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/',
			'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/',
			'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/',
			'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/'
		]
	};

	$scope.nathan = {
		blurb: 'I am Jason Mai. I do stuff',
		imgs: [
			'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/',
			'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/',
			'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/',
			'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/'
		]
	};

	$scope.facundo = {
		blurb: 'I am Jason Mai. I do stuff',
		imgs: [
			'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/',
			'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/',
			'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/',
			'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/'
		]
	};
}]);