var app = angular.module("productService", [])

app.service("productService", function ($http, $q, ) {
		
		// q lets you say "I want to do this later" its a promise,
		var deferred = $q.defer();
		
		$http.get('public/resources/products.json').then(function(data) {
				deferred.resolve(data);
		});
		
		this.getProducts = function() {
				return deferred.promise;
		}
})

