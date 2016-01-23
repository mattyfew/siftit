//inject products.controllers and the rest when ready
angular.module('products.main', [
	'siftit.models.products',
	'products.controllers',
	'products.services'
 ])
