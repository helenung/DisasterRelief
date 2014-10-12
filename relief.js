var game = new Phaser.Game(900, 600, Phaser.CANVAS, 'game', {preload: preload, create: create, update: update});

function preload() {
	game.load.image('bg', 'bg.png');
	game.load.image('toRope', 'rope_button.png');
	game.load.image('ropeBg', 'rope_bg.png');
	game.load.image('ropeBg2', 'rope_bg2.png');
	game.load.image('rope', 'rope.png');
	game.load.image('back', 'back_button.png');
	game.load.image('begin', 'begin_button.png')
	game.load.image('boulderBg', 'boulder_bg.png');
	game.load.image('toBoulder', 'boulder_button.png');
	game.load.image('boulderTiles', 'tiles.png');
	game.load.image('debris', 'boulder.png');
	game.load.image('debrisSmash', 'crushed.png');
	game.load.image('hero', 'hero.png');
	game.load.image('victim', 'victim.png');
}

function create() {
	game.add.sprite(0, 0, 'bg');
	toRope = game.add.sprite(210, 250, 'toRope');
	toRope.inputEnabled = true;
	toRope.events.onInputUp.add(function() {
		toRope.inputEnabled = false;
		toBoulder.inputEnabled = false;
		miniGame('ropeBg', startRope);
	});
	toBoulder = game.add.sprite(400, 140, 'toBoulder');
	toBoulder.inputEnabled = true;
	toBoulder.events.onInputUp.add(function() {
		toRope.inputEnabled = false;
		toBoulder.inputEnabled = false;
		miniGame('boulderBg', startRescue)
	});
}

function miniGame(background, minigame) {
	thisBg = game.add.sprite(0, 0, background);
	backButton = game.add.sprite(800, 525, 'back');
	beginButton = game.add.sprite(350, 400, 'begin');
	backButton.inputEnabled = true;
	backButton.events.onInputUp.add(function() {
		endGame(thisBg);
	});
	beginButton.inputEnabled = true;
	beginButton.events.onInputUp.add(minigame, this);

}

function endGame(background) {
	background.destroy();
	backButton.destroy();
	beginButton.destroy();
	toBoulder.inputEnabled = true;
	toRope.inputEnabled = true;
}

function startRope() {
	game.add.sprite(0, 0, 'ropeBg2');
	beginButton.destroy();
	backButton.destroy();
	game.add.sprite(0, 250, 'rope');
}

var hero, heroX, heroY;
var tiles;
var victim;

// function buildBoulders() {
// 	for (var i = 0; i < 20; i++) {
// 		var randomX = Math.floor(Math.random() * 5);
// 		var randomY = Math.floor(Math.random() * 5);
// 		if (tiles[randomX][randomY] == null) {
// 			tiles[randomX][randomY] = game.add.sprite(150 + (120 *randomX), 50 + (randomY * 100), 'debris' );
// 		}
// 	}
// }

function startRescue() {
	document.onkeydown = checkKey;
	beginButton.destroy();
	backButton.destroy();
	boulderTiles = game.add.sprite(150, 50, 'boulderTiles');
	var rescued = true;
	tiles = [0,1,2,3,4];
	for (var i = 1; i <= 5; i++) {
		tiles[i] = [0,1,2,3,4];
	}

	//buildBoulders();

	tiles[0][1] = game.add.sprite(150 + 0 * 120, 50 + 1 * 100, 'debris');
	tiles[0][2] = game.add.sprite(150 + 0 * 120, 50 + 2 * 100, 'debris');
	tiles[0][3] = game.add.sprite(150 + 0 * 120, 50 + 3 * 100, 'debris');
	tiles[1][2] = game.add.sprite(150 + 1 * 120, 50 + 2 * 100, 'debris');
	tiles[1][4] = game.add.sprite(150 + 1 * 120, 50 + 4 * 100, 'debris');
	tiles[2][0] = game.add.sprite(150 + 2 * 120, 50 + 0 * 100, 'debris');
	tiles[2][1] = game.add.sprite(150 + 2 * 120, 50 + 1 * 100, 'debris');
	tiles[2][3] = game.add.sprite(150 + 2 * 120, 50 + 3 * 100, 'debris');
	tiles[3][1] = game.add.sprite(150 + 3 * 120, 50 + 1 * 100, 'debris');
	tiles[3][3] = game.add.sprite(150 + 3 * 120, 50 + 3 * 100, 'debris');
	tiles[4][2] = game.add.sprite(150 + 4 * 120, 50 + 2 * 100, 'debris');
	tiles[4][4] = game.add.sprite(150 + 4 * 120, 50 + 4 * 100, 'debris');

	heroX = 150;
	heroY = 450;
	hero = game.add.sprite(150, 450, 'hero');
	victim = game.add.sprite(630, 50, 'victim');
}

var unwalkableX = [];
var unwalkableY = [];

function checkSmash() {
    if (heroX == 630 && heroY == 50) {
    	victim.destroy();
    	scoreUp(playerName, 1);
    }

     if (tiles[(heroX - 150) / 120][(heroY - 50) / 100]) {
     	tiles[(heroX - 150) / 120][(heroY - 50) / 100].destroy();
     	tiles[(heroX - 150) / 120][(heroY - 50) / 100] = game.add.sprite(heroX, heroY, 'debrisSmash');
    }

    if (heroX == 150 && heroY == 450) {
    	victim = game.add.sprite(630, 50, 'victim');
    }
}

function checkKey(e) {
    e = e || window.event;

    if (e.keyCode == '38' && heroY >= 100) {
        // up arrow
        heroY -= 100;
        hero.destroy();
        hero = game.add.sprite(heroX, heroY, 'hero');
        checkSmash();
    }
    else if (e.keyCode == '40' && heroY < 450) {
        // down arrow
        heroY += 100;
        hero.destroy();
        hero = game.add.sprite(heroX, heroY, 'hero');
        checkSmash();
    } else if (e.keyCode == '37' && heroX > 150) { //left
        heroX -= 120;
        hero.destroy();
        hero = game.add.sprite(heroX, heroY, 'hero');
        checkSmash();
    } else if (e.keyCode == '39' && heroX < 630) { //right
        heroX += 120;
        hero.destroy();
        hero = game.add.sprite(heroX, heroY, 'hero');
        checkSmash();
    }
}

function update() {
}
