<?php

	$db = new mysqli("localhost", "root", "", "my_db");

	$var = $_POST['regs'];
	if($var == 'success') {
		
		$a = array();
		$result = $db->query("SELECT Item,Age FROM CheckList ");
		while($row = $result->fetch_assoc()) {
			//echo "Item: ".$row['Item']."Id: ".$row['Age']."<br />";
			$a[] = $row;
		}
	 	echo json_encode($a);
		
	}
		
		
	
?>