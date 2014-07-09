var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var timerSchema = new Schema({
	    time: Number,
	    active: Boolean
});

exports.model = mongoose.model('timer', timerSchema, 'timer');
