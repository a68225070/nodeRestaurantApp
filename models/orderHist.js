/**
 * Created by maxwellzirbel on 7/8/14.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Schema for order history collection
var orderHistorySchema = new Schema({
    date: Date,
    restName: String,
    price: Number,
    order: [{userName: String, item: String, cost: Number}]
});

//Export the model so it can be referenced in the routes. mmm...Modular
exports.model = mongoose.model('orderHistory', orderHistorySchema, 'orderHistory');
