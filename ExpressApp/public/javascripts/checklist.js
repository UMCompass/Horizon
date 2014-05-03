
colorDatabase = {
	'sidebarMain': "rgba(128, 0, 0, 1)",
	'sidebarHighlight' : "rgba(255,204,0,1)",
	'sidebarNoHilight' : 'rgba(0,0,0,0)',
	'sidebarTextNoHighlight': "rgba(0,0,0,1)",
	'sidebarTextHighlight': "rgba(255,255,255,1)",


	'centerMain' : "rgba(255,255,255,1)",
	'centerText' : "rgba(255,255,255,1)",
	'centerDate' : "rgba(80,80,80, 1)"

};

var theList;

function initializeSideBar(chlist){
	
	sidebar = document.getElementById("sidebar");
	sidebarMenu = document.createElement("ul");
	sidebarMenu.setAttribute("id", "sidebarMenu");

	for (var i =0; i < chlist.length; i++){
		var hrefTagging = document.createElement("a");
		hrefTagging.setAttribute('onclick', 'display('+i+');');
		var menuItem = document.createElement("li");
		menuItem.innerHTML = chlist[i].name;
		menuItem.classList.add('sidebarItem');

		hrefTagging.appendChild(menuItem);
		sidebarMenu.appendChild(hrefTagging);
	}

	sidebar.appendChild(sidebarMenu);
}

function setTitle(title){
	titleBox = document.getElementById('title');
	titleBox.innerHTML = title;
}


function setColors(colors){
	document.getElementById('leftside').style.background = colorDatabase['sidebarMain'];
	document.getElementById('center').style.background = colorDatabase['centerMain'];
}


function displayChecklistItem(checklistItem, i){
	var checklistDiv = document.getElementById('checklist');
	while(checklistDiv.firstChild){
		checklistDiv.removeChild(checklistDiv.firstChild);
	}

	var checklist = document.createElement('ul');

	//checklistItem is an array
	//Contains:
	//sidebar item name and checklist (which contains an array of item names and corresponding text for each item) 

	//INDIVIDUAL ITEM
	listItem = document.createElement('li');
	listItem.classList.add('item');
	listItem.classList.add('unchecked');

	box = document.createElement('div');

	//ITEM HEADING BOX
	itemHeadingBox = document.createElement('div');
	itemHeadingBox.classList.add('itemHeadingBox');

	//CHECKBOX
	checkBox = document.createElement('div');
	checkBox.classList.add('checkbox');
	checkBox.innerHTML = '\u2713';
	box.appendChild(checkBox);

	//NAME AND DATE BOX
	nameAndDateBox = document.createElement('div');
	nameAndDateBox.classList.add('nameAndDate');

	//NAME BOX
	nameBox = document.createElement('div');
	nameBox.classList.add('nameBox');
	console.log("Name Box: " + checklistItem.Checklist[i].name)
	nameBox.innerHTML = checklistItem.Checklist[i].name;
	nameAndDateBox.appendChild(nameBox);

	//DATE BOX
	dateBox = document.createElement('div');
	dateBox.classList.add('dateBox');
	dateBox.innerHTML = checklistItem.Checklist[i].name;
	nameAndDateBox.appendChild(dateBox);

	//Finalizing the heading and adding it to the item
	itemHeadingBox.appendChild(checkBox);
	itemHeadingBox.appendChild(nameAndDateBox);
	box.appendChild(itemHeadingBox);

	//INSTRUCTIONS BOX
	instructionsBox = document.createElement('div');
	instructionsBox.classList.add('instructionsBox');

	instructionsList = document.createElement('ul');
	for (var j=0; j <3; j++){
		nextInstruction = document.createElement('li');
		nextInstruction.innerHTML = checklistItem.Checklist[i].text[j];
		instructionsList.appendChild(nextInstruction);
	}
	instructionsBox.appendChild(instructionsList);
	box.appendChild(instructionsBox);

	listItem.appendChild(box);
	checklist.appendChild(listItem);
	
	checklistDiv.appendChild(checklist);
	setTitle(checklistItem.name);
	
}

function setList(x) {
	theList = x; 
}

function display(index) {

	var that = $(this);
		var sel = $("#sidebarMenu>li.selected");
		if (sel.length!=0){
			sel.css('background-color', colorDatabase['sidebarNoHilight']);
			sel.removeClass("selected");
		}

		while (that.firstChild) {
    		that.removeChild(that.firstChild);
    	}

    	var i = 0;
    	while(theList[index].Checklist[i] != undefined) {
    		displayChecklistItem(theList[index], i);
    		i++;
    	}
		
}

$(document).ready(function(){

	//AJAX call to retrieve checklist data
	//Returned: data returned in the form of an array

	$.get( '/retrieve', function(data) {

		console.log(data[0].name);
 		var list = data;
 		setList(list); // Set global list variable
 		initializeSideBar(list);	
 	});

	setColors(colorDatabase);

	/*$("#sidebarMenu>li").click(function(){
		var that = $(this);
		var sel = $("#sidebarMenu>li.selected");
		if (sel.length!=0){
			sel.css('background-color', colorDatabase['sidebarNoHilight']);
			sel.removeClass("selected");
		}

		while (that.firstChild) {
    		that.removeChild(that.firstChild);
    	}

		this.classList.add("selected");
		this.style.background = colorDatabase['sidebarHighlight'];
		displayChecklistItem(0);

	});*/

	// Hovering over topics in the sidebar
	$("#sidebarMenu>li").on("mouseover", function(){
		this.color = "black";
	});

	// Clicking on checkboxes
	$(document).on('click', '.checkbox', function(){
		item = $(this).parents('.item');
		if (item.hasClass('unchecked')){
			item.removeClass('unchecked');
			item.addClass('checked');
		}
		else{
			item.removeClass('checked');
			item.addClass('unchecked');
		}
	});


});

/*

Display 3/5 or the like to show how much a certain topic is completed

Set the mouse icon for its different hovers

Turn mouse into a checkmark when hovering over the checkbox?

Collapse items that are "completed" and after their "data", say "complete"

Prevent highlighting on the checkboxk

Highlight checkbox when you hover over

Scroll bar to indicate the items are scrollable


*/