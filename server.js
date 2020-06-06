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

mongoose.connect(`mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASSWORD}.mongodb.net/test?retryWrites=true&w=majority`, {
  useNewUrlParser: true
});
console.log(process.env.DB_NAME)
if(process.env.NODE_ENV === 'production'){
  app.use(express.static(path.join(__dirname, '/react-ui/build')));
}
app.use(express.static('build'));
app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, './react-ui/react-ui/build', 'index.html'));
})

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
require('./app/routes.js')(app, passport);


app.listen(process.env.PORT || port, ()=> console.log(`Listening on port ${port}`));
