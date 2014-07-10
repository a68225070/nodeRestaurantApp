var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var model = require('../models/selectedRest.js');
var rests = model.model;
var restModel = require('../models/restaurants.js');
var allRests = restModel.model;

router.get('/', function(req, res){
    //This query returns all data from the restaurant table into a variable docs
    rests.find({}, function (err, docs) {
        if(docs){
            allRests.find({}, function (err, docs2) {
                if (err) {
                    console.log('Error: menupage.jade' + err);
                } else if (docs2) {
                    res.render('menupage', {data: docs, data2: docs2});
                } else {
                    console.log('Query returned no results.');
                }
            });
        }
    });

});


module.exports = router;