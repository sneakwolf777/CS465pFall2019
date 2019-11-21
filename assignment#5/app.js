var createError = require('http-errors');
var express = require('express');
var app = express();
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

var logger = require('morgan');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// get and post the contact form info
app.get('/', function (req,res) {
  res.sendFile("/index.html");
});

app.post('/submit',function (req,res) {
  var name = req.body.name;
  var email = req.body.email;
  var comment = req.body.comment;
  console.log("name: "+ name + "\n",
      "email: " + email + "\n",
      "comment: " + comment);
  res.write("name: " + req.body.name + "\n");
  res.write("email: " + req.body.email + "\n");
  res.write("comment: " + req.body.comment);
  res.end();
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
