var express = require('express'),
 		Product = require('../models/product');

module.exports = function(app) {
	// SERVER ROUTES ===========================================================
	var apiRouter = express.Router();

	// middleware to use for all requests
	apiRouter.use(function(req, res, next) {
		// do logging
		console.log('Something is happening.');
		next();
});

	// test route
	apiRouter.get('/', function(req,res) {
		res.json('test route is working!');
	});

	// products routes
	apiRouter.route('/products')

		// POST new product
		.post(function(req,res) {
			var product = new Product;
			product.name = req.body.name;
			product.save(function(err) {
				if(err) res.send(err);
				res.json({message: 'Product created!'});
			});
		})

		//GET all products
		.get(function(req,res) {
			Product.find(function(err, products) {
				if(err) res.send(err);
				res.json(products); //return all products in JSON format
			});
		});

	// products/:product_id routes
	apiRouter.route('/products/:product_id')

		//GET product with id
		.get(function(req,res) {
			Product.findById(req.params.product_id, function(err, product) {
				if(err) res.send(err);
				res.json(product);
			});
		})

		.put(function(req,res) {
			Product.findById(req.params.product_id, function(err,product) {
				if(err) res.send(err);
				product.name = req.body.name; // update info (will need to add more attributes)
				product.save(function(err) {
					if(err) res.send(err);
					res.json({ message: 'Product updated!'});
				});
			});
		})

		.delete(function(req,res) {
			Product.remove({_id: req.params.product_id}, function(err, product) {
				if(err) res.send(err);
				res.json({message: 'Successfully deleted'});
			});
		});

	app.use('/api', apiRouter);

	// route to handle creating goes here (app.post)
	// route to handle delete goes here (app.delete)

	// ANGULAR ROUTES =========================================================
	app.get('*', function(req, res) {
			res.sendFile('/Users/mattfewer/dev/siftit/public/app/views/index.html');
	});
};
