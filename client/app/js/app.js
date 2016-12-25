'use strict';

/* App Module */

var bbqApp = angular.module('bbqApp', [
  'ngRoute',

  'bbqControllers',
  'bbqServices'
]);

bbqApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/recipes', {
        templateUrl: 'partials/bbq-list.html',
        controller: 'BBQListCtrl'
      }).
      when('/recipes/:id', {
        templateUrl: 'partials/bbq-detail.html',
        controller: 'BBQDetailCtrl'
      }).
      otherwise({
        redirectTo: '/recipes'
        //redirectTo: '/'
      });
  }]);
