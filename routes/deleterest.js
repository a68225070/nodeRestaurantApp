var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var model = require('../models/restaurants.js');
var rests = model.model;

router.post('/', function(req, res){
    //get name to query database from deleterest.js
    var name = req.body.name;
    console.log('name from ajax: ' + name);
    //query database for name of rest to delete, once a match is found, remove that document
    rests.find({name: name}).remove(function(err,docs){
        if(err) throw err;
        else{
            console.log(docs);
            res.render('editRest');
        }
    })

});

module.exports = router;