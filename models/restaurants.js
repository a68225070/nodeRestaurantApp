var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Schema for restaurant collection
var restaurantsSchema = new Schema({
    name: String,
    items: [
        {itemName: String, price: Number}
    ],
    address: String,
    phone: String
});

//Export the model so it can be referenced in only the routes that require this collection.
exports.model = mongoose.model('restaurants', restaurantsSchema, 'restaurants');
