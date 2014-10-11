var game = new Phaser.Game(900, 600, Phaser.CANVAS, 'game', {preload: preload, create: create, update: update});

function preload() {
	game.load.image('bg', 'bg.png');
	game.load.image('toRope', 'rope_button.png');
	game.load.image('ropeBg', 'rope_bg.png');
	game.load.image('back', 'back_button.png');
	game.load.image('begin', 'begin_button.png')
	game.load.image('boulderBg', 'boulder_bg.png');
	game.load.image('toBoulder', 'boulder_button.png');
	game.load.image('rock', 'rock.png');
	game.load.image('rockSmash', 'rockSmash.png');
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
	//destroy buttons


}

function update() {

}
