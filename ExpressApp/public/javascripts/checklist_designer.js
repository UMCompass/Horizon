
database = [
	{
		'idNum' : '001',
		'name' : 'Housing',
		'elements' : [
			{ 'name': 'Select Housing',
			'due' : '3/28',
			'checked' : false,
			'text' : ['This is text.', 'This is also text.', 'Most importantly, this is text.']
			},
			{ 'name': 'Sign Housing Contract',
			'due' : 'due date',
			'checked' : false,
			'text' : ['This is text.', 'This is also text.', 'Most importantly, this is text.']
			},
			{ 'name': 'element3',
			'due' : 'due date',
			'checked' : false,
			'text' : ['This is text.', 'This is also text.', 'Most importantly, this is text.']
			},
			{ 'name': 'element4',
			'due' : 'due date',
			'checked' : false,
			'text' : ['This is text.', 'This is also text.', 'Most importantly, this is text.']
			},
			{ 'name': 'element5',
			'due' : 'due date',
			'checked' : false,
			'text' : ['This is text.', 'This is also text.', 'Most importantly, this is text.']
			}
		]
	},

	{
		'idNum' : '002',
		'name' : 'Bursars',
		'elements' : [
			{ 'name': 'element1',
			'due' : 'due date',
			'checked' : false,
			'text' : ['This is text.', 'This is also text.', 'Most importantly, this is text.']
			},
			{ 'name': 'element2',
			'due' : 'due date',
			'checked' : false,
			'text' : ['This is text.', 'This is also text.', 'Most importantly, this is text.']
			},
			{ 'name': 'element3',
			'due' : 'due date',
			'checked' : false,
			'text' : ['This is text.', 'This is also text.', 'Most importantly, this is text.']
			}
		]
	},

	{
		'idNum' : '003',
		'name' : 'Financial Aid',
		'elements' : [
			{ 'name': 'element1',
			'due' : 'due date',
			'checked' : false,
			'text' : ['This is text.', 'This is also text.', 'Most importantly, this is text.']
			},
			{ 'name': 'element2',
			'due' : 'due date',
			'checked' : false,
			'text' : ['This is text.', 'This is also text.', 'Most importantly, this is text.']
			},
			{ 'name': 'element3',
			'due' : 'due date',
			'checked' : false,
			'text' : ['This is text.', 'This is also text.', 'Most importantly, this is text.']
			}
		]
	},

	{
		'idNum' : '004',
		'name' : 'topic4',
		'elements' : [
			{ 'name': 'element1',
			'due' : 'due date',
			'checked' : false,
			'text' : ['This is text.', 'This is also text.', 'Most importantly, this is text.']
			},
			{ 'name': 'element2',
			'due' : 'due date',
			'checked' : false,
			'text' : ['This is text.', 'This is also text.', 'Most importantly, this is text.']
			},
			{ 'name': 'element3',
			'due' : 'due date',
			'checked' : false,
			'text' : ['This is text.', 'This is also text.', 'Most importantly, this is text.']
			}
		]
	}
]


colorDatabase = {
	'leftside': '#800000',
	'sidebarHighlight' : '#FFCC00',
	'sidebarTextNoHighlight': "#000000",
	'sidebarTextHighlight': "#FFFFFF",

	'centerMain' : "#FFFFFF",
	'centerText' : "#FFFFFF",
	'centerDate' : "#505050"
};

staticColors = {
	'sidebarNoHilight' : 'rgba(0,0,0,0)'
};

currentTopic = null;


