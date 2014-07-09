var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var model = require('../models/users.js');

var rests = model.model;

//when user logs in through index, form: POST
router.post('/', function(req, res){
    //create person model to check against
    var person = new rests({
       email:  req.body.email,
       password: req.body.password
    });
    //query users table in database and check if email address exists
    if(rests.find({email: person.email}, function(err, person){
        if(err){
            throw err;
        }
        else{
            //if users email matches, check to see if password matches, if so, redirect to voting page. Else, login
            if(person[0].password == req.body.password){
                res.redirect('restaurantListings');
            } else{
                res.redirect('/');
            }
        }
    }));
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