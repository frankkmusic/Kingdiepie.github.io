//////////////////////////////////Update Method/////////////////////////////////
var statsScreen = false;
var battleTest = false;
var walkCount = 0;
var leftPress = false;
var rightPress = false;
var upPress = false;
var downPress =  false;
var qPress = false;
var onePress = false;
var twoPress = false;
var threePress = false;
var fourPress = false;
var houseSouth = false;
var lvlBase = 500;
var lvlMod = 1.00;
var lvlModB = 0.25;
var expNeeded = 0.0;
var innX;
var innY;
var itmBought = 0;
var NES = false;
var AB = false; 
var ISB = false; 
var MoveUp = false;
var MoveDown = false;
var MoveLeft = false;
var MoveRight = false;
var SpriteChanged = false;
var maps = false;
var dioTimer = 10;
var dio;
var dioOn = false;
var dioS;
var dioL = 500;
var dioC;
var dioI;
var dioPaused = false; 
var credits = false; 
var stats2 = false;
var dioOn2 =true;
var dioChar;
var update = function(modifier) {
houseSouth = false;
hero.weapon = hero.hweapon.atk + hero.hassesory.atk;
hero.armor = hero.hchest.def + hero.hheadgear.def + hero.hassesory.def;
expNeeded = (lvlMod+(lvlModB*hero.lvl))*lvlBase;
SpriteChanged = false;
MoveUp = false;
MoveDown = false;
MoveLeft = false;
MoveRight = false;
    
    hero.x = Math.round(hero.x);
    hero.y = Math.round(hero.y);
    hero.silver = Math.round(hero.silver);
    
    
    walkCount++;
    if (walkCount === 40){
            walkCount = 0;
        }
    oldherox = hero.x;
    oldheroy = hero.y;

    if(Math.abs(Ty - hero.y) > 10 ){
        if (hero.y > Ty){
          MoveUp = true;
        }
       if (hero.y < Ty){
          MoveDown = true;
        }
    }
    
    if(Math.abs(Tx - hero.x) > 10 ){ 
       if ( hero.x < Tx){
          MoveRight = true;
        }
       if ( hero.x > Tx){
          MoveLeft = true; 
        }
    }
    
 
    

    

    
    //key events
    if (pause === false){
    var bushHold = map[mapCordsX][mapCordsY][1];
    if ((38 in keysDown || upPress === true || MoveUp === true) && (!(hero.x < 170  || hero.x > oldcanvas.width-212) ||
    hero.y > 49)) { // Player holding up

      if(hero.y>49 || (bushHold != 10 && bushHold != 11&& bushHold != 12&& bushHold != 2&& bushHold != 6&& bushHold != 8 && bushHold != 9)){
        hero.y -= hero.speed * modifier;
          if (MoveUp !== true) {Ty = hero.y;}
        if (walkCount < 10){
            heroImage.src = heroImage1.src;
        }
        else if (walkCount < 20){
            heroImage.src = heroImage2.src;
        }
        else if (walkCount < 30){
            heroImage.src = heroImage1.src;
        }
        else if (walkCount < 40){
            heroImage.src = heroImage3.src;
        }
        SpriteChanged = true;
      }
    }
    else if ((40 in keysDown || downPress === true || MoveDown === true) && (!(hero.x < 170  || hero.x > oldcanvas.width-212) ||
    hero.y < oldcanvas.height-100))  { // Player holding down
      if(hero.y<oldcanvas.height-101 || (bushHold != 10 && bushHold != 13&& bushHold != 14&& bushHold != 4&& bushHold != 7&& bushHold != 8 && bushHold != 9)){
        hero.y += hero.speed * modifier;
        if (MoveDown !== true) {Ty = hero.y;}
          if (SpriteChanged === false){
        if (walkCount < 10){
            heroImage.src = heroImage10.src;
        }
        else if (walkCount < 20){
            heroImage.src = heroImage11.src;
        }
        else if (walkCount < 30){
            heroImage.src = heroImage10.src;
        }
        else if (walkCount < 40){
            heroImage.src = heroImage12.src;
        }
          }
          SpriteChanged = true;
      }
    }
    if ((37 in keysDown || leftPress === true || MoveLeft === true) && (!(hero.y < 140  || hero.y > 240) ||
    hero.x >50))  { // Player holding left

      if(hero.x>54 || (bushHold != 1 && bushHold != 10&& bushHold != 11&& bushHold != 14&& bushHold != 7&& bushHold != 5 && bushHold != 6)){
        hero.x -= hero.speed * modifier;
          if (MoveLeft !== true) {Tx = hero.x;}
          if (SpriteChanged === false){
        if (walkCount < 10){
            heroImage.src = heroImage4.src;
        }
        else if (walkCount < 20){
            heroImage.src = heroImage5.src;
        }
        else if (walkCount < 30){
            heroImage.src = heroImage4.src;
        }
        else if (walkCount < 40){
            heroImage.src = heroImage6.src;
        }
          }
          SpriteChanged = true;
      }
    }
     else if ((39 in keysDown ||rightPress === true || MoveRight === true) && (!(hero.y < 140  || hero.y > 240) ||
    hero.x <oldcanvas.width - 75)) { // Player holding right
        //12,13,3,5,6,7,8
        if(hero.x<oldcanvas.width-64 || (bushHold != 12 && bushHold != 13&& bushHold != 3&& bushHold != 5&& bushHold != 6&& bushHold != 7 && bushHold != 8)){
        hero.x += hero.speed * modifier;
            if (MoveRight !== true) {Tx = hero.x;}
            if (SpriteChanged === false){
        if (walkCount < 10){
            heroImage.src = heroImage7.src;
        }
        else if (walkCount < 20){
            heroImage.src = heroImage8.src;
        }
        else if (walkCount < 30){
            heroImage.src = heroImage7.src;
        }
        else if (walkCount < 40){
            heroImage.src = heroImage9.src;
        } }
            SpriteChanged = true;
      }
    }
    else if (start === false && 32 in keysDown && (!(hero.y < 140  || hero.y > 240) ||
    hero.x <oldcanvas.width - 75)) { 
       start=true;
       hero.x= oldcanvas.width/2;
       hero.y= oldcanvas.height/2;
       monster.x = 96;
       monster.y = 96;
       heroImage.src = heroImage9.src;
    }

    }
    else if(pause===true && (81 in keysDown || qPress ===true)){
        playIt();
    }
    
    else if(shopO === true && (49 in keysDown || onePress === true)){
        oneOff();
        if (osShopList[0].item[0] !== hero.hweapon && osShopList[0].item[0].price <= hero.silver){
          hero.silver += hero.hweapon.price /2;
          hero.hweapon = osShopList[0].item[0];
          hero.silver -= osShopList[0].item[0].price;
          itmBought = 1;
            if(NES===false && AB === false) 
          itemGotBought();
            ISB = true;
        } 
        
    }
    else if(shopO === true && (50 in keysDown || twoPress === true)){
        twoOff();
        if (osShopList[0].item[1] !== hero.hchest && osShopList[0].item[1].price <= hero.silver){
          hero.silver += hero.hchest.price /2;
          hero.hchest = osShopList[0].item[1];
          hero.silver -= osShopList[0].item[1].price;
          itmBought = 2;
            if(NES===false  && AB === false) 
            itemGotBought();
            ISB = true;
        } 
        
    }
    else if(shopO === true && (51 in keysDown || threePress === true)){
        threeOff();
        if (osShopList[0].item[2] !== hero.hheadgear && osShopList[0].item[2].price <= hero.silver){
          hero.silver += hero.hheadgear.price /2;
          hero.hheadgear = osShopList[0].item[2];
          hero.silver -= osShopList[0].item[2].price;
          itmBought = 3;
           if(NES===false  && AB === false) 
           itemGotBought();
            ISB = true;
        } 
        
    }
    else if(shopO === true && (52 in keysDown || fourPress === true)){
        fourOff();
        if (osShopList[0].item[3] !== hero.hassesory && osShopList[0].item[3].price <= hero.silver){
          hero.silver += hero.hassesory.price /2;
          hero.hassesory = osShopList[0].item[3];
          hero.silver -= osShopList[0].item[3].price;
          itmBought = 4;
            if(NES===false && AB === false ) 
          itemGotBought();
            ISB = true;
        } 
       
    }
    

  
    
onePress = false;
twoPress = false;
threePress = false;
fourPress = false;
    

if (pause === false){
  MonsterMove++;
  for (i = 0; i<onscreenMonster.length; i++){
    var m = onscreenMonster[i].move;
    onscreenMonster[i].MC++;
    if (onscreenMonster[i].MC <= m){
      onscreenMonster[i].x -= onscreenMonster[i].speed * modifier;
    }
    else if (onscreenMonster[i].MC <=m * 2){
     onscreenMonster[i].y += onscreenMonster[i].speed * modifier;
    }
    else if (onscreenMonster[i].MC <= m * 3){
      onscreenMonster[i].x += onscreenMonster[i].speed * modifier;
    }
    else if(onscreenMonster[i].MC <= m*4){
      onscreenMonster[i].y -= onscreenMonster[i].speed * modifier;
    }
    if(onscreenMonster[i].MC > m*4){
     onscreenMonster[i].MC=1;
    }
    if(onscreenMonster[i].x <32){
      onscreenMonster[i].MC=m*2+1;
    }
    if(onscreenMonster[i].x > oldcanvas.width-64){
      onscreenMonster[i].MC=1;
    }
    if(onscreenMonster[i].y <+32){
      onscreenMonster[i].MC=m+1;
    }
    if (onscreenMonster[i].y > oldcanvas.height-64 ){
      onscreenMonster[i].MC=m*3+1;
    }
  }


    //Map change event triggers


    if (hero.y >= 384) {
        resetSouth();
    } else if (hero.y <= 47) {
        resetNorth();
    }
    if (hero.x <= 47) {
        resetWest();
    } else if (hero.x >= 930) {
        resetEast();
    }
    
    

   changeImg();
   checkHouses();
   checkInns();
   checkShops();
   checkTaverns();

    //a lot more to come as I get backgrounds
    // Are they touching?

if(map[mapCordsX][mapCordsY][7] !== 0){
 for (i = 0; i<osHouseList.length; i++){
      if(hero.y > osHouseList[i].y+90){
          houseSouth=true;
        }
      if (hero.x <= (osHouseList[i].x + 111) && osHouseList[i].x <= (hero.x + 32) && hero.y <= (osHouseList[i].y + 98) && osHouseList[i].y <= (hero.y-12)) {
        hero.x = oldherox;
        hero.y = oldheroy;
      }
    }

  for (i = 0; i<osInnList.length; i++){
      if (hero.x <= (osInnList[i].x + 160) && osInnList[i].x <= (hero.x + 32) && hero.y <= (osInnList[i].y + 121) && osInnList[i].y <= (hero.y-40)) {
        hero.x = oldherox;
        hero.y = oldheroy;
      }
      for (i = 0; i<osInnList.length; i++){
      if(hero.y > osShopList[i].y+90){
      houseSouth=true;
      }
      if (hero.x <= (osShopList[i].x + 93) && osInnList[i].x <= (hero.x + 32) && hero.y <= (osInnList[i].y + 121) && osInnList[i].y <= (hero.y-40)) {
        hero.x = oldherox;
        hero.y = oldheroy;
      }
      if (hero.x <= (osTavernList[i].x + 160) && osTavernList[i].x <= (hero.x + 32) && hero.y <= (osTavernList[i].y + 100) && osTavernList[i].y <= (hero.y-40)) {
        hero.x = oldherox;
        hero.y = oldheroy;
      }
      if (!(hero.x > (osNPC[i].x + 32) || hero.x+32 < (osNPC[i].x) || hero.y > (osNPC[i].y+32) || hero.y+32 < (osNPC[i].y))) {
        hero.x = oldherox;
        console.log("testing for npc");
        hero.y = oldheroy;
        Dialogue(osNPC[i].msg);
      }
      //TODO:Make NPC a solid object
    }
  }
}
}


if (dioOn === true && dioPaused === false){
  dioTimer--;
  if (dioTimer === 0){
    dioTimer = 2;
    if(dioC === 0)
      dioChar = 0;
    else
      dioChar += ctx.measureText(dio[dioI].substring(dioC-1,dioC)).width; 
    renderLetter(dio[dioI].substring(dioC,dioC+1),30+dioChar,460);
    console.log(dioChar);
    dioC++;
    if(dioC === dioL){
      dioI++;
      dioPaused = true; 
      dioC = 0;
      if(dioI != dioS)
      dioL = dio[dioI].length;
    }
    if(dioI === dioS){
      dioOn = false;
      dioPaused=true;
    }
    }
}
qPress =false;
};

