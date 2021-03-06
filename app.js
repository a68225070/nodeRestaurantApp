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


//mongoose.connect('mongodb://localhost:27017/restaurants');
// new database from mongohq
mongoose.connect('mongodb://admin:codinghouse@kahana.mongohq.com:10097/app27253116');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser('passphrase'));

app.use('/public', express.static(__dirname + '/public'));


var routes = require('./routes/index');
var users = require('./routes/users');
var voting = require('./routes/voting');
var adminControl = require('./routes/adminControl');
var adminForm = require('./routes/adminForm');
var history = require('./routes/historic');
var setTime = require('./routes/setTime');
var startTime = require('./routes/startTimer');
var adminselection = require('./routes/voting');
var authenticate = require('./routes/authenticate');
var menuselect = require('./routes/menupage');
var addUser = require('./routes/adduser');
var editUser = require('./routes/editUser');
var editRest = require('./routes/editRest');
var resetTimer = require('./routes/resetTimer');
var adminSelect = require('./routes/adminSelect');
var selectedRestaurant = require('./routes/selectedRestaurant');
var submitOrder = require('./routes/submitOrder');
var deleteUser = require('./routes/deleteuser');
var finalsubmit = require('./routes/finalorder');
var updateUser = require('./routes/updateuser');
var deleteRest = require('./routes/deleterest');
var updateRest = require('./routes/updateRest');
var adminPlaceOrder = require('./routes/adminPlaceOrder');


//app.get('/', function(req, res){
//    if(req.cookies.beenHere == 'yes'){
//        var it = req.sessionID;
//        console.log(it);
//    } else {
//        res.cookie('beenHere', 'yes');
//        res.send('first time')
//    }
//});

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
app.use('/menupage', menuselect);
app.use('/adduser', addUser);
//app.use('/editUser', editUser);
app.use('/editRest', editRest);
app.use('/resetTimer', resetTimer);
app.use('/aftervote', voting);
app.use('/adminSelect/', adminSelect);
app.use('/adminSelect/:id', adminSelect);
app.use('/submitRestaurant/:id', menuselect);
app.use('/selectedRestaurant', selectedRestaurant);
app.use('/submitOrderData', submitOrder);
app.use('/deleteuser', deleteUser);
app.use('/finalsubmit', finalsubmit);
app.use('/updateuser', updateUser);
app.use('/deleterest', deleteRest);
app.use('/updaterest', updateRest);
app.use('/submitFinalOrderData', adminPlaceOrder);

app.use(session({
    secret: 'asdfghjkl',
    store: new MongoStore({
        db: 'restaurants',
        collection: 'sessions',
        host: 'localhost',
        port: 27017
    }),
    cookie: {maxAge: 900000}
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
