var gameTest = new Phaser.Game(800,800,Phaser.DEFAULT, 'game');

function create() {

    var text = "Welcome to disaster relief party";
    var style = { font: "65px Arial", fill: "#ff0044", align: "center" };

    var t = gameTest.add.text(game.world.centerX-300, 0, text, style);

}