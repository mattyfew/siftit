var app = angular.module('products.controllers', ['products.services', 'siftit.models.products'])

//productsService is a factory
 .controller('productsController', function($scope, productsFactory) {
 	$scope.formData = {};
	$scope.message = 'waaaaassssssssssuuuuuuuupppppppppppppppp';

 	// when landing on the page, get all products and show them
 	productsFactory.get('/api/products')
 		.success(function(data) {
 			$scope.products = data;
 			console.log(data);
 		})
 		.error(function(data) { console.log('Error: ' + data); });

 	// when submitting the add form, send the text to the node API
 	$scope.createProduct = function() {
 		productsFactory.post('/api/products', $scope.formData)
 			.success(function(data) {
 				$scope.formData = {}; // clear the form so our user is ready to enter another
 				$scope.product = data;
 				console.log(data);
 			})
 			.error(function(data) { console.log('Error: ' + data); });
 	};

 	//delete a product after checking it
 	$scope.deleteProduct = function(id) {
 		productsFactory.delete('/api/products' + id)
 			.success(function(data) {
 				$scope.products = data;
 				console.log(data);
 			})
 			.error(function(data) { console.log('Error: ' + data); });
 	}
});










//=======================================================
//		Code from egghead Angular Application Architecture
//=======================================================


//
// //@ means absolute path, meaning it will target ths named view specifically with any unnamed state on the page
// .config(function ($stateProvider) {
// 	$stateProvider
// 		.state('siftit.products', {
// 			url: '/',
// 			views: {
// 				//target the ui-view named 'alerts' in ROOT state (siftit)
// 				'alerts@': {
// 					controller: 'ProductsListCtrl as productsListCtrl',
// 					templateUrl: '/app/products/products.tmpl.html'
// 				}
// 			}
// 		})
// })
//
// .controller('ProductsListCtrl', function ProductsListCtrl(ProductsModel) {
// 	var productsListCtrl = this;
//
// 	//getProducts returns a promise
// 	ProductsModel.getProducts()
// 		.then(function(result) {
// 			console.log('getProducts in products.main ran = ', result);
// 			productsListCtrl.products = result; })
// });

//=======================================================
//							Also from Egghead.io
//=======================================================


// .controller('productsController', function ($scope, $stateParams, productsService, ProductsModel) {
// 	var productsController = this;
//
// 	// productsController.currentProductName = $stateParams.category;
// 	// productsController.products = ProductsModel.getProducts();
//
// })
