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

    //ui.utilsに入っているui-validateを使って重複する値を入力した場合にtrueを返すようにします
    //indexOf(value)は値が一致した場合、-1を返します
    //
    $scope.notDublicate = function(value){
        var dublicateList = $scope.results;
        return dublicateList.indexOf(value) === -1;
    };

    $scope.addItem = function() {
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
