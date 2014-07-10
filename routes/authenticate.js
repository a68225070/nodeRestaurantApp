var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var model = require('../models/users.js');

var users = model.model;

//when user logs in through index, form: POST
router.post('/', function(req, res){
    //create person model to check against
    var person = new users({
       email:  req.body.email,
       password: req.body.password
    });
    //query users table in database and check if email address exists
    if(users.find({email: person.email}, function(err, person){
        if(err){
            throw err;
        }
        else{
            //if users email matches, check to see if password matches
            if(person[0].password == req.body.password){
                //once authenticated, update user uid to the current session id
                users.update({uid: req.cookies['connect.sid']}, function(err, user){
                    if(err) throw err;
                    else{
                        console.log(user);
                    }
                });
                //after updating user profile, redirect to restMenu to vote
                res.redirect('restaurantListings');
            } else{
                //user credentials didn't match any in database, reload index to try again
                res.redirect('/');
            }
        }
    }));
});



router.get('/:id', function(req, res){
    var id = req.params.id;
    console.log(id);
    //This query returns all data from the restaurant table into a variable docs
    users.find({}, function (err, docs) {
        //if err
        if(docs) {
            //console.log(docs);
            res.render('accordionHistory', {data: docs, id: id, scripts: []});
        }
    });
});


module.exports = router;