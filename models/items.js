var mongoose = require("mongoose");

var itemSchema = mongoose.Schema({
  name: String,
  description: Object,
  price: String,
  type: String,
});
module.exports = mongoose.model("Item", itemSchema);
