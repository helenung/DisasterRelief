(function() {

	window.onload = function() {
		document.getElementById("game").onclick = begin;

	};

	var game = new Phaser.Game(900, 600, Phaser.CANVAS, 'game', {preload: preload, create: create, update: update });

	function begin() {
		 var text = "Welcome to the game!";
    	var style = { font: "65px Arial", fill: "#ff0044", align: "center" };

    	var t = game.add.text(game.world.centerX-300, 0, text, style);
	}

	

	function preload() {
		game.load.image('bg', 'bg.png');
	}

	function create() {
		game.add.sprite(0, 0, 'bg');
	}

	function update() {

	}

})();