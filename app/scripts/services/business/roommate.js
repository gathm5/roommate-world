'use strict';

angular.module('roommateWorldApp')
    .factory('Roommate', [
        'BackendData',
        function (BackendData) {
            // Public API here

            return function () {
                this.get = function () {
                    var getData = [];
                    for (var key in BackendData) {
                        if (BackendData[key].roommate) {
                            getData.push(BackendData[key]);
                        }
                    }
                    angular.extend(getData, BackendData);
                    return BackendData;
                };
                this.add = function (data) {
                    var postData = {
                        roommate: {
                            type: 'roommate',
                            zipcode: data.zipcode,
                            rent: data.rent,
                            description: data.description
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