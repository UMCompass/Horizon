<?php

	class SQLConnect {
		
		
		
		public function create() {
			
			$con=mysqli_connect("localhost","root","", "my_db");
			
			/*$sql="CREATE DATABASE CheckList";
			if (mysqli_query($con,$sql))
			  {
			  echo "Database CheckList created successfully";
			  }
			else
			  {
			  echo "Error creating database: " . mysqli_error($con);
			  } */
			  
			
			$sql = "CREATE TABLE List2
			(
				PID INT NOT NULL AUTO_INCREMENT, 
				PRIMARY KEY(PID),
				Item CHAR(255),
				Age INT
				
			)";

			  // Execute query
			  if (mysqli_query($con,$sql))
			    {
			    echo "Table checklist created successfully";
			    }
			  else
			    {
			    echo "Error creating table: " . mysqli_error($con);
			    } 
				
				
				$sql = "INSERT INTO List2(Item, Age) 
						VALUES ('Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt', '12')";
				
				if(mysqli_query($con, $sql)) {
					echo "Insertion completed successfully";
				}
				else {
					echo "Error intserting: " . mysqli_error($con);
				}
		}
		
		public function chooser($id) {
			if($id == "12") {
				$this->getItems($id);
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
	 		} 
		}
 		
	}	
	
	
	
	
?>