//inject products.controllers and the rest when ready
angular.module('products.main', [
	'products.controllers'
])

//@ means absolute path, meaning it will target ths named view specifically with any unnamed state on the page
.config(function ($stateProvider) {
	$stateProvider
		.state('siftit.products', {
			url: '/products/:category',
			views: {
				'alerts@': {
					controller: 'productsController as productsController',
					templateUrl: 'public/app/products/products.tmpl.html'
				}
			}
		})
});
