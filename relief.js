var game = new Phaser.Game(900, 600, Phaser.CANVAS, 'game', {preload: preload, create: create, update: update });

function preload() {
	game.load.image('bg', 'bg.png');
	game.load.image('toRope', 'rope_button.png');
	game.load.image('ropeBg', 'rope_bg.png');
	game.load.image('back', 'back_button.png')
}

function create() {
	game.add.sprite(0, 0, 'bg');
	toRope = game.add.sprite(210, 250, 'toRope');
	toRope.inputEnabled = true;
	toRope.events.onInputUp.add(function() {
		ropeScreen = game.add.sprite(0, 0, 'ropeBg');
		backButton = game.add.sprite(800, 525, 'back');
		backButton.inputEnabled = true;
		backButton.events.onInputUp.add(toMenu);
	});
}

function toMenu() {
	ropeScreen.destroy();
	backButton.destroy();
}

function update() {

}