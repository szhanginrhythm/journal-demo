define(['angular'], function (angular) {
	'use strict';

    return  angular.module('myApp.services', [])
                .value('version', '0.1');
});