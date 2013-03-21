define(['services'], function(serviceModule) {
    'use strict';

     serviceModule.factory('journalService', function() {
                                                                       var journal = {
                                                                           name: 'Shuai Zhang',
                                                                           date: '',
                                                                           catalog: '',
                                                                           note: ''
                                                                       };
                                                                       return {
                                                                           getJournal: function(){
                                                                               return journal;
                                                                           }
                                                                       };
                                                                   });
});
