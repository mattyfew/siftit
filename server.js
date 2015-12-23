var express = require('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var port = process.env.PORT || 8080;
var passport = require('passport');

//var passport = require('./config/passport');
//var passport = passport();

// load the config
//var db = require('.config/db');
//mongoose.connect(db.url);

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));				// parse application/x-www-form-urlencoded
app.use(bodyParser.json());															// parse application json
app.use(methodOverride());

app.use(passport.initialize());
app.use(passport.session());


// ROUTES
require('./app/routes')(app);

app.listen(port);
console.log("Listening on port" + port);
