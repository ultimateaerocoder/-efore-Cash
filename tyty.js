var Tyty = pc.createScript('tyty');

Tyty.attributes.add("sceneId", {type: "string", default: "0", title: "Scene ID to Load"});

// initialize code called once per entity
Tyty.prototype.initialize = function() {
    
};

// update code called every frame
Tyty.prototype.update = function(dt) {
    var player = this.app.root.findByName("Player");
    var myPosX = this.app.root.findByName("EntityBuilding").getPosition().x;
    var myPosY = this.app.root.findByName("EntityBuilding").getPosition().y;
    var myPosZ = this.app.root.findByName("EntityBuilding").getPosition().z;
    var playerPosX = player.getPosition().x;
    var playerPosY = player.getPosition().y;
    var playerPosZ = player.getPosition().z;
    var dx = playerPosX - myPosX;
    var dy = playerPosY - myPosY;
    var dz = playerPosZ - myPosZ;
    var dist = Math.cbrt(dx * dx + dy * dy + dz * dz);
    
    if (dist < 8) {
        this.app.root.findByName("GText").enabled = true;
        if (this.app.keyboard.isPressed(pc.KEY_SPACE)) {
            this.app.root.findByName("Raid").enabled = false;
            this.app.root.findByName("Raid").destroy();
            this.app.root.findByName("ScreenCont").enabled = true;
        }
    }
};

Tyty.prototype.changeScenes = function() {
    // Get a reference to the current root object
    var oldHierarchy = this.app.root.findByName ('Root');
    
    // Load the new scene. The scene ID is found by loading the scene in the editor and 
    // taking the number from the URL
    // e.g. If the URL when Scene 1 is loaded is: https://playcanvas.com/editor/scene/475211
    // The ID is the number on the end (475211)
    this.loadScene (this.sceneId, function () {
        // Once the new scene has been loaded, destroy the old one
        oldHierarchy.destroy ();
    });
};

Tyty.prototype.loadScene = function (id, callback) {
    // Get the path to the scene
    var url = id  + ".json";
    
    // Load the scenes entity hierarchy
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
// Tyty.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// http://developer.playcanvas.com/en/user-manual/scripting/