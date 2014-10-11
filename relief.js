var game = new Phaser.Game(900, 600, Phaser.CANVAS, '', {preload: preload, create: create, update: update });

function preload() {
	game.load.image('bg', 'bg.png');
}

function create() {
	game.add.sprite(0, 0, 'bg');
}

function update() {

}