///////////////////////////////////Canvases///////////////////////////////////

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 988;
canvas.height = 480;
var c = document.getElementById("myCanvas");
var ctx2 = c.getContext("2d");
var c = document.getElementById("CanvasSide");
//var ctx3 = c.getContext("2d");
//I need to work on resizeing it this weekend
var start = false;
var pause = false;


///////////////////////////////////Canvases///////////////////////////////////

////////////////////////////////////Map Fields//////////////////////////////////

//tell the program what map to change to when the player leaves it's current area.
var mapCordsX = 1;
var mapCordsY = 1;

//to save the area code when the player is in a building
var oldMapCordsX = 0;
var oldMapCordsY = 0;

var mapXmin = 0;
var mapXmax = 2;
var mapYmin = 2;
var mapYmax = 2;



///////////////////////////////////Map Fields///////////////////////////////////

//////////////////////////////////Images////////////////////////////////////////

//Background image
var bgReady = false;
var bgImage1 = new Image();
bgImage1.onload = function() {
   bgReady = true;
};


//images for backgorunds.
bgImage1.src = "images/background.png"; // Background images

//Background image
var bgReady = false;
var bgImage2 = new Image();
bgImage2.onload = function() {
   bgReady = true;
};

//Background image
var bgReady = false;
var bgImage3 = new Image();
bgImage3.onload = function() {
   bgReady = true;
};

bgImage3.src = "images/scroll.png"; // Background images

//images for backgorunds.
bgImage2.src = "images/backgroundBottom.png"; // Background images

// Hero image
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function() {
    heroReady = true;
};
heroImage.src = "images/sprite01south.PNG";  //Hero Images

// Hero image
var heroReady = false;
var heroBImage = new Image();
heroBImage.onload = function() {
    heroReady = true;
};
heroBImage.src = "images/sprite01south.PNG";  //Hero Images
// Enemyimage
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function() {
    monsterReady = true;
};

monsterImage.src = "images/monster.png";     //Enemy images\

var monster2Image = new Image();
monster2Image.src = "images/orc.png";     //Enemy images\


mImg = [];
mImg[0]=monsterImage;
mImg[1]=monster2Image;

var inn = new Image();
inn.src = "images/inn1.png";

var house = new Image();
house.src = "images/house1.png";     //Enemy images\

//////////////////////////////////Images////////////////////////////////////////

////////////////////////////////Global Objects//////////////////////////////////



// Game objects
var hero = {
    speed: 256,// movement in pixels per second
    x: canvas.width/2-300,
    y: canvas.height/2,
    hp: 100,
    atk: 10 ,
    weapon: 0,
    def: 10,
    armor: 5
};

class Monster{

  constructor(spd,m,h,atk,w,d,ar,i){
  this.move=m;
  this.speed=spd;
  this.hp=h;
  this.attack=atk;
  this.weapon=w;
  this.def=d;
  this.armor=ar;
  this.x = 32 + (Math.random() * (canvas.width - 64));
  this.y = 32 + (Math.random() * (canvas.height - 64));
  this.MC = 0;
  this.img= mImg[i];

  }

}

class Weapon{

  constructor(w,img){

    this.atk=w;
    this.img = new Image();
    this.img.src = img;
  }
}


class Chest{

  constructor(w,img){

    this.atk=w;
    this.img = new Image();
    this.img.src = img;
  }
}
  class House{

  constructor(x,y){

    this.X=x;
    this.Y=y;

    }
  }
  class Inn{

  constructor(x,y){

    this.X=x;
    this.Y=y;
  }
}


