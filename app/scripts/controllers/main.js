'use strict';

/**
 * @ngdoc function
 * @name randomMakerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the randomMakerApp
 */

function MainCtrl($scope, localStorageService) {
    var resultsInStore = localStorageService.get('results');

    $scope.results = resultsInStore || [];

    $scope.$watch('results', function() {
        localStorageService.set('results', $scope.results);
    }, true);

    $scope.addItem = function(err) {
		$scope.results.push($scope.item);
		$scope.item = '';
		return $scope.results;
    };
    $scope.removeItem = function(index) {
        $scope.results.splice(index, 1);
        return $scope.results;
    };
}
angular.module('randomMakerApp')
    .controller('MainCtrl', MainCtrl);
