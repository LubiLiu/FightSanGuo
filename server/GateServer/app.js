'use strict';
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var logger = require('../Common/logger');
var loggerConfig = require('./config/log.json');
logger.generator(loggerConfig);
var routes = require('./routes/index');

var app = express();
// view engine setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text({ type: 'text/*' }));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//初始化路由
routes.Initialization(app);

module.exports = app;
