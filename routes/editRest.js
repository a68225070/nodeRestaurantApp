var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var model = require('../models/restaurants.js');
var rests = model.model;




router.get('/', function(req, res){
    //This query returns all data from the restaurant table into a variable docs
    rests.find({}, function (err, docs) {
        if(err){
            console.log('Error: ' + err);
        } else if(docs) {
            res.render('editRest', {data: docs, scripts: ['/public/javascripts/deleterest.js']});
        } else {
            console.log('Query returned no results.');
        }
    });

});


router.post('/', function(req, res) {

    var name = req.body.name;
    var address = req.body.address;
    var phone = req.body.phone;
    var itemLength = req.body.itemName.length;

    //loop through to find item names and prices and put them into itemArr
    var itemArr = [];
    for(var i=0; i<itemLength; i++){
        var currItem = req.body.itemName[i];
        var currPrice = req.body.price[i];
        itemArr.push({itemName: currItem,price: currPrice});
    }
    //assign values to restaurant schema for insertion
    var restaurants = new rests({
        name: name,
        items: itemArr,
        address: address,
        phone: phone
    });
    //save restaurant to db, collection: restaurants
    restaurants.save();
    //redirect to same page so user sees restaurant added
    res.redirect('/editRest');
});

module.exports = router;