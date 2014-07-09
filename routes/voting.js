var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var model = require('../models/restaurants.js');
var session = require('express-session');
var connect = require('connect');

var rests = model.model;


router.get('/', function(req, res){
    //this still doesn't work
    console.log(req.sessionID);

    //This query returns all data from the restaurant table into a variable docs
    rests.find({}, function (err, docs) {
        //if err
        if(docs) {
            //console.log(docs);
            res.render('restMenu', {data: docs, scripts: ['/public/javascripts/voting.js', '/public/javascripts/flipclock.js']});
        }
    });

});

router.get('/:id', function(req, res){
    var id = req.params.id;
    console.log(id);
    //This query returns all data from the restaurant table into a variable docs
    rests.find({}, function (err, docs) {
        //if err
        if(docs) {
            //console.log(docs);
            res.render('restMenu', {data: docs, name: id, scripts: ['/public/javascripts/voting.js', '/public/javascripts/flipclock.js']});
        }
    });
});

module.exports = router;