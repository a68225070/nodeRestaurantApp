var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/restmenu', function(req, res) {
    res.render('restMenu', { title: 'Express' });
});


// code to pull data from database
// Work in progress
/*
router.get('/Restaurantlist', function(req, res) {
    var db = req.db;
    var collection = db.get('restaurants');
    collection.find({},{},function(e,docs){
        res.render('restMenu', {
            "restaurants" : docs
        });
    });
});
*/


module.exports = router;
