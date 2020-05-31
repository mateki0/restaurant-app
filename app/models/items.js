var mongoose = require('mongoose');


var itemSchema = mongoose.Schema({
  name: String,
  description: String,
  price: String,
  type:String,



});
module.exports = mongoose.model("Item", itemSchema)
