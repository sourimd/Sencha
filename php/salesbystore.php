<?php

	include_once("dbconnect.inc.php");

	$mysqli = new mysqli($host, $user, $password, $database);
	$query = "Select * from sales_by_store";
	$result = $mysqli->query($query);
	$data = array();

	while ( $rowfetched = $result->fetch_row() ){
    	//echo "<h3>$rowfetched[1] $rowfetched[2]</h3><br/>";
    	//$data[] = json_encode($rowfetched);
        $data[] = array("store"=>$rowfetched[0], "manager"=>$rowfetched[1], "total_sales"=>$rowfetched[2]);
    }

    $result->close();

    echo json_encode( array(
    		"stores" => $data
    ));
?>