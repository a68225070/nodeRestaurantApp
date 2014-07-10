
//This is the route for admin-select.jade
//display restaurants that have votes.
//Admin can select the restaurant on this page.
//Admin can override voted selection

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var model = require('../models/votes.js');
var votes = model.model;

router.get('/', function(req, res){

    //This query returns all data from the restaurant table into a variable docs
    votes.find({}, function (err, docs) {

        if(docs) {
            var voteArr = [];
//            console.log(docs[0]);
            docs.forEach(function(el, i){

                voteArr.push(el.restaurant);

            });
            voteArr.sort();
            var voteCount = 1;
            var totalArr = [];
            for(i = 0 ; i < voteArr.length; i++){
                var curr = voteArr[i];
                var next = voteArr[i+1];
                if(curr == next){
                    voteCount++;

                }
                else {
                    totalArr.push([curr, voteCount]);
                    voteCount = 1;

                }
            }
            //sort array of restaurant votes | displays descending order
            totalArr.sort(function(a,b){return a[1] < b[1]});
            console.log(totalArr);
            };

            //displays order history
            res.render('accordionHistory', {data: docs,votes: totalArr, scripts: ['/public/javascripts/accordionHistory.js']});

    });
});

router.get('/:id', function(req, res) {
    var id = req.params.id;
    console.log(id);
    //This query returns all data from the restaurant table into a variable docs
    votes.find({}, function (err, docs) {

        if (docs) {
            var voteArr = [];
//            console.log(docs[0]);
            docs.forEach(function (el, i) {

                voteArr.push(el.restaurant);

            });
            voteArr.sort();
            var voteCount = 1;
            var totalArr = [];
            for (i = 0; i < voteArr.length; i++) {
                var curr = voteArr[i];
                var next = voteArr[i + 1];
                if (curr == next) {
                    voteCount++;

                }
                else {
                    totalArr.push([curr, voteCount]);
                    voteCount = 1;

                }
            }
            //sort array of restaurant votes | displays descending order
            totalArr.sort(function (a, b) {
                return a[1] < b[1]
            });
            console.log(totalArr);
        }

        //displays order history
        res.render('accordionHistory', {data: docs, votes: totalArr, scripts: ['/public/javascripts/accordionHistory.js']});
    });
});
module.exports = router;