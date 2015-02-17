'use strict';

/**
 * @ngdoc function
 * @name randomMakerApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the randomMakerApp
 */
angular.module('randomMakerApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
