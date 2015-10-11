MyGame.StateB = function(game) {

    this.thing;

};

MyGame.StateB.prototype = {

    create: function() {

        this.thing = this.add.sprite(0, 150, 'thing');
        /*var tween = this.add.tween(this.thing)
            .to({
                x: -800
            }, 8000, "Linear", true, 0, -1, true);*/
    }

};
