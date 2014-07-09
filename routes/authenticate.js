var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var model = require('../models/users.js');

var rests = model.model;


router.post('/', function(req, res){
    var email = req.body.email;
    var password = req.body.password;
    var vote_count = 0;
    var vote = [];
    console.log(email, password);
    rests.find({}, function (err, docs) {
        //if err
        if(docs) {
            res.send(docs);
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
            res.render('accordionHistory', {data: docs, id: id, scripts: []});
        }
    });
});


module.exports = router;