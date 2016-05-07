var game, canvas, ctx, gameTimeLast;

function init() {
	canvas = document.getElementById("gameCanvas");
	ctx = canvas.getContext("2d");
	

	game = {
		player : {
			y : canvas.height / 2,
			score : 0
		},
		computer : {
			y : canvas.height / 2,
			score : 0,
			speed: 2
		},
		ball : {
			x : canvas.width / 2,
			y : canvas.height / 2,
			vx : Math.round(Math.random()) ? 1 : -1,
			vy : Math.random() * 4 - 2,
			bounces : 0,
			radius : 3,
			reset: function() {
				this.x = canvas.width / 2;
				this.y = canvas.height / 2;
				this.vy = Math.random() * 4 - 2;
			},
			multiplier: 0.2,
			maxspeed: 5
		},
		playerHeight : 80,
		playerWidth : 6,
		pause : false,
		sound: true
	};
	document.onmousemove = moveMouse;
	gameTimeLast = new Date();
	update();
}
function moveMouse(e) {
	var y;	
	if(!e) {
		e = window.event;
		y = e.event.offsetY;
	}
	else {
		y = e.pageY;
	}

	y -= canvas.offsetTop;
	if(y - game.playerHeight/2 >= 0 && y + game.playerHeight/2 <= canvas.height)
		game.player.y = y;
}
function update() {
	dateTime = new Date();

	gameTime = (dateTime - gameTimeLast);
	if(gameTime < 0)
		gameTime = 0;

	moveAmount = gameTime > 0 ? gameTime / 10 : 1;

	if (!game.pause) {
		/* Move cpu player */
		if(game.computer.y + 20 < game.ball.y && game.computer.y + game.playerHeight/2 <= canvas.height)
			game.computer.y += game.computer.speed * moveAmount;
		else if(game.computer.y - 20 > game.ball.y && game.computer.y - game.playerHeight/2 >= 0)
			game.computer.y -= game.computer.speed * moveAmount;
		
		/* Change direction of ball when hitting a wall */
		if (game.ball.y + game.ball.radius > canvas.height
				|| game.ball.y - game.ball.radius < 0) {
			
			if(game.ball.y <= game.ball.radius)
				game.ball.y = game.ball.radius;
			else
				game.ball.y = canvas.height - game.ball.radius;

			game.ball.vy *= -1;
		}

		/* checking collision between ball and player */
		if (game.ball.x + game.ball.radius >= canvas.width - game.playerWidth) {
			if (game.ball.y + game.ball.radius >= game.player.y	- game.playerHeight / 2
					&& game.ball.y + game.ball.radius <= game.player.y	+ game.playerHeight / 2) {
			
				
				if(game.ball.vx <= game.ball.maxspeed) {
					game.ball.vx += game.ball.multiplier;
				}
				
				changeBallDirection(game.player);
			} else {
				game.computer.score++;
				document.getElementById("computerScore").innerHTML = game.computer.score;
				game.ball.reset();
				game.ball.vx = -1;
			}
		}
		/* checking collision between ball and cpu */
		else if(game.ball.x - game.ball.radius <= game.playerWidth) {		
			if (game.ball.y + game.ball.radius >= game.computer.y - game.playerHeight / 2
					&& game.ball.y + game.ball.radius <= game.computer.y + game.playerHeight / 2) {
				
				
				if(game.ball.vx >= -game.ball.maxspeed) {
					game.ball.vx -= game.ball.multiplier;
				}
				
				changeBallDirection(game.computer);
			} else {
				game.player.score++;
				document.getElementById("playerScore").innerHTML = game.player.score;
				game.ball.reset();
				game.ball.vx = 1;
			}
		}
		game.ball.x += game.ball.vx * moveAmount;
		game.ball.y += game.ball.vy * moveAmount;
	}

	draw();

	setTimeout(update,1000/30);

	gameTimeLast = dateTime;
}

function changeBallDirection(player) {
	if(player.y > game.ball.y)
		game.ball.vy -= (player.y - game.ball.y) / game.playerHeight * game.ball.maxspeed;
	else if(player.y < game.ball.y)
		game.ball.vy += (game.ball.y - player.y) / game.playerHeight * game.ball.maxspeed;

	game.ball.vx *= -1;
}
/**
 * Draw everything in the canvas
 */
function draw() {
	if (!game.pause) {
	  ctx.fillStyle = "rgba(0,0,0,1)";
		ctx.fillRect(0, 0, canvas.width, canvas.height);


	ctx.fillStyle = "rgb(256,256,256)";
		var size = 3;
		for(var y=0;y<canvas.height;y+=size*3) {
			ctx.fillRect(canvas.width / 2 - size/2, y, size, size);
		}

		// left player
		ctx.fillStyle = "rgba(0,256,0,1)";
		ctx.fillRect(2, game.computer.y - game.playerHeight / 2,
				game.playerWidth, game.playerHeight);
		// right player
		 ctx.fillStyle = "rgba(0,256,256,1)";
		ctx.fillRect(canvas.width - game.playerWidth-2, game.player.y
				- game.playerHeight / 2, game.playerWidth, game.playerHeight);

		ctx.fillStyle = "rgba(192,192,192,8)";
		ctx.fillRect(game.ball.x - game.ball.radius, game.ball.y
				- game.ball.radius, game.ball.radius * 2, game.ball.radius * 2);
	}
}

function intro() {
	var playButton = document.getElementById('playButton');
	playButton.onclick = function() {
		init();
	};

	var pauseButton = document.getElementById('pauseButton');
	pauseButton.onclick = function() {
		if (!game.pause) {
			game.pause = true;
			this.innerHTML = "Continue";
			document.getElementById('pauseText').style.display = "block";
		}
		else {
			game.pause = false;
			this.innerHTML = "Pause";
			document.getElementById('pauseText').style.display = "none";
		}
	};
}
intro();
