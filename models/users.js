var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersSchema = new Schema({
    email: String,
	password: String,
    vote_count: Number,
    vote: []
});

exports.model = mongoose.model('users', usersSchema, 'users');
