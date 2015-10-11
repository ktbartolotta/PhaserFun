var MyGame = {};

MyGame.StateA = function(game) {};

MyGame.StateA.prototype = {

    preload: function() {
        this.load.image('thing', '/assets/images/thing.jpg');
    },

    create: function() {
        this.state.start('StateB');
    }

};