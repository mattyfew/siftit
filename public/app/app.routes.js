'use strict';

angular.module('app.routes', ['ui.router'])

//config.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];

.config(function($locationProvider, $stateProvider, $urlRouterProvider){
	$locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('siftit', {
			url: '/',
			abstract: true,
			template: '<ui-view/>'
		})

		.state('siftit.home', {
			url: '',
			views: {
				'alerts@' : {
					controller: 'alertsCtrl',
					controllerAs: 'alerts',
					templateUrl: 'app/products/products.tmpl.html'
				},

				'graphs@' : {

				},

				'socialFeed@' : {

				}
			}
		});
});
