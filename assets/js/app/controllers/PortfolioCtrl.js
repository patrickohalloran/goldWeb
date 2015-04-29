
// PortfolioCtrl

app.controller('PortfolioCtrl', ['$scope', '$state', function($scope, $state) {

    $scope.person = {};

    $scope.angela = {
		name: 'Angela Choi',
		blurb: 'I am Jason Mai. I do stuff',
		headshot: 'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/',
		imgs: [
			'./img/angela/img0.jpg',
			'./img/angela/img1.jpg'
		]
	};

	$scope.josephine = {
		name: 'Josephine Ung',
		blurb: "Hi! I'm Josephine. I'm a fourth year chemistry
				major who's been in gold tier for two semesters now.
				When I am not learning about chemistry or working on designs,
				I like to travel, experiment with new recipes, people-watch in
				coffee shops, and shop for succulents.",
		headshot: './img/josephine/headshot.jpg',
		imgs: [
			'./img/josephine/img0.png',
			'./img/josephine/img1.png'
		]
	};

	$scope.tiffany = {
		name: 'Tiffany Kim',
		blurb: 'I am Tiffany. Drawing on illustrator. Creations are made.',
		headshot: './img/tiffany/headshot.jpg',
		imgs: [
			'./img/tiffany/img0.png',
			'./img/tiffany/img1.png',
			'./img/tiffany/img2.png'
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
			'./img/felicia/img0.jpg',
			'./img/felicia/img1.jpg'
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
			'./img/facundo/img0.jpg',
			'./img/facundo/img1.jpg'
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

	$scope.goToSlide = function(index) {
		$scope.carouselIndex = index;
	};
}]);