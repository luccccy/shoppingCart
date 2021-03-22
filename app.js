const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const index = require('./routes/index');
const shoppingcart = require('./routes/shoppingcart');
const shoppingcart1 = require('./routes/shoppingcart1');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/shoppingcart', shoppingcart);
app.use('/shoppingcart1', shoppingcart1);


module.exports = app;