//////////////////////////////////Update Method/////////////////////////////////
////////////////////// Update game objects graphics/////////////////////////////

var Dialogue = function(d){
  dioOn = true;
  dio = d;
  dioS = d.length;
  dioI = 0;
  dioL = d[dioI].length;
  dioC = 0;
  dioChar = 0;
  pauseIt();
  renderDioBox();
  hero.y+=20;
  
};

function renderLetter(m,x,y){
  ctx.font = "26px New Rocker";
  ctx.textAlign = "left";
  ctx.fillText(m,x,y);
}

function renderDioBox(){
  ctx.fillStyle = "#00AACF";
  ctx.globalAlpha=0.6;
  ctx.fillRect(10, 430, 968, 50);
  ctx.globalAlpha = 1.0;
  ctx.fillStyle = "#FFFFFF";
}

// Draw everything
var render = function() {
   if (start === true){
   if (bgReady && monsterReady && heroReady) {
        ctx.drawImage(bgImage1, 0, 0);
        
      }
    if (houseSouth === false){
      ctx.drawImage(heroImage, hero.x, hero.y);
      if(map[mapCordsX][mapCordsY][7] !== 0){
        for (i = 0; i<osHouseList.length; i++){
          ctx.drawImage(house, osHouseList[i].x, osHouseList[i].y);
        }
        for(i = 0; i<osInnList.length; i++){
          ctx.drawImage(inn, osInnList[i].x, osInnList[i].y);
        }
        for(i = 0; i<osShopList.length; i++){
          ctx.drawImage(shop, osShopList[i].x, osShopList[i].y);
        }
        for(i = 0; i<osTavernList.length; i++){
          ctx.drawImage(tavern, osTavernList[i].x, osTavernList[i].y);
        }
        for(i = 0; i<osNPC.length; i++){
          ctx.drawImage(osNPC[i].img, osNPC[i].x, osNPC[i].y);
        }
      }
    }
     if (houseSouth === true){
      if(map[mapCordsX][mapCordsY][7] !== 0){
        for (i = 0; i<osHouseList.length; i++){
          ctx.drawImage(house, osHouseList[i].x, osHouseList[i].y);
        }
        for(i = 0; i<osShopList.length; i++){
          ctx.drawImage(shop, osShopList[i].x, osShopList[i].y);
        }
        for(i = 0; i<osNPC.length; i++){
          ctx.drawImage(osNPC[i].img, osNPC[i].x, osNPC[i].y);
        }
        for(i = 0; i<osInnList.length; i++){
          ctx.drawImage(inn, osInnList[i].x, osInnList[i].y);
        }
        for(i = 0; i<osTavernList.length; i++){
          ctx.drawImage(tavern, osTavernList[i].x, osTavernList[i].y);
        }
        }
          ctx.drawImage(heroImage, hero.x, hero.y);
        }
      }

        for (i = 0; i<onscreenMonster.length; i++){
        ctx.drawImage(onscreenMonster[i].img, onscreenMonster[i].x, onscreenMonster[i].y);
      }
    
    
      battleTest = false;
  for (i = 0; i<onscreenMonster.length; i++){
    if (hero.x <= (onscreenMonster[i].x + 32) && onscreenMonster[i].x <= (hero.x + 32) && hero.y <= (onscreenMonster[i].y + 32) && onscreenMonster[i].y <= (hero.y + 32)) {
       battleTest=true;
       hero.hp-=  battle(onscreenMonster[i]);
       experience(onscreenMonster[i]);
        if(map[mapCordsX][mapCordsY][0] > 100){
           bossesKilled.push(onscreenMonster[i]);
        }
        Ty = hero.y;
        Tx = hero.x;
        kill(i);
        ++monstersCaught;
        pauseIt();


    }
      if (hero.hp <= 0){ //Death Message
            pauseIt();
            heroSaved.silver = hero.silver;
            ctx.drawImage(popUp, 128, 90);
            ctx.textAlign="center"; 
            ctx.font = "bold 80px New Rocker";
            ctx.fillStyle = "red";
            ctx.fillText("Game Over",oldcanvas.width/2,140);
            ctx.font = "bold 40px New Rocker";
            ctx.fillStyle = "white";
            ctx.fillText("Press Q or Continue to respawn",oldcanvas.width/2,290);
            swapStats(hero,heroSaved);
            mapCordsX = oldXcord;
            mapCordsY = oldYcord;
            hero.y = innY;
            hero.x = innX;
            hero.silver /= 2;
            if(mapCordsY < 0 ){
              reset();
            }
            else{
            reset();
            }
        }
      }
   };
   

