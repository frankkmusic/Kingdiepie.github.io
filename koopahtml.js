var canvas = document.getElementById("the-game");
var ctx = canvas.getContext("2d");
var koopaTimer = 40;
var timer = 10;
var fallSpeed=4;
var koopaSize = 30;
var plumberW = 20;
var Mcount = 0;
var Lcount = 0;
var Count = 0; 
var over = false; 
var bgImage = new Image();
bgImage.src = "images/bg.png";
var marioImage= new Image();
marioImage = "images/marioRunRight.png";
var luigiImage= new Image();
luigiImage = "images/luigiRunRight.png";
var koopaImg= new Image();
koopaImg = "images/koopa.png";
//handle keyboard:
var keysDown = {};
addEventListener("keydown", function(e) {
    keysDown[e.keyCode] = true;
}, false);
addEventListener("keyup", function(e) {
    delete keysDown[e.keyCode];
}, false);

class plumber{
  constructor(x,y,img,s){
    this.x=x;
    this.img = new Image();
    this.img.src = img;
    this.y = y;  
    this.s = s;
    this.jump = false;
    this.Djump = false;
    this.jumpE = 500;
    this.dir=0;
    this.alive=true;
  }
}

function newKoopa(){
  koopaQ.push(new plumber(canvas.width,Math.floor(Math.random() * (561 - 505 + 1)) + 430,koopaImg,(Math.random() * (6 - 2) + 2)));
}

var koopaQ = [];
var koopaQOS = [];
newKoopa();
koopaQOS.push(koopaQ[0]);
var mario = new plumber(200,500,marioImage,6);
var luigi = new plumber(100,500,luigiImage,6);

function update(m){
  if(timer<0){timer=koopaTimer;}
  timer--;
  if(timer === 0){
    koopaQOS.push(koopaQ[0]);
    console.log("new koopas");
    koopaQ.pop();
    newKoopa();
  }
    //up
    if (38 in keysDown && mario.jump === false) {
        mario.jumpE-=200;
        mario.jump = true;
        mario.img.src="images/marioJumpRight.png";
    }
    //left
    if (37 in keysDown || mario.dir===-1) {
        mario.x -= mario.s;
        if(mario.dir===-1){mario.x+= mario.s/2;}
        if(mario.y!==500){mario.dir=-1;} else mario.dir=0;
        if(mario.jump === true){mario.img.src="images/marioJumpLeft.png";} else mario.img.src="images/marioRunLeft.png";
    }
    //right
    if (39 in keysDown || mario.dir===1) {
        mario.x += mario.s;
        if(mario.dir===1){mario.x-= mario.s/2;}
        if(mario.y!==500){mario.dir=1;}  else mario.dir=0;
        if(mario.jump === true){mario.img.src="images/marioJumpRight.png";} else mario.img.src="images/marioRunRight.png";
    }
    // W (up)
    if (87 in keysDown && luigi.jump === false) {
        luigi.jumpE-=200;
        luigi.jump = true;
        luigi.img.src="images/luigiJumpRight.png";
    }
    // A (left)
    if (65 in keysDown || luigi.dir===-1) {
        luigi.x-=luigi.s;
        if(luigi.dir===-1){luigi.x+= luigi.s/2;}
        if(luigi.y!==500){luigi.dir=-1;} else luigi.dir=0;
        if(luigi.jump === true){luigi.img.src="images/luigiJumpLeft.png";} else luigi.img.src="images/luigiRunLeft.png";
    }
    //D (right)
    if (68 in keysDown || luigi.dir===1) {
        luigi.x+=luigi.s;
        if(luigi.dir===1){luigi.x-= luigi.s/2;}
        if(luigi.y!==500){luigi.dir=1;} else luigi.dir=0;
        if(luigi.jump === true){luigi.img.src="images/luigiJumpRight.png";} else luigi.img.src="images/luigiRunRight.png";
    }//R (restart)
    if (82 in keysDown) {  reset();  }
    
    if(mario.y>=mario.jumpE+20){mario.y-=4;}
    if(mario.y<=mario.jumpE+20){mario.jumpE=500;}
    if(mario.y<mario.jumpE+20){mario.y+=4;}
    if(mario.y>500){mario.y=500;}
    if(mario.y===500){mario.jump=false;}
    
    if(luigi.y>=luigi.jumpE+20){luigi.y-=4;}
    if(luigi.y<=luigi.jumpE+20){luigi.jumpE=500;}
    if(luigi.y<luigi.jumpE+20){luigi.y+=4;}
    if(luigi.y>500){luigi.y=500;}
    if(luigi.y===500){luigi.jump=false;}
    Count++;
    if(mario.alive === false && luigi.alive === false){over = true;}
}

function render(){
  ctx.drawImage(bgImage,0,0);
  ctx.fillStyle="white";
  ctx.font = "16px arial";
  ctx.fillText("Mario Max: " + Mcount, 200,80);
  ctx.fillText("Current: " + Count, 450,80);
  ctx.fillText("Luigi Max: " + Lcount, 700,80);
  if (mario.alive===true) 
  ctx.drawImage(mario.img,mario.x,mario.y);
  if (luigi.alive===true)
  ctx.drawImage(luigi.img,luigi.x,luigi.y);
  for(var i = 0; i <koopaQOS.length;i++ ){
    check(koopaQOS[i]);
    koopaQOS[i].x-=koopaQOS[i].s;
    ctx.drawImage(koopaQOS[i].img,koopaQOS[i].x,koopaQOS[i].y);
  }
  if(over===true){  ctx.fillText("Press R to restart",425,300);  }
  ctx.fillText("Press WAD for Luigi and Arrows for Mario",350,600);
}

function check(m){
  if (m.x<mario.x+plumberW && mario.x+plumberW<m.x+koopaSize && m.y<mario.y && mario.y < m.y+koopaSize && mario.alive === true){mario.alive=false; if (Mcount<Count)Mcount = Count;}
  if (m.x<luigi.x+plumberW && luigi.x+plumberW<m.x+koopaSize && m.y<luigi.y && luigi.y < m.y+koopaSize && luigi.alive === true){luigi.alive=false; if (Lcount<Count)Lcount = Count;}
}

function reset(){
  mario.alive = true;
  luigi.alive = true; 
  over = false;
  Count = 0;
  mario.x = 200;
  luigi.x = 100;
  mario.y = 500;
  luigi.y = 500;
  timer = 0;
  for(i = 0; i < koopaQOS.length-1; i++){  koopaQOS.pop();  }
}

window.onload = function () {
var main = function() {
    var now = Date.now();
    var delta = now - then;
    update(delta / 2000);
    render();
    then = now;
    requestAnimationFrame(main);
};
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;
var then = Date.now();
main();
};
