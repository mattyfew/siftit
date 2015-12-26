var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var UserSchema = new Schema({
	firstName: {type: String, required: 'Please enter your first name'},
	lastName: {type: String, required: 'Please enter your last name'},
	email: {type: String, required: 'Please enter your email address', index: {unique: true}},
	username: {type: String, required: true, index: {unique: true}},
	password: {type: String, required: true, select: false},
	created: {type: Date, default: Date.now}
});

// Validation
UserSchema.path('email').validate(function(value, next) {
	userService.findUser(value, function(err, user) {
		if(err) {
			console.log(err);
			
			//could not validate
			return next(false);
		}
		next(!user);
	});
}, 'That email is already in use');

// hash the password before the user is saved
UserSchema.pre('save', function(next) {
	var user = this;
	
	// hash password only if password has been changed or user is new
	if(!user.isModified('password')) return next();
	
	// generate the hash
	bcrypt.hash(user.password, null, null, function(err, hash) {
		if(err) return next(err);
		
		user.password = hash;
		next();
	});
});

//method to compare password with the db hash
UserSchema.methods.comparePassword = function(password) {
	var user = this;
	
	return bcrypt.compareSync(password, user.password);
};

// return the model
module.exports = mongoose('User', UserSchema);

