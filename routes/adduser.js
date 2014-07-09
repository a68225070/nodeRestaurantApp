var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

//get addUser
router.get('/', function(req, res) {
    res.render('addUser');
});

router.post('/', function(req, res){
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    console.log(name, email, password);
    res.redirect('/restaurantListings');//should redirect to admin hub page when its built
});

module.exports = router;
