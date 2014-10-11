<?php
$db = new PDO("mysql:dbname=cederw_winfo;host=localhost","cederw_winfo","winfo");
				$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);


if(isset($_GET["join"])){
	$player = $_GET["player"];
	$queryall = "INSERT INTO `cederw_winfo`.`main` (`name`, `score`) VALUES ('".$player."', '0');";
	$db->query($queryall);
} else if(isset($_GET["leave"])){
	$player = $_GET["player"];
	$queryall = "DELETE FROM main WHERE name='".$player."';";
	$db->query($queryall);
} elseif(isset($_GET["score"])){
	//pull score first
	$score = $_GET["score"];
	$player = $_GET["player"];
	$queryall = "UPDATE main SET score= score+'".$score."' WHERE name='".$player."';";
	$db->query($queryall);
} else if(isset($_GET["update"])){
	header('Content-Type: application/json');
	$statement=$db->prepare("SELECT * FROM main");
	$statement->execute();
	$results=$statement->fetchAll(PDO::FETCH_ASSOC);
	$json=json_encode($results);
	echo($json);

} else {
	//die();
}
?>