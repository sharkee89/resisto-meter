angular.module('Electric').config(['$routeProvider',function($routeProvider) {

	$routeProvider.

	when('/',{
		templateUrl: 'app/js/home/templates/home.html',
		controller: 'HomeCtrl',
		controllerAs: 'home'
	}).

	when('/resistometer',{
		templateUrl: 'app/js/resistometer/templates/resistometer.html',
		controller: 'ResistCtrl',
		controllerAs: 'resist'
	}).

	otherwise({
		redirectTo: '/'
	});

}]);
