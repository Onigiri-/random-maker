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
    //indexOf(value)は値が見つからない場合、-1を返します
    //
    $scope.notDublicate = function(value) {
        var dublicateList = $scope.results;
        return dublicateList.indexOf(value) === -1;
    };

    $scope.addItem = function(item) {
        $scope.results.push({
            name: $scope.item,
            status: false
        });
        $scope.item = '';
    };

    $scope.removeItem = function(index) {
        $scope.results.splice(index, 1);
    };
    //results[0]とresults[r]を複数回入れ替えることでshuffleしてみた
    //result.status = true のとき、入れ替えない
    //$scope.results[i].statusがtrueのとき処理を止める
    $scope.shuffleResults = function() {
        var results = $scope.results;
        for (var i = 0; i < results.length; i++) {
            if (results[i].status !== false) {}
                var r = Math.floor(Math.random() * results.length),
                    a = results[0],
                    b = results[r];
                results[r] = a;
                results[0] = b;
        }
    };
    $scope.devideTeam = function() {
        return $scope.results.length / 2 | 0;
    };
    $scope.changeStatus = function(result) {
        result.status = !result.status;
    };
}
angular.module('randomMakerApp')
    .controller('MainCtrl', MainCtrl);
