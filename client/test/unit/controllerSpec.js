'use strict';

describe('controllers' , function() {
	//beforeEach(module('BBQListCtrl'));
	beforeEach(module('bbqApp'));
	beforeEach(module('bbqControllers'));

	describe('BBQListCtrl', function(){
		var scope, ctrl, $httpBackend;

		beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
			$httpBackend = _$httpBackend_;
			$httpBackend.expectGET('./../api/recipes').
				respond([{name: 'Boeuf', description: 'faire rotir'}]);
			scope = $rootScope.$new();
			ctrl = $controller('BBQListCtrl', {$scope: scope});
		}));

		it('size of recipes is good' , function() {
			expect(scope.recipes.length).toBe(0);
			$httpBackend.flush();

			expect(scope.recipes.length).toBe(1);
		});
	});

	describe('BBQDetailCtrl', function() {
		var scope, ctrl, $httpBackend;

		beforeEach(inject(function(_$httpBackend_, $rootScope, $routeParams, $controller){
			$httpBackend = _$httpBackend_;
			$httpBackend.expectGET('./../api/recipes/1').
				respond({name:'Boeuf',description: 'faire rotir'});
			$routeParams.id = '1';
			scope = $rootScope.$new();
			ctrl = $controller('BBQDetailCtrl' , {$scope: scope});
		}));

		it ('get boeuf' , function() {
			$httpBackend.flush();

			expect(scope.recipe.name).toBe('Boeuf');
		});

	});
});