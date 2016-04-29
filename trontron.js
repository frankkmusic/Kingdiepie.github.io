//make canvas
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 700;
var on = false;
ctx.font = "30px Arial";
var end = false;
//prevent arrow key scrolling
window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);


/////////////////////Players//////////////
var blue = {
    speed: 6, // movement in pixels per second
    x: canvas.width / 2 - 300,
    y: canvas.height / 2,
    win: false,
    key: 3,
    score: 0
};
var red = {
    speed: 6, // movement in pixels per second
    x: canvas.width / 2 + 300,
    y: canvas.height / 2,
    win: false,
    key: 3,
    score: 0
};


//handle keyboard:
var keysDown = {};
addEventListener("keydown", function(e) {
    keysDown[e.keyCode] = true;
}, false);
addEventListener("keyup", function(e) {
    delete keysDown[e.keyCode];
}, false);


//spawn background (put in function later when makeing the games restartable)
ctx.fillRect(0, 0, canvas.width, canvas.height);


//checks to see if the cycles collide
var check = function(player, keyPressed) {
    if (keyPressed === 'down') {
        var imgData = canvas.getContext('2d').getImageData(player.x, player.y + 8, 1, 1);
        r = imgData.data[0];
        g = imgData.data[1];
        b = imgData.data[2];
        if (r === 0 && g === 0 && b === 0) {
            return true;
        }
    }
    if (keyPressed === 'up') {
        var imgData = canvas.getContext('2d').getImageData(player.x, player.y - 1, 1, 1);
        r = imgData.data[0];
        g = imgData.data[1];
        b = imgData.data[2];
        if (r === 0 && g === 0 && b === 0) {
            return true;
        }
    }
    if (keyPressed === 'left') {
        var imgData = canvas.getContext('2d').getImageData(player.x - 1, player.y, 1, 1);
        r = imgData.data[0];
        g = imgData.data[1];
        b = imgData.data[2];
        if (r === 0 && g === 0 && b === 0) {
            return true;
        }
    }
    if (keyPressed === 'right') {
        var imgData = canvas.getContext('2d').getImageData(player.x + 8, player.y, 1, 1);
        r = imgData.data[0];
        g = imgData.data[1];
        b = imgData.data[2];
        if (r === 0 && g === 0 && b === 0) {
            return true;
        }
    }
    return false;
};


//Update Method
var update = function(m) {
    //up
    if (38 in keysDown || red.key === 1) {
        red.y -= red.speed;
        if (check(red, "up") === false) {
            blue.win = true;
            if (end === false){
        blue.score++;
        }
        }
        red.key = 1;
    }
    //down
    if (40 in keysDown || red.key === 2) {
        red.y += red.speed;
        if (check(red, "down") === false) {
            blue.win = true;
            if (end === false){
        blue.score++;
        }
        }
        red.key = 2;
    }
    //left
    if (37 in keysDown || red.key === 3) {
        red.x -= red.speed;
        if (check(red, "left") === false) {
            if (end === false){
        blue.score++;
        }
            blue.win = true;
        }
        red.key = 3;
    }
    //right
    if (39 in keysDown || red.key === 4) {
        red.x += red.speed;
        if (check(red, "right") === false) {
            if (end === false){
        blue.score++;
        }
            blue.win = true;
        }
        red.key = 4;

    }
    // W
    if (87 in keysDown || blue.key === 1) {
        blue.y -= blue.speed;
        if (check(blue, "up") === false) {
            red.win = true;
            if (end === false){
        red.score++;
        }
        }
        blue.key = 1;
    }
    // A
    if (65 in keysDown || blue.key === 2) {
        blue.x -= blue.speed;
        if (check(blue, "left") === false) {
            red.win = true;
            if (end === false){
        red.score++;
        }
        }
        blue.key = 2;
    }
    //D
    if (68 in keysDown || blue.key === 3) {
        blue.x += blue.speed;
        if (check(blue, "right") === false) {
            if (end === false){
        red.score++;
        }
            red.win = true;
        }
        blue.key = 3;
    }
    // S
    if (83 in keysDown || blue.key === 4) {
        blue.y += blue.speed;
        if (check(blue, "down") === false) {
            if (end === false){
        red.score++;
        }
            red.win = true;
        }
        blue.key = 4;
    }
    if (82 in keysDown && (red.win === true || blue.win === true)) {
        console.log("test");
        blue.win = false;
        red.win = false;
        ctx.fillStyle = "rgb(0, 0, 0)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "rgb(256, 0, 0)";
        ctx.fillText("Red: " + red.score,canvas.width-100,40);
        ctx.fillStyle = "rgb(0, 0, 256)";
        ctx.fillText("Blue: " + blue.score,60,40);
        red.x = canvas.width / 2 + 300;
        red.y = canvas.height / 2;
        blue.x = canvas.width / 2 - 300;
        blue.y = canvas.height / 2;
        end = false;
        blue.key = 3;
        red.key =3;
    }
    if (red.x < 0 || red.y < 0 || red.x + 8 > canvas.width || red.y + 8 > canvas.height) {
        blue.win = true;
        if (end === false){
        blue.score++;
        }
    }
    if (blue.x < 0 || blue.y < 0 || blue.x + 8 > canvas.width || blue.y + 8 > canvas.height) {
        red.win = true;
        if (end === false){
        red.score++;
        }
    }
};


//renders canvas elements every frame
var render = function() {
    ctx.fillStyle = "rgb(256, 0, 0)";
    ctx.fillRect(red.x, red.y, 8, 8);
    if (red.win === true){
      ctx.fillText("Red Wins!", 335,50);
      end = true;
    }
    ctx.fillStyle = "rgb(0, 0, 256)";
    ctx.fillRect(blue.x, blue.y, 8, 8);
     if (blue.win === true){
      ctx.fillText("Blue Wins!", 325, canvas.height-100);
      end = true;
    }
};

var start = function(){
  on = true;
};

window.onload = function() {
    var main = function() {

        var now = Date.now();
        var delta = now - then;
        if (on === true){
        update(delta / 2000);
        if (end === false) {
            render();
            then = now;
        }
        }
        requestAnimationFrame(main);
    };
    var w = window;
    requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;
    var then = Date.now();
    main();

};
