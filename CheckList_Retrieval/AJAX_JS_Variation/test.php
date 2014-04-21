<?php
	$db = new mysqli("localhost", "root", "", "my_db");

	$var = $_POST['regs'];
	
	
	
	if($var == 'success') {
		
		$a = array();
		$result = $db->query("SELECT Item,Age FROM CheckList ");
		while($row = $result->fetch_assoc()) {
			$a[] = $row;
		}
	 	echo json_encode($a);
		
	}	
	
	if($var == '0') {
		echo '';
		
	}	
	
	if($var === '10') {
		(int) $num = $var;
		$a = array();
		$result = $db->query("SELECT Item FROM List2 WHERE AGE=10");
		while($row = $result->fetch_assoc()) {
			$a[] = $row;
		}
	 	echo json_encode($a);
		
	}	
	
	if($var == '12') {
		$a = array();
		$result = $db->query("SELECT Item FROM List2 WHERE AGE=12");
		while($row = $result->fetch_assoc()) {
			$a[] = $row;
		}
	 	echo json_encode($a); 
		
	}	
		
?>