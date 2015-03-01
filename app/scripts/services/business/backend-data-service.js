'use strict';

/**
 * @ngdoc service
 * @name roommateWorldApp.backendDataService
 * @description
 * # backendDataService
 * Factory in the roommateWorldApp.
 */
angular.module('roommateWorldApp')
    .factory('BackendData', [
        '$config',
        '$firebase',
        function ($config, $firebase) {
            var mockData = {
                'j8sdf4': {
                    room: {
                        type: 'room',
                        zipcode: '93454',
                        rent: '500',
                        description: 'Looking for a room near downtown'
                    }
                },
                'j8sdf4s': {
                    roommate: {
                        type: 'roommate',
                        zipcode: '63454',
                        rent: '450',
                        description: 'Student/working professional'
                    }
                },
                'j8sdef4': {
                    roommate: {
                        type: 'roommate',
                        zipcode: '43544',
                        rent: '680',
                        description: 'Looking for a working professional'
                    }
                },
                'j8sdfd4': {
                    apartment: {
                        type: 'apartment',
                        zipcode: '74564',
                        rent: '2100',
                        description: 'Nice 2 bedroom apartment'
                    }
                }
            };

            function Mock() {
                return mockData;
            }

            Mock.prototype.$add = function (data) {
                var random = 'j' + (Math.random() * 100);
                mockData[random] = data;
            };
            var newMock = new Mock();
            return (newMock);
            //return $firebase(new Firebase($config.backend.url)).$asArray();
        }
    ]);