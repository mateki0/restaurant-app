var Item = require("../models/items");
var User = require("../models/user");
var http = require("http");
const user = require("../models/user");
module.exports = function (app, passport) {
  // home page

  app.get("/user", (req, res) => {
    res.send(req.user);
  });
  app.post(
    "/login",
    passport.authenticate("local-login", {
      successRedirect: "/",
      failureRedirect: "/login",
      failureFlash: true,
      failureFlash: "Invalid username or password.",
    })
  );

  app.get("/login", (req, res) => {
    res.send({ message: req.flash("loginMessage") });
  });
  app.get("/register", (req, res) => {
    res.send({ message: req.flash("signupMessage") });
  });
  app.post(
    "/register",
    passport.authenticate("local-signup", {
      successRedirect: "/",
      failureRedirect: "/register",
      failureFlash: true,
      failureFlash: "Invalid email or password."
    })
  );

  app.post("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });
  app.get("/items", (req, res) => {
    Item.find({}, function (err, item) {
      res.send(item);
    });
  });

  app.post("/menu", (req, res) => {
    User.findOne({ _id: req.user._id }).then((user) => {
      let item = user.local.cart.find((a) => a.item === req.body.name);
      if (item) {
        item.count += 1;
        user.markModified("local.cart");
      } else {
        let newItem = {
          item: req.body.name,
          price: req.body.price,
          count: 1,
        };
        user.local.cart.push(newItem);
        user.markModified("cart");
      }
      user.save((err) => {
        if (err) throw err;
        res.redirect("/menu");
      });
    });
  });

  app.post("/additem", (req, res) => {
    var newItem = Item({
      name: req.body.itemName,
      description: req.body.description,
      price: req.body.itemPrice,
      type: req.body.itemType,
    });
    newItem.save((err) => {
      if (err) throw err;
      res.redirect("/itemsadding");
    });
  });

  app.post("/update", (req, res) => {
    const filter = { _id: req.user._id };

    User.findOne(filter).then((user) => {
      user.local.cart = req.body.data;
      user.save();
    });
  });
};

