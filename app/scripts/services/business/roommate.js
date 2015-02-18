'use strict';

angular.module('roommateWorldApp')
  .factory('business/roommate', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
