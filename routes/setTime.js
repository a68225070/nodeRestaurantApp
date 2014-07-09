var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var model = require('../models/orderHist.js');
var rests = model.model;


router.get('/', function(req, res){
    //This query returns all data from the restaurant table into a variable docs
    rests.find({}, function (err, docs) {
        if(err){
            console.log("Error: " + err);
        }else if(docs) {
            res.render('setTimer',
                {
                    data: docs,
                    scripts: [
                        '/public/javascripts/setTime.js',
                        '/public/javascripts/flipclock.js'
                    ]
                }
            );
        } else {
            console.log("No results for query");
        }
    });

});


module.exports = router;