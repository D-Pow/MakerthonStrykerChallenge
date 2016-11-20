angular.module('app.services', [])

.factory("Auth", ["$firebaseAuth", "$rootScope",
	function ($firebaseAuth, $rootScope) {
	var ref = new firebase(firebaseUrl);
	return $firebaseAuth(ref);
}])

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}]);