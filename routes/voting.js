var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var model = require('../models/restaurants.js');
var session = require('express-session');
var connect = require('connect');

var rests = model.model;
var timerModel = require('../models/timer.js');
var timer = timerModel.model;
var userModel = require('../models/users.js');
var user = userModel.model;
var votesModel = require('../models/votes.js');
var votes = votesModel.model;


var thisUser = '';
router.get('/', function(req, res){


    //get user information by matching current sessionID to user database
    user.find({}, function(err, docs){
        for(i=0; i<docs.length; i++){
            if(docs[i].uid == req.cookies['connect.sid']){
                thisUser = docs[i];
                console.log(thisUser);
            }
        }
    })

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
                        thisUser: thisUser,
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
                        thisUser: thisUser,
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
//after user has voted, save their votes and email to votes collection
router.post('/', function(req, res){

    var v = new votes({
        restaurant: req.body.restaurant,
        email: req.body.email
    })
    
   v.save();
})

module.exports = router;