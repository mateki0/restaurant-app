var Item = require('../models/items');
var User = require('../models/user');
var http = require('http')
module.exports = function(app, passport) {

  // home page

  app.get('/user', (req, res) => {
    res.send(req.user)
  })
  app.post('/login', passport.authenticate('local-login', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true,
    failureFlash: 'Invalid username or password.'
  }));

  app.get('/login', (req, res) => {
    console.log('')
    res.send({message:req.flash('loginMessage')})
  })
  app.get('/register', (req, res) => {
    res.send({message:req.flash('signupMessage')})
  })
  app.post('/register', passport.authenticate('local-signup',{
    successRedirect: '/',
    failureRedirect: '/register',
    failureFlash: true,
}))

  app.post('/logout', (req,res) => {
    req.logout();
    res.redirect('/')
  })
  app.get('/items', (req, res) => {
    Item.find({}, function(err, item) {
      res.send(item);
  });

});

  app.post('/menu', (req,res)=>{
    let user = req.user;
    let newItem = {
      item:req.body.name,
      price:req.body.price
    }
    console.log(newItem)
    req.user.local.cart.push(newItem)


    user.save((err)=>{
      if(err) throw err;
      res.redirect('/menu');
    })
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
