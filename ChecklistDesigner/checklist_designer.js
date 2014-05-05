
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



function setTitle(title){
	titleBox = document.getElementById('title');
	titleBox.innerHTML = title;
}

function makeContextMenus(){
	makeTitleContextMenu();
	makeItemContextMenu();
	makeInstructionsContextMenu();
	makeSidebarContextMenu();
}



//	Context menu for the Title

function makeTitleContextMenu(){
	$(function(){
	    $.contextMenu({
	        selector: '#title', 
	        callback: function(key, options){
	        	switch(key){

	        		case 'Edit Name':
	        			displayTitleInput();
	        			console.log('Edit Name Case');
	        			break;

	        		case 'New Element':
	        			addNewElement();
	        			console.log('New Element Case');
	        			break;

	        		case 'Delete Topic':
	        			deleteCurrentTopic();
	        			console.log('Delete Topic');
	        			break;

	        		default:
	        			console.log('Case Not Identified');
	        			break;
	        	};
			},
	        items: {
	            "Edit Name": {name: "Edit Name", icon: "edit"},
	            "New Element": {name: "New Element", icon: "add"},
	            "Delete Topic": {name: "Delete Topic", icon: "delete"}
	        }
	    });
	});
}

function displayTitleInput(){
	title = $('#title')[0];
	titleText = title.innerHTML;
	title.innerHTML = '';
	title.classList.add('focused');

	titleEntry = document.createElement('input');
	titleEntry.type = 'text';
	titleEntry.value = titleText;
	title.appendChild(titleEntry);

	globalDivCover = document.createElement('div');
	globalDivCover.id = 'coverDiv';
	$('#everything').append(globalDivCover);

	$(globalDivCover).click(function(){
		titleEntry.remove();
		$('.focused').removeClass('focused');
		currentTopic['name'] = titleEntry.value;
		initializeSideBar();
		displayChecklistItem();
		document.getElementById('coverDiv').remove();
	});	
}

function addNewElement(){
	currentTopic['elements'].push(newElement());
	displayChecklistItem(currentTopic);
}

function deleteCurrentTopic(){
	topicIndex = database.indexOf(currentTopic);
	database.splice(topicIndex, 1);
	initializeSideBar();
	console.log($('#title'));
	$('#title')[0].innerHTML = 'Welcome!';
	$('#checklist')[0].innerHTML = '';
}


//	Context menu for items

function makeItemContextMenu(){
	$(function(){
		$.contextMenu({
			selector: '.nameAndDate:not(.focused)',
			callback: function(key, options){
				switch(key){
					case 'Change Heading':
						displayItemHeadingInputs(this[0]);
						break;
					case 'New Instructions':
						addNewInstruction(this[0]);
						console.log('New Instrucions')
						break;
					case 'Delete Element':
						deleteElement(this[0]);
						console.log('deleting');
						break;
				};
			},
			items: {
				'Change Heading': {name: "Change Heading", icon: 'edit'},
				'New Instructions': {name: "New Instructions", icon: 'add'},
				'Delete Element': {name: "Delete Element", icon: 'delete'}
			}
		});
	});
}

function displayItemHeadingInputs(item){
	item.classList.add('focused');
	elementIndex = ($(item).parents('.item').index());
	$(item).css('z-index', 1000);
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

	$(globalDivCover).click(function(){
		item.remove();
		$('.focused').removeClass('focused');
		currentTopic['elements'][elementIndex]['name'] = nameEntry.value;
		currentTopic['elements'][elementIndex]['due'] = dateEntry.value;
		displayChecklistItem();
		document.getElementById('coverDiv').remove();
	});
}

function addNewInstruction(element){
	insList = $(element).parents('.item')[0];
	elementIndex = $(insList).index();
	currentTopic['elements'][elementIndex]['text'].push('New Instruction');
	displayChecklistItem();
}


function deleteElement(element){
	elementIndex = $(element).parents('.item').index();
	currentTopic['elements'].splice(elementIndex, 1);
	displayChecklistItem();
}


function makeInstructionsContextMenu(){
	$(function(){
		$.contextMenu({
			selector: '.itemText:not(.focused)',
			callback: function(key, options){
				switch(key){
					case 'Edit Text':
						displayInstructionsInputs(this[0]);
						break;
					case 'Delete':
						deleteInstruction(this[0]);
						console.log('deleting');
						break;
				};
			},
			items: {
				'Edit Text': {name: "Edit Text", icon: 'edit'},
				'Delete': {name: "Delete", icon: 'delete'}
			}
		});
	});
}



function displayInstructionsInputs(ins){
	console.log(ins);
	insIndex = $(ins).index();
	elementIndex = ($(ins).parents('.item').index());
	$(ins).css('z-index', 1000);
	// Global div cover (z index = 999)
	globalDivCover = document.createElement('div');
	globalDivCover.id = 'coverDiv';
	$(globalDivCover).css('z-index', 999);
	$('#everything').append(globalDivCover);

	text = ins.innerHTML;
	ins.innerHTML = '';

	textEntry = document.createElement('input');
	textEntry.type = 'text';
	textEntry.value = text;
	textEntry.classList.add('focused');
	ins.appendChild(textEntry);

	$(globalDivCover).click(function(){
		ins.remove();
		$('.focused').removeClass('focused');
		currentTopic['elements'][elementIndex]['text'][insIndex] = textEntry.value;
		displayChecklistItem();
		$(ins).unbind('click');
		document.getElementById('coverDiv').remove();
	});
}

function deleteInstruction(ins){
	insIndex = $(ins).index();
	elementIndex = ($(ins).parents('.item').index());
	currentTopic['elements'][elementIndex]['text'].splice(insIndex, 1);
	displayChecklistItem();
}


function makeSidebarContextMenu(){
	$(function(){
		$.contextMenu({
			selector: '#leftside',
			callback: function(key, options){
				switch(key){
					case 'New Topic':
						newT = newTopic();
						//This is where you will need to find a way to give the topic an ID.
						database.push(newTopic());
						initializeSideBar();
						console.log('New Topic');
						break;
				};
			},
			items: {
				'New Topic': {name: "New Topic", icon: 'add'}
			}
		});
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
	//setInstructionsCallback();

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

Known Bugs:
	Fix inputs on INSTRUCTIONS and on TITLE. There appears to be an issue with how the covering div'z Z-index
	is behaving. It's lower then the input's z-index, but is still covering it for some reason.

	When you add a new topic to the sidebar, the highlight disappears.
*/


/*

Things to do in the future:
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