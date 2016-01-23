// MAIN ANGULAR MODULE
// ============================
'use strict';

// Start Angular and inject all dependencies
angular.module('Siftit', [
	'ui.router',
	'app.routes',
	'products.main'
])

.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
	// $stateProvider
	// 	.state('siftit', {
	// 		url: '',
	// 		abstract: true
	// });

	$urlRouterProvider.otherwise('/');
	$locationProvider.html5Mode(true);
});


// *check mean_machine for token integration.
