var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersSchema = new Schema({
    email: String,
	password: String
});

exports.model = mongoose.model('users', usersSchema, 'users');
