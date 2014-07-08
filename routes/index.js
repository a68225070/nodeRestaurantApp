var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var model = require('../models/restaurants.js');
var rests = model.model;


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/restmenu', function(req, res) {
    res.render('restMenu', { title: 'Express' });
});

router.get('/login', function(req, res) {
    res.render('login');
});

module.exports = router;
