var ViewVoicemail = pc.createScript('viewVoicemail');

// initialize code called once per entity
ViewVoicemail.prototype.initialize = function() {
    this.check = true;
    this.counter = 1;
};

// update code called every frame
ViewVoicemail.prototype.update = function(dt) {
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
    
    if (this.app.keyboard.wasPressed(pc.KEY_X)) {
        if (dist < 10) {
            if (this.counter === 1) {
                this.app.root.findByName("Intro").enabled = false;
                this.app.root.findByName("Message").enabled = true;
                this.counter ++;
            }
            
            else if (this.counter === 2){
                this.app.root.findByName("Message").enabled = false;
                this.app.root.findByName("Mission_Guidelines").enabled = true;
                this.counter ++;
            }
            
            else {
                this.app.root.findByName("BulScr").enabled = true;
            }
        }
    }
    
};

// swap method called for script hot-reloading
// inherit your script state here
// ViewVoicemail.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// http://developer.playcanvas.com/en/user-manual/scripting/