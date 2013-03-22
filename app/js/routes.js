define(['angular', 'app'], function(angular, app) {
	'use strict';

	return app.config(['$routeProvider', function($routeProvider) {

        $routeProvider.when('/journal', {
            templateUrl: 'app/partials/journal.html',
            controller: 'JournalFormCtrl'
        });

        $routeProvider.when('/journalList', {
            templateUrl: 'app/partials/journalList.html',
            controller: 'JournalListCtrl'
        });

		$routeProvider.otherwise({redirectTo: '/journal'});
	}]);

});