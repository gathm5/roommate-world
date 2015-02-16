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
        function ($scope) {
            $scope.defaultSelected = true;
            $scope.$on('$$back', function () {
                navigator.app && navigator.app.exitApp();
            });
        }
    ]);