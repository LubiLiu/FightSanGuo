var async = require('async');
var path = require('path');
var process = require('child_process');

var action = function () {
    async.waterfall([
        function (anext) {
            //Gate Server 的初始化
            process.exec('npm install', { cwd: path.join(__dirname, './GateServer/') }, function (err, stdout, stderr) {
                console.log(err);
                console.log(stdout);
                console.log(stderr);
                anext();
            });
        },
    ], function (err) {
        console.log('初始化完成');
    });
}
action();