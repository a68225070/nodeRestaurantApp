var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var model = require('../models/users.js');
var user = model.model;

//get addUser
router.get('/', function(req, res) {
    user.find({}, function(err, docs){
        if (err){
            throw err;
        }else
        {
            //find every user in user model
            res.render('addUser', { data: docs, scripts: ['/public/javascripts/deleteuser.js']});
        }
    })


});

router.post('/', function(req, res){
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    var permissions = req.body.permissions;

    var person = new user({
        name: name,
        email: email,
        password: password,
        uid: '',
        permissions: permissions
    });
    person.save();
    user.find({}, function(err, docs){
        if (err){
            throw err;
        }else
        {
           //find every user in user mode
            res.render('addUser', { data: docs, scripts: ['/public/javascripts/deleteuser.js']});
        }
    })
});

module.exports = router;
