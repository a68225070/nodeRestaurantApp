var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var model = require('../models/timer.js');
var timer = model.model;


router.post('/', function(req, res) {
    var time = req.body.val;
    timer.find({}, function (err, docs) {
        if(err){
            console.log('Error: ' + err);
        } else if(docs) {
            //update db
            timer.remove({}, function(){
                var ins = new timer({time : time, active: true});
                ins.save();
            });
        }
    });
});

module.exports = router;