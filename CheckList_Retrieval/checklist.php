<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title></title>
<script src="jquery-1.11.0.min.js"></script>

<script type="text/javascript">

$(document).ready(function() {
			
			$.ajax({                                      
			  url: 'test.php', 
			  data: "", 
			  dataType: 'json',  
			  success: function(data)        
			  {
		
			    for (var i in data)
			    {         
			      $('#info').append("<b>id: </b>"+ data[i].Age +"<b> name: </b>"+ data[i].Item + "<br />");
			    }
				
			   
			  } 
			});

});
</script>
<link href="css/style.css" rel="stylesheet" type="text/css" />
</head>
<body>
<div class="content_wrapper">
	<div id="left">
		<ul id="info">
		</ul>
	</div>

</div>

</body>
</html>
