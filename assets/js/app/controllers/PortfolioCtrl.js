// PortfolioCtrl

app.controller('PortfolioCtrl', ['$scope', '$state', function($scope, $state) {
	if ($state.params.name === 'jason') {
		$scope.person = $scope.jason;
	}

	$scope.jason = {
		blurb: 'I am Jason Mai. I do stuff',
		imgs: [
			'../img/jason/1.jpg',
			'../img/jason/2.jpg'
		]
	};
	$scope.charisse = {
		blurb: 'I am Charisse Celestial. I do stuff',
		imgs: [
			'../img/charisse/1.jpg',
			'../img/charisse/2.jpg'
		]
	};
}]);