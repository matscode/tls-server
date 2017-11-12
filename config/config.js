var app = require('express')();
var path      = require('path');

app.disable('x-powered-by');
// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

module.exports = app;

// todo: maybe remove this file later.. not useful yet