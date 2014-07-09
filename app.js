var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var fs = require('fs');
var session = require('express-session');
var connect = require('connect');
var MongoStore = require('connect-mongo')(session);

var app = express();


mongoose.connect('mongodb://localhost:27017/restaurants');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());

app.use('/public', express.static(__dirname + '/public'));


var routes = require('./routes/index');
var users = require('./routes/users');
var voting = require('./routes/voting');

var history = require('./routes/historic')
var adminControl = require('./routes/adminControl');
var adminForm = require('./routes/adminForm');

var history = require('./routes/historic');
var setTime = require('./routes/setTime');
var startTime = require('./routes/startTimer');
var adminselection = require('./routes/voting');
var authenticate = require('./routes/authenticate');
var addUser = require('./routes/adduser');


app.use('/', routes);
app.use('/users', users); // not used
app.use('/restaurantListings', voting); //displays restaurant listings and timer
app.use('/restaurantListings/:id', voting); //detailed restaurant listings :id  is the name of the restaurant as a string
app.use('/orderHistory', history);
app.use('/orderHistory/:id', history);
app.use('/setTime', setTime);
app.use('/startTimer', startTime);
app.use('/adminControl', adminForm);
app.use('/new', adminControl);
app.use('/authenticate', authenticate);
app.use('/adduser', addUser);
//app.use('admin-select', voting);


// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//     var err = new Error('Not Found');
//     err.status = 404;
//     next(err);
// });
//app.get('/ok', function(req, res){
//    req.session.name = req.session.name || new Date().toUTCString();
//    res.send(req.sessionID);
//});

app.use(session({
    secret: 'asdfghjkl',
    store: new MongoStore({
        db: 'restaurants',
        collection: 'users',
        host: 'localhost',
        port: 27017
    }),

}));


// load all files in models dir
fs.readdirSync(__dirname + '/models').forEach(function(filename) {
  if (~filename.indexOf('.js')) require(__dirname + '/models/' + filename)
});

//displays unformatted data from database
app.get('/restaurants', function(req, res){
    mongoose.model('restaurants').find(function(err, restaurants){
        res.send(restaurants);
    });
});

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
  console.log("magic happens on port " + server.address().port);
});

module.exports = app;