function initializeSideBar(){	
	sidebar = document.getElementById("sidebar");
	sidebar.innerHTML = '';

	sidebarMenu = document.createElement("ul");
	sidebarMenu.setAttribute("id", "sidebarMenu");

	for (var i = 0; i<database.length; i++){
		var menuItem = document.createElement("li");
		menuItem.classList.add('sidebarItem');
		menuItem.id = database[i]['idNum'];

		var menuItemContents = document.createElement("div");
		menuItemContents.classList.add('menuItemContents');
		menuItemContents.innerHTML = database[i]['name'];
		menuItem.appendChild(menuItemContents);
		sidebarMenu.appendChild(menuItem);
	}

	sidebar.appendChild(sidebarMenu);

	$("#sidebarMenu>li").click(function(){
		var that = $(this);
		var sel = $("#sidebarMenu>li.selected");
		if (sel.length!=0){
			sel.css('background-color', staticColors['sidebarNoHilight']);
			sel.removeClass("selected");
		}

		while (that.firstChild) {
    		that.removeChild(that.firstChild);
    	}

		this.classList.add("selected");
		this.style.background = colorDatabase['sidebarHighlight'];
		currentTopic = database[that.index()];
		displayChecklistItem(currentTopic);
	});

		// Right-click on sidebar topics
	$("#sidebarMenu>li").on("contextmenu",function(e){
		//e.preventDefault();
		var topic = this.getElementsByClassName('menuItemContents')[0].innerHTML;
		var newName = prompt('Enter the new topic name', topic);
		//TODO: the condition should make sure there are no other topics with the same name
		if (newName!=null && newName!=''){
			topicIndex = $(this).index();
			database[topicIndex]['name'] = newName;
			initializeSideBar(database);
	   }
	});
}


function displayChecklistItem(){
	// Retrieve from the database the topic that was seleted.
	checklistDiv = $('#checklist');
	checklistDiv.empty()
	var checklist = document.createElement('ul');
	for (var i=0; i<currentTopic['elements'].length; i++)
	{
		currentElement = currentTopic['elements'][i];
		//INDIVIDUAL ELEMENTS
		listItem = document.createElement('li');
		listItem.classList.add('item');
		if (currentTopic['elements'][i]['checked']){
			listItem.classList.add('checked');
		}

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
		nameBox.innerHTML = currentElement['name'];
		nameAndDateBox.appendChild(nameBox);

		//DATE BOX
		dateBox = document.createElement('div');
		dateBox.classList.add('dateBox');
		dateBox.innerHTML = currentElement['due'];
		nameAndDateBox.appendChild(dateBox);

		//Finalizing the heading and adding it to the item
		itemHeadingBox.appendChild(checkBox);
		itemHeadingBox.appendChild(nameAndDateBox);
		box.appendChild(itemHeadingBox);

		//INSTRUCTIONS BOX
		instructionsBox = document.createElement('div');
		instructionsBox.classList.add('instructionsBox');

		instructionsList = document.createElement('ul');
		instructionsList.classList.add('instructionsList');
		for (var j=0; j<currentElement['text'].length; j++){
			nextInstruction = document.createElement('li');
			nextInstruction.innerHTML = currentElement['text'][j];
			nextInstruction.classList.add('itemText');
			instructionsList.appendChild(nextInstruction);
		}
		instructionsBox.appendChild(instructionsList);
		box.appendChild(instructionsBox);

		listItem.appendChild(box);
		checklist.appendChild(listItem);
	}
	checklistDiv.append(checklist);
	setTitle(currentTopic['name']);
}


function newTopic(){
	return {
		'idNum' : '',
		'name' : 'New Topic',
		'elements' : []
	};
}

function newElement(){
	return { 'name': 'New Element',
		'due' : 'Due Date',
		'checked' : false,
		'text' : []
	};
}


function addNewElement(){
	currentTopic['elements'].push(newElement());
	displayChecklistItem(currentTopic);
}


function changeElementName(element, topicIndex, database, checklistItem){
	var newName = prompt('Enter the new topic name', this.innerHTML);
	if (newName!=null && newName!=''){
		nameIndex = $($(element).closest('.item')).index();
		database[topicIndex]['elements'][nameIndex]['name'] = newName;
		displayChecklistItem(checklistItem);
	}
}

function setTitle(title){
	titleBox = document.getElementById('title');
	titleBox.innerHTML = title;
}

//Context menu
function makeTitleContextMenu(){
	$(function(){
	    $.contextMenu({
	        selector: '#title', 
	        callback: function(key, options){
	        	switch(key){

	        		case 'Font Color':
	        			console.log('Font Color Case');
	        			break;

	        		case 'New Element':
	        			addNewElement();
	        			console.log('New Element Case');
	        			break;

	        		default:
	        			console.log('Case Not Identified');
	        			break;
	        	};
			},
	        items: {
	            "Font Color": {name: "Font Color", icon: "edit"},
	            "New Element": {name: "New Element", icon: "add"}
	        }
	    });
	});
}

