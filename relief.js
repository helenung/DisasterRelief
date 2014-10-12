var game = new Phaser.Game(900, 600, Phaser.CANVAS, 'game', {preload: preload, create: create, update: update});

function preload() {
	game.load.image('bg', 'bg.png');
	game.load.image('toRope', 'rope_button.png');
	game.load.image('ropeBg', 'rope_bg.png');
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
	beginButton = game.add.sprite(350, 225, 'begin');
	backButton.inputEnabled = true;
	backButton.events.onInputUp.add(function() {
		endGame(thisBg);
	});
	beginButton.inputEnabled = true;
	beginButton.events.onInputUp.add(minigame, this);

}

function endGame(background) {
	background.destroy();
	beginButton.destroy();
	backButton.destroy();
	toBoulder.inputEnabled = true;
	toRope.inputEnabled = true;
}

function startRope() {
	beginButton.destroy();
	backButton.destroy();
}

function startRescue() {
	beginButton.destroy();
	backButton.destroy();
	boulderTiles = game.add.sprite(150, 50, 'boulderTiles');
	var cursors = game.input.keyboard.createCursorKeys();
	var rescued = true;
	var tiles = [0,1,2,3,4];
	for (var i = 1; i <= 5; i++) {
		tiles[i] = [0,1,2,3,4];
	}

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

	var hero = game.add.sprite(150, 450, 'hero');
	var victim = game.add.sprite(630, 50, 'victim');

}

function update() {

}
