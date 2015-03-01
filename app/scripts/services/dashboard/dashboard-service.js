'use strict';

/**
 * @ngdoc service
 * @name roommateWorldApp.dashboardService
 * @description
 * # dashboardService
 * Factory in the roommateWorldApp.
 */
angular.module('roommateWorldApp')
    .factory('dashboardService', [
        '$Tell',
        function ($Tell) {
            var filter = null;

            // Public API here
            return {
                getFilter: function () {
                    return filter;
                },
                setFilter: function (filterData) {
                    filter = filterData;
                    $Tell.children('dashboard', 'Filter', {
                        filter: filterData
                    });
                }
            };
        }
    ]);