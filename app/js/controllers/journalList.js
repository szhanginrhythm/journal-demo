define(['controllers'], function(controllerModule) {
    'use strict';

    return controllerModule.controller('JournalListCtrl', ['$scope', 'journalListService', function ($scope, journalService) {
        $scope.message = 'This is journal list page!';
        $scope.journal = journalService.getJournal();
    }]);
});
