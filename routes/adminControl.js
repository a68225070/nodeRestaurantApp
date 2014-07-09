var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var model = require('../models/restaurants.js');
var adminControl = model.model;


router.post('/', function(req, res){
		
			console.log(req.body)
		// name: req.body.name,
		// items: req.body.items.itemName,
		// price: req.body.items.price,
		// address: req.body.address,
		// phone: req.body.phone


	// }).save(function(err,doc){
	// 	if(err) res.json(err);
	// 	else res.send('Entry Success');
	// });
});

// exports.adminControl = function(req, res) {
// 	var adminNew = new adminControl({
// 		name: req.body.name,
// 		// item: 
// 		address: req.body.address,
// 		phone: req.body.phone

// 	}).save(function(err){
// 		if(err) console.log(err);
// 		else res.redirect('/');
// 	});

// };

module.exports = router;