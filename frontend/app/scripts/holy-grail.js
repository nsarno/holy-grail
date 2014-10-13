'use strict';

angular.module('holy-grail', ['restangular', 'ui.router'])
.config(function ($stateProvider, $urlRouterProvider, $locationProvider, RestangularProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
      })
      .state('register', {
        url: '/register',
        templateUrl: 'partials/register.html',
        controller: 'RegisterController'
      });

    $urlRouterProvider.otherwise('/');

		// use the HTML5 History API
		$locationProvider.html5Mode(true);

    // Set base url of API
		RestangularProvider.setBaseUrl('http://0.0.0.0:8080/');

		// Add interceptor to extract embbeded response
		RestangularProvider.addResponseInterceptor(function (data, operation, what) {
			if (operation === 'getList') {
				return data[what];
			}
			return data;
		});
  });

