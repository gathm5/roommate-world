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
        'RoommateObject',
        '$firebase',
        'fbURL',
        'userSelectionData',
        function ($scope, RoommateObject, $firebase, fbURL, userSelectionData) {

            $scope.add = function () {
                var save = RoommateObject.$add({
                    name: $scope.name,
                    lookingFor: $scope.lookingFor
                });

                $scope.name = '';
                $scope.lookingFor = '';

                if (save) {
                    $scope.message = 'saved successfully';
                } else {
                    $scope.message = 'something went wrong';
                }
            };

            $scope.roommateData = RoommateObject;

            $scope.remove = function (id) {
                RoommateObject.$remove(id);
            };

            $scope.selection = userSelectionData.label();
            $scope.$on('$device.backbutton', function (event) {
                if (!event.defaultPrevented) {
                    navigator.app && navigator.app.exitApp();
                }
            });
        }
    ]);