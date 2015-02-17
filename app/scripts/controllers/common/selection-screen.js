'use strict';

/**
 * @ngdoc function
 * @name roommateWorldApp.controller:SelectionScreenCtrl
 * @description
 * # SelectionScreenCtrl
 * Controller of the roommateWorldApp
 */
angular.module('roommateWorldApp')
    .controller('SelectionScreenCtrl', [
        '$scope',
        '$state',
        'userSelectionData',
        function ($scope, $state, userSelectionData) {
            var selections = {
                roommates: userSelectionData.ROOMMATES,
                rooms: userSelectionData.ROOMS,
                apartments: userSelectionData.APARTMENTS
            };
            $scope.defaultSelected = true;
            $scope.go = function (mode) {
                if (!angular.isUndefined(selections[mode])) {
                    userSelectionData.select(selections[mode]);
                    $state.go('start.main.dashboard');
                }
            };
            $scope.$on('$device.backbutton', function (event) {
                if (!event.defaultPrevented) {
                    navigator.app && navigator.app.exitApp();
                }
            });
        }
    ]);