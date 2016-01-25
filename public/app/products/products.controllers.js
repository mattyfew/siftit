var app = angular.module('products.controllers', ['products.services'])

 .controller('alertsCtrl', function(productsFactory) {
	var vm = this;

	vm.formData = {};
	vm.message = 'This is the Alerts message test';
	console.log('anything inside alertsCtrl');

 	// when landing on the page, get all products and show them
 	productsFactory.get('/api/products')
 		.success(function(data) {
 			vm.products = data;
 			console.log(data);
 		})
 		.error(function(data) { console.log('Error: ' + data); });

 	// when submitting the add form, send the text to the node API
 	vm.createProduct = function() {
 		productsFactory.post('/api/products', vm.formData)
 			.success(function(data) {
 				vm.formData = {}; // clear the form so our user is ready to enter another
 				vm.product = data;
 				console.log(data);
 			})
 			.error(function(data) { console.log('Error: ' + data); });
 	};

 	//delete a product after checking it
 	vm.deleteProduct = function(id) {
 		productsFactory.delete('/api/products' + id)
 			.success(function(data) {
 				vm.products = data;
 				console.log(data);
 			})
 			.error(function(data) { console.log('Error: ' + data); });
 	}
});
