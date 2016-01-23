angular.module('siftit.models.products', [])

.service('ProductsModel', function($http, $q) {
	var model = this,
			URLS = {FETCH: '/data/small-products.json'},
			products;

	function extract(result) {
		console.log('extract result = ', result)
		return result.data;
	}

	function cacheProducts(result) {
		products = extract(result);
		// console.log('cacheProducts() returns ', products)
		return products;
	}

	//getProducts() returns a promise
	model.getProducts = function() {
		return (products) ? $q.when(products) : $http.get(URLS.FETCH).then(cacheProducts);
		console.log('model.getProducts has ran! ', products);
	}

})
