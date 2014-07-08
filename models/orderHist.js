/**
 * Created by maxwellzirbel on 7/8/14.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var orderHistorySchema = new Schema({
    date: Date,
    restName: String,
    total: Number,
    order: [{userName: String, item: String, price: Number}]
});

exports.model = mongoose.model('orderHistory', orderHistorySchema, 'orderHistory');
