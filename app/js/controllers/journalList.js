define(['controllers'], function(controllerModule) {
    'use strict';

    return controllerModule.controller('JournalListCtrl', ['$scope', 'journalListService', function ($scope, journalListService) {
        $scope.message = 'This is journal list page!';
        $scope.list = journalListService.getList();
    }]);
});
