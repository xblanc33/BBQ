'use strict';

/* Controllers */

var bbqControllers = angular.module('bbqControllers', []);

bbqControllers.controller('BBQListCtrl', ['$scope', 'BBQ',
  function($scope, BBQ) {
    $scope.recipes = BBQ.query();

    $scope.add = function (nr) {
      $scope.recipes.push(nr);
      BBQ.save(nr);
    };
  }]);

bbqControllers.controller('BBQDetailCtrl', ['$scope', '$routeParams', 'BBQ',
  function($scope, $routeParams, BBQ) {
    $scope.recipe = BBQ.get({id: $routeParams.id}, function(recipe) {
      console.log("get recipe"+$routeParams.id);
    });

  }]);
