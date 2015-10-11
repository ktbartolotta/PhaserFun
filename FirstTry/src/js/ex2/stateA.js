MyGame = {};

MyGame.StateA = function(game) {};

MyGame.StateA.prototype = {

    preload: function() {

        this.load.image('bridge1', '/assets/images/bridge.jpg');
        this.load.image('bridge2', '/assets/images/thing.jpg');
    },

    create: function() {

        var pic = this.rnd.between(1, 2);
        this.state.start('StateB', true, false, pic);
    }
};