var render2 = function() {

    if(statsScreen === true){
      mapScrollY += 10;
      if(mapScrollY > 500){mapScrollY = 500;}
    }
    else {
      mapScrollY -= 10;
      if(mapScrollY < 250){mapScrollY = 250;}
    }
    ctx.drawImage(bgImage2, 0, 0+480-mapScrollY+250);
    var my_gradient=ctx.createLinearGradient(0,980,0,0);
    my_gradient.addColorStop(0,"#634b30");
    // my_gradient.addColorStop(0.25,"#336600");
    my_gradient.addColorStop(0.5,"#7d5d3b");
    //my_gradient.addColorStop(0.75,"#666633");
    my_gradient.addColorStop(1,"#634b30");
    ctx.fillStyle=my_gradient;
    ctx.fillRect(InventoryB.x1-3,InventoryB.y1-mapScrollY+250+64+64+128,128,128);
    ctx.fillRect(StatsB.x1-3,StatsB.y1-mapScrollY+250+64+64+128,128,128);
    ctx.fillRect(MapB.x1-3,MapB.y1-mapScrollY+250+64+64+128,128,128);
    ctx.fillRect(CreditsB.x1-3,CreditsB.y1-mapScrollY+250+64+64+128,128,128);
    ctx.fillStyle="white";
    ctx.font = "24px New Rocker";
    ctx.fillText("Inventory",InventoryB.x1+8,InventoryB.y1+128 + 128-mapScrollY+250+64);
    ctx.fillText("Stats",StatsB.x1+30/2,StatsB.y1+128 + 128-mapScrollY+250+64);
    ctx.fillText("Map",MapB.x1+40/2,MapB.y1 + 128 +128-mapScrollY+250+64);
    ctx.fillText("Credits",CreditsB.x1+20/2,CreditsB.y1 +128 + 128-mapScrollY+250+64);
    
};

