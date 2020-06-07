var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var userSchema = mongoose.Schema({
  local: {
    name:String,
    email: String,
    password: String,
    cart: Array,
  },

});


// hash password

userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};


// validate password

userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password);
};


module.exports = mongoose.model('User', userSchema);
