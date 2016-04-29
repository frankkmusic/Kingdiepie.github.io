

//Reminder: update goes before render.

//////////////////////////////////Update Method/////////////////////////////////
var battleTest = false;
var walkCount = 0;
var update = function(modifier) {
houseSouth = false;
  hero.weapon = weapon1.atk;
  hero.armor = chest1.atk;

    walkCount++;
    if (walkCount === 40){
            walkCount = 0;
        }


    oldherox = hero.x;
    oldheroy = hero.y;

    //key events
    if (pause === false){
    var bushHold = map[mapCordsX][mapCordsY][1];
    if (38 in keysDown&& (!(hero.x < 170  || hero.x > canvas.width-212) ||
    hero.y > 15)) { // Player holding up

      if(hero.y>32 || (bushHold != 10 && bushHold != 11&& bushHold != 12&& bushHold != 2&& bushHold != 6&& bushHold != 8 && bushHold != 9)){
        hero.y -= hero.speed * modifier;
        if (walkCount < 10){
            heroImage.src = "images/sprite01north.PNG";
        }
        else if (walkCount < 20){
            heroImage.src = "images/sprite01FT1north.PNG";
        }
        else if (walkCount < 30){
            heroImage.src = "images/sprite01north.PNG";
        }
        else if (walkCount < 40){
            heroImage.src = "images/sprite01FT2north.PNG";

        }

        }
    }
    else if (40 in keysDown && (!(hero.x < 170  || hero.x > canvas.width-212) ||
    hero.y < canvas.height-100))  { // Player holding down


      if(hero.y<canvas.height-96 || (bushHold != 10 && bushHold != 13&& bushHold != 14&& bushHold != 4&& bushHold != 7&& bushHold != 8 && bushHold != 9)){
        hero.y += hero.speed * modifier;
        if (walkCount < 10){
            heroImage.src = "images/sprite01south.PNG";
        }
        else if (walkCount < 20){
            heroImage.src = "images/sprite01southFT1.PN.PNG";
        }
        else if (walkCount < 30){
            heroImage.src = "images/sprite01south.PNG";
        }
        else if (walkCount < 40){
            heroImage.src = "images/sprite01southFT2.PN.PNG";
        }

        }
    }
    else if (37 in keysDown && (!(hero.y < 140  || hero.y > 240) ||
    hero.x >25))  { // Player holding left


      if(hero.x>32 || (bushHold != 1 && bushHold != 10&& bushHold != 11&& bushHold != 14&& bushHold != 7&& bushHold != 5 && bushHold != 6)){
        hero.x -= hero.speed * modifier;
        if (walkCount < 10){
            heroImage.src = "images/sprite01west.PNG";
        }
        else if (walkCount < 20){
            heroImage.src = "images/sprite01westFT1.PN.PNG";
        }
        else if (walkCount < 30){
            heroImage.src = "images/sprite01west.PNG";
        }
        else if (walkCount < 40){
            heroImage.src = "images/sprite01westFT2.PN.PNG";
        }
      }
    }
    else if (39 in keysDown && (!(hero.y < 140  || hero.y > 240) ||
    hero.x <canvas.width - 75)) { // Player holding right
        //12,13,3,5,6,7,8
        if(hero.x<canvas.width-64 || (bushHold != 12 && bushHold != 13&& bushHold != 3&& bushHold != 5&& bushHold != 6&& bushHold != 7 && bushHold != 8)){
        hero.x += hero.speed * modifier;
        if (walkCount < 10){
            heroImage.src = "images/sprite01east.PNG";
        }
        else if (walkCount < 20){
            heroImage.src = "images/sprite01eastFT1.PN.PNG";
        }
        else if (walkCount < 30){
            heroImage.src = "images/sprite01east.PNG";
        }
        else if (walkCount < 40){
            heroImage.src = "images/sprite01eastFT2.PN.PNG";
        }
      }
    }
    else if (start === false&&32 in keysDown && (!(hero.y < 140  || hero.y > 240) ||
    hero.x <canvas.width - 75)) { // Player holding right
       start=true;
       hero.x= canvas.width/2;
       hero.y= canvas.height/2;
       monster.x = 96;
       monster.y = 96;
       heroImage.src = "images/sprite01south.PNG";
    }

    }
    else if(pause===true && 81 in keysDown){

        playIt();
        render();


    }


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
    if(onscreenMonster[i].x > canvas.width-64){
      onscreenMonster[i].MC=1;
    }
    if(onscreenMonster[i].y <+32){
      onscreenMonster[i].MC=m+1;
    }
    if (onscreenMonster[i].y > canvas.height-64 ){
      onscreenMonster[i].MC=m*3+1;

    }

  }


    //Map change event triggers




    if (hero.y >= 395) {
        resetSouth();
    } else if (hero.y <= 0) {
        resetNorth();
    }
    if (hero.x <= 0) {
        resetWest();
    } else if (hero.x >= 988) {
        resetEast();
    }
   changeImg();



    //a lot more to come as I get backgrounds
    // Are they touching?
  battleTest = false;
  for (i = 0; i<onscreenMonster.length; i++){
    if (hero.x <= (onscreenMonster[i].x + 32) && onscreenMonster[i].x <= (hero.x + 32) && hero.y <= (onscreenMonster[i].y + 32) && onscreenMonster[i].y <= (hero.y + 32)) {
       battleTest=true;
       hero.hp-=  battle(onscreenMonster[i]);
       kill(i);
        ++monstersCaught;
        pauseIt();



        //call battle

    }



}

 if(map[mapCordsX][mapCordsY][7] === 1){
 for (i = 0; i<osHouseList.length; i++){
      if(hero.y > osHouseList[i].Y+90){
          houseSouth=true;
        }
      if (hero.x <= (osHouseList[i].X + 111) && osHouseList[i].X <= (hero.x + 32) && hero.y <= (osHouseList[i].Y + 98) && osHouseList[i].Y <= (hero.y-12)) {
        hero.x = oldherox;
        hero.y = oldheroy;

      }

    }
  for (i = 0; i<osInnList.length; i++){
    if(hero.y > osInnList[i].Y+90){
      houseSouth=true;
      }
      if (hero.x <= (osInnList[i].X + 160) && osInnList[i].X <= (hero.x + 32) && hero.y <= (osInnList[i].Y + 121) && osInnList[i].Y <= (hero.y-40)) {
        hero.x = oldherox;
        hero.y = oldheroy;
      }

    }
}

}

};

