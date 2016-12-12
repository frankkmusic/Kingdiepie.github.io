var canvas = document.getElementById("the-game");
var ctx = canvas.getContext("2d");




window.onload = function () {
var main = function() {
    var now = Date.now();
    var delta = now - then;
    update();
    render();
    then = now;
    requestAnimationFrame(main);
};
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;
var then = Date.now();
main();
};

canvas.addEventListener("mousedown", getPosition, false);



class Person{
  constructor(name,dialog,friendlyness,anger,intelligence,suspitionOfPlayer,suspitionAttracted,img){
    this.name = name;
    this.guilty = false; 
    this.alive = true;
    this.dialog = dialog;
    this.talking=false;
    this.img = new Image();
    this.img.src = img;
    this.friendlyness = friendlyness;
    this.anger = anger;
    this.intel = intelligence;
    this.suspition = suspitionOfPlayer;
    this.suspitionAttracted = suspitionAttracted;
  }
  
  kill(){
    alive = false;
  }
  
  
  setGuilty(g){
    this.guilty = g;
  }
  
  update(){
    
  }
  
}

var bgImage = new Image();
bgImage.src = "roomBackground.png";
var menuImage= new Image();
menuImage.src = "menu.png";
var menuButtonImg= new Image();
menuButtonImg.src = "startB.png";
var contButtonImg= new Image();
contButtonImg.src = "contB.png";
var person1Img= new Image();
person1Img.src = "Person1.png";
var person2Img= new Image();
person2Img.src = "Person2.png";
var person3Img= new Image();
person3Img.src = "Person3.png";
var person4Img= new Image();
person4Img.src = "Person4.png";
var person5Img= new Image();
person5Img.src = "Person5.png";
var dialogImg= new Image();
dialogImg.src = "dialougue.png";

LivingPeople = [];
LivingPeople.push(p1 = new Person("Dave",Person1Dialog,3,1,3,0,2,person1Img.src));
LivingPeople.push(p2 = new Person("Chris",Person2Dialog,2,2,2,1,2,person2Img.src));
LivingPeople.push(p3 = new Person("Fred",Person3Dialog,0,4,1,0,2,person3Img.src));
LivingPeople.push(p4 = new Person("Bob",Person4Dialog,3,1,2,0,2,person4Img.src));
LivingPeople.push(p5 = new Person("Hank",Person5Dialog,1,3,5,1,2,person5Img.src));
LivingPeople.push(p6 = new Person("Henry",Person6Dialog,2,2,4,0,2,person3Img.src));
  //may need to make a 7th dialog for guitly person and right nubmer of people

LivingPeople[Math.floor(Math.random() * (6))].setGuilty(true);


var pWidth = 1000;
var pHeight = 600;
var menuOS = true;
var roomBGOS = false; 
var dialogBox = false;
var dialogChoices = false;
var winOS = false;
var loseOS = false;
var dayEnd = false;
var numOfTurnsDefault = 10;
var numOfTurnLeft;
var numOfPeopleAlive; 
var suspition = 10; //from 0 to 100;  
var day = 12;
var dayNum = 0;
var diaNum = 0;
var dayString;
var voting = false;
var votingIndex;
var briefing = false;
var endDayDialog=[];
var nameOfPersonLynched;
var nameOfPersonKilled;
var numVotes = 0;
var dead = false;
var dead2 = false;
var win = false;
endDayDialog.push("After you finish your work at the office ");
endDayDialog.push("you walk outside and hail a cab. When the cab  ");
endDayDialog.push("pulls up to the curb you begin to step towards");
endDayDialog.push("the door but the door flys open and a man pulls");
endDayDialog.push("you in. The Last thing you remember is a cloth  ");
endDayDialog.push("over your mouth and a weird smell.");
var currentPerson = 0; 


function update(){
  if(diaNum === 0 && dialogBox){
    passiveChoice.os = true;
    agressiveChoice.os = true;
  }
  
  if(dialogChoices){
    nextDialog.os=true;
  }
  
  if(currentPerson >= LivingPeople.length){
    currentPerson = 0;
    
    dialogBox = false;
    voting = true;
  }
}

