define(['angular'], function (angular) {
	'use strict';

    return  angular.module('myApp.services', [])
                .value('version', '0.1');
//                .factory('journalService', function() {
//                    var journal = {
//                        name: 'Shuai Zhang',
//                        date: '',
//                        catalog: '',
//                        note: ''
//                    };
//                    return {
//                        getJournal: function(){
//                            return journal;
//                        }
//                    };
//                });
});