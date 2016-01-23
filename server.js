var express = require('express'),
		app = express(),
		mongoose = require('mongoose'),
		morgan = require('morgan'),
		bodyParser = require('body-parser'),
		methodOverride = require('method-override'),
		passport = require('passport'),
		passportConfig = require('./auth/passport-config'),
		expressSession = require('express-session'),
		config = require('./config'),
		path = require('path'),
		fs = require('fs');

		routes = require('./app/routes/routes'),
		Product = require('./app/models/product');

// APP CONFIGURATION ==================
// ====================================

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application json
app.use(methodOverride());

var db = require('./config/db')
mongoose.connect(db.url);

app.use(expressSession({
	secret: 'get user info',
	saveUninitialized: false,
	resave: false
}));

passportConfig();
app.use(passport.initialize());
app.use(passport.session());

// ROUTES=======================================
require('./app/routes/routes')(app);

app.listen(config.port, function(){ console.log("Listening on port " + config.port); });

exports = module.exports = app; //expose app
