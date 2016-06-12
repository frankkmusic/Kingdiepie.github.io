class Monster{

  constructor(spd,m,h,atk,w,d,ar,i,r){
    this.move=m;
    this.speed=spd;
    this.hp=h;
    this.attack=atk;
    this.weapon=w;
    this.def=d;
    this.armor=ar;
    this.x = 32 + (Math.random() * (oldcanvas.width - 64));
    this.y = 32 + (Math.random() * (oldcanvas.height - 64));
    this.MC = 0;
    this.img= mImg[i];
    this.reward=r; 
    this.exp=r*5;
  }
}


class Weapon{

  constructor(w,img,p){
    this.atk=w;
    this.img = new Image();
    this.img.src = img;
    this.price = p;  
  }
}


class Chest{

  constructor(w,img,p){
    this.def=w;
    this.img = new Image();
    this.img.src = img;
    this.price = p;  
  }
}


class Headgear{

  constructor(w,img,p){
    this.def=w;
    this.img = new Image();
    this.img.src = img;
    this.price = p;  
  }
}


class Assesory{ 

  constructor(w,d,img,p){
    this.atk=w;
    this.def=d;
    this.img = new Image();
    this.img.src = img;
    this.price = p;  
  }
}


class House{

  constructor(x,y,m){
    this.x=x;
    this.y=y;
      this.msg = "[Villager]: \n" +m;
    }
  }

  
class Inn{

  constructor(x,y){
    this.x=x;
    this.y=y;
      this.msg="[InnKeeper]:" + "  Welcome to our inn travler, Have a good rest.";
    
  }
}


class Tavern{

  constructor(x,y,q,bossName){
    this.x=x;
    this.y=y;
    this.msg = "[Owner]: Welcome to my Tavern travler, I have a quest for you.";
    this.quest=q;
    this.bossKilled=false; 
    this.bn = bossName;
    }
  }
  
  class Quest{
 
    constructor(t,r,l,n){
      this.monster=t;
      this.reward=r;
      this.lvl=l;
      this.name=n;
    }
  }


class Shop{

  constructor(x,y,itemOne,itemTwo,itemThree,itemFour){
    this.x=x;
    this.y=y;
    this.item = [];
    this.item[0] = itemOne;
    this.item[1] = itemTwo;
    this.item[2] = itemThree;
    this.item[3] = itemFour; 
      this.msg = "[ShopKeeper]: Welcome to my Shop travler, Look at my wares";
    }
  }

// class Quest{}
