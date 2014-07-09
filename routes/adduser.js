var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var model = require('../models/users.js');
var rests = model.model;

//get addUser
router.get('/', function(req, res) {
    rests.find({}, function(err, docs){
        if (err){
            throw err;
        }else
        {
            //find every user in user model
            res.render('addUser', { data: docs});
        }
    })

});

router.post('/', function(req, res){
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    console.log(name, email, password);
    res.redirect('/restaurantListings');//should redirect to admin hub page when its built
});

module.exports = router;
