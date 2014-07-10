var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var model = require('../models/restaurants.js');
var rests = model.model;

router.post('/', function(req, res){
    //get data from ajax call in deleterest.js
    var name = req.body.name;
    var address = req.body.address;
    var phone = req.body.phone;
    var itemArr = req.body.items;
    console.log('update from ajax: ' + name, address, phone, itemArr);
    //query database for name of user to delete, once a match is found, remove that document
    rests.findOne({name: name}).update({name: name, address: address, phone: phone, items: itemArr}, function(err,thisRest){
        if(err) throw err;
        else{
            console.log(thisRest);
        }
    });

    res.redirect('/editRest');
});

module.exports = router;