let _ = require('lodash');
let path = require('path');
let fs = require('fs');

let fileName = path.join(__dirname, '../files/heroNames.txt');
let targetFileName = path.join(__dirname, '../files/heroChars.txt')
fs.readFile(fileName, { encoding: 'utf8' }, function (err, data) {
    if (err == null) {
        let chars = [];
        for (let i = 0; i < data.length; i++) {
            let char = data.charAt(i);
            if (_.indexOf(chars, char) == -1) {
                chars.push(char);
            }
        }
        let newData = _.join(chars, '');
        fs.writeFile(targetFileName, newData, { encoding: 'utf8' }, function (err) {
            if (err) {
                console.log('写入失败 ' + err);
            } else {
                console.log('写入成功');
            }
        })
    }
});
