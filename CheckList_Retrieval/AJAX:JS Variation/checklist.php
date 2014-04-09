<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title></title>
<script src="jquery-1.11.0.min.js"></script>

<script type="text/javascript">

$(document).ready(function() {
			
			$.ajax({
				type: 'post',
			  url: 'test.php', 
			  data: {regs: "success"}, 
			  dataType: 'json',  
			  success: function(data)        
			  {
		
			    for (var i in data)
			    {         
			      $('#info').append("<b>id: </b>"+ data[i].Age +"<b> name: </b>"+ data[i].Item + "<br />");
			    }
				
			   
			  } 
			});
			
			
			$("#info").on("click", function(e) {
			        e.preventDefault();
					
					$.ajax({
						type: 'post',
					  url: 'test.php', 
					  data: {regs: "success"}, 
					  dataType: 'json',  
					  success: function(data)        
					  {
		
					    for (var i in data)
					    {         
					      $('#linked').append("<li id="+data[i].Age+"><b>id: </b>"+ data[i].Age +"<b> name: </b>"+ data[i].Item + "</li>");
					    }
				
			   
					  } 
					});
					
			});
			
			$("ul").on("click", function(e) {
			        e.preventDefault();
					
					var idd = $("li")[0].id;
					var stuff = $('#'+idd);
					var that = stuff;
					
						
								$('#single').append(that);
						
					
			});

});
</script>
<style>

#linked {
	width: 300px;
	position: relative;
	height: 100px;
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
		<ul id="single">
		</ul>
	</div>

</div>

</body>
</html>
