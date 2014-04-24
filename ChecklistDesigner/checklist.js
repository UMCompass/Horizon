
database = [
	{
		'idNum' : '001',
		'name' : 'topic1',
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
		'name' : 'topic2',
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
		'name' : 'topic3',
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
	'sidebarMain': '#800000',
	'sidebarHighlight' : '#FFCC00',
	'sidebarTextNoHighlight': "#000000",
	'sidebarTextHighlight': "#FFFFFF",

	'centerMain' : "#FFFFFF",
	'centerText' : "#FFFFFF",
	'centerDate' : "#505050"
};

staticColors = {
	'sidebarNoHilight' : 'rgba(0,0,0,0)'
}

function initializeColorButton(){
	leftside = document.getElementById("leftside");
	editColorsButton = document.createElement("div");
	editColorsButton.id = 'editColorsButton';
	editColorsButton.innerHTML = 'Color Pallette';

	$(document).on('click', '#editColorsButton', function(){
		displayColorMenu(colorDatabase);
	});

	leftside.appendChild(editColorsButton);
}


function displayColorMenu(colors){
	var coverDiv = document.createElement("div");
	coverDiv.id = 'coverDiv';
	var everything = document.getElementById("everything");
	everything.appendChild(coverDiv);

	var colorMenu = document.createElement('div');
	colorMenu.id = 'colorMenu';
	var colorList = document.createElement('ul');
	colorList.id = 'colorList';

	for(entry in colorDatabase){
		var colorItem = document.createElement('li');
		var nextColor = document.createElement('div');
		nextColor.classList.add('colorChooserDiv');
		var colorName = document.createElement('div');
		colorName.innerHTML = entry
		colorName.classList.add('colorName');
		colorItem.appendChild(colorName);


		var chooser = document.createElement('input');
		chooser.classList.add('color');
		chooser.value = colors[nextColor.innerHTML];

		nextColor.appendChild(chooser);
		colorItem.appendChild(nextColor)
		colorList.appendChild(colorItem);
	}
	colorMenu.appendChild(colorList);
	coverDiv.appendChild(colorMenu);
	jscolor.init();

	$(document).on('click', '#coverDiv', function(){

		var colorList = document.getElementById('colorList');
		var items = colorList.getElementsByClassName('colorChooserDiv');
		
		for (var i=0; i<items.length; i++){
			console.log(items[i].innerHTML);
		}

		cover = document.getElementById('coverDiv');
		document.getElementById('everything').removeChild(cover);
	})

	$(document).on('click', '#colorMenu', function(){
		return false;
	})

}


function initializeSideBar(database){	
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

		displayChecklistItem(that);

	});

		// Right-click on sidebar elements
	$("#sidebarMenu>li").on("contextmenu",function(e){
		e.preventDefault();
		var topic = this.getElementsByClassName('menuItemContents')[0].innerHTML
		var newName = prompt('Enter the new topic name', topic);
		//TODO: the condition should make sure there are no other topics with the same name
		if (newName!=null && newName!=''){
			topicIndex = $(this).index();
			database[topicIndex]['name'] = newName;
			initializeSideBar(database);
	   }
	});

}

function setTitle(title){
	titleBox = document.getElementById('title');
	titleBox.innerHTML = title;
}


function setColors(colors){
	document.getElementById('leftside').style.background = colorDatabase['sidebarMain'];
	document.getElementById('center').style.background = colorDatabase['centerMain'];
}


function displayChecklistItem(checklistItem){
	var checklistDiv = document.getElementById('checklist');
	while(checklistDiv.firstChild){
		checklistDiv.removeChild(checklistDiv.firstChild);
	}
	var checklist = document.createElement('ul');
	var topicIndex = checklistItem.index();
	var current = database[topicIndex];
	for (var i=0; i<current['elements'].length; i++){
		singleElement = current['elements'][i];
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
		singleElement['checked'] ? checkBox.classList.add('checked') : checkBox.classList.add('unchecked');

		box.appendChild(checkBox);

		//NAME AND DATE BOX
		nameAndDateBox = document.createElement('div');
		nameAndDateBox.classList.add('nameAndDate');

		//NAME BOX
		nameBox = document.createElement('div');
		nameBox.classList.add('nameBox');
		nameBox.innerHTML = singleElement['name'];
		nameAndDateBox.appendChild(nameBox);

		//DATE BOX
		dateBox = document.createElement('div');
		dateBox.classList.add('dateBox');
		dateBox.innerHTML = singleElement['due'];
		nameAndDateBox.appendChild(dateBox);

		//Finalizing the heading and adding it to the item
		itemHeadingBox.appendChild(checkBox);
		itemHeadingBox.appendChild(nameAndDateBox);
		box.appendChild(itemHeadingBox);

		//INSTRUCTIONS BOX
		instructionsBox = document.createElement('div');
		instructionsBox.classList.add('instructionsBox');

		instructionsList = document.createElement('ul');
		for (var j=0; j<singleElement['text'].length; j++){
			nextInstruction = document.createElement('li');
			nextInstruction.innerHTML = singleElement['text'][j];
			instructionsList.appendChild(nextInstruction);
		}
		instructionsBox.appendChild(instructionsList);
		box.appendChild(instructionsBox);

		listItem.appendChild(box);
		checklist.appendChild(listItem);
	}
	checklistDiv.appendChild(checklist);
	setTitle(current['name']);
	
}


$(document).ready(function(){
	initializeColorButton();
	initializeSideBar(database);
	setColors(colorDatabase);


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

Collapse items that are "completed" 

Items that are completed should say if after their due date

Prevent highlighting on the checkboxk

Highlight checkbox when you hover over

Scroll bar to indicate the items are scrollable

Animate the overflow of of the sidebar topics

*/