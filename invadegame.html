var game = new Phaser.Game(800, 600);
var bgTile;
var speed = 300;
var dropCnt = 100;
var bullets = [];
var cooldown = 0;
var alienTimer = 64;
var level = 1;
var mainState = {
	preload: function () {
		game.load.audio('sound1',['music.mp3','music.ogg']); // need to make this spce music
		game.load.audio('sound2',['lasershot.mp3','lasershot.ogg']);
		game.load.audio('sound3',['shipexplosion.mp3','shipexplosion.ogg']);
		game.load.audio('sound4',['shipHit.mp3','shipHit.ogg']);
		game.load.image('bgTile', 'bgtile.jpg');
		game.load.image('player', 'player.jpg');
		game.load.image('enemyimg', 'ufo.jpg');
		game.load.image('b1', 'bullet2.jpg');
		game.load.image('b2', 'bullet.jpg');
	},
	create: function () {
	  alienTimer += 16*level+1;
		enemies = [];
		lives = 3;
		aliensKilled=0;
		music = game.add.audio('sound1');
		laser = game.add.audio('sound2');
		shipDead = game.add.audio('sound3');
		shipHit = game.add.audio('sound4');
		music.loopFull(1);
		this.cursor = game.input.keyboard.createCursorKeys();
		this.fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		game.physics.startSystem(Phaser.Physics.ARCADE);
		game.world.enableBody = true;
		BGTile = starfield = game.add.tileSprite(0, 0, 800, 600, 'bgTile');
		game.physics.startSystem(Phaser.Physics.ARCADE);
		this.player = game.add.sprite(384, 550, 'player');
		this.enemy = game.add.group();
		this.enemy.enableBody = true;
		var n = -1;
		for (var i = 0; i < 8; i++) {
			for (var j = 0; j < 8; j++) {
				enemies.push(this.enemy.create(i * 75 + 100, j * 30 + 20, 'enemyimg'));
				n++;
				enemies[n].body.immovable = true;
			}
		}
		this.bullet = game.add.group();
		this.bullet.enableBody = true;
		this.player.body.immovable = true;
		text1 = game.add.text(50, 554, 'Lives left: ' + lives, {
			font: "24px Arial",
			fill: "#ffffff",
			align: "left"
		});
		text2 = game.add.text(250, 554, 'Level: ' + level, {
			font: "24px Arial",
			fill: "#ffffff",
			align: "left"
		});
	},
	update: function () {
		if (lives === 0) {
			game.state.start('go');
		}
		if (aliensKilled === enemies.length)
		game.state.start('win');
		starfield.tilePosition.y += 2;
		this.player.body.velocity.y = 0;
		this.player.body.velocity.x = 0;
		if (this.cursor.left.isDown) {
			this.player.body.velocity.x -= speed;
		} else if (this.cursor.right.isDown) {
			this.player.body.velocity.x += speed;
		} if (this.fireButton.isDown && cooldown < 0) {
			this.fireBullet(this.player);
			cooldown = 20;
		}
		dropCnt--;
		cooldown--;
		alienTimer--;
		for (var i = 0; i < enemies.length; i++) {
			enemies[i].body.velocity.x = 0;
		}
		if (dropCnt === 0) {
			dropCnt = 100;
			for (var j = 0; j < enemies.length; j++) {
				enemies[j].y += 10;
			}
		}
		if (alienTimer === 0) {
			this.fireAlienBullet(enemies);
			alienTimer = 64;
		}
		game.physics.arcade.overlap(this.player, bullets, this.playerHit, null, this);
		game.physics.arcade.overlap(enemies, bullets, this.enemyHit, null, this);
	},
	playerHit: function (p, b) {
		if (b.body.velocity.y > 0) {
			lives--;
			text1.setText('Lives left: '  + lives);
			b.kill();
			shipHit.play();
		}
	},
	enemyHit: function (e, b) {
		if (b.body.velocity.y < 0) {
			e.kill();
			b.kill();
			shipDead.play();
			aliensKilled++;
		}
	},
	fireBullet: function (player) {
		bullets.push(this.bullet.create(player.x + player.width / 2 - 2, player.y, 'b1'));
		bullets[bullets.length - 1].body.immovable = true;
		bullets[bullets.length - 1].body.velocity.y = -300;
		laser.play();
	},
	fireAlienBullet: function (enemies) {
		idx = Math.floor(Math.random() * (enemies.length - 1 - 0 + 1)) + 0;
		bullets.push(this.bullet.create(enemies[idx].x, enemies[idx].y, 'b2'));
		bullets[bullets.length - 1].body.immovable = true;
		bullets[bullets.length - 1].body.velocity.y = +300;
		laser.play();
	}
};
var gameOverState = {
	create: function() {
		label = game.add.text(game.world.width / 2, game.world.height / 2, 'Game Over\nPress SPACE to restart', {
			font: '22px Arial',
			fill: '000',
			align: 'center'
		});
		label.anchor.setTo(0.5, 0.5);
		this.spacebar = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	},
	update: function() {
		if (this.spacebar.isDown) {
			level = 1;
			game.state.start('main');
		}
	}
};
var winState = {
	create: function() {
		label = game.add.text(game.world.width / 2, game.world.height / 2, 'You Win\nYou defended Earth, press SPACE to restart', {
			font: '24px Arial',
			fill: '000',
			align: 'center'
		});
		label.anchor.setTo(0.5, 0.5);
		this.spacebar = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	},
	update: function() {
		if (this.spacebar.isDown) {
			level++;
			game.state.start('main');
		}
	}
};
var StartState = {
	create: function() {
		game.stage.backgroundColor = '#BDC2C5';
		label = game.add.text(game.world.width / 2, game.world.height / 2 - 50, 'Space Invaders', {
			font: '50px Arial',
			fill: '#ff0000',
			align: 'center'
		});
		label2 = game.add.text(game.world.width / 2, game.world.height / 2 + 70, 'Press Space to start, use arrows to move left or right.', {
			font: '20px Arial',
			fill: '#ff0000',
			align: 'center'
		});
		label3 = game.add.text(game.world.width / 2 + 250, game.world.height / 2 + 280, 'Created by Dominik Yakoubek with Phaser', {
			font: '12px Arial',
			fill: '#ff0000',
			align: 'center'
		});
		label.anchor.setTo(0.5, 0.5);
		label2.anchor.setTo(0.5, 0.5);
		label3.anchor.setTo(0.5, 0.5);
		this.spacebar = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	},
	update: function() {
		if (this.spacebar.isDown) {
			game.state.start('main');
		}
	}
};
game.state.add('go', gameOverState);
game.state.add('begin', StartState);
game.state.add('win', winState);
game.state.add('main', mainState);
game.state.start('begin');
