'use strict';

/**
 * @ngdoc service
 * @name roommateWorldApp.dictionary
 * @description
 * # dictionary
 * Factory in the roommateWorldApp.
 */
angular.module('roommateWorldApp')
    .factory('Dictionary', function () {
        var dictionary = {
            post: {
                success: 'Your data was added',
                failure: 'Data was not added. Kindly re-try',
                empty: 'Please input all data',
                room: {
                    label: 'Looking for a room rent of'
                },
                roommate: {
                    label: 'Who can pay around'
                },
                apartment: {
                    label: 'Rent'
                }
            }
        };

        // Public API here
        return function () {
            return dictionary;
        };
    });