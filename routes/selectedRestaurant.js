var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var model = require('../models/selectedRest.js');
var rests = model.model;


router.post('/', function(req, res) {
    var selected = req.body.restaurant;
    console.log('selected ' + selected);
    rests.find({}, function (err, docs) {
        if(err){
            console.log('Error: ' + err);
        } else if(docs) {
            //update db
            rests.remove({}, function(){
                var ins = new rests({name : selected});
                ins.save();
            });
        }
    });
});

module.exports = router;