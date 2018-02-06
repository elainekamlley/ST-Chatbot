//set variables for different arrays of data
var classmates = ['Mark', 'Emily', 'Carolyn', 'Derek', 'JoeW', 'Rebecca', 'Zach', 'Liana', 'Kenneth', 'Bailey', 'Christine', 'Ellen', 'Joe']
var commands = ["Locate number 1","Tea, earl grey, hot", "Red alert!", "List all crew members", "Darmok and Jalad at Tanagra"]
var locations = ["in Ten Forward", "at Holodeck on deck 12","in their quarters", "in the brig"]
 
// created a function for  to respond to the captain's messages. This takes the Captain's comands and runs the Computer's response 

function compResponse(capCommand) {
  switch(capCommand) {
    case commands[0]: 
      var classRand = classmates[Math.floor(Math.random()*classmates.length)];
      var locRand = locations[Math.floor(Math.random()*locations.length)];
      var message = `Commander ${classRand} is located ${locRand}`;
      break;
    case commands[1]:
     var message = "Enjoy your tea, Captain";
      break;
    case commands[2]:
      var message = "ALL HANDS ON DECK!";
      break;
    case commands[3]:
      var message = " ";
      // uses a for loop to list all classmates from the assigned array
      for (var i = 0; i < classmates.length; i++) {
      message += classmates[i] + ' ';
      }
      break;
    case commands[4]:
     var message = "Darmok and Jalad on the ocean";
      break;
    default:
      var message = "Access denied";
    }
  //add command to a list in captains chat panel
  var list = document.getElementById("computer");
  addToList(list, message);
}

// Captian's commands
function capCommands(e){
  e.preventDefault()
  //add command to a list in captains chat panel
  var command = document.getElementById("chatInput").value;
  var list = document.getElementById("captain");
  addToList(list, command);
  compResponse(command);
}

// function that takes Captain's commands and Computer's response and appends them to a list
function addToList(list, text) {
	var p = document.createElement("p");
  var textnode = document.createTextNode(text);
  p.appendChild(textnode);
  list.appendChild(p);
}

function helloCap(compHi) {
  computer.innerHTML = "<p class='line'>" + compHi + "</p>" + computer.innerHTML; 
}

function gMorning() {
  helloCap("Good morning, Captian");
}
//when the page refreshes it opens with a statement 
window.onload = function (){
  // Computer to open the chat with "Good morning, Captain"
  gMorning();
  // add an event listener to the form to submit the captain's message
  var form = document.getElementById("chatForm");
  form.addEventListener("submit", capCommands);
}
