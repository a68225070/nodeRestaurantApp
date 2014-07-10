var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersSchema = new Schema({
    name: String,
    email: String,
	password: String,
    uid: String,
    permission: String
});

exports.model = mongoose.model('users', usersSchema, 'users');
