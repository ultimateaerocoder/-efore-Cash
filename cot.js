var Cot = pc.createScript('cot');

Cot.attributes.add("sceneId", {type: "string", default: "0", title: "Scene ID to Load"});

// initialize code called once per entity
Cot.prototype.initialize = function() {
    
};

// update code called every frame
Cot.prototype.update = function(dt) {
    if (this.app.keyboard.wasPressed(pc.KEY_ENTER)) {
        this.entity.enabled = false;
        this.entity.destroy();
        this.changeScenes();
    }
};

Cot.prototype.changeScenes = function() {
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

Cot.prototype.loadScene = function (id, callback) {
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
// Cot.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// http://developer.playcanvas.com/en/user-manual/scripting/