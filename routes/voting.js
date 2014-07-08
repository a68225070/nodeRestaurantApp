var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var model = require('../models/restaurants.js');
var rests = model.model


router.get('/', function(req, res){
    //This query returns all data from the restaurant table into a variable docs
    rests.find({}, function (err, docs) {
        //if err
        if(docs) {
            //console.log(docs);
            res.render('restMenu', {data: docs, scripts: ['javascripts/voting.js']});
        }
    });

});

module.exports = router;