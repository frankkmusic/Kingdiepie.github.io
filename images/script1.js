
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 600;


var rectX = 200;
var rectY = 200;
var rectSpeed = 128;

var update = function() {

ctx.fillText("Here lies IE9, May you get less use then myspace",50,50);
ctx.fillRect(300,300,rectX,rectY);

};


var FPS = 30;
setInterval(function() {
  update();
  render();
}, 1000/FPS);
