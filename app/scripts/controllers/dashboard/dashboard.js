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
        'Room',
        'Roommate',
        'Apartment',
        'userSelectionData',
        function ($scope, Room, Roommate, Apartment, userSelectionData) {
            var object, selected;
            selected = userSelectionData.label();
            switch (selected) {
                case 'Rooms':
                    $scope.stayData = new Room();
                    $scope.displayData = $scope.stayData.get();
                    break;
                case 'Roommates':
                    $scope.stayData = new Roommate();
                    $scope.displayData = $scope.stayData.get();
                    break;
                case 'Apartments':
                    $scope.stayData = new Apartment();
                    $scope.displayData = $scope.stayData.get();
                    break;
                default:
                    $scope.stayData = (new Roommate());
                    $scope.displayData = $scope.stayData.get();
            }
            selected = selected.substring(0, selected.length - 1);
            selected = selected.toLowerCase();
            $scope.selected = selected;
            $scope.remove = function (id) {
                object.remove(id);
            };

            $scope.selection = userSelectionData.label();
            $scope.$on('$device.backbutton', function (event) {
                if (!event.defaultPrevented) {
                    navigator.app && navigator.app.exitApp();
                }
            });
        }
    ]);