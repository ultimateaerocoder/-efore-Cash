/*jshint esversion:6*/

let Shoot = pc.createScript('shoot');

Shoot.attributes.add('power', { type: 'number', default:1 });
Shoot.attributes.add('ammoPower', { type: 'number', default:1 });
Shoot.attributes.add('bullet', { type: 'entity' });

// initialize code called once per entity
Shoot.prototype.initialize = function() {
    this.amoo = this.ammoPower;
};

// update code called every frame
Shoot.prototype.update = function(dt) {
    // Press X to shoot 
    if(this.app.keyboard.wasPressed(pc.KEY_X)) {
        this.app.root.findByName("AmmoCounter").element.text = this.amoo.toString();
        if (this.amoo > 0) {
            this.shoot();
            this.amoo--;
        }
    }
};

Shoot.prototype.shoot = function(dt){
    let gun = this.app.root.findByName("Handgun1");
    let player1 = this.app.root.findByName("Player");
    let bullet = this.bullet.clone();
    // Clone the bullet as specified by the attribute
    
    // Add it to the game 
    this.app.root.addChild(bullet);

    let player = this.entity;
    // Its force is in the direction the player is facing 
    this.force = new pc.Vec3();
    this.force.copy(gun.forward);
    this.force.scale(this.power);
    
    let pos = gun.getPosition();
    let direction = gun.forward; 
    // Add it a little further if the player is already going fast
    //pos.add(direction.scale(5 + player.rigidbody.linearVelocity.length() * 0.01));
    
    bullet.setPosition( pos );
    let bulletRotation =  gun.getRotation();
    bullet.setRotation( bulletRotation );
    bullet.rotateLocal(90,0,0);
    
    bullet.enabled = true; //Must enable after setting position!
    
    bullet.rigidbody.applyImpulse(this.force);
    let bulletPosX = bullet.getPosition().x;
    let bulletPosY = bullet.getPosition().y;
    let bulletPosZ = bullet.getPosition().z;
    let playerPosX = player1.getPosition().x;
    let playerPosY = player1.getPosition().y;
    let playerPosZ = player1.getPosition().z;
    let dx = playerPosX - bulletPosX;
    let dy = playerPosY - bulletPosY;
    let dz = playerPosZ - bulletPosZ;
    let dist = Math.cbrt(dx * dx + dy * dy + dz * dz);
    
    if (dist > 10) {
        bullet.enabled = false;
    }
};

// swap method called for script hot-reloading
// inherit your script state here
Shoot.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// http://developer.playcanvas.com/en/user-manual/scripting/