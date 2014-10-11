var game = new Phaser.Game(900, 600, Phaser.CANVAS, 'game', {preload: preload, create: create, update: update});

function preload() {
	game.load.image('bg', 'bg.png');
	game.load.image('toRope', 'rope_button.png');
	game.load.image('ropeBg', 'rope_bg.png');
	game.load.image('back', 'back_button.png');
	game.load.image('begin', 'begin_button.png')
	game.load.image('boulderBg', 'boulder_bg.png');
	game.load.image('toBoulder', 'boulder_button.png');
	game.load.image('debris', 'debris.png');
	game.load.image('debrisSmash', 'debrisSmash.png');
}

function create() {
	game.add.sprite(0, 0, 'bg');
	toRope = game.add.sprite(210, 250, 'toRope');
	toRope.inputEnabled = true;
	toRope.events.onInputUp.add(function() {
		miniGame('ropeBg', startRope);
	});
	toBoulder = game.add.sprite(400, 140, 'toBoulder');
	toBoulder.inputEnabled = true;
	toBoulder.events.onInputUp.add(function() {
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
}

function startRope() {
	beginButton.destroy();
	backButton.destroy();
}

function startRescue() {
	beginButton.destroy();
	backButton.destroy();
	var rescued = true;
	var boulders = [0,1,2,3,4];
	for (var i = 1; i <= 5; i++) {
		boulders[i] = [0,1,2,3,4];
	}

	for (var i = 0; i < 5; i++) {
		for (var j = 0; j < 5; j++) {
			boulders[i][j] = game.add.sprite(150 + (i*120), 50 + (j*100), 'debris');
		}
	}

	boulders[3][2] = game.add.sprite()
	// boulders[0][0] = game.add.sprite(150, 0, 'debris');
	// boulders[2][0] = game.add.sprite(280, 0, 'debris');
	// boulders[4][0] = game.add.sprite(410, 0, 'debris');


}

function update() {

}
