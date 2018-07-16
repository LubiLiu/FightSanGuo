'use strict';
var http = require('http');

var app = require('./app');
var define = require('../Common/define');
var serverConf = require('./config/server.json');

let logger = require('../Common/logger').getLogger();
app.set(define.DataKey.ServerName, serverConf.name);
/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
    logger.error(error, '[监听错误]');
    process.exit(1);
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
}


var server = http.createServer(app);

server.listen(serverConf.port);
server.on('error', onError);
server.on('listening', onListening);

