let Game = {
    async: require('async'),
    moment: require('moment'),
    _: require('lodash'),

    Define: require('./util/Define'),
    Tools: require('./util/Tools'),
    HttpUtil: require('./util/HttpUtil'),

    ConfigController: require('./controller/ConfigController'),
    AudioController: require('./controller/AudioController'),
    NotificationController: require('./controller/NotificationController'),
    ResController: require('./controller/ResController'),

    GameInstance: null
};
module.exports = Game;

