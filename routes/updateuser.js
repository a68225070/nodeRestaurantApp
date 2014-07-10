var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var model = require('../models/users.js');
var user = model.model;

router.post('/', function(req, res){
    //get data from ajax call in deleteuser.js
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    var permissions = req.body.permissions;

    //query database for name of user to delete, once a match is found, remove that document
    user.findOne({name: name}).update({name: name, email: email, password: password, permissions: permissions}, function(err,thisUser){
        if(err) throw err;
        else{
            console.log(thisUser);

        }
    });
    console.log("WHAT THE FUCUCUCJCKC");
    res.redirect('/adduser');
});

module.exports = router;