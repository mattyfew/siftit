angular.module('siftit.models.products', [])

.service('ProductsModel', function() {
	var model = this,
			products = [
				{
					"id": 0,
					"name": "dress",
					"metric1": "very sheek",
					"metric2": "oh yea"
				}, {
					"id": 1,
					"name": "Sean",
					"metric2": "lovin ittttt"
				}
			];
	
	model.getProducts = function() {
		return products;
	}
})