var renderBar = function(){
    font = "20px New Rocker";
    ctx.textAlign="left"; 

    var my_gradient=ctx.createLinearGradient(0,980,0,0);
    my_gradient.addColorStop(0,"#7a7a52");
    // my_gradient.addColorStop(0.25,"#336600");
    my_gradient.addColorStop(0.5,"#8a8a5c");
    //my_gradient.addColorStop(0.75,"#666633");
    my_gradient.addColorStop(1,"#7a7a52");
    ctx.fillStyle=my_gradient;
    ctx.fillRect(0,480,988,610);
    ctx.fillStyle="black";
    ctx.fillText("HP: " + hero.hp, 16,484+20);
    ctx.fillText("Level: " + hero.lvl,128+16,484+20);
    ctx.fillText("Silver: " + hero.silver, 256+16,484+20);
    my_gradient=ctx.createLinearGradient(0,980,0,0+20);
    my_gradient.addColorStop(0,"#634b30");
    // my_gradient.addColorStop(0.25,"#336600");
    my_gradient.addColorStop(0.5,"#7d5d3b");
    //my_gradient.addColorStop(0.75,"#666633");
    my_gradient.addColorStop(1,"#634b30");
    ctx.fillStyle=my_gradient;
    ctx.fillRect(MenuB.x1-3,MenuB.y1,256,128+50);
    ctx.fillRect(NextB.x1-3,NextB.y1,256,128+50);
    ctx.fillStyle="white";
    ctx.font = "64px New Rocker";
    ctx.fillText("Menu",MenuB.x1+48,MenuB.y1 + 32+50);
    ctx.fillText("Next",NextB.x1+48,NextB.y1 + 32+50);
};



