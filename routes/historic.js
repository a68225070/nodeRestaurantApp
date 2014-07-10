var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var model = require('../models/orderHist.js');
var rests = model.model;


router.get('/', function(req, res){
    //This query returns all data from the restaurant table into a variable docs
    rests.find({}, function (err, docs) {
        if(err){
            console.log('Error: ' + err);
        } else if(docs) {
            res.render('orderHistory', {data: docs});
        } else {
            console.log('Query returned no results.');
        }
    });

});


router.get('/:id', function(req, res){
    var id = req.params.id;
    console.log(id);
    //This query returns all data from the restaurant table into a variable docs
    rests.find({}, function (err, docs) {
        if(err){
            console.log('Error: ' + err);
        } else if(docs) {
            //console.log(docs);
            res.render('orderHistory', {data: docs, id: id, scripts: []});
        } else {
            console.log('Query returned no results.');
        }
    });
});


module.exports = router;