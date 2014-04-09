<?php

	$db = new mysqli("localhost", "root", "", "my_db");

	class SQLConnect {
		
		
		
		public function create() {
			
			$con=mysqli_connect("localhost","root","","my_db");
			
		/*	$sql="CREATE DATABASE my_db";
			if (mysqli_query($con,$sql))
			  {
			  echo "Database my_db created successfully";
			  }
			else
			  {
			  echo "Error creating database: " . mysqli_error($con);
			  } */
			  
			  
			$sql = "CREATE TABLE CheckList 
			(
				PID INT NOT NULL AUTO_INCREMENT, 
				PRIMARY KEY(PID),
				Item CHAR(140),
				Age INT
			)";

			  // Execute query
			 /* if (mysqli_query($con,$sql))
			    {
			    echo "Table checklist created successfully";
			    }
			  else
			    {
			    echo "Error creating table: " . mysqli_error($con);
			    } */
				
				
				$sql = "INSERT INTO CheckList(Item, Age) 
						VALUES ('Some more text', 14)";
				
				if(mysqli_query($con, $sql)) {
					echo "Insertion completed successfully";
				}
				else {
					echo "Error intserting: " . mysqli_error($con);
				}
		}
		
		public function chooser($id) {
			if($id == 0) {
				$this->getList();
			}
			
		}
		
		private function connect() {
			
			$db = new mysqli("localhost", "root", ""); //connect to DB
			if($db->connect_error){
		    	die ('Connect Error ('.$db->connect_errno.')'.$db->connect_error);
			}
			
			return $db;
		}
		
		private function getList() {
		global $db;
		$a = array();
		$result = $db->query("SELECT Item,Age FROM CheckList ");
	 	while($row = $result->fetch_assoc()) {	 
			 echo "List Item: " . $row['Item'] . " Num: " . $row['Age'] . "<br />";
			// array_push($a, $row);
	 	} 
			
		//	$row = $result->fetch_assoc();
	 	//echo json_encode($a);
 		}
	}	
	
	
	
	
?>