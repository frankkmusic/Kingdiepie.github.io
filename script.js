
///////////////////////////////////Canvases///////////////////////////////////

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 988;
canvas.height = 610;
var start = false;
var pause = false;
var touchX=0;
var touchY=0;

window.addEventListener("keydown", function(e) {
    // stop space and arrow keys from scrolling
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);

ctx.font = "32px New Rocker";

///////////////////////////////////Canvases/////////////////////////////////////
////////////////////////////////////Map Fields//////////////////////////////////
var mapCordsX = 0;
var mapCordsY = 4;
var mapXmin = 0;
var mapXmax = 4;
var mapYmin = 0;
var mapYmax = 4;
var shopO =  false; 
var TavernO = false;
var mapScrollY = 250;
var oldXcord=mapCordsX;
var oldYcord=mapCordsY;
var stats=false;
///////////////////////////////////Map Fields///////////////////////////////////
//////////////////////////////////Images////////////////////////////////////////

//Background image
var bgReady = false;
var bgImage1 = new Image();
bgImage1.onload = function() {
   bgReady = true;
};

//images for backgorunds.
        backImage1 = new Image();
        backImage3 = new Image();
        backImage4 = new Image();
        backImage5 = new Image();
        backImage2 = new Image();
        backImage6 = new Image();
        backImage7 = new Image();
        backImage8 = new Image();
        backImage9 = new Image();
        backImage10 = new Image();
        backImage11 = new Image();
        backImage12 = new Image();
        backImage13 = new Image();
        backImage14 = new Image();
        backImage15 = new Image();
        backImage1.src = "images/background1.png";
        backImage3.src = "images/background3.png";
        backImage4.src = "images/background4.png";
        backImage5.src = "images/background5.png";
        backImage2.src = "images/background2.png";
        backImage6.src = "images/background6.png";
        backImage7.src = "images/background7.png";
        backImage8.src = "images/background8.png";
        backImage9.src = "images/background9.png";
        backImage10.src = "images/background10.png";
        backImage11.src = "images/background11.png";
        backImage12.src = "images/background12.png";
        backImage13.src = "images/background13.png";
        backImage14.src = "images/background14.png";
        backImage15.src = "images/background.png";

bgImage1.src = "images/background.png"; // Background images

//Background image
var bgImage2 = new Image();
bgImage2.onload = function() {
   bgReady = true;
};

var bgImage3 = new Image();
bgImage3.onload = function() {
  bgReady = true;
};

bgImage3.src = "images/backgroundBack.png";  // Background images

var popUp = new Image();
popUp.src = "images/popup.png";  // Background images

//images for backgorunds.
bgImage2.src = "images/backgroundBottom.png"; // Background images

// Hero image
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function() {
    heroReady = true;
};
        var heroImage1 = new Image();
        var heroImage2 = new Image();
        var heroImage3 = new Image();
        var heroImage4 = new Image();
        var heroImage5 = new Image();
        var heroImage6 = new Image();
        var heroImage7 = new Image();
        var heroImage8 = new Image();
        var heroImage9 = new Image();
        var heroImage10 = new Image();
        var heroImage11 = new Image();
        var heroImage12 = new Image();
      heroImage1.src = "images/sprite01north.PNG";
      heroImage2.src = "images/sprite01FT1north.PNG";
      heroImage3.src = "images/sprite01FT2north.PNG";
	    heroImage4.src = "images/sprite01west.PNG";
	    heroImage5.src = "images/sprite01westFT1.PN.PNG";
	    heroImage6.src = "images/sprite01westFT2.PN.PNG";
      heroImage7.src = "images/sprite01east.PNG";
    	heroImage8.src = "images/sprite01eastFT1.PN.PNG";
      heroImage9.src = "images/sprite01eastFT2.PN.PNG";
 	    heroImage10.src = "images/sprite01southFT1.PN.PNG";
      heroImage11.src = "images/sprite01south.PNG";
    	heroImage12.src = "images/sprite01southFT2.PN.PNG";


//Hero Images
// Hero image

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
var monster3Image = new Image();
monster3Image.src = "images/ghost.png"; 
var monster4Image = new Image();
monster4Image.src = "images/boss1.jpg"; 
var monster5Image = new Image();
monster5Image.src = "images/boss2.jpg"; 

mImg = [];
mImg[0]=monsterImage;
mImg[1]=monster2Image;
mImg[2]=monster3Image;
mImg[3]=monster4Image;
mImg[4]=monster5Image;

var inn = new Image();
inn.src = "images/inn1.png";
var shop = new Image();
shop.src = "images/shop.png";
var tavern = new Image();
tavern.src = "images/tavern.png";
var house = new Image();
house.src = "images/house1.png";     //Enemy images\

//////////////////////////////////Images////////////////////////////////////////
////////////////////////////////Global Objects//////////////////////////////////

// Game objects
var hero = {
    speed: 256,// movement in pixels per second
    x: oldcanvas.width/2,
    y: oldcanvas.height/2,
    hp: 100,
    atk: 10 ,
    weapon: 0,
    def: 10,
    armor: 0,
    silver: 100,
    hweapon: null,
    hchest: null,
    hheadgear: null,
    hassesory: null,
    lvl: 1,
    exp: 0
};
Tx = oldcanvas.width/2;
Ty = oldcanvas.height/2;


var heroSaved = {
    speed: 256,// movement in pixels per second
    x: oldcanvas.width/2,
    y: oldcanvas.height/2,
    hp: 100,
    atk: 10 ,
    weapon: 0,
    def: 10,
    armor: 0,
    silver: 100,
    hweapon: null,
    hchest: null,
    hheadgear: null,
    hassesory: null,
    lvl: 1,
    exp: 0
};

//Object Holders
var osInnList=[];
var equipedItems=[];
var inventory=[];
var items=[];
var osHouseList=[];
var monsterData = [];
var onscreenMonster = [];
var osShopList = []; 
var osTavernList = [];
var bossesKilled = []; 


House1 = new House (200,123,"Welcome to our village sir, people are on edge from monsters to the east.");
House2 = new House (200,123,"You should get out of town, Ghosts roam these parts.");
inn1 = new Inn (320,100);
weapon1= new Weapon (4, "images/knife1.PNG",40);
chest1 = new Chest (5, "images/chestplate1.PNG",20);
weapon2= new Weapon (6, "images/axe1.png",60);
weapon3= new Weapon (10, "images/sword1.png",140);
chest2 = new Chest (15, "images/chestplate2.PNG",320);
headgear1 = new Headgear (4,"images/headgear1.png",60);
assesory1 = new Assesory (0,3,"images/assesory1.png",80);
assesory2 = new Assesory (0,7,"images/assesory2.png",120);
hero.hweapon = weapon1;
hero.hchest = chest1;
hero.hheadgear = new Headgear (0,"",0);
hero.hassesory = new Assesory (0,0,"",0);
shop1 = new Shop (485,120,weapon2,chest2,headgear1,assesory1);
shop2 = new Shop (485,120,weapon3,chest2,headgear1,assesory2);
monster = new Monster(80,100,20,10,9,5,0,0,3);
monster1 = new Monster(70,110,20,10,9,5,0,0,3);
monster2 = new Monster(66,105,20,10,9,5,0,0,3);
monster3 = new Monster(73,112,20,10,9,5,0,0,3);
monster4 = new Monster(90,116,20,10,9,5,0,0,3);
orc1 = new Monster(90,106,30,15,10,5,5,1,5);
orc2 = new Monster(66,125,30,15,10,5,5,1,5);
orc3 = new Monster(78,128,30,15,10,5,5,1,5);
orc4 = new Monster(74,120,30,15,10,5,5,1,5);
orc5 = new Monster(88,115,30,15,10,5,5,1,5);
ghost1 = new Monster(90,110,35,35,5,0,10,2,8);
ghost2 = new Monster(86,115,35,35,5,0,10,2,8);
ghost3 = new Monster(98,120,35,35,5,0,10,2,8);
ghost4 = new Monster(114,112,35,35,5,0,10,2,8);
ghost5 = new Monster(103,90,35,35,5,0,10,2,8);
//bosses may need to be nerfed.
ogreBoss1 = new Monster(20,20,100,30,25,20,30,3,150);
demonBoss1 = new Monster(20,20,70,45,0,20,20,4,100);
demonMissionaryQuest = new Quest(demonBoss1,300,3,"Demon's Missionary");
orcCommanderQuest = new Quest(ogreBoss1,500,5,"Orc Commander");
tavern1 = new Tavern(575,135,demonMissionaryQuest,"Encurus The Demon Missionary");
tavern2 = new Tavern(575,135,orcCommanderQuest,"Byclops The Orc Commander");
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
monsterData.push(ghost1);
monsterData.push(ghost2);
monsterData.push(ghost3);
monsterData.push(ghost4);
monsterData.push(ghost5);
monsterData.push(ogreBoss1);
monsterData.push(demonBoss1);

var monstersCaught = 0;
var MonsterMove = 0;

swapStats(heroSaved,hero);
      oldXcord=mapCordsX;
      oldYcord=mapCordsY;
      innY = hero.y;
      innX = hero.x;

////////////////////////////////Global Objects//////////////////////////////////

/////////////////////////// Handle keyboard controls////////////////////////////
var keysDown = {};

addEventListener("keydown", function(e) {
    keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function(e) {
    delete keysDown[e.keyCode];
}, false);

canvas.addEventListener("mousedown", getPosition, false);
/////////////////////////// Handle keyboard controls////////////////////////////
///////////////////////////////Map Methods and Data/////////////////////////////

var resetNorth = function() {
    hero.y = 383;
    Ty = 383;
    Tx = hero.x;
    mapCordsY -= 1;
    reset(); 
};
var resetEast = function() {
    hero.x = 48;
    Tx = 48;
    Tx = hero.x;
    mapCordsX -= 1;
    reset();    
};
var resetWest = function() {
    hero.x = oldcanvas.width-100;
    Tx = oldcanvas.width-100;
    Tx = hero.x;
    mapCordsX += 1;
    reset();
};
var resetSouth = function() {
    hero.y = 48;
    Ty = 48;
    Tx = hero.x;
    mapCordsY += 1;
    reset();    
};

  var reset = function() {
    despawn(osHouseList);
    despawn(onscreenMonster);
    despawn(osInnList);
    despawn(osShopList);
    despawn(osTavernList);
    createMonsters();
    spawnMonster(onscreenMonster);
    createHouses();
    console.log(map[mapCordsX][mapCordsY][7]);
  };

//map array
var map = new Array(5); //width
for (var i = 0; i < 10; i++) {
  map[i] = new Array(5);//height
}
//[monsters,bushes,rocks,water,NA,NA,NA,town]
//tells update method what to spawn based on your map location
//TODO: combine lines.
var mapData00 = [3,12,0,0,0,0,0,0];
var mapData01 = [1,3,0,0,0,0,0,1];
var mapData02 = [2,5,0,0,0,0,0,0];
var mapData11 = [3,4,0,0,0,0,0,0];
var mapData12 = [3,12,0,0,0,0,0,0];
var mapData10 = [2,2,0,0,0,0,0,0];
var mapData20 = [0,2,0,0,0,0,0,0];
var mapData21 = [4,0,0,0,0,0,0,0];
var mapData22 = [3,0,0,0,0,0,0,0];
var mapData30 = [4,2,0,0,0,0,0,0];
var mapData03 = [2,5,0,0,0,0,0,0];
var mapData31 = [1,0,0,0,0,0,0,2];
var mapData13 = [4,13,0,0,0,0,0,0];
var mapData32 = [4,1,0,0,0,0,0,0];
var mapData23 = [13,4,0,0,0,0,0,0];
var mapData33 = [3,1,0,0,0,0,0,0];
var mapData40 = [3,11,0,0,0,0,0,0];
var mapData04 = [1,7,0,0,0,0,0,0];// startpoint
var mapData41 = [2,1,0,0,0,0,0,0];
var mapData14 = [102,8,0,0,0,0,0,0];
var mapData42 = [4,5,0,0,0,0,0,0];
var mapData24 = [5,9,0,0,0,0,0,0];
var mapData43 = [5,5,0,0,0,0,0,0];
var mapData34 = [4,14,0,0,0,0,0,0];
var mapData44= [101,7,0,0,0,0,0,0];
map[0][0] = mapData00;
map[0][1] = mapData01;
map[0][2] = mapData02;
map[1][1] = mapData11;
map[1][2] = mapData12;
map[1][0] = mapData10;
map[2][1] = mapData21;
map[2][2] = mapData22;
map[2][0] = mapData20;
map[3][0] = mapData30;
map[0][3] = mapData03; 
map[3][1] = mapData31; 
map[1][3] = mapData13; 
map[3][2] = mapData32; 
map[2][3] = mapData23; 
map[3][3] = mapData33;
map[4][0] = mapData40; 
map[0][4] = mapData04; 
map[4][1] = mapData41; 
map[1][4] = mapData14;
map[4][2] = mapData42; 
map[2][4] = mapData24; 
map[4][3] = mapData43; 
map[3][4] = mapData34; 
map[4][4] = mapData44;


///////////////////////////////Map Methods and Data//////////////////////////////////////

//////////////////////////////////The main game loop////////////////////////////

window.onload = function () {
var main = function() {
    var now = Date.now();
    var delta = now - then;
    update(delta / 2000);
   if(pause===false){
    render();

  if(start === true){

      if (stats === false )
      render2();
      
          renderBar();
          
          
          
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
};

