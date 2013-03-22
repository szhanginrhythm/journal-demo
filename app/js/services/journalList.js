define(['services', 'services/utils'], function (serviceModule, utilsService) {
    'use strict';

    return serviceModule.factory('journalListService', ['utilsService', function (utilsService) {
        var list = utilsService.getFromLocal('journals');

        return {
            getList: function () {
                return list;
            },
            addJournal: function (journal) {
                list.push(journal);
                utilsService.saveToLocal('journals', list);
            },
            clearJournal: function () {
                list.length = 0;
                utilsService.saveToLocal('journals', list);
            }
        };
    }]);
});