database ={
	"Bursars": "This is the text for Bursars",
	"Financial Aid": "This is the text for Financial Aid",
	"Housing": "This is the text for Housing",
	"element4": "element4 stuff",
	"element5": "element5 stuff",
	"element6": "element6 stuff",
	"element7": "element7 stuff",
	"element8": "element8 stuff",
	"element9": "element9 stuff",
	"element10": "element10 stuff",
	"element11": "element11 stuff",
	"element12": "element12 stuff",
	"element13": "element13 stuff",
	"element14": "element14 stuff",
	"element15": "element15 stuff"
}

function initializeSideBar(database){
	
	sidebar = document.getElementById("sidebar")
	sidebarMenu = document.createElement("ul");
	sidebarMenu.setAttribute("id", "sidebarMenu");

	for (entry in database){
		var menuItem = document.createElement("li");
		menuItem.innerHTML = entry;
		sidebarMenu.appendChild(menuItem);
	}

	sidebar.appendChild(sidebarMenu);
	body = document.getElementsByName("body");
	document.body.appendChild(sidebar);
}


$(document).ready(function(){
	initializeSideBar(database);

	$("#sidebarMenu>li").click(function(){
		var that = $(this);
		var sel = $("#sidebarMenu>li.selected");
		if (sel.length!=0){
			sel.removeClass("selected")
		}

		this.classList.add("selected");
	});

	$("#sidebarMenu>li").on("mouseover", function(){
		console.log("mouseover")
		this.color = "black";
	});

});
