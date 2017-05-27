var swapStats = function(st,sf){
    st.speed = sf.speed;
    st.x= sf.x;
    st.y=sf.y;
    st.hp=sf.hp;
    st.atk=sf.atk;
    st.weapon=sf.weapon;
    st.def=sf.def;
    st.armor=sf.armor;
    st.silver=sf.silver;
    st.hweapon=sf.hweapon;
    st.hchest=sf.hchest;
    st.hheadgear=sf.hheadgear;
    st.hassesory=sf.hassesory;
    st.hweapon.img=sf.hweapon.img;
    st.hchest.img=sf.hchest.img;
    st.hheadgear.img=sf.hheadgear.img;
    st.hassesory.img=sf.hassesory.img;
    st.lvl=sf.lvl;
    st.exp=sf.exp;

};

var spawnMonster = function(n) {
    for( i = 0;i<n.length;i++){
    // Throw the monster somewhere on the screen randomly
    n[i].x = 64 + (Math.random() * (oldcanvas.width - 128));
    n[i].y = 64 + (Math.random() * (oldcanvas.height - 128));
    }
};
var despawn = function(n) {
    for( i = 0;i<n.length*10;i++){
      n.pop();
    }
};
var createMonsters = function() {
    if(map[mapCordsX][mapCordsY][0] === 1){
      
      //take monsters from monsterData
    }
    if(map[mapCordsX][mapCordsY][0] === 2){
      osHouseList.push(House1);
      onscreenMonster.push(monsterData[1]);
      onscreenMonster.push(monsterData[2]);
      onscreenMonster.push(monsterData[3]);
      onscreenMonster.push(monsterData[4]);
      onscreenMonster.push(monsterData[5]);
    }
    if(map[mapCordsX][mapCordsY][0] === 3){
      onscreenMonster.push(monsterData[5]);
      onscreenMonster.push(monsterData[6]);
      onscreenMonster.push(monsterData[7]);
      onscreenMonster.push(monsterData[8]);
      onscreenMonster.push(monsterData[9]);
    }
    if(map[mapCordsX][mapCordsY][0] === 4){
      onscreenMonster.push(monsterData[10]);
      onscreenMonster.push(monsterData[6]);
      onscreenMonster.push(monsterData[7]);
      onscreenMonster.push(monsterData[8]);
      onscreenMonster.push(monsterData[9]);
    }
    if(map[mapCordsX][mapCordsY][0] === 5){
      onscreenMonster.push(monsterData[10]);
      onscreenMonster.push(monsterData[11]);
      onscreenMonster.push(monsterData[12]);
      onscreenMonster.push(monsterData[13]);
      onscreenMonster.push(monsterData[14]);
    }
    if(map[mapCordsX][mapCordsY][0] === 6){
      onscreenMonster.push(monsterData[10]);
      onscreenMonster.push(monsterData[11]);
      onscreenMonster.push(monsterData[12]);
      onscreenMonster.push(monsterData[13]);
      onscreenMonster.push(monsterData[15]);
    }
    if(map[mapCordsX][mapCordsY][0] === 5){
      onscreenMonster.push(monsterData[15]);
      onscreenMonster.push(monsterData[16]);
      onscreenMonster.push(monsterData[17]);
      onscreenMonster.push(monsterData[18]);
      onscreenMonster.push(monsterData[19]);
    }
    if(map[mapCordsX][mapCordsY][0] === 101){
      onscreenMonster.push(monsterData[20]);
    }
    if(map[mapCordsX][mapCordsY][0] === 102){
      onscreenMonster.push(monsterData[21]);
    }
};

var createHouses = function() {
    if(map[mapCordsX][mapCordsY][7] === 0){
      
      
    }
    if(map[mapCordsX][mapCordsY][7] === 1){
      osHouseList.push(House1);
      osInnList.push(inn1);
      osShopList.push(shop1);
      osTavernList.push(tavern1);
      osNPC.push(oldMan1);
      
    }
    if(map[mapCordsX][mapCordsY][7] === 2){
      osHouseList.push(House2);
      osInnList.push(inn1);
      osShopList.push(shop2);
      osTavernList.push(tavern2);
	  osNPC.push(oldMan2);
    }
   
};


var kill = function(i) { //index of monster
    hero.silver += onscreenMonster[i].reward;
    var temp = onscreenMonster[i];
    onscreenMonster[i]=onscreenMonster[onscreenMonster.length-1];
    onscreenMonster[onscreenMonster.length-1]=temp;
    onscreenMonster.pop();

};

