/*jshint esversion:6*/

var CoinCollector = pc.createScript('coinCollector');

CoinCollector.attributes.add("sceneId", {type: "string", default: "0", title: "Scene ID to Load"});

// initialize code called once per entity
CoinCollector.prototype.initialize = function() {
    
};

// update code called every frame
CoinCollector.prototype.update = function(dt) {
    var player = this.app.root.findByName("Player");
    var counter = this.app.root.findByName("Counter");
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
    
    if (dist < 5 && counter.element.text === "6" && this.app.root.findByName("IPDN").enabled === true) {
        this.app.root.findByName("Mission_Guidelines").enabled = false;
        this.app.root.findByName("Congrats").enabled = true;
        this.app.root.findByName("Bergot").enabled = true;
        sleep(46000).then(() => {
            this.app.root.findByName("HQ").enabled = false;
            this.app.root.findByName("HQ").destroy();
            this.app.root.findByName("City").enabled = true;
        });
    }
};

CoinCollector.prototype.changeScenes = function() {
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

CoinCollector.prototype.loadScene = function (id, callback) {
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


function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

// swap method called for script hot-reloading
// inherit your script state here
// CoinCollector.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// http://developer.playcanvas.com/en/user-manual/scripting/