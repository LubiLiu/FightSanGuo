let async = require('async');
let path = require('path');
let fs = require('fs');
let process = require('child_process');

let action = function () {
    async.waterfall([
        function (anext) {
            //Gate Server 的初始化
            process.exec('npm install', { cwd: path.join(__dirname, '../GateServer/') }, function (err, stdout, stderr) {
                console.log(stdout);
                anext(err);
            });
        },
        function (anext) {
            //Login Server 的初始化
            process.exec('npm install', { cwd: path.join(__dirname, '../LoginServer/') }, function (err, stdout, stderr) {
                console.log(stdout);
                anext(err);
            });
        },
        function (anext) {
            //Game Server 的初始化
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