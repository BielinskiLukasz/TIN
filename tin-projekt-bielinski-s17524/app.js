var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const session = require('express-session');
const authUtils = require('./util/authUtils');

var mainRouter = require('./routes/mainRoute');
var gameRouter = require('./routes/gameRoute');
var gamerRouter = require('./routes/gamerRoute');
var publisherRouter = require('./routes/publisherRoute');
var rateRouter = require('./routes/rateRoute');

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

app.use(session({
  secret: 'my_secret_password',
  resave: false
}));

app.use((req, res, next) => {
  const loggedUser = req.session.loggedUser;
  res.locals.loggedUser = loggedUser;
  if (!res.locals.loginError) {
    res.locals.loginError = undefined;
  }
  next();
});

app.use('/', mainRouter);
app.use('/game', gameRouter);
app.use('/gamer', authUtils.permitAuthenticatedUser, gamerRouter);
app.use('/publisher', authUtils.permitAuthenticatedUser, publisherRouter);
app.use('/rate', authUtils.permitAuthenticatedUser, rateRouter);

// data model api
app.use('/api/games', gameApiRouter);
app.use('/api/gamers', authUtils.permitAuthenticatedUser, gamerApiRouter);
app.use('/api/publishers', authUtils.permitAuthenticatedUser, publisherApiRouter);
app.use('/api/rates', authUtils.permitAuthenticatedUser, rateApiRouter);

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
