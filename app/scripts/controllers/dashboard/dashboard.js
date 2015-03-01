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
        'dashboardService',
        function ($scope, Room, Roommate, Apartment, userSelectionData, dashboardService) {
            var object, selected;
            selected = userSelectionData.label();
            $scope.filterData = dashboardService.getFilter();
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
            $scope.clearFilter = function () {
                dashboardService.setFilter();
            };
            $scope.selection = userSelectionData.label();
            $scope.$on('Filter', function () {
                $scope.filterData = dashboardService.getFilter();
            });
            $scope.$on('$device.backbutton', function (event) {
                if (!event.defaultPrevented) {
                    navigator.app && navigator.app.exitApp();
                }
            });
        }
    ]);