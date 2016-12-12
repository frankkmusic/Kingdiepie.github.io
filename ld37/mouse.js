

var oldcanvas = {
  width: 1000,
  height: 600
};


 function getPosition(event)
      {
       
        var x = 0;
        var y = 0;
 
        
        
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
        console.log("x: " + x + "  y: " + y);
        checkButtons(x,y);
        if(y<oldcanvas.height && x<oldcanvas.width){
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

var MenuB = new ButtonC(Menu,400,600,400,460,true);
var contB = new ButtonC(Continue,400,600,400,460,false);
var passiveChoice = new ButtonC(PassiveB,50,475,250,300,false);
var agressiveChoice = new ButtonC(AggressiveB,50,475,525,575,false);
var nextDialog = new ButtonC(nextDia,50,475,525,575,false);
var wakeUp = new ButtonC(newDay,400,600,400,460,false);
Buttons.push(contB);
Buttons.push(wakeUp);
Buttons.push(MenuB);
Buttons.push(agressiveChoice);
Buttons.push(passiveChoice);
Buttons.push(nextDialog);


//button check loop
var checkButtons = function(x,y){
  console.log("checkign");
  for(i = 0; i < Buttons.length; i++){
    if (Buttons[i].x1<x&&Buttons[i].x2>x&&Buttons[i].y1<y&&Buttons[i].y2>y && Buttons[i].os){
      Buttons[i].f();
    }
  }
};