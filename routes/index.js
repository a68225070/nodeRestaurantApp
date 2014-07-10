var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var model = require('../models/restaurants.js');
var rests = model.model;


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});


router.get('/SelectRest', function(req, res) {
    res.render('admin-select');
});

//shows main admin page
router.get('/admin', function(req, res) {
    res.render('admin');
});

module.exports = router;
