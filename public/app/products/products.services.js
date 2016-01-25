angular.module('products.services', [])

.factory('productsFactory', ['$http', function ($http) {
	return {
		// note: each function returns a promise that can be used in the controller
		get: function() {
			return $http.get('/api/products'); // get all products
		},
		create : function(productData) {
			return $http.post('/api/products', productData);
		},
		delete : function(id) {
			return $http.delete('/api/products/' + id);
		}
	}
}]);
