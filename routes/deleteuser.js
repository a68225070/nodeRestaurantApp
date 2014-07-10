var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var model = require('../models/users.js');
var user = model.model;

router.post('/', function(req, res){
    //get name to query database from deleteuser.js
    var name = req.body.name;

    //query database for name of user to delete, once a match is found, remove that document
    user.find({name: name}).remove(function(err,docs){
        if(err) throw err;
        else{
            //console.log('user removed');
            res.render('adduser');
        }
    })

});

module.exports = router;