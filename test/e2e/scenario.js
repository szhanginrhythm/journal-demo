/*global browser sleep element describe beforeEach it expect */

(function() {
'use strict';

describe('My Application', function() {
	beforeEach(function() {
		browser().navigateTo('/');
		sleep(0.5);
	});


	it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
		expect(browser().location().url()).toBe("/view1");
	});

    describe('Journal', function() {
        beforeEach(function() {
            browser().navigateTo('#/journal');
            sleep(0.5);
        });

        it('should have journal massage', function () {
            expect(input('journal.name').val()).toBe('Shuai Zhang');
        });
    });
});

})();