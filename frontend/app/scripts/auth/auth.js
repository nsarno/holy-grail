'use strict';

angular.module('holy-grail')
.factory('Auth', function(Restangular, $window) {
  return {
    login: function(params, callback) {
      Restangular.all('auth').post({ user: params }).then(
        function(response) {
          $window.sessionStorage.token = response.token;
          callback();
        }
      );
    },

    logout: function() {
      delete $window.sessionStorage.token;
    },

    isAuthenticated: function() {
      return $window.sessionStorage.token !== null;
    }
  };
});

