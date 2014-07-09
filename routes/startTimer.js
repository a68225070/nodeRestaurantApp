var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var model = require('../models/orderHist.js');
var rests = model.model;


router.post('/', function(req, res) {
    var name = req.body.val;
    console.log(name);
});

module.exports = router;