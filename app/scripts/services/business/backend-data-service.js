'use strict';

/**
 * @ngdoc service
 * @name roommateWorldApp.backendDataService
 * @description
 * # backendDataService
 * Factory in the roommateWorldApp.
 */
angular.module('roommateWorldApp')
    .factory('BackendData', [
        '$config',
        '$firebase',
        function ($config, $firebase) {
            return $firebase(new Firebase($config.backend.url)).$asArray();
        }
    ]);