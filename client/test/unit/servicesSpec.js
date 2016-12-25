'use strict';

describe('service' , function() {
	beforeEach(module('bbqApp'));

	it ('verifier la factory BBQ' , inject(function(BBQ) {
		expect(BBQ).toBeDefined();
	}));
});