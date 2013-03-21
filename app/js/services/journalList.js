define(['services'], function (serviceModule) {
    'use strict';

    serviceModule.factory('journalListService', function () {
        var list = [];

        return {
            getList: function () {
                return list;
            }
        };
    });
});