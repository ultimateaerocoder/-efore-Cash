var EnterHangar = pc.createScript('enterHangar');

// initialize code called once per entity
EnterHangar.prototype.initialize = function() {
    this.check = true;
    this.check2 = false;
    this.check3 = true;
};

// update code called every frame
EnterHangar.prototype.update = function(dt) {
    var player = this.app.root.findByName("Player");  
    var distance = this.app.root.findByName("ScifiHangarScene").getPosition().clone();
    
    distance.sub(player.getPosition());
    
    if(distance.length() < 40 && this.check === true){
        
        this.app.root.findByName("TextEnter").enabled = true;
        
        if (this.app.keyboard.wasPressed(pc.KEY_SPACE)) {
            player.rigidbody.teleport(110.706, 1.697, 11.276, [0], [0], [0]);
            player.rigidbody.angularVelocity = pc.Vec3.ZERO;
            player.rigidbody.linearVelocity = pc.Vec3.ZERO;
            this.app.root.findByName("TextEnter").enabled = false;
            this.app.root.findByName("BoxTT").enabled = true;
            this.check = false;
            this.check2 = false;
            this.check3 = true;
            
        }
    }
    
    else {
        this.app.root.findByName("TextEnter").enabled = false;
    }
    
};

// swap method called for script hot-reloading
// inherit your script state here
// EnterHangar.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// http://developer.playcanvas.com/en/user-manual/scripting/