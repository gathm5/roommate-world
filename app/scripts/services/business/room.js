'use strict';

angular.module('roommateWorldApp')
    .factory('Room', [
        'BackendData',
        function (BackendData) {
            // Public API here

            return function () {
                this.get = function () {
                    var getData = [];
                    for (var key in BackendData) {
                        if (BackendData[key].room) {
                            getData.push(BackendData[key]);
                        }
                    }
                    return BackendData;
                };
                this.add = function (data) {
                    var postData = {
                        room: {
                            type: 'room',
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
