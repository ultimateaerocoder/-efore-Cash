/*jshint esversion:6 */

var ProductionOfcoins = pc.createScript('productionOfcoins');

// initialize code called once per entity
ProductionOfcoins.prototype.initialize = function() {
    
    this.timer = 18000;
    
    this.ProduceCoins = 0;
    this.storedCoins = 0;
    this.count = 0;
    this.check = 0;
    this.check1 = true;
    this.cash = parseInt(this.app.root.findByName("Cash").element.text);
    this.dep = parseInt(this.app.root.findByName("Dep").element.text);
    this.lim = 2;
};

// update code called every frame
ProductionOfcoins.prototype.update = function(dt) {
    this.ProduceCoins ++;
    
    this.timer --;
    
    this.app.root.findByName("Timer").element.text = this.timer.toString();
    
    var player = this.app.root.findByName("Player");
    var myPosX = this.app.root.findByName("EnEn").getPosition().x;
    var myPosY = this.app.root.findByName("EnEn").getPosition().y;
    var myPosZ = this.app.root.findByName("EnEn").getPosition().z;
    var myPosX1 = this.app.root.findByName("EbEb").getPosition().x;
    var myPosY1 = this.app.root.findByName("EbEb").getPosition().y;
    var myPosZ1 = this.app.root.findByName("EbEb").getPosition().z;
    var playerPosX = player.getPosition().x;
    var playerPosY = player.getPosition().y;
    var playerPosZ = player.getPosition().z;
    var dx = playerPosX - myPosX;
    var dy = playerPosY - myPosY;
    var dz = playerPosZ - myPosZ;
    var dx2 = playerPosX - myPosX1;
    var dy2 = playerPosY - myPosY1;
    var dz2 = playerPosZ - myPosZ1;
    var dist = Math.cbrt(dx * dx + dy * dy + dz * dz);
    var dist2 = Math.cbrt(dx2 * dx2 + dy2 * dy2 + dz2 * dz2);
    
    if (this.timer === 0) {
        if (this.check <= 50) {
            this.app.root.findByName("Stars").enabled = true;
            this.app.root.findByName("Stars").element.text = "You have recieved a one star rating for your management work. No cash recieved.";
            sleep(2500).then(() => {
                this.app.root.findByName("Stars").enabled = false;
            });
            this.timer = 18000;
        }
        
        else if (this.check <= 100) {
            this.app.root.findByName("Stars").enabled = true;
            this.app.root.findByName("Stars").element.text = "You have recieved a two star rating for your management work. You have recieved $100!.";
            this.dep = this.dep + 100;
            this.app.root.findByName("Dep").element.text = this.dep.toString();
            sleep(2500).then(() => {
                this.app.root.findByName("Stars").enabled = false;
            });
            this.timer = 18000;
        }
        
        else if (this.check > 150) {
            this.app.root.findByName("Stars").enabled = true;
            this.app.root.findByName("Stars").element.text = "You have recieved a three star rating for your management work. You have recieved $200!.";
            this.dep = this.dep + 100;
            this.app.root.findByName("Dep").element.text = this.dep.toString();
            sleep(2500).then(() => {
                this.app.root.findByName("Stars").enabled = false;
            });
            this.timer = 18000;
        }
    }
    
    if (dist < 10) {
        this.app.root.findByName("ProdText").element.text = this.ProduceCoins.toString();
        this.app.root.findByName("CoinProText").enabled = true;
        if (this.app.keyboard.isPressed(pc.KEY_ENTER)) {
            this.check1 = true;
            if (this.storedCoins <= 900){
                this.storedCoins = this.ProduceCoins;
                if (this.storedCoins >= 200){
                    this.check ++;
                }
                this.ProduceCoins = 0;
            }
            
            else {
                this.app.root.findByName("MaxLimText").enabled = true;
                this.ProduceCoins = 0;
                //this.check++;
                //this.check = 0;
            }
        }
    }
    
    else {
        this.app.root.findByName("CoinProText").enabled = false;
    }
    
    if (dist2 < 10) {
        this.app.root.findByName("CoinStoText").enabled = true;
        if (this.app.keyboard.wasPressed(pc.KEY_ENTER)) {
            this.app.root.findByName("StorText").enabled = true;
            this.app.root.findByName("StorText").element.text = this.check.toString();
            if (this.cash > 0) {
                this.cash = this.cash - 50;
                this.app.root.findByName("Cash").element.text = this.cash.toString();
            }
            
            else {
                this.app.root.findByName("MaxLimTe").enabled = true;
                this.dep = this.dep - 70;
                this.app.root.findByName("Dep").element.text = this.dep.toString();
                this.cash = 200;
                this.app.root.findByName("Cash").element.text = this.cash.toString();
                this.cash = 200;
                this.app.root.findByName("Cash").element.text = this.cash.toString();
            }
        }
    }
    
    else {
        this.app.root.findByName("CoinStoText").enabled = false;
    }
};


function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
// swap method called for script hot-reloading
// inherit your script state here
// ProductionOfcoins.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// http://developer.playcanvas.com/en/user-manual/scripting/