var monsterSpawns = function(i) {
    oncreenMonster.push(monsterData[i]);
};


//randomise location of monster. 
var respawnMonster = function(n) {
    n.x = 64 + (Math.random() * (oldcanvas.width - 128));
    n.y = 64 + (Math.random() * (oldcanvas.height - 128));
    };


//Pause and Play
var pauseIt = function() {
  pause = true;
};

var playIt = function() {
  pause = false;
  start = true;
  heroImage.src = heroImage11.src;
  render();
  render2();
  OneB.os = false;
  TwoB.os = false;
  ThreeB.os = false;
  FourB.os = false;
  if (stats===true){
    
    
  }
  
  stats = false;
  
};


//Buttons Simulate Keyboard
var left = function() {
    leftPress = true;
};
var up = function() {
    upPress = true;
};
var right = function() {
    rightPress = true;
};
var down = function() {
    downPress = true;
};
var downOff = function() {
    downPress = false;
};
var leftOff = function() {
    leftPress = false;
};
var rightOff = function() {
    rightPress = false;
};
var upOff = function() {
    upPress = false;
};
var q = function(){
    if (pause === true){
    playIt();
    itmBought = 0;
    }
};

var oneOff = function(){
    onePress=true;
    if(osShopList.length > 0 && osShopList[0].item[0].price > hero.silver && itmBought !== 1){ 
         notEnoughSilver();
         NES=true; 
        }
    if(osShopList[0].item[0] === hero.hweapon && ISB === false){
            alreadyBought();
        AB=true; 
        }
        
};


var twoOff = function(){
    twoPress=true;

    if(osShopList.length > 0 && osShopList[0].item[1].price > hero.silver && itmBought !== 2){
         NES=true; 
         notEnoughSilver();
      
        }
      if(osShopList[0].item[2] === hero.harmor && ISB === false){
            alreadyBought();
            AB=true; 
        }
};


var threeOff = function(){
    threePress=true;
    if(osShopList.length > 0 && osShopList[0].item[2].price > hero.silver && itmBought !== 3){
         NES=true; 
         notEnoughSilver();
        }
      if(osShopList[0].item[2] === hero.hheadgear&& ISB === false){
            alreadyBought();
          AB=true; 
        }
};


var fourOff = function(){
    fourPress=true;
    if(osShopList.length > 0 && osShopList[0].item[3].price > hero.silver && itmBought !== 4){
         NES=true; 
         notEnoughSilver();
        }
      if(osShopList[0].item[3] === hero.hassesory&& ISB === false){
            alreadyBought();
          AB=true; 
        }
};


//Calculate battle damage.
//TODO: take item bounuses into account. 
var battle = function(n) {
    maps=true;
    //playIt();
    ctx.font = "24px New Rocker";
 
    renderBar();
    ctx.font = "24px New Rocker";
    ctx.drawImage(popUp, 128, 90);
    ctx.textAlign="center"; 
    var dmg = 0;
    var monDMG = (hero.atk+hero.weapon)-(n.def+n.armor);
    if(monDMG<0)
    monDMG = 1;
    var times = n.hp/monDMG;
    var heroDMG = (n.attack+n.weapon)-(hero.def+hero.armor);
    dmg += times * heroDMG;
    dmg = Math.round(dmg);
    ctx.drawImage(n.img, canvas.width/2+48, 110);
    ctx.drawImage(heroBImage, canvas.width/2-48, 110);
    ctx.font = "32px New Rocker";
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.fillText("Press q to countinue",canvas.width/2,180);
    if(dmg<5){
    dmg=5;
    }
    ctx.fillText("You will take " + dmg + " damage", canvas.width/2, 260);
   ctx.textAlign="left";
    return dmg;
};


