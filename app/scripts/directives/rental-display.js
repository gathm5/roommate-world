'use strict';

/**
 * @ngdoc directive
 * @name roommateWorldApp.directive:rentalDisplay
 * @description
 * # rentalDisplay
 */
angular.module('roommateWorldApp')
    .directive('rentalDisplay', function () {
        return {
            templateUrl: '/views/directives/rental-display.html',
            restrict: 'E',
            scope: {
                rentalItem: '=display'
            },
            replace: true,
            link: function postLink(scope, element, attrs) {

            }
        };
    });