function makeItemContextMenu(){
	$(function(){
		$.contextMenu({
			selector: '.nameAndDate:not(.focused)',
			callback: function(key, options){
				switch(key){
					case 'Change Heading':
						console.log('Change Heading');
						console.log(this[0]);
						displayItemHeadingInputs(this[0]);
						break;
					case 'Delete Element':
						console.log('deleting');
				};
			},
			items: {
				'Change Heading': {name: "Change Heading", icon: 'edit'},
				'Deleve': {name: "Delete Element", icon: 'edit'}
			}
		});
	});
}

function makeContextMenus(){
	makeTitleContextMenu();
	makeItemContextMenu();
}

function setElementHeadingsCallback(){
	$(document).on('click', '.nameAndDate:not(.focused)', displayItemHeadingInputs);
}

function setInstructionsCallback(){
	$(document).on('click', '.itemText:not(.focused)', displayInstructionsInputs);
}

function displayItemHeadingInputs(item){
	// Set the z-index of element to 1000
	console.log(item);
	item.classList.add('focused');
	elementIndex = ($(item).parents('.item').index());
	$(item).css('z-index', 1000);
	// Global div cover (z index = 999)
	globalDivCover = document.createElement('div');
	globalDivCover.id = 'coverDiv';
	$('#everything').append(globalDivCover);

	nameBox = $(item).children('.nameBox')[0];
	dateBox = $(item).children('.dateBox')[0];

	elementName = nameBox.innerHTML;
	elementDate = dateBox.innerHTML;
	nameBox.innerHTML = '';
	dateBox.innerHTML = '';

	nameEntry = document.createElement('input');
	nameEntry.type = 'text';
	nameEntry.value = elementName;
	nameBox.appendChild(nameEntry);

	dateEntry = document.createElement('input');
	dateEntry.type = 'text';
	dateEntry.value = elementDate;
	dateBox.appendChild(dateEntry);

	$(document).on('click', '#coverDiv', function(){
		item.remove();
		$('.focused').removeClass('focused');
		currentTopic['elements'][elementIndex]['name'] = nameEntry.value;
		currentTopic['elements'][elementIndex]['due'] = dateEntry.value;
		displayChecklistItem();
		document.getElementById('coverDiv').remove();
	});

	// change text to input boxes
}


function displayInstructionsInputs(){
	thisIndex = $(this).index();
	elementIndex = ($(this).parents('.this').index());
	$(this).css('z-index', 1000);
	// Global div cover (z index = 999)
	globalDivCover = document.createElement('div');
	globalDivCover.id = 'coverDiv';
	$(globalDivCover).css('z-index', 999);
	$('#everything').append(globalDivCover);

	text = this.innerHTML;
	this.innerHTML = '';

	textEntry = document.createElement('input');
	textEntry.type = 'text';
	textEntry.value = text;
	textEntry.classList.add('focused');
	//textEntry.style.zIndex = '1000';
	this.appendChild(textEntry);

	$(globalDivCover).click(function(){
		this.remove();
		$('.focused').removeClass('focused');
		currentTopic['elements'][elementIndex]['text'][thisIndex] = textEntry.value;
		displayChecklistthis();
	});
}


function setColors(colors){
	document.getElementById('leftside').style.background = colorDatabase['leftside'];
	document.getElementById('center').style.background = colorDatabase['centerMain'];
}


// On loading the webpage.
$(document).ready(function(){
	initializeSideBar(database);
	setColors(colorDatabase);
	makeContextMenus();
	setInstructionsCallback();

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

Things that must be done:
	Fix item input.

*/


/*

Display 3/5 or the like to show how much a certain topic is completed

Set the mouse icon for its different hovers

Turn mouse into a checkmark when hovering over the checkbox?

Collapse items that are "completed" 

Items that are completed should say if after their due date

Prevent highlighting on the checkboxk

Highlight checkbox when you hover over

Scroll bar to indicate the items are scrollable

Animate the overflow of of the sidebar topics

Make the cover opaque when editing element info

*/