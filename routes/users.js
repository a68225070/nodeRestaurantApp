var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
/* GET users listing. */
router.get('/restaurants', function(req, res) {
  mongoose.model('restaurants').find(function(err, restaurants){
        res.send(restaurants);
    });
});

module.exports = router;
