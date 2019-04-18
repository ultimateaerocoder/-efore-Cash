/*jshint esversion: 6*/

let BulletCollision = pc.createScript('bulletCollision');

BulletCollision.attributes.add("sceneId", {type: "string", default: "0", title: "Scene ID to Load"});

// initialize code called once per entity
BulletCollision.prototype.initialize = function() {
    this.entity.collision.on('collisionend', this.onCollisionEnd, this);
    this.counter = 0;
    this.distance_to_delete = 100;
};

// update code called every frame
BulletCollision.prototype.onCollisionEnd = function(result) {
    if(result.name == "LaserP1" || result.name == "LaserP2" || result.name == "LaserP3" || result.name == "LaserP4" || result.name == "LaserP5" || result.name == "LaserP6" || result.name == "LaserP7" || result.name == "LaserP8" || result.name == "LaserP9" || result.name == "LaserP10" || result.name == "LaserP11" || result.name == "LaserP12" || result.name == "LaserP13" || result.name == "LaserP14" || result.name == "LaserP15" || result.name == "LaserP16" || result.name === "LaserP17" || result.name === "P18" || result.name === "P19" || result.name === "P20" || result.name == "Laser1" || result.name == "Laser2" || result.name == "Laser3" || result.name == "Laser4" || result.name == "Laser5" || result.name == "Laser6" || result.name == "Laser7" || result.name == "Laser8" || result.name == "Laser9" || result.name == "Laser10" || result.name == "Laser11" || result.name == "Laser12" || result.name == "Laser13" || result.name == "Laser14" || result.name == "Laser15" || result.name == "Laser16" || result.name === "Laser17" || result.name === "Laser18" || result.name === "Laser19" || result.name === "Laser20") {
        if (result.name === "Laser1") {
            this.app.root.findByName("LaserP1").enabled = false;
        }
        else if (result.name === "Laser2")  {
            this.app.root.findByName("LaserP2").enabled = false;
        }
        else if (result.name === "Laser3")  {
            this.app.root.findByName("LaserP3").enabled = false;
        }
        else if (result.name === "Laser4")  {
            this.app.root.findByName("LaserP4").enabled = false;
        }
        else if (result.name === "Laser5")  {
            this.app.root.findByName("LaserP5").enabled = false;
        }
        else if (result.name === "Laser6")  {
            this.app.root.findByName("LaserP6").enabled = false;
        }
        else if (result.name === "Laser7")  {
            this.app.root.findByName("LaserP7").enabled = false;
        }
        else if (result.name === "Laser8")  {
            this.app.root.findByName("LaserP8").enabled = false;
        }
        else if (result.name === "Laser9")  {
            this.app.root.findByName("LaserP9").enabled = false;
        }
        else if (result.name === "Laser10")  {
            this.app.root.findByName("LaserP10").enabled = false;
        }
        else if (result.name === "Laser11")  {
            this.app.root.findByName("LaserP11").enabled = false;
        }
        else if (result.name === "Laser12")  {
            this.app.root.findByName("LaserP12").enabled = false;
        }
        else if (result.name === "Laser13")  {
            this.app.root.findByName("LaserP13").enabled = false;
        }
        else if (result.name === "Laser14")  {
            this.app.root.findByName("LaserP14").enabled = false;
        }
        else if (result.name === "Laser15")  {
            this.app.root.findByName("LaserP15").enabled = false;
        }
        else if (result.name === "Laser16")  {
            this.app.root.findByName("LaserP16").enabled = false;
        }
        else if (result.name === "Laser17")  {
            this.app.root.findByName("LaserP17").enabled = false;
        }
        else if (result.name === "Laser18")  {
            this.app.root.findByName("LaserP18").enabled = false;
        }
        else if (result.name === "Laser19")  {
            this.app.root.findByName("LaserP19").enabled = false;
        }
        else if (result.name === "Laser20")  {
            this.app.root.findByName("LaserP20").enabled = false;
        }
        else if (result.name === "LaserP1") {
            this.app.root.findByName("LaserP1").enabled = false;
        }
        else if (result.name === "LaserP2") {
            this.app.root.findByName("LaserP2").enabled = false;
        }
        else if (result.name === "LaserP3") {
            this.app.root.findByName("LaserP3").enabled = false;
        }
        else if (result.name === "LaserP4") {
            this.app.root.findByName("LaserP4").enabled = false;
        }
        else if (result.name === "LaserP5") {
            this.app.root.findByName("LaserP5").enabled = false;
        }
        else if (result.name === "LaserP6") {
            this.app.root.findByName("LaserP6").enabled = false;
        }
        else if (result.name === "LaserP7") {
            this.app.root.findByName("LaserP7").enabled = false;
        }
        else if (result.name === "LaserP8") {
            this.app.root.findByName("LaserP8").enabled = false;
        }
        else if (result.name === "LaserP9") {
            this.app.root.findByName("LaserP9").enabled = false;
        }
        else if (result.name === "LaserP10") {
            this.app.root.findByName("LaserP10").enabled = false;
        }
        else if (result.name === "LaserP11") {
            this.app.root.findByName("LaserP11").enabled = false;
        }
        else if (result.name === "LaserP12") {
            this.app.root.findByName("LaserP12").enabled = false;
        }
        else if (result.name === "LaserP13") {
            this.app.root.findByName("LaserP13").enabled = false;
        }
        else if (result.name === "LaserP14") {
            this.app.root.findByName("LaserP14").enabled = false;
        }
        else if (result.name === "LaserP15") {
            this.app.root.findByName("LaserP15").enabled = false;
        }
        else if (result.name === "LaserP16") {
            this.app.root.findByName("LaserP16").enabled = false;
        }
        else if (result.name === "LaserP17") {
            this.app.root.findByName("LaserP17").enabled = false;
        }
        else if (result.name === "LaserP18") {
            this.app.root.findByName("LaserP18").enabled = false;
        }
        else if (result.name === "LaserP19") {
            this.app.root.findByName("LaserP19").enabled = false;
        }
        else if (result.name === "LaserP20") {
            this.app.root.findByName("LaserP20").enabled = false;
        }
    }
    
    else if(result.name == "BoxTreasure") {
        this.app.root.findByName("BoxTreasure").enabled = false;
        this.app.root.findByName("InvadedRoom").enabled = false;
        this.app.root.findByName("Player").destroy();
        this.app.root.findByName("InvadedRoom").destroy();
        this.app.root.findByName("HQ").enabled = true;
    }
    
    else if (result.name == "Box11223344") {
        result.enabled = false;
        this.changeScenes();
    }
};

BulletCollision.prototype.changeScenes2 = function() {
    var oldHierarchy = this.app.root.findByName('Root');
    this.loadScene2 (this.sceneId, function (){
        oldHierarchy.destroy ();
    });
};

BulletCollision.prototype.loadScene2 = function (id, callback) {
    var url = id + ".json";
    this.app.loadSceneHierarchy(url, function (err, parent) {
        if (!err) {
            callback(parent);
        } else {
            console.error (err);
        }
    });
};


BulletCollision.prototype.changeScenes = function() {
    var oldHierarchy = this.app.root.findByName('Root');
    this.loadScene (this.sceneId, function (){
        oldHierarchy.destroy ();
    });
};

BulletCollision.prototype.loadScene = function (id, callback) {
    var url = 745182 + ".json";
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
// BulletCollision.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// http://developer.playcanvas.com/en/user-manual/scripting/