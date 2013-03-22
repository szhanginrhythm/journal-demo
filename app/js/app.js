define([
	'angular',
	'filters',

	'services',
    'services/journalForm',
    'services/journalList',
    'services/utils',

	'directives',

	'controllers',
    'controllers/journalForm',
    'controllers/journalList'
	], function (angular, filters, services, directives, controllers) {
		'use strict';

		return angular.module('myApp', ['myApp.controllers', 'myApp.filters', 'myApp.services', 'myApp.directives']);
});
