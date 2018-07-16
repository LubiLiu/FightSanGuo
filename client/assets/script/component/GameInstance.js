import Game from '../Game';
cc.Class({
    extends: cc.Component,

    properties: {
        loadingCount: { default: 0, type: cc.Integer },
        totalCount: { default: 0, type: cc.Integer },
        ctls: { default: [], type: Array },
        models: { default: [], type: Array }
    },

    onLoad() {
        cc.game.addPersistRootNode(this.node);
        Game.GameInstance = this;

        this.loaded = false;
        this.ctls = [
            Game.ConfigController,
            Game.NotificationController,
            Game.AudioController,
            Game.ResController
        ];
        this.models = [
        ];
        this.totalCount = this.ctls.length + this.models.length;
        Game.async.waterfall([
            function (anext) {
                //初始化controller
                Game.async.timesSeries(this.ctls.length, function (n, tnext) {
                    let ctl = this.ctls[n];
                    this.loadingCount++;
                    if (ctl.Init && Game._.isFunction(ctl.Init)) {
                        ctl.Init(function (err) {
                            tnext(err);
                        });
                    } else {
                        console.log(ctl);
                        console.log('[警告] 该controller没有init方法');
                        tnext(null);
                    }
                }.bind(this), function (err) {
                    anext(err);
                }.bind(this));
            }.bind(this),
            function (anext) {
                //初始化model
                Game.async.timesSeries(this.models.length, function (n, tnext) {
                    let model = this.models[n];
                    this.loadingCount++;
                    if (model.Init && Game._.isFunction(model.Init)) {
                        model.init(function (err) {
                            tnext(err);
                        });
                    } else {
                        console.log(model);
                        console.log('[警告] 该model没有init方法');
                        tnext(null);
                    }
                }.bind(this), function (err) {
                    anext(err);
                }.bind(this));
            }.bind(this),
        ], function (err) {
            if (err) {
                console.log(err);
            } else {
                this.loaded = true;
            }
        }.bind(this));
    },
});