//Assign appropriate image background based on location. 
 var changeImg = function() {
 if (map[mapCordsX][mapCordsY][1] === 0){
        bgImage1.src = backImage15.src;
      }
      if (map[mapCordsX][mapCordsY][1] === 1){
        bgImage1.src = backImage1.src;
      }
      if (map[mapCordsX][mapCordsY][1] === 3){
        bgImage1.src = backImage3.src;
      }
      if (map[mapCordsX][mapCordsY][1] === 4){
        bgImage1.src = backImage4.src;
      }
      if (map[mapCordsX][mapCordsY][1] === 5){
        bgImage1.src = backImage5.src;
      }
      if (map[mapCordsX][mapCordsY][1] === 2){
        bgImage1.src = backImage2.src;
      }
      if (map[mapCordsX][mapCordsY][1] === 6){
        bgImage1.src = backImage6.src;
      }
      if (map[mapCordsX][mapCordsY][1] === 7){
        bgImage1.src = backImage7.src;
      }
      if (map[mapCordsX][mapCordsY][1] === 8){
        bgImage1.src = backImage8.src;
      }
      if (map[mapCordsX][mapCordsY][1] === 9){
        bgImage1.src = backImage9.src;
      }
      if (map[mapCordsX][mapCordsY][1] === 10){
        bgImage1.src = backImage10.src;
      }
      if (map[mapCordsX][mapCordsY][1] === 11){
        bgImage1.src = backImage11.src;
      }
      if (map[mapCordsX][mapCordsY][1] === 12){
        bgImage1.src = backImage12.src;
      }
      if (map[mapCordsX][mapCordsY][1] === 13){
        bgImage1.src = backImage13.src;
      }
      if (map[mapCordsX][mapCordsY][1] === 14){
        bgImage1.src = backImage14.src;
      }
};

var checkHouses = function() {
    
    for( i = 0;i<osHouseList.length;i++){
      if( osHouseList.length > 0 &&(hero.y < osHouseList[i].y+102 && hero.y > osHouseList[i].y-30+128) && (hero.x < osHouseList[i].x + 80 && hero.x > osHouseList[i].x)){
          houseMsg(osHouseList[i].msg);
          hero.y += 40;
          Ty = hero.y;
      }
    }
};

var checkInns = function() {
  for(i = 0;i<osHouseList.length;i++){
    if( osInnList.length > 0 &&(hero.y < osInnList[i].y+125 && hero.y > osInnList[i].y-30+105) && (hero.x < osInnList[i].x + 105 && hero.x > osInnList[i].x + 85)){
      innMsg(osInnList[i].msg);
      hero.hp = 100; 
      hero.silver -= 10*hero.lvl; 
      swapStats(heroSaved,hero);
      hero.y += 40;
      Ty = hero.y;
      oldXcord=mapCordsX;
      oldYcord=mapCordsY;
      innY = hero.y;
      innX = hero.x;
    }
  }
};

var checkShops = function() {
  for(i = 0;i<osHouseList.length;i++){
    {if( osShopList.length > 0 &&(hero.y < osShopList[i].y+115 && hero.y > osShopList[i].y-30+105) && (hero.x < osShopList[i].x + 30 && hero.x > osShopList[i].x + 10)){
      itmBought = 0;
      shopMsg(osShopList[i].msg,osShopList[i].item);
      hero.y += 40;
      Ty = hero.y;
    }
    }
  }
};

var checkTaverns = function() {
  for(i = 0;i<osTavernList.length;i++){
    {if( osTavernList.length > 0 &&(hero.y < osTavernList[i].y+105 && hero.y > osTavernList[i].y-40+105) && (hero.x < osTavernList[i].x + 30 && hero.x > osTavernList[i].x + 10)){
      for(i =0; i < bossesKilled.length;i++){
          if(bossesKilled[i] === osTavernList[i].quest.monster && osTavernList[i].bossKilled === false){
            hero.silver += osTavernList[i].quest.reward;
              osTavernList[i].bossKilled = true;
          }  
      }
      TavernMsg(osTavernList[i].msg,osTavernList[i].bn,osTavernList[i].quest.name);
      hero.y += 40;
      Ty = hero.y;
    }
    }
  }
};

var TavernMsg = function(m,b,q) {
  ctx.font = "24px New Rocker";
    ctx.drawImage(popUp, 128, 90);
    ctx.textAlign="center"; 
    ctx.fillText(m,oldcanvas.width/2,190);
    ctx.fillStyle = "rgb(250, 0, 0)";
    ctx.fillText(q,oldcanvas.width/2,230);//quest name
    ctx.fillStyle = "rgb(250, 250, 250)";
    ctx.fillText("You must slay " + b,oldcanvas.width/2,270);
    ctx.fillText("Press Enter or the Continue button to exit.",oldcanvas.width/2,310);
    pauseIt();
};

var houseMsg = function(m) {
    ctx.font = "24px New Rocker";
    ctx.drawImage(popUp, 128, 90);
    ctx.textAlign="center"; 
    ctx.fillText(m,oldcanvas.width/2,190);

//http://stackoverflow.com/questions/4478742/html5-canvas-can-i-somehow-use-linefeeds-in-filltext

    ctx.fillText("Press Enter or the Continue button to exit.",oldcanvas.width/2,256);
    pauseIt();
};

