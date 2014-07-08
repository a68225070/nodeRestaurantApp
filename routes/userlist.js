var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var model = require('../models/timer.js');
var timers = model.model;

router.get('/', function(req, res){
	timers.find({}, function (err, docs) {
		if (err) console.log(err);
		res.render('', {data: docs});
	});
});