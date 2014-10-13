'use strict';

angular.module('holy-grail')
.controller('HomeController', function ($scope, $http, $window, Restangular, Auth) {
  $scope.user = { email: 'foo@bar.com', password: 'secret' };
  $scope.authenticated = Auth.isAuthenticated();
  $scope.login = function(params) {
    Auth.login(params, function() {
      $scope.authenticated = true;
    });
  };
  $scope.logout = function() {
    Auth.logout();
    $scope.authenticated = false;
  };
});

