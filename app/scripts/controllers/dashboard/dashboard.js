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
        function ($scope) {
            $scope.$on('$$back', function () {
                navigator.app && navigator.app.exitApp();
            });
        }
    ]);