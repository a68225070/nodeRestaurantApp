var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var model = require('../models/timer.js');
var timer = model.model;


router.post('/', function(req, res) {
    var time = req.body.val;
});

module.exports = router;