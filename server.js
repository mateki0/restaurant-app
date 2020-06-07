const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path')
var mongoose = require('mongoose');
var passport = require('passport');

var flash = require('connect-flash');
var cors = require('cors')
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
const dotenv = require('dotenv');
dotenv.config();

mongoose.connect(process.env.MONGOLAB_IVORY_URI, {
  useNewUrlParser: true
});
console.log(process.env.DB_NAME)


app.use(morgan('dev')) // log req to console
app.use(cookieParser());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use(session({
  secret: 'secretcat',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());


app.use(cors())
require('./passport.js')(passport);
require('./routes/routes.js')(app, passport);

if(process.env.NODE_ENV === 'production'){
  app.use(express.static(path.join(__dirname, "client", "build")));
}
app.use(express.static(path.join(__dirname, "client", "build")))
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port, ()=> console.log(`Listening on port ${port}`));
