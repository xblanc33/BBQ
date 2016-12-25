describe('get one recipe from the list' , function () {
	it ('get the recipes' , function() {
		browser.get('http://localhost:4711/app');

		expect(browser.getTitle()).toEqual('BBQ');
	});

});