//////////////////////////////////Update Method/////////////////////////////////


////////////////////// Update game objects graphics/////////////////////////////



// Draw everything
var render = function() {
   if (start === true){
   if (bgReady && monsterReady && heroReady) {
        ctx.drawImage(bgImage1, 0, 0);
        ctx2.drawImage(bgImage2, 0, 0);
        //ctx3.drawImage(bgImage3, 0, 0);
    if (houseSouth === false){
      ctx.drawImage(heroImage, hero.x, hero.y);
      if(map[mapCordsX][mapCordsY][7] === 1){
        for (i = 0; i<osHouseList.length; i++){
          ctx.drawImage(house, osHouseList[i].X, osHouseList[i].Y);
           ctx.drawImage(inn, osInnList[i].X, osInnList[i].Y);
        }
      }
    }
     if (houseSouth === true){

      if(map[mapCordsX][mapCordsY][7] === 1){
        for (i = 0; i<osHouseList.length; i++){
          ctx.drawImage(inn, osInnList[i].X, osInnList[i].Y);
          ctx.drawImage(house, osHouseList[i].X, osHouseList[i].Y);
          ctx.drawImage(heroImage, hero.x, hero.y);
        }
      }
    }



        for (i = 0; i<onscreenMonster.length; i++){
        ctx.drawImage(onscreenMonster[i].img, onscreenMonster[i].x, onscreenMonster[i].y);

        if (hero.hp <= 0){
            ctx.font = "bold 128px New Rocker";
            ctx.fillStyle = 'red';
            ctx.fillText("Game Over",220,256);
            pause=true;

        }

        }



   }

   }

};

var render2 = function() {
  // Score
  //Intial Render?
    //ctx3.fillStyle = "rgb(0, 0, 0)";
    //ctx3.font = "bold 16px New Rocker";
    //ctx3.textAlign = "left";
    //ctx3.textBaseline = "top";
    ctx2.fillStyle = "rgb(250, 250, 250)";
    ctx2.font = "24px New Rocker";
    ctx2.textAlign = "left";
    ctx2.textBaseline = "top";
    ctx2.fillText("Enemies Slayed : " + monstersCaught, 32, 64);
    ctx2.fillText("Cords : " + mapCordsX + "," + mapCordsY, 32, 32);
    ctx2.font = "14px New Rocker";
    ctx2.fillText("HP: " + hero.hp, 32, 96);
    ctx2.fillText("Attack: " + hero.atk, 32, 116);
    ctx2.fillText("Weapon Bonus: " + hero.weapon, 112,116);
    ctx2.fillText("Defence: " + hero.def, 32,136);
    ctx2.fillText("Armor  Bonus: " + hero.armor, 112, 136);
    //ctx3.fillText("Welcome to the demo", 32, 32);
  //  ctx3.fillText("for my html game",32, 48);
    //ctx3.fillText("If player sprite flashes", 32, 120);
    //ctx3.fillText("Close video tabs with", 32, 144);
    //ctx3.fillText("Videos and close", 32, 168);
    //ctx3.fillText("Demanding Software", 32, 190);
    //ctx3.fillText("Use arrow keys to move", 32, 262);
    ctx2.drawImage(weapon1.img,45,165);
    ctx2.drawImage(chest1.img,97,165);
    ctx2.drawImage(heroBImage, 730, 50);

};


/////////////////////////Update game objects graphics///////////////////////////
