var InGameScreensManagerScr = pc.createScript('inGameScreensManagerScr');

InGameScreensManagerScr.attributes.add("sceneId", {type: "string", default: "649544", title: "Scene ID to Load"});


// initialize code called once per entity
InGameScreensManagerScr.prototype.initialize = function() {
    this.screenCheck = 1;
    var opop = true;
    this.app.root.findByName('Continue_button').element.on('click', function (event) {
        if (this.screenCheck === 1){
            this.app.root.findByName('Game_Start_Screen').enabled = false;
            this.app.root.findByName('Commander_intro').enabled = true;
            this.app.root.findByName('Credits_button').enabled = false;
            //this.app.root.findByName('Credits_Text').enabled = false;
            this.screenCheck ++;
        }
        
        else if (this.screenCheck === 2){
            this.app.root.findByName("In-Game_Screens").enabled = false;
            this.app.root.findByName("HQ2").enabled = true;
            this.screenCheck ++;
        }
        
        else{
            if (opop === true){
                this.app.root.findByName("In").enabled = false;
                this.app.root.findByName("HQ2").enabled = true;
                opop = false;
            }
        }
    }, this);
    
    this.app.root.findByName('Credits_button').element.on('click', function (event) {
        this.app.root.findByName('Game_Start_Screen').enabled = false;
        this.app.root.findByName('CREDITS').enabled = true;
        this.app.root.findByName('Continue_button').enabled = false;
        //this.app.root.findByName('Credits_Text').enabled = false;
        this.app.root.findByName('Credits_button').enabled = false;
        //this.app.root.findByName('Credits_Text').enabled = false;
        
    }, this);
    
    this.app.root.findByName('Back_button').element.on('click', function (event) {
        this.app.root.findByName('Game_Start_Screen').enabled = true;
        this.app.root.findByName('CREDITS').enabled = false;
        this.app.root.findByName('Continue_button').enabled = true;
        //this.app.root.findByName('Cont_Text').enabled = true;
        //this.app.root.findByName('Credits_Text').enabled = true;
        this.app.root.findByName('Credits_button').enabled = true;
        
    }, this);
    
    
    
};

InGameScreensManagerScr.prototype.changeScenes = function() {
    var oldHierarchy = this.app.root.findByName('Root');
    this.loadScene (this.sceneId, function (){
        oldHierarchy.destroy ();
    });
};

InGameScreensManagerScr.prototype.loadScene = function (id, callback) {
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
// InGameScreensManagerScr.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// http://developer.playcanvas.com/en/user-manual/scripting/