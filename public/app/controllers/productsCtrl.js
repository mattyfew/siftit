var app = angular.module('productCtrl', ['productService']);

app.controller('productController', function($scope, productService, ) {
	var promise = productService.getProducts();
	
	promise.then(function(data) {
		$scope.products = data;
		console.log($scope.products);
	})
})