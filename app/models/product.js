var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
  name: {type: String, default: ''},
  metric1: {type: String},
  metric2: {type: String}
});

module.exports = mongoose.model('Products', {ProductSchema});