var innMsg = function(m) {
  ctx.font = "24px New Rocker";
    ctx.drawImage(popUp, 128, 90);
    ctx.textAlign="center"; 
    ctx.fillText(m,oldcanvas.width/2,190);
    ctx.fillText("Press Enter or the Continue button to exit.",oldcanvas.width/2,256);
    pauseIt();
};

var shopMsg = function(m,itm) {
  
  ctx.font = "24px New Rocker";
    ctx.drawImage(popUp, 128, 90);
    ctx.textAlign="center"; 
    //ctx.textBaseline = "top";
    ctx.fillStyle = "rgb(250, 250, 250)";
    ctx.fillText(m,oldcanvas.width/2,160);
    ctx.fillStyle = "rgb(192, 192, 192)"; 
    ctx.drawImage(itm[0].img,oldcanvas.width/2-96,200);
    ctx.fillText(itm[0].price,oldcanvas.width/2-96,220+24);
    ctx.fillText(itm[0].atk,oldcanvas.width/2-66,190+24);
    ctx.drawImage(itm[1].img,oldcanvas.width/2-32,200);
    ctx.fillText(itm[1].price,oldcanvas.width/2-32,220+24);
    ctx.fillText(itm[1].def,oldcanvas.width/2-2,190+24);
    ctx.drawImage(itm[2].img,oldcanvas.width/2+32,200);
    ctx.fillText(itm[2].price,oldcanvas.width/2+32,220+24);
    ctx.fillText(itm[2].def,oldcanvas.width/2+62,190+24);
    ctx.drawImage(itm[3].img,oldcanvas.width/2+96,200);
    ctx.fillText(itm[3].price,oldcanvas.width/2+96,220+24);
    ctx.fillText(itm[3].def,oldcanvas.width/2+126,190+24);
    ctx.fillStyle = "rgb(255, 0, 0)";
    ctx.fillText(itm[0].atk,oldcanvas.width/2-66,190+24);
    ctx.fillStyle = "rgb(0, 255, 0)";
    ctx.fillText(itm[1].def,oldcanvas.width/2-2,190+24);
    ctx.fillText(itm[2].def,oldcanvas.width/2+62,190+24);
    ctx.fillText(itm[3].def,oldcanvas.width/2+126,190+24);
    ctx.fillStyle = "rgb(250, 250, 250)";
    ctx.fillText("Press Enter or the Continue button to exit.",oldcanvas.width/2,256+32);
    OneB.os = true;
    TwoB.os = true;
    ThreeB.os = true;
    FourB.os = true;
    pauseIt();
    shopO = true;
    ctx.textBaseline = "Alphabetic";
};

var notEnoughSilver = function(){
  ctx.font = "16px New Rocker";
  shopMsg(osShopList[0].msg,osShopList[0].item);
  ctx.fillStyle = "rgb(250, 250, 250)";
  ctx.fillText("Not Enough Silver",oldcanvas.width/2,320);
};
var alreadyBought = function(){
  ctx.font = "16px New Rocker";
  shopMsg(osShopList[0].msg,osShopList[0].item);
  ctx.fillStyle = "rgb(250, 250, 250)";
  ctx.fillText("You already own this!",oldcanvas.width/2,320);
};
var itemGotBought = function(){
  ctx.font = "16px New Rocker";
  shopMsg(osShopList[0].msg,osShopList[0].item);
  ctx.fillStyle = "rgb(250, 250, 250)";
  ctx.fillText("Item Succesfully Bought",oldcanvas.width/2,320);
};

var experience = function(n){
  hero.exp += n.exp;
    if(map[mapCordsX][mapCordsY][0] > 100){//double EXP for bosses. 
        hero.exp += n.exp;
    }
  if(hero.exp > expNeeded){
    hero.exp = hero.exp - expNeeded;
    hero.atk+=float2int(hero.atk / 10);
    hero.def+=float2int(hero.def / 10);
    hero.lvl++; 
  }
};

function float2int (value) {
    return value | 0;
}

var Menu = function() {
    if (statsScreen === true)
      {
        statsScreen = false;
        MapB.os=false;
        InventoryB.os=false;
        StatsB.os=false;
        CreditsB.os=false;
      }
    else 
    {
        statsScreen = true; 
        MapB.os=true;
        InventoryB.os=true;
        StatsB.os=true;
        CreditsB.os=true;
    }
};

var mapmenu = function() {
      renderMap();
      pauseIt();
};
var statsmenu = function() {
        renderStats();
        stats = true;
        pauseIt();
    
};
var creditsmenu = function() {
  renderCredits();
  pauseIt();
};
var inventorymenu = function() {
  renderInventory();
  pauseIt();
};