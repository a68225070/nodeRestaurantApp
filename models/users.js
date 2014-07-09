var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersSchema = new Schema({
    email: String,
	password: String,
    uid: String
});

exports.model = mongoose.model('users', usersSchema, 'users');
