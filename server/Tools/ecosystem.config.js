var path = require('path');
module.exports = {
    apps: [{
        name: 'app',
        script: path.join(__dirname, '../GateServer/index.js'),
        env: {
            NODE_ENV: 'aaa',
        },
        env_production: {
            NODE_ENV: 'bbb',
        }
    }]
}