define([
	'angular',
	'filters',
	'services',
    'services/journal',
	'directives',
	'controllers',
    'controllers/journal',
    'controllers/journalList'
	], function (angular, filters, services, directives, controllers) {
		'use strict';

		return angular.module('myApp', ['myApp.controllers', 'myApp.filters', 'myApp.services', 'myApp.directives']);
});
