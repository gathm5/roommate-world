'use strict';

/**
 * @ngdoc function
 * @name roommateWorldApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the roommateWorldApp
 */
angular.module('roommateWorldApp')
    .controller('AboutCtrl', function ($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });