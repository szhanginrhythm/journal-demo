define(['services', 'services/utils', 'services/journalList'], function(serviceModule, utilsService, journalList) {
    'use strict';

     return serviceModule.factory('journalFormService', ['utilsService', 'journalList', function (utilsService, journalList) {
         var journal = {
             name: '',
             date: utilsService.getDate(),
             catalog: '',
             note: ''
         };
         return {
             getJournal: function () {
                 return journal;
             },
             saveJournal: function (journal) {
                 journalList.addJournal(journal);
             }
         }
     }]);
});