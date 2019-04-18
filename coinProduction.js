/*jshint esversion: 6 */

var CoinProduction = pc.createScript('coinProduction');

// initialize code called once per entity
CoinProduction.prototype.initialize = function() {
    this.checker = false;
};

// update code called every frame
CoinProduction.prototype.update = function(dt) {
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
    
    if (this.app.keyboard.isPressed(pc.KEY_G)) {
        if (dist < 6) {
            if(counter.element.text === "6"){
                this.app.root.findByName("IPDN").enabled = true;
                this.app.root.findByName("CoinText").enabled = false;
                this.app.root.findByName("CoinText2").enabled = true;
                this.app.root.findByName("CoinText2").element.text = "Coin Production Complete!!";
            }
            
            else {
                this.app.root.findByName("CoinText").enabled = false;
                this.app.root.findByName("CoinText2").enabled = true;
            }
        }
        
    }
};

// swap method called for script hot-reloading
// inherit your script state here
// CoinProduction.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// http://developer.playcanvas.com/en/user-manual/scripting/