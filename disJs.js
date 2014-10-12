
var playerName = null;
function playerJoin(player){
	$.get("disServer.php?player="+player+"&join=T",function( data ) {
	});
}

function playerLeave(player){
	$.get("disServer.php?player="+player+"&leave=T",function( data ) {
	});
}

function scoreUp(player, score){
	$.get( "disServer.php?player="+player+"&score="+score,function( data ) {
	});
}

function update(){

//	console.log("update");
	$.getJSON( "disServer.php?update=t",function( data ) {
//console.log("update2");

var items = [];
var index = 0;
$.each(data, function(){
	//console.log(data[index]["name"]);
	var name = data[index]["name"];
	var score = data[index]["score"];
	
items.push("<li id='players'>"+name+": "+score+"</li>");
index+=1;
});
var myNode = document.getElementById("players");
myNode.innerHTML = '';

 $("<ul/>", {
"class": "my-new-list",
html: items.join("")
}).appendTo(document.getElementById("players"));

});


}
window.onload = function() {
    if (window.jQuery) {  
        // jQuery is loaded  
        //alert("Yeah!");
        playerName = window.prompt("Please enter your name","Disaster Command");
        playerJoin(playerName);
        var updateTimer = window.setInterval(update, 2000);
    } else {
        // jQuery is not loaded
        alert("Doesn't Work");
    }
}
window.onbeforeunload = function (e) {
  playerLeave(playerName);
};