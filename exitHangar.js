var ExitHangar = pc.createScript('exitHangar');

// initialize code called once per entity
ExitHangar.prototype.initialize = function() {
    
};

// update code called every frame
ExitHangar.prototype.update = function(dt) {
    var player = this.app.root.findByName("Player");
    var myPosX = this.entity.getPosition().x;
    var myPosY = this.entity.getPosition().y;
    var myPosZ = this.entity.getPosition().z;
    var playerPosX = player.getPosition().x;
    var playerPosY = player.getPosition().y;
    var playerPosZ = player.getPosition().z;
    var dx = playerPosX - myPosX;
    var dy = playerPosY - myPosY;
    var dz = playerPosZ - myPosZ;
    var dist = Math.cbrt(dx * dx + dy * dy + dz * dz);
    if (dist < 2) {
        this.app.root.findByName("TextExit").enabled = true;
        if (this.app.keyboard.isPressed(pc.KEY_ENTER)) {
            player.rigidbody.teleport(72.037, 1.697, 0, [0], [0], [0]);
            this.app.root.findByName("TextExit").enabled = false;
            player.rigidbody.angularVelocity = pc.Vec3.ZERO;
            player.rigidbody.linearVelocity = pc.Vec3.ZERO;
            this.app.root.findByName("TextEnter").enabled = true;
        }
    }
    else {
        this.app.root.findByName("TextExit").enabled = false;
    }
};

// swap method called for script hot-reloading
// inherit your script state here
// ExitHangar.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// http://developer.playcanvas.com/en/user-manual/scripting/