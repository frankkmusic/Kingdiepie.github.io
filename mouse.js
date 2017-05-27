var offsetleft = 0;
var offsettop = 0;
var Tx = 0;
var Ty = 0;


var oldcanvas = {
  width: 988,
  height: 480
};


 function getPosition(event)
      {
       
        var x = 0;
        var y = 0;
        if(dioPaused === true){
        if(dioOn === false){
          qPress =true;
        }
        dioPaused=false;
        render();
        if(dioI != dioS)
        renderDioBox();
        
        }
        
        
        if (event.x !== undefined && event.y !== undefined)
        {
           
          x = event.x;
          y = event.y;
            
        }
        else // Firefox method to get the position
        {
          x = event.clientX + document.body.scrollLeft +
              document.documentElement.scrollLeft;
          y = event.clientY + document.body.scrollTop +
              document.documentElement.scrollTop;
        }
        //x -= offsetleft;
        //y -= offsettop;
        console.log("x: " + x + "  y: " + y);
        checkButtons(x,y);
        if(y<oldcanvas.height && x<oldcanvas.width && pause === false && start === true){
            Ty=y;
            Tx=x;
        }
      }

//check to see if mouse is over a button

var Buttons = [];

class ButtonC{
  constructor(f,x1,x2,y1,y2,os){
    this.f=f;  
    this.x1=x1;
    this.x2=x2;
    this.y1=y1;
    this.y2=y2;
    this.os=os; // boolean, tells if button is onscreen. 
    //add a boolean isPressed to do different art for buttons. 
  }
}

// make buttons

var MenuB = new ButtonC(Menu,476,738,481,629,true);
var NextB = new ButtonC(q,476+257,738+257,481,629,true);
var OneB = new ButtonC(oneOff,oldcanvas.width/2-96,oldcanvas.width/2-96+40,200,240,false);
var TwoB = new ButtonC(twoOff,oldcanvas.width/2-32,oldcanvas.width/2-32+40,200,240,false);
var ThreeB = new ButtonC(threeOff,oldcanvas.width/2+32,oldcanvas.width/2+32+40,200,240,false);
var FourB = new ButtonC(fourOff,oldcanvas.width/2+96,oldcanvas.width/2+96+40,200,240,false);
var MapB = new ButtonC(mapmenu,120+128,120+128+128,300,430,false);
var InventoryB = new ButtonC(inventorymenu,378,506,300,430,false);
var StatsB = new ButtonC(statsmenu,508,508+128,300,430,false);
var CreditsB = new ButtonC(creditsmenu,638,638+128,300,430,false);
Buttons.push(OneB);
Buttons.push(TwoB);
Buttons.push(ThreeB);
Buttons.push(FourB);
Buttons.push(NextB);
Buttons.push(MenuB);
Buttons.push(MapB);
Buttons.push(InventoryB);
Buttons.push(StatsB);
Buttons.push(CreditsB);

//button check loop
var checkButtons = function(x,y){
  for(i = 0; i < Buttons.length; i++){
    if (Buttons[i].x1<x&&Buttons[i].x2>x&&Buttons[i].y1<y&&Buttons[i].y2>y && Buttons[i].os){
      Buttons[i].f();
    }
  }
};
