define(['controllers'], function(controllerModule) {
    'use strict';

    return controllerModule.controller('JournalCtrl', ['$scope', 'journalService', function ($scope, journalService) {
    $scope.message = 'This is journal page!';
    $scope.journal = journalService.getJournal();
    }]);
});
