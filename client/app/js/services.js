'use strict';

/* Services */

var bbqServices = angular.module('bbqServices', ['ngResource']);

bbqServices.factory('BBQ', ['$resource',
  function($resource){
    //return $resource('./../api/recipes/:id');

    return $resource('./../api/recipes/:id', {}, {
      query: {method:'GET', isArray:true},
      get: {method:'GET', isArray:false}
    });
  }]);