var renderStats = function(){

  ctx.drawImage(bgImage2, 0, 0+230);
    ctx.fillStyle = "rgb(250, 250, 250)";
    ctx.font = "20px New Rocker";
    ctx.fillText("Level : " + hero.lvl, 32, 56+250);
    ctx.fillText("Experience: " + float2int(hero.exp/expNeeded *100) +"%", 140, 56+250);
    ctx.fillText("Cords : " + mapCordsX + "," + mapCordsY, 32, 32+250);
    ctx.fillText("HP: " + hero.hp, 32, 80+250);
    ctx.fillText("Silver: " + hero.silver, 140, 80+250);
    ctx.fillText("Attack: " + hero.atk, 32, 106+250);
    ctx.fillText("Weapon Bonus: " + hero.weapon, 140,106+250);
    ctx.fillText("Defence: " + hero.def, 32,130+250);
    ctx.fillText("Armor  Bonus: " + hero.armor, 140, 130+250);
    ctx.drawImage(hero.hweapon.img,45,165+250);
    ctx.drawImage(hero.hchest.img,97,165+250);
    if(hero.hheadgear.def !== 0)
    ctx.drawImage(hero.hheadgear.img,149,165+250);
    if(hero.hassesory.def !== 0)
    ctx.drawImage(hero.hassesory.img,201,165+250);
  
};

