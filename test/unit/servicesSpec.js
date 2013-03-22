/*global describe beforeEach it expect */

define([
	'angular',
	'angularMocks',
	'app'
], function(angular, mocks, app) {
	'use strict';

	describe('service', function() {
		beforeEach(mocks.module('myApp.services'));
		describe('version', function() {
			it('should return current version', mocks.inject(function(version) {
				expect(version).toEqual('0.1');
			}));
		});

        //set today's date to test
        var date = '21/3/2013';

        describe('utlsService get date', function () {
            it('should get date of today', mocks.inject(function(utilsService){
                expect(utilsService.getDate()).toEqual(date);
            }));
        });

        describe('journalFormService getJournal', function () {
            it('should get new journal', mocks.inject(function(journalFormService){
                expect(journalFormService.getJournal().date).toEqual(date);
            }));
        });

        describe('journalListService getList', function () {
            it('should get list', mocks.inject(function(journalListService){
                expect(journalListService.getList()).toEqual([]);
            }));
        });

        describe('journalListService addJournal', function () {
            it('should add one journal to list', mocks.inject(function(journalListService){
                journalListService.addJournal({
                    name: 'test',
                    date: date,
                    catalog: '',
                    note: 'test note'
                });
                expect(journalListService.getList().length).toEqual(1);
            }));
        });

	});

});