'use strict';

/**
 * @ngdoc filter
 * @name roommateWorldApp.filter:businessListFilter
 * @function
 * @description
 * # businessListFilter
 * Filter in the roommateWorldApp.
 */
angular.module('roommateWorldApp')
    .filter('listFilter', function () {
        return function (input, type) {
            var output = [];
            for (var key in input) {
                if (input[key][type]) {
                    output.push(input[key]);
                }
            }
            return output;
        };
    });
