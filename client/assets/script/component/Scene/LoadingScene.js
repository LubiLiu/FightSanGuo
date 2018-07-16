import Game from '../../Game';
cc.Class({
    extends: cc.Component,

    properties: {
        loadingProgress: { default: null, type: cc.ProgressBar }
    },

    onLoad() {
    },
    start() {
    },
    update(dt) {
        this.loadingProgress.progress = this._calculateLoadingPercent();
    },

    _calculateLoadingPercent() {
        if (Game.GameInstance == null || Game.GameInstance.totalCount == 0) {
            return 0;
        }
        return Game.GameInstance.loadingCount / Game.GameInstance.totalCount;
    }
});
