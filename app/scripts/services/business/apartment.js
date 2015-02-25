'use strict';

angular.module('roommateWorldApp')
    .factory('Apartment', [
        'BackendData',
        function (BackendData) {
            // Public API here

            return function () {
                this.get = function () {
                    var getData = [];
                    for (var key in BackendData) {
                        if (BackendData[key].apartment) {
                            getData.push(BackendData[key]);
                        }
                    }
                    angular.extend(getData, BackendData);
                    return BackendData;
                };
                this.add = function (data) {
                    var postData = {
                        apartment: {
                            type: 'apartment',
                            zipcode: data.zipcode,
                            rent: data.rent
                        }
                    };
                    return BackendData.$add(postData);
                };
                this.remove = function (id) {
                    return BackendData.$remove(BackendData.$getRecord(id));
                };
            };
        }
    ]);
