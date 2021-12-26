var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');


//connect to database
require('dotenv').config(); 
var mongoose = require('mongoose');
const {MongoClient} = require('mongodb');
var url = process.env.DB_URL; //local url
var url_dev = process.env.DB_URL_DEV; //url for docker doesnot work
var url_web = process.env.DB_URL_WEB; //online url

mongoose.connect(url_web);

mongoose.connection.on('error', err => {
    console.log(`MongoDB connection error: ${err}`)
    process.exit(-1)
})
mongoose.connection.on('connected', ()=>{
  console.log("connected to mongo db...")
})

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var notesRouter = require('./routes/notes');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors('Access-Control-Allow-Origin: *'));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/notes', notesRouter);

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
