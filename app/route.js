angular.module('myApp').config(['$routeProvider',function($routeProvider) {

	$routeProvider.
	when('/',{
		templateUrl: 'app/js/home/templates/home.html',
		controller: 'HomeCtrl'
	}).

	otherwise({
		redirectTo: '/'
	});

}]);
