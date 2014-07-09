var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var adminControlSchema = new Schema({
	name: String,
	items: [
	    {itemName: String, price: Number}
	]

});


exports.model = mongoose.model('adminControl', adminControlSchema, 'adminControl');