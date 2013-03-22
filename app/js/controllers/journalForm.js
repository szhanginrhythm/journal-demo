define(['controllers'], function(controllerModule) {
    'use strict';

    return controllerModule.controller(
        'JournalFormCtrl',
        [
            '$scope',
            'journalFormService',
            function ($scope, journalFormService) {
                $scope.message = 'This is journal page!';
                $scope.journal = journalFormService.getJournal();
            }
        ]
    );
});