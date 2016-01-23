'use strict';

angular.module('app.routes', ['ngRoute']).config(config);

config.$inject = ['$routeProvider', '$locationProvider'];

function config($routeProvider, $locationProvider){
	$routeProvider

		.when('/alerts', {
			templateUrl: '/app/products/products.tmpl.html',
			controller: 'productsController'
		});

		$locationProvider.html5Mode(true);

	// login page
	// 	.when('/login', {
	// 	templateUrl: 'app/views/pages/login.html',
	// 	controller: 'mainController',
	// 	controllerAs: 'login'
	// })

	// show all users
	// 	.when('/users', {
	// 	templateUrl: 'app/views/pages/users/all.html',
	// 	controller: 'userController',
	// 	controllerAs: 'user'
	// })

	// page to edit a user
	// 	.when('/users/:user_id', {
	// 	templateUrl: 'app/views/pages/users/single.html',
	// 	controller: 'userEditController',
	// 	controllerAs: 'user'
	// })

	// form to create a new user
	// same view as edit page
	// 	.when('/users/create', {
	// 	templateUrl: 'app/views/pages/users/single.html',
	// 	controller: 'userCreateController',
	// 	controllerAs: 'user'
	// });
};
