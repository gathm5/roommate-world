'use strict';

/**
 * @ngdoc service
 * @name roommateWorldApp.userSelectionData
 * @description
 * # userSelectionData
 * Service in the roommateWorldApp.
 */
angular.module('roommateWorldApp')
    .service('userSelectionData', [
        function () {
            var userSelection = 0;
            var that = this;

            this.ROOMMATES = 0;
            this.ROOMS = 1;
            this.APARTMENTS = 2;

            // Public API here
            this.select = function (mode) {
                userSelection = mode;
            };
            this.get = function () {
                return userSelection;
            };
            this.label = function () {
                switch (userSelection) {
                    case that.ROOMMATES:
                        return 'Roommates';
                    case that.ROOMS:
                        return 'Rooms';
                    case that.APARTMENTS:
                        return 'Apartments';
                }
            };
        }
    ]);