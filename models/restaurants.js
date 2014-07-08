    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;

    var restaurantsSchema = new Schema({
        name: String,
        items: [
            {itemName: String, price: Number}
        ],
        address: String,
        phone: String
    });

    exports.model = mongoose.model('restaurants', restaurantsSchema);
    mongoose.connect('mongodb://localhost:27017/restaurants'); 