House1 = new House (200,123);
Inn1 = new Inn (320,100);
osInnList=[];
osInnList.push(Inn1);
weapon1= new Weapon (5, "images/knife1.PNG");
chest1 = new Chest (5, "images/chestplate1.PNG");
var osHouseList=[];
osHouseList.push(House1);
var monsterData = [];
var onscreenMonster = [];
monster = new Monster(80,100,20,10,0,0,0,0);
monster1 = new Monster(70,110,20,10,0,0,0,0);
monster2 = new Monster(66,105,20,10,0,0,0,0);
monster3 = new Monster(73,112,20,10,0,0,0,0);
monster4 = new Monster(90,116,20,10,0,0,0,0);
orc1 = new Monster(90,106,30,15,0,5,5,1);
orc2 = new Monster(66,125,30,15,0,5,5,1);
orc3 = new Monster(78,128,30,15,0,5,5,1);
orc4 = new Monster(74,120,30,15,0,5,5,1);
orc5 = new Monster(88,115,30,15,0,5,5,1);
monsterData.push(monster);
monsterData.push(monster1);
monsterData.push(monster2);
monsterData.push(monster3);
monsterData.push(monster4);
monsterData.push(orc1);
monsterData.push(orc2);
monsterData.push(orc3);
monsterData.push(orc4);
monsterData.push(orc5);
onscreenMonster.push(monsterData[0]);
var monstersCaught = 0;

var MonsterMove = 0;

var kill = function(i) { //index of monster
    var temp = onscreenMonster[i];
    onscreenMonster[i]=onscreenMonster[onscreenMonster.length-1];
    onscreenMonster[onscreenMonster.length-1]=temp;
    onscreenMonster.pop();

};





var monsterSpawns = function(i) {
    oncreenMonster.push(monsterData[i]);
};

////////////////////////////////Global Objects//////////////////////////////////

/////////////////////////// Handle keyboard controls////////////////////////////
var keysDown = {};

addEventListener("keydown", function(e) {
    keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function(e) {
    delete keysDown[e.keyCode];
}, false);

/////////////////////////// Handle keyboard controls////////////////////////////



///////////////////////////////Map Methods//////////////////////////////////////





var resetNorth = function() {
    hero.y = 394;
    mapCordsY -= 1;
    despawnMonsters(onscreenMonster);
    createMonsters();

};
var resetEast = function() {
    hero.x = 0;
    mapCordsX -= 1;
    despawnMonsters(onscreenMonster);
    createMonsters();

};
var resetWest = function() {
    hero.x = canvas.width;
    mapCordsX += 1;
    despawnMonsters(onscreenMonster);
    createMonsters();

};
var resetSouth = function() {
    hero.y = 0;
    mapCordsY += 1;
    despawnMonsters(onscreenMonster);
    createMonsters();

};


// spawnMonster the game when the player catches a monster

//map array
var map = new Array(3);
for (var i = 0; i < 10; i++) {
  map[i] = new Array(3);
}

//[monsters,bushes,rocks,water,inn,shop,tavern,house]
//tells update method what to spawn based on your map location
var mapData00 = [2,12,0,0,0,0,0,0];
var mapData01 = [2,3,0,0,0,0,0,0];
var mapData02 = [2,13,0,0,0,0,0,0];
var mapData11 = [1,0,0,0,0,0,0,0];
var mapData12 = [1,4,0,0,0,0,0,0];
var mapData10 = [1,2,0,0,0,0,0,0];
var mapData20 = [1,11,0,0,0,0,0,1];
var mapData21 = [3,1,0,0,0,0,0,0];
var mapData22 = [1,14,0,0,0,0,0,0];
map[0][0] = mapData00;
map[0][1] = mapData01;
map[0][2] = mapData02;
map[1][1] = mapData11;
map[1][2] = mapData12;
map[1][0] = mapData10;
map[2][1] = mapData21;
map[2][2] = mapData22;
map[2][0] = mapData20;

///////////////////////////////Map Methods//////////////////////////////////////



//////////////////////////////////The main game loop////////////////////////////
var main = function() {
    var now = Date.now();
    var delta = now - then;


    update(delta / 2000);


   if(pause===false){
    render();

  if(start === true){
    render2();
    then = now;
}
}
    // Request to do this again ASAP
    requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Let's play this game!
var then = Date.now();
spawnMonster(onscreenMonster);



main();

//////////////////////////////////The main game loop////////////////////////////

//session storage= http://www.w3schools.com/html/html5_webstorage.asp


// Work on Items and make house and inn DUE: 3/28/16
