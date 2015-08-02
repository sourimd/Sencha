<?php

	session_start();
	
	$result = array();
	$result['success'] = true;
	$result['msg'] = 'User authenticated';

	echo json_encode($result);
?>