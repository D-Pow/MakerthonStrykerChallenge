angular.module('app.services', ['firebase'])

.factory("Auth", ["$firebaseAuth", "$rootScope",
function ($firebaseAuth, $rootScope) {
    return $firebaseAuth();
}])

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}]);