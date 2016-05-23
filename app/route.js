angular.module('ResistoMeter').config(['$routeProvider',function($routeProvider) {

	$routeProvider.
	when('/',{
		templateUrl: 'app/js/home/templates/resistometer.html',
		controller: 'ResistCtrl',
		controllerAs: 'resist'
	}).

	otherwise({
		redirectTo: '/'
	});

}]);
