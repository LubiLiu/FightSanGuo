var async = require('async');
var path = require('path');
var process = require('child_process');

var action = function () {
    async.waterfall([
        function (anext) {
            //Gate Server 的初始化
            process.exec('npm install', { cwd: path.join(__dirname, '../GateServer/') }, function (err, stdout, stderr) {
                console.log(stdout);
                anext(err);
            });
        },
        function (anext) {
            //Gate Server 的初始化
            process.exec('npm install', { cwd: path.join(__dirname, '../LoginServer/') }, function (err, stdout, stderr) {
                console.log(stdout);
                anext(err);
            });
        },
        function (anext) {
            //Gate Server 的初始化
            process.exec('npm install', { cwd: path.join(__dirname, '../GameServer/') }, function (err, stdout, stderr) {
                console.log(stdout);
                anext(err);
            });
        }
    ], function (err) {
        console.log('初始化完成');
    });
}
action();