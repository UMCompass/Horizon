<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title></title>
<script src="jquery-1.11.0.min.js"></script>

<script type="text/javascript">

function setInAction(x) {
		if(x == '10') {
			$.ajax({
			  type: 'post',
			  url: 'test.php', 
			  data: {regs: "10"}, 
			  dataType: 'json',  
			  success: function(data)        
			  {
		
			    for (var i in data)
			    {         
				 $('#linked').append("<b>Item "+(parseInt(i)+1)+": </b>"+ x +"<b> name: </b>"+ data[i].Item + "</li>" +'\n');
			    }
				
			   
			  } 
			});
		}
		
		else if(x == '12') {
					$.ajax({
					  type: 'post',
					  url: 'test.php', 
					  data: {regs: "12"}, 
					  dataType: 'json',  
					  success: function(data)        
					  {
		
					    for (var i in data)
					    {         
						 $('#linked').append("<b>Item "+(parseInt(i)+1)+": </b>"+ x +"<b> name: </b>"+ data[i].Item + "</li>" +'\n');
					    }
				
			   
					  } 
					});
				}
	}

$(document).ready(function() {
	
	
	
	function click(id) {
		
		$('#'+id).append("<li> "+ id + "</li>");
		
	}
			
			$.ajax({
			  type: 'post',
			  url: 'test.php', 
			  data: {regs: "success"}, 
			  dataType: 'json',  
			  success: function(data)        
			  {
		
			    for (var i in data)
			    {         
				 $('#info').append("<a href='#' onclick='setInAction("+data[i].Age+")'> <b> name: </b>"+ data[i].Item + "<br />");
			    }
				
			   
			  } 
			});
				
			$("#linked").on("click", function(e) {
			        e.preventDefault();
								$('#single').append($(this).attr('id'));
			}); 
			
			

});
</script>
<style>

#linked {
	width: 450px;
	position: relative;
	height: 250px;
	overflow: auto;
	background-color: beige;
	margin-left: auto;
	margin-right: auto;
	top: -220px;
	
}

#single {
	width: 300px;
	height: 100px;
	position: relative;
	overflow:auto;
	background-color: gray;
}


</style>
</head>
<body>
<div class="content_wrapper">
	<div id="left">
		<ul id="info">
		</ul>
	</div>
	
	<div id = "center">
		<ul id="linked">
		</ul>
	</div>
	
	<div id= "right">
		<ul class="single">
		</ul>
	</div>

</div>

</body>
</html>