var renderMap = function(){
 
  var n = 0;
  ctx.beginPath();
  ctx.lineWidth="2";
  ctx.drawImage(bgImage2, 0, 0+230);
  
  for(var i = mapXmax+1; i > 0;i-- ){
    for(var j = mapYmax+1; j > 0;j--){
      ctx.strokeStyle="white";
      if(map[i-1][j-1][7] > 0){
        ctx.fillStyle = "rgb(0, 0, 160)";
        ctx.fillRect(309+((i+1)*50),260+j*30,50,30);
        ctx.fillStyle = "rgb(250, 250, 250)";
      }
      if (n === mapCordsX && j === mapCordsY+1){
        ctx.fillStyle = "rgb(160,0,0)";
        ctx.fillRect(309+i*50,260+j*30,50,30);
        ctx.fillStyle = "rgb(250, 250, 250)";
        ctx.strokeStyle="yellow";
      }
      else {
        ctx.fillStyle = "rgb(0, 102, 0)";
        ctx.fillRect(309+i*50,260+j*30,50,30);
        ctx.fillStyle = "rgb(250, 250, 250)";
      }
      ctx.rect(309+i*50,260+j*30,50,30);
      ctx.stroke();
    }
    n++;
  if(n>4){n=0;}
  }
  ctx.fillStyle = "rgb(0, 0, 160)";
  ctx.fillRect(700,300,32,32);
  ctx.fillStyle = "rgb(0, 102, 0)";
  ctx.fillRect(700,350,32,32);
  ctx.fillStyle = "rgb(160, 0, 0)";
  ctx.fillRect(700,400,32,32);
  ctx.font = "32px New Rocker";
  ctx.textAlign="left";
  ctx.fillStyle = "rgb(250, 250, 250)";
  ctx.fillText("Town",740,320);
  ctx.fillText("Wilderness",740,370);
  ctx.fillText("Your Location",740,420);
};

var renderCredits = function(){

   ctx.drawImage(bgImage2, 0, 0+230);
   ctx.font = "32px New Rocker";
   ctx.textAlign="center"; 
   ctx.fillText("Created By: Dominik Yakoubek",canvas.width/2,280);
   ctx.fillText("Version 0.4.4",canvas.width/2,320);
    
   ctx.textAlign="left";
};

var renderInventory = function(){

  ctx.drawImage(bgImage2, 0, 0+230);
  ctx.textAlign="right";
  ctx.font = "24px New Rocker";
  ctx.fillText("Weapon:",400,280);
  ctx.fillText("Armor:",400,330);
  ctx.fillText("Headgear:",400,380);
  ctx.fillText("Sheild:",400,430);
  ctx.fillStyle = "rgb(255, 0, 0)";
  ctx.fillText("+"+hero.hweapon.atk,510,280);
  ctx.fillText("+0",510,330);
  ctx.fillText("+0",510,380);
  ctx.fillText("+"+hero.hassesory.atk,510,430);
  ctx.fillStyle = "rgb(0, 255, 0)";
  ctx.fillText("+0",550,280);
  ctx.fillText("+"+hero.hchest.def,550,330);
  ctx.fillText("+"+hero.hheadgear.def,550,380);
  ctx.fillText("+"+hero.hassesory.def,550,430);
  ctx.drawImage(hero.hweapon.img,420,250);
  ctx.drawImage(hero.hchest.img,420,300);
  ctx.drawImage(hero.hheadgear.img,420,350);
  ctx.drawImage(hero.hheadgear.img,420,350);
  ctx.drawImage(hero.hassesory.img,420,400);
  ctx.textAlign="left"; 
  ctx.fillStyle = "rgb(255, 0, 0)";
  ctx.fillRect(650,300,32,32);
  ctx.fillStyle = "rgb(0, 255, 0)";
  ctx.fillRect(650,360,32,32);
  ctx.font = "32px New Rocker";
  ctx.textAlign="left";
  ctx.fillStyle = "rgb(250, 250, 250)";
  ctx.fillText("Attack Bonus",700,330);
  ctx.fillText("Defense Bonus",700,390);
};

/////////////////////////Update game objects graphics/////////////////////////// 
