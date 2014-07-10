var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var votesSchema = new Schema({
    restaurant: String,
    email: String
});

exports.model = mongoose.model('votes', votesSchema, 'votes');