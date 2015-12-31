var routerApp = angular.module('Siftit', ['ui.router'])

routerApp.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
	
	$stateProvider
	
	.state('home', {
		url: '/home',
		templateUrl: 'templates/social/partial-home.html'
	})
	
	.state('social', {
		url: '/social',
		templateUrl: 'templates/social/dashboard.html',
		controller: 'SocialCtrl'
	});
});