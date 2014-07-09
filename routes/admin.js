var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var model = require('../models/restaurants.js');
var rests = model.model;

router.post('/new', function(req, res){
	new rests({
		name: req.body.name,
		items: req.body.items.itemName,
		price: req.body.items.price,
		address: req.body.address,
		phone: req.body.phone


	}).save(function(err,doc){
		if(err) res.json(err);
		else res.send('Entry Success');
	});
});