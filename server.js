var express = require('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var passport = require('passport');
var passportConfig = require('./auth/passport-config');
var expressSession = require('express-session');
var config = require('./config.js');
var path = require('path');


// APP CONFIGURATION ==================
// ====================================

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
	extended: true
})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application json
app.use(methodOverride());

mongoose.connect(config.database);

app.use(expressSession({
	secret: 'get user info',
	saveUninitialized: false,
	resave: false
}));

passportConfig();
app.use(passport.initialize());
app.use(passport.session());

// ROUTES

// MAIN CATCHALL ROUTE ---------------
// SEND USERS TO FRONTEND ------------
// has to be registered after API ROUTES
app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname + '/public/app/views/index.html'));
	});

app.listen(config.port);
console.log("Listening on port " + config.port);
