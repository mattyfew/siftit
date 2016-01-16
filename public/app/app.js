// MAIN ANGULAR MODULE
// ============================

// Start Angular and inject all dependencies
angular.module('Siftit', [
	'ui.router',
//	'app.routes', // frontend routing
	'products.main'
])

.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('siftit', {
			url: '',
			abstract: true
	});
	
	$urlRouterProvider.otherwise('/');
})

// *check mean_machine for token integration.