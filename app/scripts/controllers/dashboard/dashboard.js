'use strict';

/**
 * @ngdoc function
 * @name roommateWorldApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the roommateWorldApp
 */
angular.module('roommateWorldApp')
    .controller('DashboardCtrl', [
        '$scope',
        'userSelectionData',
        function ($scope, userSelectionData) {
            $scope.selection = userSelectionData.label();
            $scope.$on('$device.backbutton', function (event) {
                if (!event.defaultPrevented) {
                    navigator.app && navigator.app.exitApp();
                }
            });
        }
    ]);