function render(){
  if(menuOS){
    ctx.drawImage(menuImage,0,0);
    ctx.drawImage(menuButtonImg,MenuB.x1,MenuB.y1);
  }
  if(dayEnd){
    dayString = "December "+day+", 2016:";  
    ctx.fillStyle="black";
    ctx.fillRect(0,0,pWidth,pHeight);
    ctx.fillStyle="white";
    ctx.font = '24px "Press Start 2P"';
    ctx.fillText(dayString,60,80);
    ctx.font = '18px "Press Start 2P"';
    for(i = 0; i < endDayDialog.length; i++){
      ctx.fillText(endDayDialog[i],100,130 + 30*i);
      ctx.drawImage(contButtonImg,contB.x1,contB.y1);
    }
  }
  if(roomBGOS){
    ctx.drawImage(bgImage,0,0);
  }
  if(dialogBox){
    ctx.drawImage(LivingPeople[currentPerson].img,500,200,238,452);
    ctx.globalAlpha=0.6;
    ctx.drawImage(dialogImg,25,350,475,150);
    ctx.fillStyle="purple";
    ctx.fillRect(25,310,125,40);
    ctx.globalAlpha=1.0;
    ctx.fillStyle="black";
    ctx.font = '16px "Press Start 2P"';
    ctx.fillText(LivingPeople[currentPerson].name,42,338);
    ctx.font = '12px "Press Start 2P"';
    for(i = 0; i < LivingPeople[currentPerson].dialog[dayNum][diaNum].length;i++){
      ctx.fillText(LivingPeople[currentPerson].dialog[dayNum][diaNum][i],35,400+20*(i-1));
    }
  }
  
  if(passiveChoice.os === true && agressiveChoice.os === true){ 
    ctx.fillStyle="black";
    ctx.fillRect(passiveChoice.x1-2,passiveChoice.y1-2,passiveChoice.x2+4-passiveChoice.x1,passiveChoice.y2+4-passiveChoice.y1);
    ctx.fillRect(agressiveChoice.x1-2,agressiveChoice.y1-2,agressiveChoice.x2+4-agressiveChoice.x1,agressiveChoice.y2+4-agressiveChoice.y1);
    ctx.fillStyle="blue";
    ctx.fillRect(passiveChoice.x1,passiveChoice.y1,passiveChoice.x2-passiveChoice.x1,passiveChoice.y2-passiveChoice.y1);
    ctx.fillStyle="red";
    ctx.fillRect(agressiveChoice.x1,agressiveChoice.y1,agressiveChoice.x2-agressiveChoice.x1,agressiveChoice.y2-agressiveChoice.y1);
    ctx.fillStyle="black";
    ctx.fillText(DialogueChoices[currentPerson][dayNum][0],passiveChoice.x1+10,passiveChoice.y1+20);
    ctx.fillText(DialogueChoices[currentPerson][dayNum][1],agressiveChoice.x1+10,agressiveChoice.y1+20);
  }
  
  if(dialogChoices){
    ctx.fillStyle="black";
    ctx.fillRect(nextDialog.x1-2,nextDialog.y1-2,nextDialog.x2+4-nextDialog.x1,nextDialog.y2+4-nextDialog.y1);
    ctx.fillStyle="green";
    ctx.fillRect(nextDialog.x1,nextDialog.y1,nextDialog.x2-nextDialog.x1,nextDialog.y2-nextDialog.y1);
    ctx.fillStyle="black";
    ctx.font = '36px "Press Start 2P"';
    ctx.fillText("Continue >>",nextDialog.x1 +20, nextDialog.y1+45);
  }
  
  if(voting){
    ctx.fillStyle="black";
    ctx.fillRect(0,0,pWidth,pHeight);
    for(i = 0; i < LivingPeople.length; i++){
      votingIndex = i;
      Buttons.push(new ButtonC(vote,400,600,50+i*50,50+i*50+50,true));
      ctx.fillStyle="white";
      ctx.fillRect(400-2,(50+i*50)-2,200+4,50+4);
      ctx.fillStyle="black";
      ctx.fillRect(400,(50+i*50),200,50);
      ctx.fillStyle="white";
      ctx.fillText(LivingPeople[i].name,400 +20, (50+i*50)+45);
      ctx.fillText("Who should be",280,450);
      ctx.fillText("killed tonight?",260,520);
    }
  }
  
  if(briefing){
    //day++;
    dayString = "December "+day+", 2016:";  
    ctx.fillStyle="black";
    ctx.fillRect(0,0,pWidth,pHeight);
    ctx.fillStyle="white";
    ctx.font = '24px "Press Start 2P"';
    ctx.fillText(dayString,60,80);
    ctx.font = '18px "Press Start 2P"';
    while(endDayDialog.length > 0){endDayDialog.pop();}
    endDayDialog.push("The group voted to kill "+nameOfPersonLynched);
    if(LivingPeople.length > 0){
      endDayDialog.push("During the night the killer Killed " +nameOfPersonKilled);
    }
    for(i = 0; i < endDayDialog.length; i++){
      ctx.fillText(endDayDialog[i],100,130 + 30*i);
      ctx.drawImage(contButtonImg,contB.x1,contB.y1);
    
    }
  }
  
  if(dead){
    //day++;
    dayString = "December "+day+", 2016:";  
    ctx.fillStyle="black";
    ctx.fillRect(0,0,pWidth,pHeight);
    ctx.fillStyle="white";
    ctx.font = '24px "Press Start 2P"';
    ctx.fillText(dayString,60,80);
    ctx.font = '18px "Press Start 2P"';
    while(endDayDialog.length > 0){endDayDialog.pop();}
    endDayDialog.push("You are left Alone if a room with only the");
    endDayDialog.push("murderer after the Lynching. He attempts");
    endDayDialog.push("to kill you and suceeds");
    for(i = 0; i < endDayDialog.length; i++){
      ctx.fillText(endDayDialog[i],100,130 + 30*i);
    }
  }
  
  if(dead2){
    //day++;
    dayString = "December "+day+", 2016:";  
    ctx.fillStyle="black";
    ctx.fillRect(0,0,pWidth,pHeight);
    ctx.fillStyle="white";
    ctx.font = '24px "Press Start 2P"';
    ctx.fillText(dayString,60,80);
    ctx.font = '18px "Press Start 2P"';
    while(endDayDialog.length > 0){endDayDialog.pop();}
    endDayDialog.push("Everyone votes on who to kill, and they voted for ");
    endDayDialog.push("you. You try to break the window to avoid your ");
    endDayDialog.push("fate but you can\'t break it, they tackle you ");
    endDayDialog.push("and tie your hands together and put a noose");
    endDayDialog.push("around your head, they then tie the");
    endDayDialog.push("rope to the ceiling and hang you.");
    for(i = 0; i < endDayDialog.length; i++){
      ctx.fillText(endDayDialog[i],100,130 + 30*i);
    }
  }
  
    if(guiltyAlive() === false){
    
    dayString = "December "+day+", 2016:";  
    ctx.fillStyle="black";
    ctx.fillRect(0,0,pWidth,pHeight);
    ctx.fillStyle="white";
    ctx.font = '24px "Press Start 2P"';
    ctx.fillText(dayString,60,80);
    ctx.font = '18px "Press Start 2P"';
    while(endDayDialog.length > 0){endDayDialog.pop();}
    endDayDialog.push("The voting conclude and you hang the loser");
    endDayDialog.push("As soon as he stops breathing you here a click");
    endDayDialog.push("and the door leading outside unlocks");
    for(i = 0; i < endDayDialog.length; i++){
      ctx.fillText(endDayDialog[i],100,130 + 30*i);
    }
    
  }
  
}