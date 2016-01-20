angular.module('products.services', [])

.service('productsService', function ($http) {
	var vm = this,
			URLS = {FETCH: '../public/assets/resources/small-products.json'}, 
			products;

	function extract(result) { return result.data; }	
	
	function cacheProducts(result) {
		products = extract(result);
		return products;
	}	
	
	vm.getProducts = function () {
		console.log(URLS.FETCH)
		return $http.get(URLS.FETCH).then(cacheProducts)
	}; 
	
})
