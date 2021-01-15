var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var mainRouter = require('./routes/mainRoute');
var gameRouter = require('./routes/gameRoute');
var gamerRouter = require('./routes/gamerRoute');
var publisherRouter = require('./routes/publisherRoute');

var gameApiRouter = require('./routes/api/gameApiRoute');
var gamerApiRouter = require('./routes/api/gamerApiRoute');
var publisherApiRouter = require('./routes/api/publisherApiRoute');
var rateApiRouter = require('./routes/api/rateApiRoute');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', mainRouter);
app.use('/game', gameRouter);
app.use('/gamer', gamerRouter);
app.use('/publisher', publisherRouter);

// data model api
app.use('/api/games', gameApiRouter);
app.use('/api/gamers', gamerApiRouter);
app.use('/api/publishers', publisherApiRouter);
app.use('/api/rates', rateApiRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('pages/error');
});

module.exports = app;

// create sqquelize data model
const sequelizeInit = require('./config/sequelize/init');
sequelizeInit()
  .catch(err => {
    console.log(err);
  });
