const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path')
var mongoose = require('mongoose');
var passport = require('passport');
var configDB = require('./config/database.js');
var flash = require('connect-flash');
var cors = require('cors')
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');


mongoose.connect(`mongodb+srv://${configDB.db}:${configDB.password}.mongodb.net/test?retryWrites=true&w=majority`, {
  useNewUrlParser: true
});
if(process.env.NODE_ENV === 'production'){
  app.use(express.static(path.join(__dirname, './client/build')));
}

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build', 'index.html'));
});

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
app.use(express.static(__dirname + '/public'));

app.use(cors())
require('./config/passport')(passport);
require('./app/routes.js')(app, passport);


app.listen(port, ()=> console.log(`Listening on port ${port}`));
