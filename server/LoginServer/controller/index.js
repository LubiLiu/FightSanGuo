'use strict';
var fs = require('fs');
var path = require('path');
let ctrls = {};

let LoadController = function (filePath) {
    let stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
        let dirs = fs.readdirSync(filePath);
        dirs.forEach(function (ele, index) {
            let newFileName = path.join(filePath, ele);
            LoadController(newFileName);
        });
    } else if (stat.isFile()) {
        if (path.resolve(__filename) == path.resolve(filePath)) {
            return;
        }
        let ctrl = require(filePath);
        ctrls[ctrl.name] = ctrl;
    }
}

var root = path.join(__dirname);
LoadController(root);

module.exports = ctrls;