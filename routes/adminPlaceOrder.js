var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var model = require('../models/orderHist.js');
var order = model.model;
var model2 = require('../models/selectedRest.js');
var rests = model2.model;
var model3 = require('../models/votes.js');
var votes = model3.model;
var model4 = require('../models/orderSubmit.js');
var rests2 = model4.model;


router.post('/', function(req, res){

    rests.remove({}, function() {
        votes.remove({}, function() {
            rests2.remove({}, function () {
                var date = req.body.date;
                var restName = req.body.restName;
                var cost = req.body.price;
                var items = req.body.order;
                console.log(items);
                var o = new order({
                    date: date,
                    restName: restName,
                    price: cost,
                    order: items
                });
                o.save();
            });
        });
    });
});

module.exports = router;