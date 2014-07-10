var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var model = require('../models/selectedRest.js');
var rests = model.model;


router.get('/', function(req, res){
    //This query returns all data from the restaurant table into a variable docs
    rests.find({}, function (err, docs) {
        if(err){
            console.log('Error: menupage.jade' + err);
        } else if(docs) {
            console.log(docs);
            res.render('menupage', {data: docs});
        } else {
            console.log('Query returned no results.');
        }
    });

});

module.exports = router;