'use strict';

/**
 * @ngdoc function
 * @name roommateWorldApp.controller:FilterCtrl
 * @description
 * # FilterCtrl
 * Controller of the roommateWorldApp
 */
angular.module('roommateWorldApp')
    .controller('FilterCtrl', [
        '$scope',
        'dashboardService',
        function ($scope, dashboardService) {
            $scope.filter = null;
            $scope.doFilter = function (e) {
                if ($scope.filter) {
                    if (e) {
                        e.target.blur();
                    }
                    dashboardService.setFilter($scope.filter);
                    $scope.filter = null;
                    return true;
                }
            };
        }
    ]);