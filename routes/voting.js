var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var model = require('../models/restaurants.js');
var session = require('express-session');
var connect = require('connect');

var rests = model.model;
var timerModel = require('../models/timer.js');
var timer = timerModel.model;


router.get('/', function(req, res){
    //this still doesn't work
    console.log(req.cookies['connect.sid']);

    //This query returns all data from the restaurant table into a variable docs
    var time = 0;
    timer.find({}, function(err, docs){
       if(docs.length > 0) {
           time = docs[0].time;
       }
        rests.find({}, function (err, docs) {
            //if err
            if(docs) {
                console.log(time);
                res.render('restMenu',
                    {
                        data: docs,
                        time: time,
                        scripts: [
                            '/public/javascripts/voting.js',
                            '/public/javascripts/flipclock.js'
                        ]
                    }
                );
            }
        });
    });

});

router.get('/:id', function(req, res){
    var id = req.params.id;
    console.log(id);
    var time = 0;
    timer.find({}, function(err, docs){
        if(docs.length > 0) {
            time = docs[0].time;
        }
        rests.find({}, function (err, docs) {
            //if err
            if(docs) {
                console.log(time);
                res.render('restMenu',
                    {
                        data: docs,
                        name: id,
                        time: time,
                        scripts: [
                            '/public/javascripts/voting.js',
                            '/public/javascripts/flipclock.js'
                        ]
                    }
                );
            }
        });
    });
});

module.exports = router;