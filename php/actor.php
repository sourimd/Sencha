<?php

	include_once("dbconnect.inc.php");

	$mysqli = new mysqli($host, $user, $password, $database);
	$query = "Select actor_id, first_name, last_name from actor where actor_id < 5";
	$result = $mysqli->query($query);
	$data = array();

	while ( $rowfetched = $result->fetch_row() ){
    	//echo "<h3>$rowfetched[1] $rowfetched[2]</h3><br/>";
    	//$data[] = json_encode($rowfetched);
        $data[] = array("actor_id"=>$rowfetched[0], "first_name"=>$rowfetched[1], "last_name"=>$rowfetched[2]);
    }

    $result->close();

    echo json_encode( array(
    		"actors" => $data
    ));
?>