var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var model = require('../models/restaurants.js');
var rests = model.model;
var r = new rests;



router.get('/', function(req, res){
    //This query returns all data from the restaurant table into a variable docs
    rests.find({}, function (err, docs) {
        if(err){
            console.log('Error: ' + err);
        } else if(docs) {
            res.render('editRest', {data: docs});
        } else {
            console.log('Query returned no results.');
        }
    });

});


router.post('/', function(req, res) {
    //console.log(req.body);

    var restaurants = new rests({
        name: req.body['item.name'],
        items: [
            {itemName: req.body['i.itemName'], price: req.body['i.price']}
        ],
        address: req.body['item.address'],
        phone: req.body['item.phone']


    });
    //console.log('show r: ' + restaurants);
    console.log('the value of restName = ' + req.body['item.name']);
    console.log('i.price = ' + req.body['i.price']);
    restaurants.update();
});

module.exports = router;