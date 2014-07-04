var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var restaurantsSchema = new Schema({
	name: String
});

mongoose.model('restaurants', restaurantsSchema);
mongoose.connect('mongodb://localhost:27017/youtubeTest');