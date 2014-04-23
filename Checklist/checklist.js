database ={
	"Housing": 	[['Sign Housing Contract', 'Some relevant due date', 'Sign the housing contract found on <a href="https://www.spire.umass.edu">Spire</a>', 'Log on and then select the Main Menu tab, then the Housing tab', 'The Residential Hall Contract will be found here'],
				['Complete the Roommate Preference Form', 'Some relevant date', 'Log on to <a href="https://www.spire.umass.edu">Spire</a> ', 'You will find the "Preference Application" in the same tab the above', 'this is also more text'],
				['Request an appointment', 'date', 'this is text for this thing', 'this is more text', 'this is also more text'],
				['name', 'date', 'this is text for this thing', 'this is more text', 'this is also more text'],
				['name', 'date', 'this is text for this thing', 'this is more text', 'this is also more text']],
	"Registration": [['name', 'date', 'this is text for this thing', 'this is more text', 'this is also more text'],
				['name', 'date', 'this is text for this thing', 'this is more text', 'this is also more text']],
	"Financial Aid": [['Apply to Fafsa', 'date', 'this is text for this thing', 'this is more text', 'this is also more text'],
				['name', 'date', 'this is text for this thing', 'this is more text', 'this is also more text']],
	"Future Milestones": [['name', 'date', 'this is text for this thing', 'this is more text', 'this is also more text'],
				['name', 'date', 'this is text for this thing', 'this is more text', 'this is also more text']],
	"Future Milestones": [['name', 'date', 'this is text for this thing', 'this is more text', 'this is also more text'],
				['name', 'date', 'this is text for this thing', 'this is more text', 'this is also more text']],
	"Future Milestones": [['name', 'date', 'this is text for this thing', 'this is more text', 'this is also more text'],
				['name', 'date', 'this is text for this thing', 'this is more text', 'this is also more text']],
	"Future Milestones": [['name', 'date', 'this is text for this thing', 'this is more text', 'this is also more text'],
				['name', 'date', 'this is text for this thing', 'this is more text', 'this is also more text']],
    "Future Milestones": [['name', 'date', 'this is text for this thing', 'this is more text', 'this is also more text'],
        ['name', 'date', 'this is text for this thing', 'this is more text', 'this is also more text']],
    "Future Milestones": [['name', 'date', 'this is text for this thing', 'this is more text', 'this is also more text'],
        ['name', 'date', 'this is text for this thing', 'this is more text', 'this is also more text']],
    "Future Milestones": [['name', 'date', 'this is text for this thing', 'this is more text', 'this is also more text'],
        ['name', 'date', 'this is text for this thing', 'this is more text', 'this is also more text']],
    "Future Milestones": [['name', 'date', 'this is text for this thing', 'this is more text', 'this is also more text'],
        ['name', 'date', 'this is text for this thing', 'this is more text', 'this is also more text']],
    "Future Milestones": [['name', 'date', 'this is text for this thing', 'this is more text', 'this is also more text'],
        ['name', 'date', 'this is text for this thing', 'this is more text', 'this is also more text']],
    "Future Milestones": [['name', 'date', 'this is text for this thing', 'this is more text', 'this is also more text'],
        ['name', 'date', 'this is text for this thing', 'this is more text', 'this is also more text']],
    "Future Milestones": [['name', 'date', 'this is text for this thing', 'this is more text', 'this is also more text'],
        ['name', 'date', 'this is text for this thing', 'this is more text', 'this is also more text']],
    "Future Milestones": [['name', 'date', 'this is text for this thing', 'this is more text', 'this is also more text'],
        ['name', 'date', 'this is text for this thing', 'this is more text', 'this is also more text']],
    "Future Milestones": [['name', 'date', 'this is text for this thing', 'this is more text', 'this is also more text'],
        ['name', 'date', 'this is text for this thing', 'this is more text', 'this is also more text']],
    "Future Milestones": [['name', 'date', 'this is text for this thing', 'this is more text', 'this is also more text'],
        ['name', 'date', 'this is text for this thing', 'this is more text', 'this is also more text']],
    "Future Milestones": [['name', 'date', 'this is text for this thing', 'this is more text', 'this is also more text'],
        ['name', 'date', 'this is text for this thing', 'this is more text', 'this is also more text']],
    "Future Milestones": [['name', 'date', 'this is text for this thing', 'this is more text', 'this is also more text'],
        ['name', 'date', 'this is text for this thing', 'this is more text', 'this is also more text']]

			}


function initializeSideBar(database){
	
	sidebar = document.getElementById("sidebar")
	sidebarMenu = document.createElement("ul");
	sidebarMenu.setAttribute("id", "sidebarMenu");

	for (entry in database){
		var menuItem = document.createElement("li");
		menuItem.innerHTML = entry;
		menuItem.classList.add('sidebarItem')
		sidebarMenu.appendChild(menuItem);
	}

	sidebar.appendChild(sidebarMenu);
}

function setTitle(title){
	titleBox = document.getElementById('title');
	titleBox.innerHTML = title;
}



function displayChecklistItem(checklistItem){
	var checklistDiv = document.getElementById('checklist');
	while(checklistDiv.firstChild){
		checklistDiv.removeChild(checklistDiv.firstChild);
	}

	var checklist = document.createElement('ul');
	var current = database[checklistItem];
	for (var i=0; i<current.length; i++){
		singleItem = current[i];

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
		nameBox.innerHTML = singleItem[0];
		nameAndDateBox.appendChild(nameBox);

		//DATE BOX
		dateBox = document.createElement('div');
		dateBox.classList.add('dateBox');
		dateBox.innerHTML = singleItem[1];
		nameAndDateBox.appendChild(dateBox);

		//Finalizing the heading and adding it to the item
		itemHeadingBox.appendChild(checkBox);
		itemHeadingBox.appendChild(nameAndDateBox);
		box.appendChild(itemHeadingBox);

		//INSTRUCTIONS BOX
		instructionsBox = document.createElement('div');
		instructionsBox.classList.add('instructionsBox');

		instructionsList = document.createElement('ul');
		for (var j=2; j<singleItem.length; j++){
			nextInstruction = document.createElement('li');
			nextInstruction.innerHTML = singleItem[j];
			instructionsList.appendChild(nextInstruction);
		}
		instructionsBox.appendChild(instructionsList);
		box.appendChild(instructionsBox);

		listItem.appendChild(box);
		checklist.appendChild(listItem);
	}
	checklistDiv.appendChild(checklist);
	setTitle(checklistItem);
	
}


$(document).ready(function(){
	initializeSideBar(database);

	$("#sidebarMenu>li").click(function(){
		var that = $(this);
		var sel = $("#sidebarMenu>li.selected");
		if (sel.length!=0){
			sel.removeClass("selected")
		}
		while (that.firstChild) {
    		that.removeChild(that.firstChild);
    	}

		this.classList.add("selected");
		displayChecklistItem(this.innerHTML);

	});

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

Prevent highlighting on the 

Scroll bar to indicate the items are scrollable

*/
