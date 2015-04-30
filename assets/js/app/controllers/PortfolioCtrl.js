
// PortfolioCtrl

app.controller('PortfolioCtrl', ['$scope', '$state', function($scope, $state) {

    $scope.person = {};

    $scope.angela = {
		name: 'Angela Choi',
		blurb: 'Something cool.',
		headshot: 'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/',
		imgs: [
			{
				url: './img/angela/img0.jpg',
				wide: true
			},
			{
				url: './img/angela/img1.jpg',
				wide: true
			}
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
			{
				url: './img/josephine/img0.png',
				wide: false
			},
			{
				url: './img/josephine/img1.png',
				wide: false
			}
		]
	};

	$scope.tiffany = {
		name: 'Tiffany Kim',
		blurb: 'I am Tiffany. Drawing on illustrator. Creations are made.',
		headshot: './img/tiffany/headshot.jpg',
		imgs: [
			{
				url: './img/tiffany/img0.png',
				wide: false
			},
			{
				url: './img/tiffany/img1.png',
				wide: false
			},
			{
				url: './img/tiffany/img2.png',
				wide: false
			}
		]
	};

	$scope.yi = {
		name: 'Yi Jean Lim',
		blurb: "Hello! I'm Yi Jean, a junior who is majoring in Business Administration.
				I was born and raised in Malaysia. I joined gold tier this semester and
				have taken two innod design decals in the past. I have a love for animal
				conservation, desserts and documentaries, combine the three and I'll be
				a very happy person!",
		headshot: 'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/',
		imgs: [
			{
				url: './img/yi/img0.png',
				wide: false
			},
			{
				url: './img/yi/img1.png',
				wide: false
			}
		]
	};

	$scope.felicia = {
		name: 'Felicia Fang',
		blurb: 'Something cool.',
		headshot: 'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/',
		imgs: [
			{
				url: './img/felicia/img0.jpg',
				wide: true
			},
			{
				url: './img/felicia/img1.jpg',
				wide: true
			}
		]
	};

	$scope.serena = {
		name: 'Serena Chang',
		blurb: 'Serena is a second year studying Electrical Engineering and Computer Science.
				Her days and nights consist of endless debugging, designing, and dancing in
				sketchy parking structures.  Food is her one true love.',
		headshot: 'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/',
		imgs: [
			{
				url: './img/serena/img0.png',
				wide: true
			},
			{
				url: './img/serena/img1.png',
				wide: false
			}
		]
	};

	$scope.nathan = {
		name: 'Nathan Jin',
		blurb: 'Grown in the Midwest, transplanted to the Bay. My design
				background comes from self-taught calligraphy with a focus
				on gothic scripts, and a smattering of handlettering.',
		headshot: 'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/',
		imgs: [
			{
				url: './img/nathan/img0.png',
				wide: true
			},
			{
				url: './img/nathan/img1.png',
				wide: true
			},
			{
				url: './img/nathan/img2.png',
				wide: true
			}
		]
	};

	$scope.facundo = {
		name: 'Facundo Severi',
		blurb: 'Something cool.',
		headshot: 'https://api.fnkr.net/testimg/350x200/0092BF/EAEAEA/',
		imgs: [
			{
				url: './img/facundo/img0.jpg',
				wide: false
			},
			{
				url: './img/facundo/img1.jpg',
				wide: false
			}
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
		case 'serena':
			$scope.person = $scope.serena;
			break;
		default:
			console.log("That dude doesn't exist!");
			break;
	}

	$scope.goToSlide = function(index) {
		$scope.carouselIndex = index;
	};
}]);