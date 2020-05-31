var Item = require('../app/models/items');

//var User = require('../app/models/user');
var http = require('http')
module.exports = function(app, passport) {

  // home page

  

  app.get('/items', (req, res) => {
    Item.find({}, function(err, item) {
      res.send(item);
  });

})

  app.post('/additem', (req, res) => {
    var newItem = Item({
      name: req.body.itemName,
      description: req.body.itemDescription,
      price: req.body.itemPrice,
      type: req.body.itemType,
    });
    newItem.save((err)=>{
      if (err) throw err;
      res.redirect('/itemsadding');
    })
  });
}
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
    return next();

  res.redirect('/login');

}
