var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");
var deleteBtn = document.getElementsByClassName("delete");

//get input string's length
function inputLength() {
	return input.value.length;
}

//add a new element to the list and empty the input area
function createListElement() {
	
	var liItem = document.createElement("li");
	liItem.appendChild(document.createTextNode(input.value + " "));
	ul.appendChild(liItem);
	createDeleteButton();
	// toggle and delete funtions for new adding item
	changeList();
	input.value = "";
}

//create a new button for delete the element
function createDeleteButton() {
	var deleteButton = document.createElement("button");
	deleteButton.appendChild(document.createTextNode("Delete"));
	deleteButton.classList.add("btn","btn-sm","btn-outline-danger","delete","non-display");
	li[li.length-1].appendChild(deleteButton);
}


function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}


function processGroupItems(tag, event, action){
	for(var i=0; i < li.length; i++){
		tag[i].addEventListener(event, action);
	}
}

function toggleOnOff(){
	this.classList.toggle("done");
}

function deleteItem(){
	var child = document.activeElement.parentNode;
	ul.removeChild(child);
}

function toggleBtn(){
	var btn = this.children[0];
	btn.classList.toggle("non-display");
}

function changeList(){
	processGroupItems(li, "click", toggleOnOff);
	processGroupItems(deleteBtn, "click", deleteItem);
	processGroupItems(li, "mouseover", toggleBtn);
	processGroupItems(li, "mouseout", toggleBtn);
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

changeList();






