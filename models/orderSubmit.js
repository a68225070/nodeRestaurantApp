var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Schema for order submission collection
var orderSubmission = new Schema({
	restName: String,
    UserName: String,
    menuItem: String,
    price: Number,
});

//Export the model so it can be referenced in the routes.
exports.model = mongoose.model('orderSubmission', orderSubmissionSchema, 'orderSubmission');
