define(['services'], function (serviceModule) {
    return serviceModule.factory('utilsService', function () {
        return {
            getDate: function () {
                var d = new Date();
                var month = d.getMonth()+ 1,
                    day = d.getDate(),
                    year = d.getFullYear();
                return day + '/' + month + '/' + year;
            },
            saveToLocal: function (key, value) {
                if (window.localStorage) {
                    localStorage.setItem(key, JSON.stringify(value));
                } else {
                    Cookie.write(key, JSON.stringify(value));
                }
            },
            getFromLocal: function (key) {
                var value = window.localStorage? localStorage.getItem(key): Cookie.read(key);
                if (value && value !== 'undefined') {
                    return JSON.parse(value);
                } else {
                    return [];
                }
            }
        };
    });
});