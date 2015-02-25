'use strict';

/**
 * @ngdoc function
 * @name roommateWorldApp.controller:PostCtrl
 * @description
 * # PostCtrl
 * Controller of the roommateWorldApp
 */
angular.module('roommateWorldApp')
    .controller('PostCtrl', [
        '$scope',
        '$state',
        'Room',
        'Roommate',
        'Apartment',
        function ($scope, $state, Room, Roommate, Apartment) {
            var object;
            $scope.options = ['rooms', 'roommates', 'apartments'];
            $scope.selected = $scope.options[1];
            $scope.postData = {
                zipcode: null,
                type: null,
                rent: null
            };
            $scope.select = function (option) {
                $scope.selected = option;
                $scope.postData.type = option;
            };
            $scope.post = function () {
                switch ($scope.selected) {
                    case 'rooms':
                        object = new Room();
                        break;
                    case 'roommates':
                        object = new Roommate();
                        break;
                    case 'apartments':
                        object = new Apartment();
                        break;
                }
                $scope.postData.type = $scope.selected;
                if ($scope.postData.zipcode && $scope.postData.type && $scope.postData.rent) {
                    object.add($scope.postData);
                    $state.go('load');
                }
            };
            $scope.$on('$device.backbutton', function (event) {
                if (!event.defaultPrevented) {
                    $state.go('load');
                }
            });
        }
    ]);