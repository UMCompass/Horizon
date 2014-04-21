<?php 

	include("connect.php");
	
	
	$test = new SQLConnect;
	
	echo "Creating Database <br />";
	
	$test->create();


?>