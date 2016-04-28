var spawnMonster = function(n) {
    for( i = 0;i<n.length;i++){
    // Throw the monster somewhere on the screen randomly
    n[i].x = 64 + (Math.random() * (canvas.width - 128));
    n[i].y = 64 + (Math.random() * (canvas.height - 128));
    }
};
var despawnMonsters = function(n) {
    for( i = 0;i<n.length*10;i++){
      n.pop();
    }
};
var createMonsters = function() {
    if(map[mapCordsX][mapCordsY][0] === 1){
      onscreenMonster.push(monsterData[0]);
      //take monsters from monsterData
    }
    if(map[mapCordsX][mapCordsY][0] === 2){
      onscreenMonster.push(monsterData[0]);
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
};



var respawnMonster = function(n) {
    n.x = 64 + (Math.random() * (canvas.width - 128));
    n.y = 64 + (Math.random() * (canvas.height - 128));
    };
    
var pauseIt = function(n) {
  pause = true;
};

var playIt = function(n) {
  pause = false;
};

var battle = function(n) {
    var dmg = 0;
    var monDMG = (hero.atk+hero.weapon)-(n.def=n.armor);
    var times = n.hp/monDMG;
    var heroDMG = (n.attack+n.weapon)-(hero.def-hero.armor);
    dmg += times * heroDMG; 
    dmg = Math.round(dmg);
    ctx2.drawImage(n.img, 800, 60);
    ctx2.fillText("Press q to countinue",720,100);
    ctx2.fillText("You will take " + dmg + " damage", 710, 132);
  
    
    return dmg;
    
};



 var changeImg = function() {
 if (map[mapCordsX][mapCordsY][1] === 0){
        bgImage1.src = "images/background.png"; 
      }
      if (map[mapCordsX][mapCordsY][1] === 1){
        bgImage1.src = "images/background1.png"; 
      }
      if (map[mapCordsX][mapCordsY][1] === 3){
        bgImage1.src = "images/background3.png"; 
      }if (map[mapCordsX][mapCordsY][1] === 4){
        bgImage1.src = "images/background4.png"; 
      }
      if (map[mapCordsX][mapCordsY][1] === 5){
        bgImage1.src = "images/background5.png"; 
      }
      if (map[mapCordsX][mapCordsY][1] === 2){
        bgImage1.src = "images/background2.png"; 
      }
      if (map[mapCordsX][mapCordsY][1] === 6){
        bgImage1.src = "images/background6.png"; 
      }
      if (map[mapCordsX][mapCordsY][1] === 7){
        bgImage1.src = "images/background7.png"; 
      }
      if (map[mapCordsX][mapCordsY][1] === 8){
        bgImage1.src = "images/background8.png"; 
      }
      if (map[mapCordsX][mapCordsY][9] === 9){
        bgImage1.src = "images/background9.png"; 
      }
      if (map[mapCordsX][mapCordsY][1] === 10){
        bgImage1.src = "images/background10.png"; 
      }
      if (map[mapCordsX][mapCordsY][1] === 11){
        bgImage1.src = "images/background11.png"; 
      }
      if (map[mapCordsX][mapCordsY][1] === 12){
        bgImage1.src = "images/background12.png"; 
      }
      if (map[mapCordsX][mapCordsY][1] === 13){
        bgImage1.src = "images/background13.png"; 
      }
      if (map[mapCordsX][mapCordsY][1] === 14){
        bgImage1.src = "images/background14.png"; 
      }
    


};

