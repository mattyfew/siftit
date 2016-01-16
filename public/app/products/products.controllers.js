var app = angular.module('products.controllers', ['products.services', 'siftit.models.products'])

.controller('productsController', function ($scope, $stateParams, productsService, ProductsModel) {
	var productsController = this;
	
	productsController.currentProductName = $stateParams.category;
	productsController.products = ProductsModel.getProducts();

//	productsService.getProducts()
//		.then(function (result) {
//			vm.products = result.data;
//		})

})
