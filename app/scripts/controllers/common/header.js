'use strict';

/**
 * @ngdoc function
 * @name roommateWorldApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the roommateWorldApp
 */
angular.module('roommateWorldApp')
    .controller('HeaderCtrl', function ($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });
