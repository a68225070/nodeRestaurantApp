var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var model = require('../models/orderSubmit.js');
var order = model.model;
var userModel = require('../models/users.js');
var user = userModel.model;

var thisUser = '';

router.post('/', function(req, res){

    user.find({}, function(err, docs){
        if(err){
            console.log("Err: " + err);
        }
        if(docs) {
            for (var i = 0; i < docs.length; i++) {
                if (docs[i].uid == req.cookies['connect.sid']) {
                    thisUser = docs[i]['name'];
                    console.log('thisUser: ' + thisUser);
                }
            }
            var restName = req.body.restName;
            var menuItems = req.body.menuItem;
            var prices = req.body.prices;
            var extras = req.body.extra;
            for(var x = 0; x < menuItems.length; x++){
                var o = new order({
                    restName: restName,
                    UserName: thisUser,
                    menuItem: menuItems[x],
                    extras: extras,
                    price: prices[x]
                });
                o.save();
            }
        }
    });

});

module.exports = router;