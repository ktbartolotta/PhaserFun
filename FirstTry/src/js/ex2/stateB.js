MyGame.StateB = function(game) {};

MyGame.StateB.prototype = {

    init: function(pic) {

        this.key = 'bridge' + pic;
    },

    create: function() {

        this.sprite = this.add.sprite(this.world.centerX, this.world.centerY,
            this.key);
    },

   /* update: function() {

        this.sprite.rotation += .05;
    }*/
};
