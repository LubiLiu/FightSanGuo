import Tools from '../util/Tools';
let AudioController = function () {
    this.audioClips = {};
    this.audio = null;
    this.effect = null;
};

AudioController.prototype.Init = function (cb) {
    this.audioClips = {};
    this.audio = null;
    this.effect = null;
    cc.loader.loadResDir('Audio/', cc.AudioClip, function (err, ress, urls) {
        if (err) {
            console.log('[严重错误] 奖励资源加载错误 ' + err);
        } else {
            for (let i = 0; i < ress.length; i++) {
                this.audioClips[urls[i]] = ress[i];
            }
        }
        setTimeout(function () {
            Tools.InvokeCallback(cb, err);
        }, 2000);
    }.bind(this));
}

AudioController.prototype.Update = function (dt) {
    let audiostate = cc.audioEngine.getState(this.audio);
    if (audiostate == cc.audioEngine.AudioState.PAUSED || audiostate == cc.audioEngine.AudioState.ERROR) {
        cc.audioEngine.stop(this.audio);
        this.audio == null;
    }
}

AudioController.prototype.PlayAudio = function (name) {
    this.audio = cc.audioEngine.play(this.audioClips[name], true, 1);
}

AudioController.prototype.PlayEffect = function (name) {
    this.effect = cc.audioEngine.play(this.audioClips[name], false, 2);
};

module.exports = new AudioController();