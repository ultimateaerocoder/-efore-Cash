var TeleportVoiceMail = pc.createScript('teleportVoiceMail');

TeleportVoiceMail.attributes.add("sceneId", {type: "string", default: "649544", title: "Scene ID to Load"});

// initialize code called once per entity
TeleportVoiceMail.prototype.initialize = function() {
    this.counter = 1;
};

// update code called every frame
TeleportVoiceMail.prototype.update = function(dt) {
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
            if (this.counter === 1){
                this.app.root.findByName("Intro").enabled = false;
                this.app.root.findByName("Message").enabled = true;
                this.counter ++;
            }
            
            else if (this.counter === 2){
                this.app.root.findByName("Message").enabled = false;
                this.app.root.findByName("Mission_Guidelines").enabled = true;
                this.counter ++;
            }
            
            else if (this.counter === 3) {
                this.app.root.findByName("Mission_Guidelines").enabled = false;
                this.app.root.findByName("Teleport").enabled = true;
                this.counter++;
            }
            
            else {
                this.app.root.findByName("HQ2").enabled = false;
                this.app.root.findByName("HQ2").destroy();
                this.app.root.findByName("Raid").enabled = true;
            }
        }
    }
};

TeleportVoiceMail.prototype.changeScenes = function() {
    var oldHierarchy = this.app.root.findByName('Root');
    this.loadScene (this.sceneId, function (){
        oldHierarchy.destroy ();
    });
};

TeleportVoiceMail.prototype.loadScene = function (id, callback) {
    var url = id + ".json";
    this.app.loadSceneHierarchy(url, function (err, parent) {
        if (!err) {
            callback(parent);
        } else {
            console.error (err);
        }
    });
};


// swap method called for script hot-reloading
// inherit your script state here
// TeleportVoiceMail.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// http://developer.playcanvas.com/en/user-manual/scripting/