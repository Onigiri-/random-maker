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
        $scope.results.push($scope.item);
        $scope.item = '';
    };

    $scope.removeItem = function(index) {
        $scope.results.splice(index, 1);
    };
    $scope.shuffleResults = function() {
        var results = $scope.results;
        for (var i = 0; i < results.length; i++) {
            for (var j = 0; j < results.length; j++) {
                var r = Math.floor(Math.random() * results.length),
                    a = results[0],
                    b = results[r];
                results[r] = a;
                results[0] = b;
            };
        };    
    };
}
angular.module('randomMakerApp')
    .controller('MainCtrl', MainCtrl)
    .module('randomMakerApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ui.sortable',
        'LocalStorageModule',
        'ngMessages',
        'ui.utils'
    ])
    .config(['localStorageServiceProvider', function(localStorageServiceProvider) {
        localStorageServiceProvider.setPrefix('ls');
    }])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
